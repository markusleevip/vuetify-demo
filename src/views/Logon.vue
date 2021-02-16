  
<template>
    <div class="logon">
        <v-container  class="loginOverlay">
          <v-layout  align-center justify-center>
            <v-flex xs12 sm8>
                <v-card>                   
                    <v-card-text class="pt-4">
                        <v-form ref="form">
                            <v-text-field
                            label="账号"
                            v-model="email"
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
                            <v-text-field
                            label="确认密码"
                            v-model="rePassword"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="submit" class="green white--text">注册</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card>
                    <v-card-title>
                        <h5>已有账号?</h5>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn to="/login" outlined color="black" class="green white--text">登录</v-btn>                        
                    </v-card-actions>
                </v-card>
            </v-flex>
          </v-layout>
       </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
      email: '',
      password: '',
      rePassword: ''
    }),
    methods: {
        submit () {
        }
    }
}
</script>

<style scoped>
.logon {
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
.link-color {
    color: #d38841;
    text-decoration: none;
}
.v-card {
    padding: 1em;
}
.v-card__actions {
    display: block;
}
.green {
    margin-bottom: 1em;
}
.create {
    text-transform: capitalize;
    margin-bottom: 1em;
}
.row {
    font-size: 0.7em;
    justify-content: center;
}
.row-item {
    padding: 0 0.7em;
}
.border {
    border-right: 1px solid black;
}
</style>