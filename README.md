# ts

## typescript-vuex-example 

使用vue + typescript + vuex 使用例子
vue-cli 3.0构建的项目，选择使用typescript
目前vuex使用typescript支持并不完善，需要引入vuex-class做相关装饰器映射
使用例子主要解决了vuex + typescript相关代码组织，并模块化，以及三方库引入(element-ui)
vue 页面引入 vuex:
```javascript
import {
  State,
  Getter,
  Action,
} from 'vuex-class';
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Action('user/foo') private actionFoo!: () => void;
  @State((state) => state.user) private user!: User;
  @Getter('user/uidname') private uidname!: string;

  public created() {
    console.log(this.uidname);
  }
  public onClick() {
    this.actionFoo();
  }
}
```

store 中 modules写法
```javascript
export default {
  namespaced: true,
  state,
  mutations: {
    SET_USER_NAME: () => {
      state.username = 'hello';
    },
  },
  actions: {
    foo: (context: { commit: Commit }) => {
      context.commit('SET_USER_NAME');
    },
  },
  getters: {
    uidname(state: State): string {
      return state.username;
    },
  } as GetterTree<State, any>,
};
```

