import { ActionListO } from '../typings/public';

const settingList: ActionListO[] = [
    {
        icon: 'zhuanxian',
        name: '工单',
        router: '',
        selected: true,
        父节点ID: -1,
        节点ID: 1
    },
    {
        icon: 'ic_home_gdzx',
        name: '工单中心',
        versionId: 'null',
        router: 'orderPage',
        selected: true,
        父节点ID: 1,
        节点ID: 101
    },
    {
        icon: 'ic_home_ldst',
        name: '领导视图',
        versionId: 'null',
        router: 'leaderView',
        selected: true,
        父节点ID: 1,
        节点ID: 102
    }
];

export {
    settingList
};
