/* eslint-disable no-param-reassign */
import { MutationTree } from 'vuex';
import { State } from './state';
import { CurrOrderInfo, AmapInfo } from '../typings/public';

const mutations: MutationTree<any> = {
    setUserInfo(state: State, data: any) {
        state.userInfo = data;
    },
    setTabIndex(state: State, data: number) {
        state.tabIndex = data;
    },
    setActionList(state: State, data: any) {
        state.actionList = data;
    },
    setCurrOrderInfo(state: State, data: CurrOrderInfo) {
        state.currOrderInfo = data;
    },
    setCurrOrderStatus(state: State, data: string) {
        state.currOrderStatus = data;
    },
    setAmapInfo(state: State, data: AmapInfo) {
        state.amapInfo = data;
    },
    setStateName(state: State, data: string) {
        state.stateName = data;
    },
};

export default mutations;
