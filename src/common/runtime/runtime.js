let __runtimes = []; // 用来保存不同的运行环境的示例,各个运行环境的判断应该互斥

const Runtime = {
    use(runtime) {
        if (!runtime.name) {
            console.warn('must be have name');
        }
        if (!runtime.isRuntime()) {
            return this;
        }
        // 判断此名称的运行环境, 有则将api合并，没有则加入到数组中
        if (!existMerge(runtime.name, runtime.API)) {
            __runtimes.push(runtime);
        }
        createAPI(runtime.API); // 创建对面提供的方法
        return this;
    },
    clear() {
        __runtimes = [];
    }
};

function existMerge(name, API) {
    let result = false;
    __runtimes.forEach(runtime => {
        if (runtime.name === name) {
            result = true;
            runtime.API = {
                ...runtime.API,
                ...API
            };
        }
    });
    return result;
}

function createAPI(API) {
    const methodNames = Object.keys(API);

    methodNames.forEach(name => {
        Runtime[name] = (...args) => callAPI([...args], name);
    });
}

function callAPI(args, methodName) {
    let method = null;
    const isRun = __runtimes.some(runtime => {
        const API = runtime.API;
        if (!runtime.isRuntime()) {
            return false;
        }
        if (!API[methodName]) {
            return false;
        }
        if (typeof API[methodName] !== 'function') {
            return false;
        }
        method = API[methodName];

        return true;
    });

    if (!isRun) {
        // TODO: 异常上报
        console.warn('找不到此方法:', methodName);
    }
    try {
        return method.apply(null, args);
    } catch (e) {
        console.warn(`${methodName} 方法 执行异常, 请检查`, e);
        throw e;
    }
}

export default Runtime;
