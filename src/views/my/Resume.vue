<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  > 
    <v-textarea v-model="content"
    placeholder="请输入自我介绍">
    </v-textarea>
    <v-btn
     color="primary"
      @click="saveContent"
    >保存</v-btn>
    
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

    }),
    methods: {
        loadInfo() {
            myResume()
            .then(res => {
                console.log(res.data);
                this.content = res.data.content;
                this.resumeId = res.data.resumeId;
            });

        },
        saveContent(){
          myResumeSave({content: this.content, resumeId: this.resumeId})
          .then(res => {
                if (res.code == 200) {
                    alert("保存成功");
                    this.resumeId = res.data.resumeId;
                    
                }else{
                    alert(res.msg);
                }
                
            });
          
        }
    }
  }
</script>