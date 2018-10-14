<template>
<div>
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
</div>
</template>

<script>
import animationFunctions from '../../js/animationJs.js'

export default {
  name: 'navigation',
  props: {
    title: {
      type: String,
      default: 'someText'
    }
  },
  methods: {
    addStyle (item, styleObj, initialize) {
      Object.assign(item.style, styleObj)
      if (initialize) {
        setTimeout(() => {
          item.style.transform = initialize
        }, 1000)
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
          break
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
          break
        }
        default:
          break
      }
    },
    showAnimationByClass (target, direction, delayIn, delayOut, isOn) {
      if (!target) { return }
      const items = document.getElementsByClassName(target)
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
    depthController (target, direction) {
      if (!target) { return }
      const el = document.getElementById(target)
      switch (direction) {
        case 'forward':
          el.style.zIndex = 2
          break
        case 'backward':
          setTimeout(function(){
          el.style.zIndex = -999
          }, 500)
          break
        default:
          break
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
    width: 6rem;
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
</style>
