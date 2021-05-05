<template>
<div>
<v-card
    class="mx-auto"
    max-width="600"
    tile
  >
    <v-list dense>
      <v-subheader>关注</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/3.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.nickName"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="text-right">
            <v-list-item-title @click="unFollow(item.fUid)" >取关</v-list-item-title>
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
import {myFollow,unFollow} from '@/api/friend'
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
                myFollow({page: this.page})
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
            unFollow(fUid){
                if (confirm("确定要取关吗？") == true) {
                  unFollow({fUid: fUid})
                  .then(res => {
                      if (res.code==200) {
                          alert("取关成功。")
                      }
                  });
                }
            }
        },
        watch: {
            page:function () {
		      this.loadInfo();
		    }
        }
  }

</script>