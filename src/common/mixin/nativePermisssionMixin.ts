import { Vue, Component } from 'vue-property-decorator';
@Component
export class Mixin extends Vue {
    public nativePermisssionRes: any = {};

    public nativePermisssion(Runtime: any, type: string, permissions: string[]) {
        const obj = {
            requestCode: 'checkFunctionPermisssion', // 请求码
            paramList: {
                name: this.$options.name, // 组件名字
                type,
                permissions: permissions.join(',') // H5传给原生需要授权的项
            }
        };
        Runtime.checkFunctionPermisssion(obj);
    }
}
