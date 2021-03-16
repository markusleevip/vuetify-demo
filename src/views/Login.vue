<template>
    <div class="login">
        <v-container  class="loginOverlay">
          <v-layout  align-center justify-center>
            <v-flex xs12 sm8>
                <v-card>                    
                    <v-card-text class="pt-4">
                        <v-form ref="form">
                            <v-text-field
                            label="账号"
                            v-model="username"
                            required
                            append-icon="fa-info-circle"
                            ></v-text-field>
                            <v-text-field
                            label="密码"
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit" class="green white--text">登录</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card>
                    <v-card-title>
                        <h5>没有账号?</h5>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn outlined color="black"  to="/logon" class="green white--text" >注册</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
       </v-container>
       <v-snackbar
        v-model="snackbar"
        :vertical="vertical"
        >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="indigo"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>

<script>

import { login } from '@/api/user'
import { setToken } from '@/utils/auth'
import { md5 } from '@/utils/md5'
window.axios = require('axios');
export default {
    
    data: () => ({
        snackbar: false,
        message: '',
        vertical: true,
        username: '',
        password: ''
    }),
    methods: {
        submit () {
            console.log('VUE_APP_BASE_API='+process.env.VUE_APP_BASE_API);

            login({ password:md5(this.password),userName: this.username})
            .then(res => {
                if (res.code == 200) {
                    this.showMsg("登录成功");
                    setToken(res.data.token);
                    var that = this;
                    setTimeout(function (){
                        // that.$router.push('/');
                        that.$router.push({path:'/', params: {userName: 'test'}});
                    },"2000");
                    
                }else{
                    this.showMsg(res.msg);
                }                
            });
        },
        showMsg(msg){
            this.message = msg;
            this.snackbar = true;
        }
    }
}
</script>

<style scoped>

.login {
    height: 100vh;
    background-color: #5DD5C8;
}

h4 {
    font-size: 1em !important;
    padding: 1em;
    color: black;
}
.v-card {
    text-align: center;
    margin: 1em;
}
.v-card__title {
    justify-content: center;
}
.v-btn {
    width: 100%;
}
.v-card {
    padding: 1em;
}
.green {
    margin-bottom: 1em;
}
.create {
    text-transform: capitalize;
    margin-bottom: 1em;
}
</style>