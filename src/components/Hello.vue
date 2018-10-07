<template>
  <div class="g-main-page">
    <!-- header section -->
    <header>
      <!-- menu button wrapper -->
      <div class="g-header" id="g-header">
        <div class="personal-logo button">LOGO</div>
        <div class="side-menu-button button" @click="openSideMenu()">SIDE MENU</div>
        <div class="g-header-bg"></div>
        <div class="g-header-bg2"></div>
      </div>
      <!-- close button wrapper -->
      <div id="close-button" class="close-button-wrapper" >
        <div class="close-button" @click="openSideMenu()" >Close</div>
      </div>
    </header>

    <!-- header contents -->
    <div class="g-header-page">
      <!-- side menu contents -->
      <div class="g-side-menu-contents" id="g-sideMenuContent">
        <ul>
          <div class="label set-show" id="label1">
            <!-- <div class="label set-show-up" id="label1"> -->
            <div class="label-item">01</div>
            <div class="label-line set-banner-line"></div>
            <div class="label-item">someText</div>
          </div>
          <!-- <div class="label-line set-banner-line"></div> -->
          <li class="list-item"><a href="#">Test list item_1</a></li>
          <li class="list-item"><a href="#">Test list item_2</a></li>
          <li class="list-item"><a href="#">Test list item_3</a></li>
        </ul>
        <div class="label-line set-banner-line"></div>
      </div>


      <!-- side menu contents banner -->
      <div class="banner-wrapper" id="banner-wrapper">
        <a class="nav-banner">
          <div class="label set-show" id="label2">
          <!-- <div class="label set-show-up" id="label1"> -->
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
        <a class="nav-banner">
           <div class="label set-show" id="label3">
            <!-- <div class="label set-show-up" id="label1"> -->
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


      <!-- main contents -->
      <div class="main-contents" v-on:scroll="scrollController" id="g-mainContent">
      {{winsow}}
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        <h1 class=test-script>
          <span class="title-animation">someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
          <span class="title-animation">someText someText someText</span>
        </h1>
        
      </div>
    </div>

    <div id="side-menu-bg"></div>

  </div>
</template>

<script>
import { TweenLite, TimelineLite } from 'gsap'

export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHeaderOpen: true,
      isSideMenuOpen: false,
      winsow: 0,
    }
  },
  mounted () {
    this.isLoaded()
    this.scrollController()
  },
  created () {
  },
  methods: {
    scrollController () {
      const items = document.getElementById('g-mainContent')
      const el = document.getElementsByClassName('test-script')
      this.winsow = items.offsetHeight
      // 
      // console.log(windowHeight)
      for (let item of el) {
        const domRect = item.getBoundingClientRect().top + 200
        if (domRect < this.winsow) {
          item.style.opacity = 1
          item.style.transform = 'translateZ(0)'
        } else {
          item.style.opacity = 0
          item.style.transform = 'translate3D(0,50px,0)'
        }
      }
    },
    isLoaded () {
      const header = document.getElementById('g-header')
      setTimeout(function(){
        header.style.transform = 'translateZ(0)'
      }, 100);
    },
    lineAnimation(target, delayIn, delayOut, isOn) {
      const items = document.getElementsByClassName(target)
      if (isOn) {
        for (let item of items){
          item.style.transform = 'scaleX(1)'
          item.style.transitionDelay = delayIn
          item.style.transformOrigin = 'left center'
        }
      } else {
        for (let item of items){
          item.style.transitionDelay = delayOut
          item.style.transformOrigin = 'right center'
          setTimeout(function() {
            item.style.transform = 'scaleX(0)'
          }, 1000)
        }
      }
    },
    showAnimation (target, direction, delayIn, delayOut, isOn, isArray) {
      if (isArray === true) {
        const items = document.getElementsByClassName(target)
        if (isOn) {
          for (let item of items ) {
            item.style.pointerEvents = 'auto'
            item.style.opacity = 1
            item.style.transitionDelay = delayIn
            item.style.transform = 'translateZ(0)'
          }
        } else {
          for (let item of items) {
            item.style.pointerEvents = 'none'
            item.style.opacity = 0
            item.style.transitionDelay = delayOut
            item.style.transform = 'translate3d(0,-40px,0)'
            setTimeout(function() {
            item.style.transform = 'translateZ(0)'
            }, 1000)
          }
        }
        return
      }
      const item = document.getElementById(target)
      if (direction === 'up') {
        if (isOn) {
          item.style.transform = 'translateZ(0)'
          item.style.opacity = 1
          item.style.transitionDelay = delayIn
        } else {
          item.style.opacity = 0
          item.style.transitionDelay = delayOut
          setTimeout(function() {
            item.style.transform = 'translate3d(0,50px,0)'
          }, 1000)
        }
      } else if (direction === 'right') {
        if (isOn) {
          item.style.transform = 'scaleX(1)'
          item.style.transitionDelay = delayIn
          item.style.transformOrigin = 'left center'
        } else {
          item.style.transitionDelay = delayOut
          item.style.transformOrigin = 'right center'
        }
      } else if (direction === false) {
        if (isOn) {
          item.style.pointerEvents = 'auto'
          item.style.opacity = 1
          item.style.transitionDelay = delayIn
          item.style.transform = 'translateZ(0)'
        } else {
          item.style.pointerEvents = 'none'
          item.style.opacity = 0
          item.style.transitionDelay = delayOut
          item.style.transform = 'translate3d(0,-40px,0)'
          setTimeout(function() {
          item.style.transform = 'translateZ(0)'
          }, 1000)
        }
      }
    },
    headerAnimation (isOn) {
      const header = document.getElementById('g-header')
      if (isOn) {
        header.style.transform = 'translate3d(-100%,0,0)'
        header.style.transitionDelay = '0s'
      } else {
        header.style.transform = 'translateZ(0)'
        header.style.transitionDelay = '1s'
      }
    },
    sideMenuListAnimation (isOn) {
      const listItem = document.getElementsByTagName('li')
      if (isOn) {
        setTimeout(function(){
          let indexCount = .5
          for (let listTag of listItem) {
            listTag.style.pointerEvents = 'auto'
            listTag.style.transform = 'translateY(0)'
            listTag.style.opacity = 1
            listTag.style.transitionDelay = indexCount +'s'
            indexCount += 0.05
          }
        }, 400)
      } else {
        setTimeout(function(){
          let indexCount = 0
          for (let listTag of listItem) {
            listTag.style.pointerEvents = 'none'
            listTag.style.transform = 'translate3d(0,-50px,0)'
            listTag.style.opacity = 0
            listTag.style.transitionDelay = indexCount +'s'
            indexCount += 0.05
          }
        }, 100)
       
      }
      //init list item position
      for (let listTag of listItem) {
        listTag.style.transform = 'translate3d(0,50px,0)'
      }
        
    },
    bannerBgAnimation (isOn) {
      const menuBanner = document.getElementsByClassName('banner-bg')
      if (isOn) {
        for (let banner of menuBanner) {
          banner.style.transformOrigin = 'bottom'
          banner.style.transform = 'scaleY(1)'
          banner.style.transitionDelay = '1s'
        }
      } else {
          for (let banner of menuBanner) {
          banner.style.transformOrigin = 'top'
          banner.style.transform = 'scaleY(0)'
          banner.style.transitionDelay = '.15s'
        }
      }
    },
    sideMenuBgAnimation (isOn) {
      const sideMenuBg = document.getElementById('side-menu-bg')
      if (isOn) {
        sideMenuBg.style.transform = 'scaleX(1)'
        sideMenuBg.style.transitionDelay = '.5s'
      } else {
        sideMenuBg.style.transform = 'scaleX(0)'
        sideMenuBg.style.transitionDelay = '.5s'
      }
    },
    openSideMenu () {
      // const domRect = mainContents.getBoundingClientRect()
      
      const isOn = this.isSideMenuOpen = !this.isSideMenuOpen

      const lists = document.getElementById('g-sideMenuContent')
      const mainContents = document.getElementById('g-mainContent')
      const titleAnimations = document.getElementsByClassName('title-animation')
      const closeButton = document.getElementById('close-button')
      if (isOn) {
        lists.style.zIndex = 1
        mainContents.style.pointerEvents = 'none'
        closeButton.style.transform = 'translateZ(0)'
        closeButton.style.transitionDelay = '1s'
      } else {
        mainContents.style.pointerEvents = 'auto'
        closeButton.style.transform = 'translate3d(-100%,0,0)'
        closeButton.style.transitionDelay = '.5s'
        setTimeout(function(){
         lists.style.zIndex = -999
        }, 1000)
      }
      this.showAnimation('label1', false, '1.2s', '0s', isOn)
      this.showAnimation('label2', false, '1.2s', '0s', isOn)
      this.showAnimation('label3', false, '1.2s', '0s', isOn)
      this.showAnimation('button-wrapper', false, '1.2s', '0s', isOn, true)
      this.lineAnimation('set-banner-line', '1.5s', '0s', isOn)
      
      this.showAnimation('title1', 'up', '1.2s', '.2s', isOn)
      this.showAnimation('title2', 'up', '1.2s', '.2s', isOn)
      this.sideMenuBgAnimation(isOn)
      this.headerAnimation(isOn)
      this.bannerBgAnimation(isOn)
      this.sideMenuListAnimation(isOn)
      
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
}
.test-script {
  opacity: 0;
  transform: translate3d(0,-20px,0);
  transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: center bottom;
}
// set animation attributes
.set-show {
  opacity: 0;
  transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: center bottom;
}
.set-show-up {
  opacity: 0;
  transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: center bottom;
  transform: translate3d(0,50px,0);
}
.set-show-right {
  transition: transform .45s cubic-bezier(.4,0,0,1) .3s;
  transform-origin: left center;
  transform: scaleX(0);
}
.set-banner-line {
  // opacity: 0;
  transition: transform .45s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: left center;
  transform: scaleX(0);
}

// main style
.g-main-page {
  position: relative;
  width: 100%;
  height: 100%;
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
}
.close-button-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 8em;
  height: 100%;
  z-index: 10;
  min-height: 420px;
  transition: transform .45s cubic-bezier(.4,0,0,1) .3s;
  transform: translate3d(-100%,0,0);
  .close-button {
      color: #fff;
      cursor: pointer;
  }
}

.g-header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 8rem;
    height: 100%;
    z-index: 10;
    min-height: 420px;
    transition: transform .45s cubic-bezier(.4,0,0,1) .3s;
    transform: translate3d(-100%,0,0);
  .personal-logo {
    font-size: 14px;
    width: 52px;
    height: 52px;
    padding: 4px;
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .side-menu-button {
    font-size: 14px;
    padding: 4px;
    width: 52px;
    height: 52px;
    margin-bottom: 40px;
    background-color: #ffffff;
  }
  
  .g-header-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #181818;
      z-index: -1;
  }
  .g-header-bg2 {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f5f5f5;
      z-index: -1;
  }
}
.g-header-page {
    width: 100%;
    position: relative;
    width: calc(100% - 8rem);
    margin-left: 8rem;
    height: 100%;
    background-color: #ffffff;
    .g-side-menu-contents {
      position: relative;
      width: 75%;
      height: 100%;
      padding-top: 40px;
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
        height: 60%;
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
          background-color: #dedede;
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
          top:60%;
          height: 40%;
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
    .main-contents {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      top: 0;
      left: 0;
    }
   
}
h1 {
  color: transparent;
  position: relative;
  display: inline-block;
  animation: title 1s cubic-bezier(.4,0,0,1);
  animation-delay: .5s;
  animation-fill-mode: forwards;
}
h1::after {
  transition: transform .3s cubic-bezier(.4,0,0,1);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  transform-origin: right;
  animation: title-after 1s cubic-bezier(.4,0,0,1);
  animation-delay: .5s;
  animation-fill-mode: forwards;
  transform: scaleX(0);
}
ul {
  position: absolute;
  padding: 0 100px;
}
li {
    transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
    transform: translate3d(0,50px,0);
    touch-action: manipulation;
    line-height: 80px;
    opacity: 0;
    font-size: 4.5rem;
    line-height: 1;
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

@keyframes title-after {
    0% {transform: scaleX(0); transform-origin: left;}
    50% {transform: scaleX(1); transform-origin: left;}
    51% {transform: scaleX(1); transform-origin: right;}
    100% {transform: scaleX(0); transform-origin: right;}
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
@keyframes title {
    0% {color: #ffffff;}
    50% {color: #ffffff;}
    51% {color: #181818;}
    100% {color: #181818;}
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
