<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>      
      <span >{{username}}</span>
      </h2>
    <v-btn @click="getUser" class="green white--text">获取用户名</v-btn>

  </div>
</template>

<script>
import { checkToken } from '@/api/login'

export default {
  data: () => ({
      username: ''
    }),
  methods: {
    getUser () {
      checkToken()
      .then(res => {
        console.log(res.data);
        this.username = res.data.userName
      })
    }

  }
  
}
</script>