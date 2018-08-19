<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ user.username }}
    {{ uidname }}
    <el-button @click="onClick" type="primary">点击</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { User } from '../store/types';
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
</script>
