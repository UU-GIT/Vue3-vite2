

// state - 用户个人信息
export interface UserInfo {
    describe: string;
    id: number;
    name: string;
    password: string;
    email: string;
    phone: string;
    token: string;
    groupId: number,
    groupDescription: string,
    groupName: string,
    deptOrder?: number;
    isDebug?: number;
    hasDbAuth?: boolean;
    is4AUser?: number;
    [proName: string]: any;
}

// home - tab页数据形状
export interface MeunType {
    name: number;
    icon: string[];
    label: string;
    [proName: string]: any;
}

// takephoto - 图片list
export interface TakePhotoImgListItem {
    info?: any;
    url?: string;
    [proName: string]: any;
}

// takephoto - 图片list
export interface PositionO {
    lng?: string;
    lat?: string;
    [proName: string]: any;
}

// 定义好的流程分类的形状
export interface ActionListO {
    'icon'?: string;
    'name'?: string;
    'router'?: string;
    'versionId'?: any;
    'selected'?: boolean;
    '父节点ID'?: any;
    '节点ID'?: number;
    [proName: string]: any
}

export interface CurrOrderInfo {
    '工单流水号': string;
    '投诉号码': string;
    '投诉地点': string;
    '投诉时间': string;
    '经度': number;
    '纬度': number;
    '工单当前状态': string;
    '工单备注': string;
    [propName: string]: any;
}

// 地图的key和版本号
export interface AmapInfo {
    amapKey: string,
    amapVersion: string
}