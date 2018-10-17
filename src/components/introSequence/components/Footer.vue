<template>
  <div>
    <footer
      :class="[{ 'show-up': qTotalSteps }, {'hide-content' : isModalShow}]">
      <div class="wrapper">
        <div class="gradient-filter"></div>
        <div class="indicator">
          <div class="mark"
            :class="{ active : qCurrentStep + 1 === index }"
            :key="index"
            v-for="(step, index) in qTotalSteps">
          </div>
        </div>
        <button
          v-if="qCurrentStep !== 4"
          class="back-button-show back-button"
          @click="$emit('backToPrevious')">
          Back
        </button>
      </div>
      <div
        class="selected-history">
        <!-- You are planning a <theme> trip to <city> for <days>.
If you’d like to save your information, please click here to -->
        <div class="contents-wrapper show-up" v-if="selectedDay || selectedCity">
          <!-- <div class="selected-contents">You are planning to go to</div> -->
          <!-- <div class="selected-contents">You are planning a </div> -->
          <div class="selected-contents" v-if="selectedCity && !selectedTheme">You are planning to go to <span class="movement">{{ selectedCity }}</span></div>
          <div class="selected-contents" v-if="selectedDay && !selectedTheme"> for <span class="movement"> {{ selectedDay }} days.</span></div>
          <!-- <div class="selected-contents" v-if="selectedTheme">and go on a</div> -->
          <div class="selected-contents" v-if="selectedCity && selectedDay && selectedTheme">You are planning a <span class="movement">{{selectedTheme}}</span> trip to <span class="movement">{{ selectedCity }}</span> for <span class="movement">{{ selectedDay }} days</span>.</div>
          <!-- <div class="selected-contents" v-if="selectedTheme"> theme trip.</div> -->
        </div>
        <div v-if="qCurrentStep === 3" class="contents-wrapper show-up">
          <div class="skip-button">Skip</div>
          <div class="notice">
            <span>Notice</span>
            <p>If you want to save your information,<br/> can you please</p>
          </div>
          <!-- <router-link to="/signup" tag="button" class="signup-button">Sign up</router-link> -->
          <div tag="button" class="signup-button" @click="$emit('modalContoroller')">Sign up</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'hanchaoSignUp',
  props: {
    qCurrentStep: {
      Type: Number,
      default: 0
    },
    isModalShow: {
      Type: Boolean,
      default: false
    },
    qTotalSteps: {
      Type: Array,
      default: []
    },
    selectedDay: {
      Type: Number,
      default: 0
    },
    selectedCity: {
      Type: String,
      default: ''
    },
    selectedTheme: {
      Type: String,
      default: ''
    }
  },
  data () {
    return {
      introStep: 2,
      counter: 0,
      endIntro: false,
      isNext: false
    }
  }
}
</script>
<style lang="scss" scoped>
.hide-content {
  display: none;
}
.return-icon {
  text-align: center;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  min-height: 72px;
  transition: min-height .5s cubic-bezier(0, .6, .6, 1);
  .wrapper {
    position: relative;
    height: 52px;
    .gradient-filter {
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 30px;
      margin-top: -28px;
      background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%);
    }
    .indicator {
      text-align: center;
      padding-top: 12px;
      width: 100%;
      .mark {
        display: inline-block;
        position: relative;
        margin-right: 8px;
        width: 24px;
        height: 4px;
        background-color: #EDEDED;
        border-radius: 4px;
        transform: rotate(0);
        transition: all .2s cubic-bezier(0, .6, .6, 1);
        &:first-child {
          display: none;
        }
        &:last-child {
          margin-right: 0;
        }
        &.active {
          width: 14px;
          border-radius: 12px;
          border-radius: 8px;
          transform: rotate(180deg);
          transition: all .2s cubic-bezier(0, .6, .6, 1);
          background-color: #606B78;
        }
      }
    }
    .back-button {
      position: absolute;
      top: 0;
      width: 52px;
      height: 52px;
      opacity: 0;
      border-radius: 46px;
      left: 12px;
      text-align: center;
      padding: 0;
      font-size: 14px;
      color: #ffffff;
      background-color: #2D343B;
      font-weight: 400;
      border: none;
    }
  }
  .selected-history {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    .contents-wrapper {
      color: #2D343B;
      background-color: #fff;
      font-size: 16px;
      margin: 12px;
      padding: 18px 24px;
      border-radius: 4px 12px 12px 12px;
      box-shadow: 0 2px 10px #dedede;
      .selected-contents {
        display: inline-block;
        text-align: center;
        line-height: 28px;
        span {
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          color: #0285FF;
          transition: all .1s ease-in-out;
        }
      }
      .notice {
        margin-top: 4px;
        span {
          color: #0285FF;
          font-size: 16px;
          font-weight: 500;
        }
        p {
          margin-top: 4px;
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 20px;
          color: #2D343B;
        }
      }
      .skip-button {
        color: #C4C4C4;
        position: absolute;
        top: 12px;
        right: 16px;
        font-size: 16px;
        text-align: right;
        font-weight: 500;
      }
      .signup-button {
        width: 100%;
        background-color: #0285FF;
        padding: 12px 0;
        border-radius: 50px;
        border: none;
        color: #fff;
        font-size: 16px;
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
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
