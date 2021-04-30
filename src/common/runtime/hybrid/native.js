export default [
    {
        name: 'statusBarHeightQuery',
        desc: '获取原生状态栏高度',
        args: []
    }, {
        name: 'appUpdate',
        desc: '升级APP插件',
        args: []
    }, {
        name: 'appVersionQuery',
        desc: '获取当前app的版本号',
        args: []
    }, {
        name: 'backEventListen',
        desc: '监听物理返回键',
        args: []
    }, {
        name: 'locationQuery', // 权限 ACCESS_FINE_LOCATION
        desc: '定位插件',
        args: []
    }, {
        name: 'deviceInfoQuery',
        desc: '设备信息插件',
        args: []
    }, {
        name: 'aggregateDataQuery', // 权限 ACCESS_FINE_LOCATION READ_PHONE_STATE
        desc: '小区信号值插件',
        args: []
    }, {
        name: 'ftpSpeedTest', // 权限 ACCESS_FINE_LOCATION READ_PHONE_STATE
        desc: 'ftp测速',
        args: []
    }, {
        name: 'pingTest', // 权限 ACCESS_FINE_LOCATION READ_PHONE_STATE
        desc: 'ping测试',
        args: []
    }, {
        name: 'cameraAlbumOpen', // 权限 CAMERA WRITE_EXTERNAL_STORAGE READ_EXTERNAL_STORAGE
        desc: '调用安卓系统摄像机',
        args: []
    }, {
        name: 'recordFilePlay', // 权限 CALL_PHONE READ_CALL_LOG
        desc: '手机录音',
        args: []
    }, {
        name: 'simInfoQuery', // 权限  READ_PHONE_STATE
        desc: '获取手机卡槽信息',
        args: []
    }, {
        name: 'fileUploadNativeUse', // 权限  WRITE_EXTERNAL_STORAGE READ_EXTERNAL_STORAGE
        desc: '文件下载',
        args: []
    }, {
        name: 'nativeFileOpen', // 权限  WRITE_EXTERNAL_STORAGE READ_EXTERNAL_STORAGE
        desc: '文件播放',
        args: []
    }, {
        name: 'showInputWindow',
        desc: '弹出输入密码窗口',
        args: []
    }, {
        name: 'webviewClose',
        desc: '退出H5页面',
        args: []
    }, {
        name: 'faceUserNameSend', // 权限  CAMERA
        desc: '人脸识别-调用摄像头',
        args: []
    }, {
        name: 'fileManagerWithDir', // 权限  WRITE_EXTERNAL_STORAGE READ_EXTERNAL_STORAGE
        desc: '打开原生文件管理系统',
        args: []
    }, {
        name: 'checkFunctionPermisssion',
        desc: '判断是否授权',
        args: []
    }
];
