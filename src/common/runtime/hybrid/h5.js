const vueList = [];

const getVueList = array => {
    for (let index = 0; index < array.length; index++) {
        if (array[index].$children.length > 0) {
            vueList.push(array[index]);
            getVueList(array[index].$children);
        } else {
            vueList.push(array[index]);
        }
    }
};

const judgeVueListLength = () => {
    // const vueArray = window.root.$children;
    const vueArray = window.global.$children;
    getVueList(vueArray);
};

const queryCurrentVue = paramList => {
    let currentItem = {};
    vueList.forEach(item => {
        if (item.$options.name === paramList.name) {
            currentItem = item;
        }
    });
    return currentItem;
};

const returnCurrentVue = paramList => {
    judgeVueListLength();
    return queryCurrentVue(paramList);
};

export default new Map(
    [
        // 状态栏高度回调
        [
            'statusBarHeightQuery_statusBarHeightQuery',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeStatusBarH = paramList.height;
            }
        ],
        // 获取APP版本号
        [
            'appVersionQuery_appVersionQuery',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeAppVersion = paramList.appVersion;
            }
        ],
        // 更新APP
        [
            'appUpdate_appUpdate',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativegetApkRes = paramList;
            }
        ],
        [
            'backEventListen_backEventListen',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeBackEventListen = paramList;
            }
        ],
        [
            'locationQuery_locationQuery',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeLocationQuery = paramList;
            }
        ],
        [
            'deviceInfoQuery_deviceInfoQuery',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeDeviceInfoQuery = paramList;
            }
        ],
        [
            'aggregateDataQuery_aggregateDataQuery',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeAggregateDataQuery = paramList;
            }
        ],
        [
            'ftpSpeedTest_ftpSpeedTest',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeFtpSpeedTest = paramList;
            }
        ],
        // ping测试
        [
            'pingTest_pingTest',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativegetPing = paramList;
            }
        ],
        // 拍照
        [
            'cameraAlbumOpen_cameraAlbumOpen',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativegetPic = paramList;
            }
        ],
        // 手机录音
        [
            'recordFilePlay_recordFilePlay',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativegetPhone = paramList;
            }
        ],
        // sim信息获取
        [
            'simInfoQuery_simInfoQuery',
            (paramList) => {
                const item = returnCurrentVue(paramList);
                item.$data.nativegetSim = paramList;
            }
        ],
        // 录音下载
        [
            'fileUploadNativeUse_fileUploadNativeUse',
            (paramList) => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeGetTransferData = paramList;
            }
        ],
        // 录音播放
        [
            'nativeFileOpen_nativeFileOpen',
            (paramList) => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeFileOpen = paramList;
            }
        ],
        [
            'getPasswd',
            (paramList) => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeGetPasswd = paramList.passwd;
            }
        ],
        [
            'faceUserNameSend_faceUserNameSend',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativeFaceRes = paramList;
            }
        ],
        // 打开文件管理系统
        [
            'fileManagerWithDir_fileManagerWithDir',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.fileResult = paramList.fileResult;
            }
        ],
        // 判断是否授权
        [
            'checkFunctionPermisssion_checkFunctionPermisssion',
            paramList => {
                const item = returnCurrentVue(paramList);
                item.$data.nativePermisssionRes = paramList;
            }
        ]
    ]
);
