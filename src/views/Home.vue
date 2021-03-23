<template>
  <div class="home">
    <h1>This is an home page{{ this.$route.params.userName}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
