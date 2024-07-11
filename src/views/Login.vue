<template>
  <div class="login-container">
    <a-card title="登录" :style="{width:'100%'}">
      <a-form :model="formState" name="basic" :label-col="{span: 8}" :wrapper-col="{span: 16}"
              autocomplete="true" @finish="onFinish" @finishFailed="onFinishFailed">

        <a-form-item label="用户名" name="username" :rules="[{required: true, message: '请输入用户名'}]">
          <a-input v-model:value="formState.username" placeholder="请输入用户名" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{required: true, message: '请输入密码'}]">
          <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item :wrapper-col="{offset:8, span:16}">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>

      </a-form>
    </a-card>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import {message} from "ant-design-vue";

export default defineComponent({
  name: 'Login',
  setup() {
    const formState = reactive({
      username: '',
      password: ''
    })

    const onFinish = (values) => {

      message.success('登录成功');
    };

    const onFinishFailed = (errorInfo) => {
      message.error("登录失败")
    }

    return {
      formState,
      onFinish,
      onFinishFailed
    }
  }
})
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}
</style>