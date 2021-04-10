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
            <v-img src="http://127.0.0.1:8001/res/avatar1.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.nickName"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item.fUid"></v-list-item-title>
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
import {myFollow} from '@/api/friend'
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
                alert("确定要取关吗？"+fUid)
            }
        },
        watch: {
            page:function () {
		      this.loadInfo();
		    }
        }
  }

</script>