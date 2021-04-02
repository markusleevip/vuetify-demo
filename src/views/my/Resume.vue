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
     v-show="isEdit"       
    auto-grow
    placeholder="请输入内容">
    </v-textarea>
    <p @click="changeState"     
      v-show="!isEdit"
    >{{ content}}
      </p>
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
            :disabled="!isEdit"
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
      isEdit: false,

    }),
    methods: {
        loadInfo() {
            myResume()
            .then(res => {
                if (res.code==200) {
                  if (res.data!=null){
                    this.content = res.data.content;
                    this.resumeId = res.data.resumeId;
                    this.isOpen = res.data.isOpen;
                  }else {
                    this.isEdit = true;
                  }
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
                    this.changeState()
                }else{
                    alert(res.msg);
                }                
            });          
        },
        changeState(){
          this.isEdit = !this.isEdit
        },
        sharing(){
           this.$router.push({path:'/show/resume',query: {resumeId: this.resumeId}});
        }
    }
  }
</script>