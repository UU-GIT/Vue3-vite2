import { UserInfo, ActionListO, CurrOrderInfo, AmapInfo } from '@/typings/public';

export interface State {
    userInfo: UserInfo;
    tabIndex: number;
    actionList: ActionListO[];
    currOrderInfo: CurrOrderInfo;
    currOrderStatus: string;
    amapInfo: AmapInfo;
    stateName: string;
}

const state: State = {
    userInfo: {
        describe: '',
        id: NaN,
        name: '',
        password: '',
        token: '',
        email: '',
        phone: '',
        groupId: -1,
        groupDescription: '',
        groupName: '',
    },
    tabIndex: 0,
    actionList: [],
    currOrderInfo: {
        工单流水号: '',
        投诉号码: '',
        投诉地点: '',
        投诉时间: '',
        经度: -1,
        纬度: -1,
        工单当前状态: '',
        工单备注: '',
    },
    currOrderStatus: '',
    amapInfo: {
        amapKey: '',
        amapVersion: '',
    },
    stateName: '',
};

export default state;
