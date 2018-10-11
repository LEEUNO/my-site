<template>
  <div class="container">
    <div class="rellax box" data-rellax-percentage="0.5">
      I’m that default chill speed of "-2" and "centered"
    </div>
    <div class="rellax box" data-rellax-speed="7" data-rellax-percentage="0.5">
      I’m super fast!! And super centered!!
    </div>
    <div class="rellax box" data-rellax-speed="-4" data-rellax-percentage="0.5">
      I’m extra slow and smooth, and hella centered.
    </div>
    <div class="rellax box" data-rellax-percentage="0.5">
      I’m that default chill speed of "-2" and "centered"
    </div>
    <div class="rellax box" data-rellax-speed="7" data-rellax-percentage="0.5">
      I’m super fast!! And super centered!!
    </div>
    <div class="rellax box" data-rellax-speed="-4" data-rellax-percentage="0.5">
      I’m extra slow and smooth, and hella centered.
    </div>
    <div class="rellax box" data-rellax-percentage="0.5">
      I’m that default chill speed of "-2" and "centered"
    </div>
    <div class="rellax box" data-rellax-speed="7" data-rellax-percentage="0.5">
      I’m super fast!! And super centered!!
    </div>
    <div class="rellax box" data-rellax-speed="-4" data-rellax-percentage="0.5">
      I’m extra slow and smooth, and hella centered.
    </div>
  </div>
</template>

<script>
import Rellax from 'rellax'
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const rellax = new Rellax('.rellax', {
      center: true
    });
  }
}
</script>

<style lang="scss">
.container {
  overflow-y: scroll;
}
.box {
  width: 100%;
  text-align: center;
  height: 500px;
}
.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-1px);
}
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
