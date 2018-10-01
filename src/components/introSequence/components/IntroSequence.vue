<template>
  <div>
    <!-- Opening -->
    <div
      class="sequence"
      v-if="currentStep === 0">
      <div class="message show-up">
        <div class="intro intro-rise-up movement" v-if="currentIntroStep === 0">
          <div class="title movement">
            <br/>
            <span class="highlight">Hello &#58;D </span>
            <br/>
            <br/>
              I'm an AI chatbot
              <div class="sticker-wrapper">
                <div
                  class="sticker"
                  :class="{'remove-sticker is-sticker-off':isStickerOff}"
                  @click="isStickerOff = true">Don't touch
                  <div class="edge"></div>
                  <div class="edge-out"></div>
                </div>
                <span class="qou"
                  :class="{'remove-shadow':isStickerOff}">
                  &#40;Sometimes stupid...&#41;
                </span>
              </div> that wants to help you on your journey.</div>
        </div>
        <div class="intro" v-if="currentIntroStep === 1">
          <div class="title movement">
            <p class="paragraph intro-rise-up">
              But. I don't have enough <span class="highlight">your information.</span>
            </p>
            <p class="paragraph intro-rise-up-second">
              because, I see you for the <span class="highlight">first time.</span>
            </p>
            <p class="paragraph intro-rise-up-third">
              Could you answer a <span class="highlight">simple</span> question to give you the right information?
            </p>
          </div>
        </div>
      </div>
      <div class="intro-button-wrapper">
        <div class="gradient-filter"></div>
        <div v-if="currentIntroStep !== 0" class="intro-button show-up" @click="introStepChange('Previous')">
          Previous
        </div>
        <div v-if="currentIntroStep !== 1" class="intro-button show-up" @click="introStepChange('next')">
          Next
        </div>
        <div v-if="currentIntroStep === 1" class="intro-button show-up" @click="endSequence()">
          Ok!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSeauence',
  data () {
    return {
      sequenceSteps: ['intro', 'init', 'selectCountries', 'selectCities', 'selectThemes'],
      isStickerOff: false,
      currentStep: 0,
      introStep: 2,
      currentIntroStep: 0,
      counter: 0,
      isNext: false
    }
  },
  methods: {
    introStepChange (val) {
      if (val === 'next') {
        if (this.currentIntroStep < this.introStep - 1) {
          this.currentIntroStep++
        }
      } else if (val === 'Previous') {
        if (this.currentIntroStep !== 0) {
          this.currentIntroStep--
        }
      }
    },
    endSequence () {
      this.$emit('isEnd')
    }
  }
}
</script>
<style lang="scss" scoped>
.sequence {
  padding-bottom: 42px;
  .intro-button-wrapper {
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .gradient-filter {
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 30px;
      margin-top: -42px;
      background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%);
    }
    .intro-button {
      flex-grow: 1;
      align-items: flex-start;
      width: 50%;
      height: 43px;
      margin: 8px 12px 12px;
      line-height: 42px;
      border-radius: 20px 4px 20px 20px;
      background-color: #2D343B;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      &:first-child {
        border-radius: 20px;
        align-items: flex-end;
        margin-right: 12px;
      }
    }
  }
  .message {
    padding: 12px 12px 24px;
    /* max-width: 320px; */
    opacity: 0;
    .title {
      color: #2D343B;
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      text-align: center;
      .paragraph {
        opacity: 0;
        margin-bottom: 36px;
      }
    }
    .highlight {
      color: #0285FF;
    }
    .sticker-wrapper {
      position: relative;
      display: inline-block;
      font-size: 14px;
      width: 160px;
      text-align: center;
      color: #0285FF;
      height: 24px;
      vertical-align: top;
      margin-top: 4px;
      .sticker {
        position: absolute;
        top: 0;
        width: 162px;
        height: auto;
        padding: 6px 12px 0;
        height: 28px;
        line-height: 16px;
        background-color: #FBFBAE;
        z-index: 2;
        transform: rotate(-2deg);
        &.is-sticker-off {
          opacity: 0;
          transition: opacity 1s cubic-bezier(.75, .01, .63, .87) 1s;
        }
        .edge-out {
          position: absolute;
          top: 0;
          right: 0;
          width: 16px;
          height: 16px;
          -webkit-clip-path: polygon(0 0, 100% 100%, 100% 0);
          clip-path: polygon(0 0, 100% 100%, 100% 0);
          background-color: #ffffff;
          z-index: 4;
        }
        .edge {
          position: absolute;
          -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 100%, 0 100%);
          top: 0;
          right: 0;
          width: 16px;
          height: 16px;
          z-index: 3;
          background-color: #ECECAD;
        }
      }
      .qou {
        position: absolute;
        left: 0;
        top: 8px;
        font-size: 16px;
        line-height: 16px;
        font-weight: 400;
        color: #0285FF;
        box-shadow: 4px 8px 10px #dedede;
        &.remove-shadow {
          box-shadow: none;
        }
      }
    }
  }
  .button-container {
    position: absolute;
    max-height: calc(100% - 310px);
    left: 12px;
    right: 12px;
    overflow-y: scroll;
    ul {
      list-style: none;
      padding-bottom: 68px;
      li {
        cursor: pointer;
        display: inline-block;
        opacity: 0;
        padding: 8px 12px;
        color: #0285FF;
        border: 1px solid #0285FF;
        border-radius: 20px;
        margin: 4px;
        margin-bottom: 12px;
        transition: all .1s ease-in-out;
        &.active {
          background-color: #0285FF;
          border-color: #0285FF;
          color: #ffffff;
          transition: all .1s ease-in-out;
        }
        &:hover {
          background-color: #0285FF;
          border-color: #0285FF;
          color: #ffffff;
          transition: all .1s ease-in-out;
        }
      }
    }
  }
}
//animations
.show-up {
  animation: moveDownToUp .5s cubic-bezier(0, .6, .6, 1) 0s 1 none;
  animation-fill-mode: forwards;
}
.list-button-show {
  animation: moveDownToUp .5s cubic-bezier(0, .6, .6, 1) .6s 1 none;
  animation-fill-mode: forwards;
}
.back-button-show {
  animation: leftToRight .2s cubic-bezier(0, .6, .6, 1) 1s 1 none;
  animation-fill-mode: forwards;
}
.movement {
  animation: moveUpToDown 1s ease-in-out 0s infinite alternate;
}
.remove-sticker {
  animation: removeSticker 2s cubic-bezier(.75, .01, .63, .87) 0s none;
  animation-fill-mode: forwards;
}
.intro-rise-up {
  animation: riseUp 1s cubic-bezier(0, .5, .4, 1) 0s 1 none;
  animation-fill-mode: forwards;
}
.intro-rise-up-second {
  animation: riseUp 1s cubic-bezier(0, .5, .4, 1) .4s 1 none;
  animation-fill-mode: forwards;
}
.intro-rise-up-third {
  animation: riseUp 1s cubic-bezier(0, .5, .4, 1) .8s 1 none;
  animation-fill-mode: forwards;
}
@keyframes moveDownToUp {
  from {transform: translateY(24px); opacity: 0;};
  to {transform: translateY(0); opacity: 1;};
}
@keyframes riseUp {
  0% {transform: translateY(20px); opacity: 0;};
  100% {transform: translateY(0); opacity: 1;};
}
@keyframes leftToRight {
  from {transform: translateX(-40px); opacity: 0;};
  to {transform: translateX(0); opacity: 1;};
}
@keyframes removeSticker {
  from {transform: translateX(0) translateY(0) rotate(0);};
  to {transform: translateX(12px) translateY(100px) rotate(15deg);};
}
@keyframes moveUpToDown {
  from {transform: translateY(-1px);};
  to {transform: translateY(1px);};
}
</style>
