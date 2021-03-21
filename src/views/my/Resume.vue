<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  > 
    <v-textarea v-model="content" auto-grow=true
    placeholder="请输入内容">
    </v-textarea>
    <v-checkbox
      v-model="isOpen"
      :label="`是否公开`" 
    ></v-checkbox>
    <div>
    <v-btn
     color="primary"
      @click="saveContent"
    >保存</v-btn>
     <v-btn
     color="primary"
     :disabled="!isOpen"
      @click="sharing"
    >分享</v-btn>
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
                this.content = res.data.content;
                this.resumeId = res.data.resumeId;
                this.isOpen = res.data.isOpen;
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

        }
    }
  }
</script>