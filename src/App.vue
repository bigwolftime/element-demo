<template>
  <div id="app">
    <a-layout>
      <a-layout-header>
        <a-menu theme="dark" mode="horizontal" :style="{lineHeight: '64px'}">
          <a-menu-item key="1">
            <router-link to="/">首页</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/users">用户列表</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/login">登录</router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-header>

      <a-layout-content style="padding: 50px">
        <router-view></router-view>
      </a-layout-content>

      <a-layout-footer style="text-align: center">
        Ant Design Vue Demo 2024 © Ant Design, Inc. All Rights Reserved.
      </a-layout-footer>

    </a-layout>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "App"
})
</script>