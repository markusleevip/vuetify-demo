<template>
<div>
<v-card
    class="mx-auto"
    max-width="600"
    tile
  >
    <v-list dense>
      <v-subheader>粉丝</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-avatar>
            <v-img src="http://127.0.0.1:8001/res/avatar1.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.nickName"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.uid"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="text-right">
            <v-list-item-title @click="follow(item.uid)" >关注</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  <v-pagination
        v-model="page"
        :length="pages"
    ></v-pagination>
</div>
</template>
<script>
import {myFans,addFollow} from '@/api/friend'
    export default {
        mounted:function() {
            this.loadInfo();
        },
        data: () => ({
            page: 1,
            total:1,
            pages:1,
            selectedItem: 1,
            items: [
            ],
        }),
        methods: {
            loadInfo() {
                myFans({page: this.page})
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
            follow(fUid){
                alert("确定要取关吗？"+fUid)
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