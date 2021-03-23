<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  > 
    <v-row>
      <v-col
      cols="12"
      sm="6"
      class="py-2">
      <v-textarea v-model="content" 
    auto-grow
    placeholder="请输入内容">
    </v-textarea>

    <v-checkbox
      v-model="isOpen"
      :label="`是否公开`" 
    ></v-checkbox>
        <v-btn-toggle
          dense
          background-color="primary"
          dark
          multiple>
          <v-btn
            color="primary"
              @click="saveContent"
            >保存</v-btn>
            <v-btn
            color="primary"
            :disabled="!isOpen"
              @click="sharing"
            >分享</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>    
    <div>    
    </div>
    
  </v-form>
  
</template>
<script>
import { myResume,myResumeSave } from '@/api/resume'

  export default {
    
    mounted:function() {
        this.loadInfo();
    },
    data: () => ({
      valid: true,
      content: '',
      resumeId: '',
      name: '',
      isOpen: false,

    }),
    methods: {
        loadInfo() {
            myResume()
            .then(res => {
                console.log(res.data);
                if (res.code==200) {
                  this.content = res.data.content;
                  this.resumeId = res.data.resumeId;
                  this.isOpen = res.data.isOpen;
                }                
            }, reason => {
              this.$router.push({path:'/login'});
            });
        },
        saveContent(){
          myResumeSave({content: this.content, resumeId: this.resumeId, isOpen: this.isOpen})
          .then(res => {
                if (res.code == 200) {
                    alert("保存成功");
                    this.resumeId = res.data.resumeId; 
                }else{
                    alert(res.msg);
                }                
            });          
        },
        sharing(){
          //       this.$router.push({ name: 'news', params: { userId: 123 }});
           this.$router.push({path:'/show/resume',query: {resumeId: this.resumeId}});
        }
    }
  }
</script>