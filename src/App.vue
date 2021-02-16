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

        <div>{{userName}}</div>
      </v-sheet>

      <v-divider></v-divider>

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
import { checkToken } from '@/api/login'
import Footer  from './components/Footer';
  export default {    
    components: {
      Footer
    },
    mounted:function() {
      this.getUserName();
    },
    data: () => ({
      userName:'',
      drawer: null,
      links: [
        {icon: 'mdi-inbox-arrow-down', title: '主页', to: '/' },
        {icon: 'mdi-inbox-arrow-down', title: '登录', to: '/login' },
        {icon: 'mdi-send', title: '关于', to: '/about'},        
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