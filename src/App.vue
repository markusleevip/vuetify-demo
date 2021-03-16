<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>
        <div>{{ userName }}</div>
      </v-sheet>
      <v-list>
        <v-list-item
          v-for=" item in links"
          :key="item.icon"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>      
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Welcome to this site.</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >       
      <router-view></router-view>
      
      </v-container>
    </v-main>
    <v-footer app >
        <Footer />
    </v-footer >
  </v-app>
</template>

<script>
import Footer  from './components/Footer';
import { checkToken } from '@/api/user'

  export default {    
    components: {
      Footer
    },
    mounted:function() {
      this.getUserName();
    },
    data: () => ({
      drawer: null,
      userName: '',
      links: [
        {icon: 'mdi-home', title: '主页', to: '/' },
        {icon: 'mdi-login', title: '登录', to: '/login' },
        {icon: 'mdi-account', title: '我的简历', to: '/my/resume' },
        {icon: 'mdi-comment-text', title: '关于', to: '/about'},
      ],
    }),
    methods: {
      getUserName() {
        checkToken()
        .then(res => {
          console.log(res.data);
          this.userName = res.data.userName
        })

      }
      
    }
  }
</script>