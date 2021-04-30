import { GetterTree } from 'vuex';
import { UserInfo, ActionListO, CurrOrderInfo, AmapInfo } from '../typings/public.d';
import { State } from './state';

const getters: GetterTree<State, any> = {
    getUserInfo: (state: State): UserInfo => state.userInfo,
    tabIndex: (state: State): number => state.tabIndex,
    getActionList: (state: State): ActionListO[] => state.actionList,
    currOrderInfo: (state: State): CurrOrderInfo => state.currOrderInfo,
    currOrderStatus: (state: State): string => state.currOrderStatus,
    getAmapInfo: (state: State): AmapInfo => state.amapInfo,
    stateName: (state: State): string => state.stateName,
};
export default getters;