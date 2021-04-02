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
      <p >{{ content}}
      </p>
      <v-img
            max-height="128"
            max-width="128"   
            v-bind:src="resumeQrImg" 
          ></v-img>
      </v-col>
    </v-row>    
    <div>    
    </div>
  </v-form>
</template>
<script>
import { getResume } from '@/api/resume'

  export default {
    
    mounted:function() {
        this.loadInfo();
    },
    data: () => ({
      valid: true,
      content: '',
      resumeId: '',
      name: '',
      resumeQrImg: ''

    }),
    methods: {
        loadInfo() {
            getResume(this.$route.query.resumeId)
            .then(res => {
                if (res.code==200) {
                  this.content = res.data.content;
                  this.resumeId = res.data.resumeId;
                  this.resumeQrImg = process.env.VUE_APP_BASE_API+"resumeQr/"+this.resumeId
                }
            });
        }
    }
  }
</script>