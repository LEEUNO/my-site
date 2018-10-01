<template>
  <div>
    <!-- <h1>Hello! my name is <span>Yoon Ho.</span></br> Nice to meet you!</h1> -->
  </div>

</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
h1 {
  span {
    color: #3150ff;
  }
}
@media screen and (max-width: 750px) {
  h1 {
    margin-top: 120px;
    font-size: 32px;
    padding: 0 20px;
    line-height: 32px;
    span {
      color: #3150ff;
    }
  }
}

</style>
