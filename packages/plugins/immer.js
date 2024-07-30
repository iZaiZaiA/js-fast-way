// draft的标识符
const DRAFTABLE = Symbol.for('immer-draftable');

// 是否是原生对象
const isPlainObject = value => {
    if (!value || typeof value !== "object") return false;
    const proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return Ctor === Object || (typeof Ctor == "function" && Function.toString.call(Ctor) === Object.prototype.constructor.toString());
}

// 判断是否是一个draft(一个代理对象)
const isDraftable = value => Boolean(value && value[DRAFTABLE]);

export function produce(baseState, fn) {
    const drafts = new Map();
    const copies = new Map();

    // Proxy的陷阱
    const objectTraps = {
        get(target, key) {
            if (key === DRAFTABLE) return target;
            const data = copies.get(target) || target;
            return getDraft(Reflect.get(data, key));
        },
        set(target, key, val) {
            const copy = shallowCopy(target);
            const newValue = getDraft(val);
            copy[key] = isDraftable(newValue) ? newValue[DRAFTABLE] : newValue;
            return true;
        }
    }

    // 获取或创建draft
    const getDraft = data => {
        if (isDraftable(data)) return data;
        if (isPlainObject(data) || Array.isArray(data)) {
            if (drafts.has(data)) return drafts.get(data);
            const draft = new Proxy(data, objectTraps);
            drafts.set(data, draft);
            return draft;
        }
        return data;
    }

    // 浅拷贝
    const shallowCopy = data => {
        if (copies.has(data)) return copies.get(data);
        const copy = Array.isArray(data) ? [...data] : Object.assign({}, data);
        copies.set(data, copy);
        return copy;
    }

    // 检查是否发生变化
    const isChange = data => drafts.has(data) || copies.has(data);

    // 最终化处理
    const finalize = data => {
        if (!isPlainObject(data) && !Array.isArray(data)) return data;
        if (!isChange(data)) return data;
        const copy = shallowCopy(data);
        Object.keys(copy).forEach(key => {
            copy[key] = finalize(copy[key]);
        });
        return copy;
    }

    // 清理函数
    const cleanup = () => {
        drafts.clear();
        copies.clear();
    };

    // 主逻辑
    const draft = getDraft(baseState);
    try {
        fn(draft);
    } catch (e) {
        console.error('Error in produce:', e);
    }
    const result = finalize(baseState);
    cleanup();
    return result;
}
