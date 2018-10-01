<template>
  <div>
    <h1>About</h1>
    <footer>
    <div class="icon-wrapper">
      <img src="/static/assets/behance.svg" alt="#" class="sns-icon">
      <img src="/static/assets/facebook.svg" alt="#" class="sns-icon">
      <img src="/static/assets/instagram.svg" alt="#" class="sns-icon">
      <img src="/static/assets/linkedin.svg" alt="#" class="sns-icon">
    </div>
  </footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
footer {
  position: fixed;
  bottom: 20px;
  left: 30px;
  .icon-wrapper {
    .sns-icon {
      margin-right: 12px;
    }
  }
}
</style>
