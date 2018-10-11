<template>
<!-- <div class="animation-title-container"> -->
  <div class="animation-title" id="animation-title">
    <span class="mask-bg"></span>
    {{title}}
  </div>
<!-- </div> -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'someText'
    }
  }
}
</script>

<style lang="scss">
.animation-title {
  position: relative;
  display: inline-block;
  font-weight: 100;
  color: transparent;
  font-size: 42px;
  line-break: break-all;
  margin-right: 12px;
}
.mask-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  transform: scaleX(0);
}
.mask-go {
  animation: title-after 1s cubic-bezier(.4,0,0,1);
  animation-delay: .2s;
  animation-fill-mode: forwards;
}
.title-go {
  animation: title 1s cubic-bezier(.4,0,0,1);
  animation-delay: .2s;
  animation-fill-mode: forwards;
}
@keyframes title {
    0% {color: #ffffff;}
    50% {color: #ffffff;}
    51% {color: #181818;}
    100% {color: #181818;}
}
@keyframes title-after {
    0% {transform: scaleX(0); transform-origin: left;}
    50% {transform: scaleX(1); transform-origin: left;}
    51% {transform: scaleX(1); transform-origin: right;}
    100% {transform: scaleX(0); transform-origin: right;}
}
</style>

<style lang="scss" scoped>
.animation-title {
  position: relative;
  display: inline-block;
  font-weight: 100;
  color: transparent;
  font-size: 42px;
  line-break: break-all;
}
.mask-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  transform: scaleX(0);
}
.mask-go {
  animation: title-after 1s cubic-bezier(.4,0,0,1);
  animation-delay: .2s;
  animation-fill-mode: forwards;
}
.title-go {
  animation: title 1s cubic-bezier(.4,0,0,1);
  animation-delay: .2s;
  animation-fill-mode: forwards;
}
@keyframes title {
    0% {color: #ffffff;}
    50% {color: #ffffff;}
    51% {color: #181818;}
    100% {color: #181818;}
}
@keyframes title-after {
    0% {transform: scaleX(0); transform-origin: left;}
    50% {transform: scaleX(1); transform-origin: left;}
    51% {transform: scaleX(1); transform-origin: right;}
    100% {transform: scaleX(0); transform-origin: right;}
}
</style>
