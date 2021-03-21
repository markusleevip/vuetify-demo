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
          color="teal darken-1"
          size="64"
        ><span class="white--text headline">{{ avatarTitle }} </span></v-avatar>
        <div>{{ localUserName }}</div>
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
import { getAvatarTitle ,getLocalUserName } from '@/utils/auth'

  export default {    
    components: {
      Footer
    },
    mounted:function() {
      this.loadData();
    },
    computed: {
      localUserName() {       
        return this.$store.state.userName;
      },
      avatarTitle() {
        return this.$store.state.avatarTitle;
      }
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
     
      loadData() {
        
        if (this.$store.state.userName==""){
          var tempUserName = getLocalUserName();            
            if (tempUserName!=""){
              this.$store.commit('setUserName',tempUserName)
              this.userName = tempUserName;
            }
        }

        if (this.$store.state.avatarTitle == "") {
          var tempTitle = getAvatarTitle();
          if (tempTitle !="") {
            this.$store.commit('setAvatarTitle',tempTitle);
          }
        }

        // };
        // checkToken()
        // .then(res => {
        //   console.log(res.data);
        //   alert(getAvatarTitle());
        //   this.userName = res.data.userName
        // })

      }
      
    }
  }
</script>