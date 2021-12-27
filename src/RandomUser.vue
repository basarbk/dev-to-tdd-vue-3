<template>
  <div>
    <button @click="loadRandomUser">Load Random User</button>
    <h1 v-if="user">{{user.name.title}} {{user.name.first}} {{user.name.last}}</h1>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: undefined
    };
  },
  methods: {
    async loadRandomUser(){
      try {
        const response = await axios.get('https://randomuser.me/api');
        this.user = response.data.results[0];
      } catch (error) {/**/}
    }
  }
};
</script>
