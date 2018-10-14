<template>
<div>
  <div class="g-side-menu-contents" id="g-sideMenuContent">
    <!-- side menu list -->
    <ul>
      <div class="label label-animation set-show">
        <div class="label-item">01</div>
        <div class="label-line set-banner-line"></div>
        <div class="label-item">someText</div>
      </div>
      <li class="list-item"><a href="#">Test list item_1</a></li>
      <li class="list-item"><a href="#">Test list item_2</a></li>
      <li class="list-item"><a href="#">Test list item_3</a></li>
    </ul>
    <div class="label-line set-banner-line"></div>
  </div>
  <!-- side menu banner -->
  <div class="banner-wrapper" id="banner-wrapper">
    <!-- banner 1 -->
    <a class="nav-banner">
      <div class="label label-animation  set-show">
        <div class="label-item">02</div>
        <div class="label-line set-banner-line"></div>
        <div class="label-item">someText</div>
      </div>
      <div class="banner-title" id="title1">
        telkjsldkjfas dxcvsdvxcvsdvs
      </div>
      <div class="banner-bg">
      </div>
        <div class="button-wrapper set-show">
          <!-- someIcons -->
        </div>
    </a>
    <!-- banner 2 -->
    <a class="nav-banner">
        <div class="label label-animation set-show">
        <div class="label-item">03</div>
        <div class="label-line set-banner-line"></div>
        <div class="label-item">someText</div>
      </div>
      <div class="banner-title" id="title2">
        telkjsldkjfasd xcvsdvxcvsdvs
      </div>
      <div class="banner-bg">
      </div>
      <div class="button-wrapper set-show">
        <!-- someIcons -->
      </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'sideMenuContent',
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

.g-side-menu-contents {
  position: relative;
  width: 75%;
  height: 100%;
  padding-top: 40px;
  ul {
    position: absolute;
    padding: 0 100px;
    li {
      transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
      transform: translate3d(0,50px,0);
      touch-action: manipulation;
      line-height: 80px;
      opacity: 0;
      font-size: 4.5rem;
      margin-bottom: 1.5rem;
      a {
        position: relative;
        color: #fff;
        text-decoration: none;
        font-size: 64px;
        font-weight: 100;
      }
      a::after {
        display: inline-block;
        transition: transform .3s cubic-bezier(.4,0,0,1);
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #3150ff;
        transform-origin: center;
        transform: scaleX(0);
      }
      a:hover::after {
        transform: scaleX(1);
      } 
    }
  }
  .label {
      margin-bottom: 40px;
    .label-item {
      display: inline-block;
      color: #ffffff;
    }
    .label-line {
      display: inline-block;
      width: 4rem;
      height: 1px;
      background-color: #ffffff;
      margin-right: 4px;
      margin-left: 4px;
      &:last-child {
        margin: 120px 0 0;
        height: 1px;
      }
    }
  }
}
.banner-wrapper {
  position: absolute;
  width: 25%;
  z-index: -999;
  height: 100%;
  right: 0;
  top: 0;
  .nav-banner {
    position: absolute;
    cursor: pointer;
    z-index: 1;
    width: 100%;
    left: 0;
    top:0;
    height: 55%;
    padding: 40px;
    .label {
      pointer-events: none;
      margin-bottom: 40px;
      .label-item {
        display: inline-block;
        margin: 0;
      }
      .label-line {
        display: inline-block;
        width: 4rem;
        height: 1px;
        margin-right: 4px;
        margin-left: 4px;
        background-color: #181818;
      }
    }
    .banner-title {
      pointer-events: none;
      margin: 20px 0;
      color: #181818;
      font-size: 28px;
      opacity: 0;
      transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
      transform-origin: center bottom;
      transform: translate3d(0,50px,0);
    }
    .banner-bg {
      position: absolute;
      right: 0;
      top:0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      transition: transform .45s cubic-bezier(.4,0,0,1);
      transform: scaleY(0);
      transform-origin: center bottom;
    }
    .button-wrapper {
      position: absolute;
      right: 30px;
      bottom: 40px;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      background-color: #ededed;
    }
    .button-wrapper:before {
      content: "";
      display: block;
      border-radius: inherit;
      background-color: #181818;
      width: 60px;
      height: 60px;
      animation: scale-out .3s cubic-bezier(.4,0,0,1);
      animation-fill-mode: forwards;
    }
    &:hover > .button-wrapper:before {
      animation: scale-in .3s cubic-bezier(.4,0,0,1);
      transform-origin: center center;
      animation-fill-mode: forwards;
    }
    &:last-child {
      top:55%;
      height: 45%;
      .label {
        .label-item {
          color: #ffffff;
        }
        .label-line {
          background-color: #ffffff;
        }
      }
      .banner-title {
        color: #ffffff;
      }
      .button-wrapper {
        background-color: #ffffff;
      }
      .banner-bg {
        background-color: #3150ff;
      }
    }
  }
}
@keyframes scale-in {
  0% {transform: scale(0);}
  50% {transform: scale(1.15);}
  100% {transform: scale(1.1);}
}
@keyframes scale-out {
  0% {transform: scale(1.1);}
  50% {transform: scale(1.1);}
  100% {transform: scale(0);}
}
</style>
