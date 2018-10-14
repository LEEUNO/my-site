<template>
<div>
    <div class="animatnion-title-wrapper">
      <animation-title
        title="someText"
      ></animation-title>
      <br>
      <animation-title
        title="someText placeholder"
      ></animation-title>
    </div>
    <br>
    <div class="list-wrapper">
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
      </div>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <br>
    <div class="animatnion-title-wrapper">
      <animation-title
        title="ABSCDEDS KSDJFEI"
      ></animation-title>
      <br>
      <animation-title
        title="ABSCDEDS KSDJFEfasdfI"
      ></animation-title>
    </div>
    <br>
    <section class="section" style="position:static;">
      <div class="absolute" style="position: absolute; width: 100%; margin-top: 100px; z-index:2;">
        <div class="container">
          <div class="row">
            <div class="at1">
              <div class="rellax box2" data-rellax-speed="-1">
                I’m that default chill speed of "7"
              </div>
            </div>
            <div class="at1">
              <div class="rellax box2" data-rellax-speed="2">
                I’m that default chill speed of "2"
              </div>
            </div>
            <div class="at1">
              <div class="rellax box2" data-rellax-speed="-2">
                I’m that default chill speed of "-10"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="list-wrapper">
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
      </div>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <section class="section" style="position:static;">
      <div class="absolute" style="position: absolute; width: 100%; margin-top: 100px; z-index:2;">
        <div class="container">
          <div class="row">
            <div class="at1">
              <div class="rellax box2" data-rellax-speed="4">
                I’m that default chill speed of "7"
              </div>
            </div>
            <div class="at1">
              <div class="box2">
                I’m that default chill speed of "2"
              </div>
            </div>
            <div class="at1">
              <div class="rellax box2" data-rellax-speed="-4">
                I’m that default chill speed of "-10"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="list-wrapper">
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <section class="section" style="position:static;">
        <div style="margin: 0 auto 70px; font-size:24px;" class="animation-title">
          <animation-title
            title="HOHWOHOWHOWHOWHO WHOHWOHWOHWOHWOHW"
          ></animation-title></div>
      </section>
      <div class="scroll-show box-wrapper">
        <div class="box"></div>
      </div>
    </div>
    <br>
</div>
</template>

<script>
import AnimationTitle from './AnimationTitle'

export default {
  name: 'mainContent',
  components: {
    AnimationTitle
  },
  props: {
    title: {
      type: String,
      default: 'someText'
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
// main style
#side-menu-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: transform .3s cubic-bezier(.4,0,0,1);
  animation-delay: .5s;
  transform: scaleX(0);
  transform-origin: left;
  background-color: #181818;
}
.list-wrapper {
  .box-wrapper {
    display: flex;
    .box  {
      // display: flex;
      flex-grow: 1;
      margin-right: 20px;
      height: 420px;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      background-color: #ededed;
      margin-bottom: 50px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>

