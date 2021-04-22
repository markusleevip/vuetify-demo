<template>
  <v-card
    max-width="800"
    class="mx-auto"
  >
    <v-toolbar
      color="teal"
      dark
    >
      <v-toolbar-title>最新</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line>
      <template v-for="item in items">       
        <v-list-item
          :key="item.nickName"
        >
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content >
              <v-list-item-title v-text="item.uid"></v-list-item-title>
            <a >                    
                <v-list-item-title  @click="follow(item.uid)" v-html="item.nickName"></v-list-item-title>
                <v-list-item-subtitle  @click="goResume(item.resumeId)" v-html="item.content"></v-list-item-subtitle>
            </a> 
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-pagination
        v-model="page"
        :length="pages"
    ></v-pagination>
  </v-card>
</template>
<script>
import {list} from '@/api/resume'
import {addFollow} from '@/api/friend'

  export default {
    mounted:function() {
            this.loadInfo();
        },
    data: () => ({
      page: 1,
      total:1,
      pages:1,
      selectedItem: 1,
      items: []
    }),
    methods: {
        loadInfo() {
            list({page: this.page})
            .then(res => {
                if (res.code==200) {
                    if (res.data!=null){
                        this.items = res.data.list;
                        this.pages = res.data.pages;
                    }
                }
            }, reason => {
                this.$router.push({path:'/login'});
            });

        },
        goResume(resumeId){
           this.$router.push({path:'/show/resume',query: {resumeId: resumeId}});
        },
        follow(fUid){
          alert("确定要关注吗？"+fUid)
          addFollow({fUid: fUid})
          .then(res => {
              if (res.code==200) {
                  alert("关注成功。")
              }
          });
        }
    },
    watch: {
        page:function () {
          this.loadInfo();
        }
    }
  }
</script>