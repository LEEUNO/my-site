<template>
  <div class="g-main-page" id="g-main-page">
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

      <!-- side menu contents banner -->
      <div class="banner-wrapper" id="banner-wrapper">
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

      <!-- main contents -->
      <body class="main-contents" @scroll="scrollController('scroll-show')" id="g-mainContent">
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
      </body>
    </div>
    <div id="side-menu-bg"></div>
    
  </div>
</template>

<script>
import AnimationTitle from './partials/AnimationTitle'
import Rellax from 'rellax'

export default {
  name: 'Contact',
  components: {
    AnimationTitle
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isHeaderOpen: true,
      isSideMenuOpen: false,
      windowOffsetHeight: 0,
      rellax: null
    }
  },
  created () {
    },
  mounted () {
    this.isLoaded()
    const rellax = new Rellax('.rellax', {
      wrapper: '.main-contents',
      center: true
    })
  },
  methods: {
    getWindowOffsetHeight () {
      const el = document.getElementById('g-main-page')
      const { offsetHeight } = el
      this.windowOffsetHeight = offsetHeight
      return offsetHeight
    },
    scrollTrigger () {
      const domRect = item.getBoundingClientRect().y + 200
      return domRect < this.windowOffsetHeight
    },
    titleAfterAnimation (target) {
      if (!target) { return }
      const windowOffsetHeight = this.getWindowOffsetHeight()
      const titleObj = document.getElementsByClassName(target)
      for (const item of titleObj) {
        const domRect = item.getBoundingClientRect().y + 200
        if (domRect < windowOffsetHeight && !item.children[0].className.includes(' mask-go') && !item.className.includes(' title-go')) {
            item.children[0].className += ' mask-go'
            item.className += ' title-go'
        }
      }
    },
    scrollController (target) {
      if (!target) { return }
      this.titleAfterAnimation('animation-title')
      const el = document.getElementsByClassName(target)
      const windowOffsetHeight = this.getWindowOffsetHeight()
      for (const item of el) {
        const domRect = item.getBoundingClientRect().top + 100
        if (domRect < windowOffsetHeight) {
          item.style.transform = 'translateZ(0)'
          item.style.opacity = 1
          item.style.transitionDelay = '.2s'
        }
      }
    },
    isLoaded () {
      const header = document.getElementById('g-header')
      setTimeout(function(){
        header.style.transform = 'translateZ(0)'
      }, 100);
      this.scrollController('scroll-show')
    },
    lineAnimation(target, delayIn, delayOut, isOn) {
      if (!target) { return }
      const items = document.getElementsByClassName(target)
      if (isOn) {
        for (let item of items){
          item.style.transform = 'scaleX(1)'
          item.style.transformOrigin = 'left center'
          item.style.transitionDelay = delayIn
        }
      } else {
        for (let item of items){
          item.style.transformOrigin = 'right center'
          item.style.transitionDelay = delayOut
          setTimeout(function() {
            item.style.transform = 'scaleX(0)'
          }, 1000)
        }
      }
    },
    addStyle (item, styleObj, initialize) {
      Object.assign(item.style, styleObj)
      if (initialize) {
        setTimeout(() => {
          item.style.transform = initialize
        }, 1000)
      }
    },
    showAnimationByClass (target, direction, delayIn, delayOut, isOn) {
      if (!target) { return }

      const items = document.getElementsByClassName(target)
      console.log(items)
      if (isOn) {
        for (const item of items ) {
          this.addStyle(item, {
            pointerEvents: 'auto',
            opacity: 1,
            transform: 'translateZ(0)',
            transitionDelay: delayIn
          })
        }
      } else {
        for (const item of items) {
          this.addStyle(item, {
            pointerEvents: 'none',
            opacity: 0,
            transform: 'translate3d(0,-40px,0)',
            transitionDelay: delayOut
          }, 'translateZ(0)')
          
        }
      }
    },
    showAnimationById (target, direction, delayIn, delayOut, isOn) {
      if (!target) { return }
      const item = document.getElementById(target)
      switch (direction) {
        case 'showUp': {
          if (isOn) {
            this.addStyle(item, {
              opacity: 1,
              transform: 'translateZ(0)',
              transitionDelay: delayIn
            })
          } else {
            this.addStyle(item, {
            opacity: 0,
            transitionDelay: delayOut
            }, 'translate3d(0,50px,0)')
          }
          break;
        }
        case 'leaveUp': {
          if (isOn) {
            this.addStyle(item, {
              opacity: 1,
              transform: 'translateZ(0)',
              transitionDelay: delayIn
            })
          } else {
            this.addStyle(item, {
              opacity: 0,
              transform: 'translate3d(0,-40px,0)',
              transitionDelay: delayOut
            }, 'translateZ(0)')
          }
          break;
        }
        default:
          break;
      }
    },
    headerAnimation (target, isOn) {
      if (!target) { return }
      const header = document.getElementById(target)
      if (isOn) {
        this.addStyle(header, {
          transform: 'translate3d(-100%,0,0)',
          transitionDelay: '0s'
        })
      } else {
        this.addStyle(header, {
          transform: 'translateZ(0)',
          transitionDelay: '1s'
        })
      }
    },
    sideMenuListAnimation (target, isOn) {
      if (!target) { return }
      const listItem = document.getElementsByClassName(target)
      if (isOn) {
        setTimeout(() => {
          let indexCount = .5
          for (let listTag of listItem) {
            this.addStyle(listTag, {
              opacity: 1,
              transform: 'translateY(0)',
              transitionDelay: indexCount +'s'
            })
            indexCount += 0.05
          }
        }, 400)
      } else {
        setTimeout(() => {
          let indexCount = 0
          for (let listTag of listItem) {
            this.addStyle(listTag, {
              opacity: 0,
              transform: 'translate3d(0,-50px,0)',
              transitionDelay: indexCount +'s'
            })
            indexCount += 0.05
          }
        }, 100)
       
      }
      //init list item position
      for (let listTag of listItem) {
        listTag.style.transform = 'translate3d(0,50px,0)'
      }
    },
    bannerBgAnimation (target, isOn) {
      if (!target) { return }
      const menuBanner = document.getElementsByClassName(target)
      if (isOn) {
        for (let banner of menuBanner) {
          this.addStyle(banner, {
            transformOrigin: 'bottom',
            transform: 'scaleY(1)',
            transitionDelay: '.8s'
          })
        }
      } else {
        for (let banner of menuBanner) {
          this.addStyle(banner, {
            transformOrigin: 'top',
            transform: 'scaleY(0)',
            transitionDelay: '.15s'
          })
        }
      }
    },
    depthController (target, direction) {
      if (!target) { return }
      const el = document.getElementById(target)
      switch (direction) {
        case 'forward':
          el.style.zIndex = 2
          break;
        case 'backward':
          setTimeout(function(){
          el.style.zIndex = -999
          }, 500)
          break;
        default:
          break;
      }
    },
    sideMenuBgAnimation (isOn) {
      const sideMenuBg = document.getElementById('side-menu-bg')
      if (isOn) {
        this.addStyle(sideMenuBg, {
          transform: 'scaleX(1)',
          transitionDelay: '.5s'
        })
        this.depthController('banner-wrapper', 'forward')
      } else {
        this.addStyle(sideMenuBg, {
          transform: 'scaleX(0)',
          transitionDelay: '.5s'
        })
        this.depthController('banner-wrapper', 'backward')
      }
    },
    closeButtonAnimation (isOn) {
      const closeButton = document.getElementById('close-button')
      if (isOn) {
        this.addStyle(closeButton, {
          transform: 'translateZ(0)',
          transitionDelay: '1s'
        })
        this.depthController('g-sideMenuContent', 'forward')
      } else {
        this.addStyle(closeButton, {
          transform: 'translate3d(-100%,0,0)',
          transitionDelay: '.5s'
        })
        this.depthController('g-sideMenuContent', 'backward')
      }
    },
    openSideMenu () {
      const isOn = this.isSideMenuOpen = !this.isSideMenuOpen
      this.closeButtonAnimation(isOn)
      this.showAnimationByClass('label-animation', 'leaveUp', '1.2s', '0s', isOn)
      this.showAnimationByClass('button-wrapper', 'leaveUp', '1.2s', '0s', isOn)
      this.showAnimationById('title1', 'showUp', '1.2s', '.2s', isOn)
      this.showAnimationById('title2', 'showUp', '1.2s', '.2s', isOn)

      this.lineAnimation('set-banner-line', '1.5s', '0s', isOn)
      this.sideMenuBgAnimation(isOn)
      this.headerAnimation('g-header', isOn)
      this.bannerBgAnimation('banner-bg', isOn)
      this.sideMenuListAnimation('list-item', isOn)
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .section {
    height: auto;
  }
  .container {
    position: relative;
    width: 100%;
    // height: 400px;
    .row {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      .at1 {
        display: flex;
        flex-grow: 1;
        text-align: center;
        justify-content: center;
        .box2 {
          display: flex;
          align-items: center;
          width: 200px;
          height: 200px;
          padding: 24px;
          background-color: #3150ff;
          color: #ffffff;
          border-radius: 50%;
        }
      }
    }
  }

.button {
  cursor: pointer;
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
    }
  }
}
.scroll-show {
  opacity: 0;
  transform: translate3d(0,50px,0);
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
  position: fixed;
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
      -webkit-overflow-scrolling: touch;
      padding: 20px;
      transform-style: preserve-3d;
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
