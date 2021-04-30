import Runtime from './runtime';
import native from './native';

Runtime.Map = {
    native
};

Runtime.useAll = (...strArr) => {
    let runTimeStrs = [];
    if (strArr.length === 1) {
        runTimeStrs = strArr[0].split(',');
    } else {
        runTimeStrs = strArr;
    }
    Runtime.clear();
    runTimeStrs.forEach(name => {
        Runtime.use(Runtime.Map[name]);
    });
    return Runtime;
};

export function RuntimeCaller(runtime) {
    return function (funcName, param) {
        if (!runtime || typeof (runtime[funcName]) !== 'function') {
            console.log(`${funcName} is not a runtime functon!`);
            return false;
        }
        runtime[funcName](param);
        return true;
    };
}

export default Runtime;
