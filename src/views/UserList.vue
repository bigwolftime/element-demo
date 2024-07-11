<template>
  <div>
    <h2>User List</h2>
    <a-list :loading="loading" item-layout="horizontal" :data-source="users">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.id">
            <template #title>
              <a href="javascript:">{{ item.name }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script>

import {defineComponent, onMounted, ref} from "vue";
import axios from "../axios";

export default defineComponent({
  name: "UserList",
  setup() {
    const users = ref([]);
    const loading = ref(true);

    const fetchUsers = async () => {
      try {
        const response = await axios.get("/user?name=x")
        users.value = response.data;
        loading.value = false;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }

    onMounted(fetchUsers)

    return {
      users,
      loading
    }

  }
})

</script>