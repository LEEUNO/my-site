<template>
  <div class="g-container" id="g-container">
    <!-- header section -->
    <header>
      <Header></Header>
    </header>
    <!-- contents -->
    <div class="g-content">
      <!-- side menu contents -->
      <SideMenuContent></SideMenuContent>
      <!-- main contents -->
      <body class="main-contents" id="g-mainContent" @scroll="scrollController('scroll-show')">
        <MainContent></MainContent>
      </body>
    </div>
    <div id="side-menu-bg"></div>
  </div>
</template>
<script>
import Header from './partials/Header'
import SideMenuContent from './partials/SideMenuContent'
import MainContent from './partials/MainContent'
import Rellax from 'rellax'

export default {
  name: 'Contact',
  components: {
    SideMenuContent,
    MainContent,
    Header
  },
  data () {
    return {
      isSideMenuOpen: false,
      windowOffsetHeight: 0,
      rellax: null
    }
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
      const el = document.getElementById('g-container')
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
    }
    
  }
}
</script>

<style lang="scss">
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

// main style
.g-container {
  position: fixed;
  width: 100%;
  height: 100%;
  .g-content {
    width: 100%;
    position: relative;
    width: calc(100% - 6rem);
    margin-left: 6rem;
    height: 100%;
    background-color: #ffffff;
    
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

// set animation attributes
.scroll-show {
  opacity: 0;
  transform: translate3d(0,50px,0);
  transition: transform .6s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: center bottom;
}
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
  transition: transform .45s cubic-bezier(.4,0,0,1) .05s,opacity .6s cubic-bezier(.4,0,0,1) .05s;
  transform-origin: left center;
  transform: scaleX(0);
}

</style>
