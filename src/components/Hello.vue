<template>
  <div class="g-main-page">

    <div class="g-header" id="g-header" :class="[{ 'close-header' : isSideMenuOpen },'open-header']">
      <div class="personal-logo">LOGO</div>
      <div class="side-menu-button" @click="openSideMenu()">SIDE MENU</div>
      <div class="g-header-bg"></div>
    </div>

    <div id="close-button" class="close-button-wrapper" :class="[{ 'close-header' : !isSideMenuOpen }, 'open-header']">
      <div class="close-button" @click="openSideMenu()" >Close</div>
    </div>

    <div class="g-header-page">
      <div class="g-side-menu-contents" id="g-sideMenuContent">
        <ul>
          <li class="list-item"><a href="#">Test liat item_1</a></li>
          <li class="list-item"><a href="#">Test liat item_2</a></li>
          <li class="list-item"><a href="#">Test liat item_3</a></li>
        </ul>
      </div>
      <div class="main-contents" id="g-mainContent">
        <h1 class="title-animation" id="title-animation">
          This is test script
        </h1>
        <br>
        <h1 id="title-animation">
          This is test scriptThis is test script
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
      isSideMenuOpen: false
    }
  },
  mounted () {
    this.isLoaded()
  },
  created () {
  },
  methods: {
    isLoaded () {
      const header = document.getElementById('g-header')
      setTimeout(function(){
        header.style.transform = 'translateZ(0)'
      }, 100);
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
      const listTags = document.getElementsByTagName('li')
      if (isOn) {
        setTimeout(function(){
          let indexCount = .4
          for (let listTag of listTags) {
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
          for (let listTag of listTags) {
            listTag.style.pointerEvents = 'none'
            listTag.style.transform = 'translate3d(0,-50px,0)'
            listTag.style.opacity = 0
            listTag.style.transitionDelay = indexCount +'s'
            indexCount += 0.05
          }
        }, 100)
      }
      //init list item position
      for (let listTag of listTags) {
        listTag.style.transform = 'translate3d(0,50px,0)'
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
      const isOn = this.isSideMenuOpen = !this.isSideMenuOpen
      const mainContents = document.getElementById('g-mainContent')
      const titleAnimations = document.getElementsByClassName('title-animation')
      const closeButton = document.getElementById('close-button')
      if (isOn) {
        mainContents.style.pointerEvents = 'none'
        this.sideMenuBgAnimation(isOn)
        this.headerAnimation(isOn)
      } else {
        mainContents.style.pointerEvents = 'auto'
        this.sideMenuBgAnimation(isOn)
        this.headerAnimation(isOn)
      }
      this.sideMenuListAnimation(isOn)
      
    }
  }
}
</script>

<style lang="scss" scoped>


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
.open-header {
  transform: translateZ(0);
  transition-delay: .5s;
}
.close-header {
  transform: translate3d(-100%,0,0);
  transition-delay: .5s;
}
.g-header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 8em;
    height: 50%;
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
}
.g-header-page {
    position: relative;
    margin-left: 8rem;
    width: calc(100% - 8rem);
    height: 100%;
    background-color: #ffffff;
    .g-side-menu-contents {
      position: relative;
      width: 100%;
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
  z-index: 999;
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
