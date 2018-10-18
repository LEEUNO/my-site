<template>
  <div class="sequence">
    <div class="message show-up">
      <div class="intro intro-rise-up movement" v-if="currentIntroStep === 0">
        <div class="title movement">
          <br/>
          <span class="highlight">Hello &#58;D </span>
          <br/>
          <br/>
            I’m (chatbot name) 
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
            </div> that would like to help you with your journey.</div>
      </div>
      <div class="intro" v-if="currentIntroStep === 1">
        <div class="title movement">
          <p class="paragraph intro-rise-up">
            Since it’s my <span class="highlight">first time</span> seeing you,
          </p>
          <p class="paragraph intro-rise-up-second">
            would you like to answer few <span class="highlight">simple</span> questions
          </p>
          <p class="paragraph intro-rise-up-third">
            so I can <span class="highlight">know you</span> more?
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
</template>

<script>
export default {
  name: 'introSeauence',
  data () {
    return {
      isStickerOff: false,
      currentIntroStep: 0,
    }
  },
  methods: {
    introStepChange (val) {
      if (val === 'next') {
        if (this.currentIntroStep === 0) {
          this.currentIntroStep++
        }
      } else if (val === 'Previous') {
        if (this.currentIntroStep !== 0) {
          this.currentIntroStep--
        }
      }
    },
    endSequence () {
      this.$emit('changeTotalStep')
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/styles/animation.scss';

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
}
</style>
