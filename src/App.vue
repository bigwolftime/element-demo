<template>
  <div id="app">
    <el-button type="primary" @click="fetchData">Fetch data</el-button>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="item in data">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from './axios';

export default {
  name: 'App',
  data() {
    return {
      loading: false,
      data: []
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('/posts')
        this.data = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style>
@import 'element-plus/dist/index.css';
</style>