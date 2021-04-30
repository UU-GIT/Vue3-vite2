import { tools } from 'mtapp-core';
import javascriptCommonFuntion from './hybrid/h5';
import apiList from './hybrid/native';
const { os } = tools;
const { isAndroid, isIOS } = os;

const catchTypeError = error => {
    if (error instanceof ReferenceError || error instanceof TypeError) {
        const icon = document.getElementById('icon');
        const errorContent = document.getElementById('errorContent');
        const errorMsg = document.getElementById('errorMsg');
        if (icon != null) {
            icon.style.display = 'none';
            errorContent.style.display = 'block';
            errorMsg.style.display = 'block';
        }
    }
};

const mergeObject = (
    name, { requestCode = '', responseCode = '', paramList = {} }
) => {
    let mergeObj = {
        methodName: name,
        requestCode: requestCode,
        responseCode: responseCode,
        paramList: paramList
    };
    apiList.forEach(item => {
        if (item.name === name) {
            mergeObj = Object.assign(mergeObj, ...item.args);
        }
    });
    return mergeObj;
};

const commonAction = (name, ...args) => {
    try {
        const obj = mergeObject(name, ...args);
        if (isAndroid()) {
            // H5 调用 android 的方法
            MTHybrid.nativeCommon(JSON.stringify(obj));
        }
        if (isIOS()) {
            // H5 调用 ios 的方法
            const content = window.webkit.messageHandlers.nativeCommon;
            content.postMessage(JSON.stringify(obj), window.location.origin);
        }
    } catch (error) {
        catchTypeError(error);
    }
};

const getApiFunctions = () => {
    const map = {};
    apiList.forEach(apiInfo => {
        map[apiInfo.name] = (function (name) {
            return function (args) {
                return commonAction(name, args);
            };
        })(apiInfo.name);
    });
    return map;
};

window.onMTHybirdEventFire = responseJson => {
    console.log(responseJson);
    if (responseJson) {
        const { methodName, requestCode, responseCode, paramList } = JSON.parse(
            responseJson
        );
        // 导航栏通用方法
        if (methodName === 'jsClickNavigationBarItem') {
            if (paramList.isClickTitle) {
                const actions = javascriptCommonFuntion.get(`${paramList.name}_title`);
                actions.call(this, paramList);
            } else {
                const actions = javascriptCommonFuntion.get(
                    `${paramList.name}_${paramList.clickButton}`
                );
                actions.call(this, paramList);
            }
        } else {
            if (responseCode) {
                const actions = javascriptCommonFuntion.get(
                    `${methodName}_${responseCode}`
                );
                actions.call(this, paramList, responseCode);
            } else {
                const actions = javascriptCommonFuntion.get(methodName);
                actions.call(this, paramList, requestCode);
            }
        }
    }
};

export default {
    name: 'native', // 嵌入原生应用时
    isRuntime() {
        if (isAndroid()) {
            return !!window.MTHybrid;
        }
        if (isIOS()) {
            return (
                !!window.webkit &&
                window.webkit.messageHandlers &&
                window.webkit.messageHandlers.nativeCommon
            );
        }
        return false;
    },
    API: {
        ...getApiFunctions() // 调用方法
    }
};
