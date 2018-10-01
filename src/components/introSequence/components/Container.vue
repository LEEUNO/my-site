<template>
  <div>
    <SignUp v-show="showModal" @close="showModal = false"></SignUp>
    <div class="avatar-wrapper show-up"
         :class="{'translate-position':currentStep > 0}"
         v-if="currentStep !== 4">
      <img src="../avatar/logo.svg" alt="avatar">
    </div>

    <!-- Opening -->
    <IntroSequence @isEnd="nextStep" v-if="!endIntro"></IntroSequence>
    <div class="content-wrapper" :class="{'hide-content' : showModal}">
      <div
        class="sequence"
        v-if="currentStep === 1">
        <div class="message show-up">
          <div class="title movement">
            <span class="highlight">Nice! </span>Where are you planning to travel?
          </div>
        </div>
        <div class="button-container">
          <ul>
            <li
              class="list-button-show"
              v-for="(country, index) in contriesArr"
              v-if="index < counter"
              :key="index"
              :value="country"
              :class="{ active : country === selectedCountry }"
              @click="nextStep(country)">
              {{ country }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Cities -->
      <div
        class="sequence"
        v-if="currentStep === 2">
        <div class="message show-up">
          <div class="title movement">
            Which city do you like in this <span class="highlight">{{ selectedCountry }}</span>?
          </div>
        </div>
        <div class="button-container">
          <ul>
            <li
              class="list-button-show"
              v-for="(city, index) in citiesArr"
              v-if="index < counter"
              :key="index"
              :value="city"
              :class="{ active : city === selectedCity }"
              @click="nextStep(city)">
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Themes -->
      <div
        class="sequence"
        v-if="currentStep === 3">
        <div class="message show-up">
          <div class="title movement">
            <span class="highlight">Good!</span> What is your favorite travel theme?
          </div>
        </div>
        <div class="button-container">
          <ul>
            <li
              class="list-button-show"
              v-for="(theme, index) in themesArr"
              v-if="index < counter"
              :key="index"
              :value="theme"
              :class="{ active : theme === selectedTheme }"
              @click="nextStep(theme)">
              {{ theme }}
            </li>
          </ul>
        </div>
      </div>
      <!-- Summary -->
      <div
        class="sequence"
        v-if="currentStep === 4">
        <div class="message show-up">
          <div class="title movement">
            <span class="highlight">Got it.</span> Now I know what you are looking for.
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <footer
      v-if="currentStep !== 0"
      :class="[{ 'show-up': currentStep === 4 }, {'hide-content' : showModal}]">
      <div class="wrapper">
        <div class="gradient-filter"></div>
        <div class="indicator">
          <div class="mark"
            :class="{ active : currentStep === index }"
            :key="index"
            v-for="(step, index) in sequenceSteps">
          </div>
        </div>
        <button
          v-if="currentStep !== 0"
          class="back-button-show back-button"
          @click="previousStep(currentStep)">
          Back
        </button>
      </div>
      <div
        class="selected-history">
        <div class="contents-wrapper show-up" v-if="selectedCountry || selectedCity">
          <div class="selected-contents">You are planning to go to</div>
          <div class="selected-contents" v-if="selectedCity"><span class="movement">{{ selectedCity }}</span> in</div>
          <div class="selected-contents" v-if="selectedCountry"><span class="movement">{{ selectedCountry }}</span></div>
          <div class="selected-contents" v-if="currentStep === 4">and go on a</div>
          <div class="selected-contents" v-if="currentStep === 4"><span class="movement">{{ selectedTheme }}</span></div>
          <div class="selected-contents" v-if="currentStep === 4"> theme trip.</div>
        </div>
        <div v-if="currentStep === 4" class="contents-wrapper show-up">
          <div class="skip-button">Skip</div>
          <div class="notice">
            <span>Notice</span>
            <p>If you want to save your information,<br/> can you please</p>
          </div>
          <!-- <router-link to="/signup" tag="button" class="signup-button">Sign up</router-link> -->
          <div tag="button" class="signup-button" @click="showModal = true">Sign up</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import IntroSequence from './IntroSequence'
import SignUp from '../../SignUp'

export default {
  name: 'TEST',
  components: {
    IntroSequence,
    SignUp
  },
  data () {
    return {
      contriesArr: ['Korea', 'Japan', 'HongKong', 'Taiwan', 'Greece', 'United States', 'Sweden', 'France', 'Yugoslavia', 'Italy', 'Austria', 'United Kingdom'],
      citiesArr: ['Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage'],
      themesArr: ['familytrip', 'photospot', 'photography', 'shopping', 'relax', 'landmark', 'nature', 'outdooractivity', 'visit', 'foodmarket', 'honeymoon', 'firsttime', 'localexperience'],
      sequenceSteps: ['intro', 'init', 'selectCountries', 'selectCities', 'selectThemes'],
      selectedCountry: '',
      selectedCity: '',
      selectedTheme: '',
      isStickerOff: false,
      currentStep: 0,
      introStep: 2,
      currentIntroStep: 0,
      counter: 0,
      showModal: false,
      endIntro: false,
      isNext: false
    }
  },
  mounted () {
    // this.displayButton()
    this.pathAnimation()
  },
  methods: {
    pathAnimation () {
      const path = document.getElementById('return-line')
      const path2 = document.getElementById('return-arrow')
      const wrapper = document.getElementById('return-icon')

      const totalLength = path.getTotalLength()
      const totalLength2 = path2.getTotalLength()
      
      path.style.strokeDasharray = totalLength + ' ' + totalLength
      path2.style.strokeDasharray = totalLength2 + ' ' + totalLength2
      path.style.strokeDashoffset = totalLength
      path2.style.strokeDashoffset = totalLength2
      wrapper.style.transform = 'rotate(120deg)' + 'scale(.3)'
    },
    startAnimation (bool) {
      const wrapper = document.getElementById('return-icon')
      wrapper.style.transition = 'all .5s ease-in-out'
      

      const path = document.getElementById('return-line')
      const totalLength = path.getTotalLength()
      path.style.transition = 'all .5s ease-in-out'
      

      const path2 = document.getElementById('return-arrow')
      const totalLength2 = path2.getTotalLength()
      path2.style.transition = 'all .5s ease-in-out'
      

      const flag = bool
      if (flag) {
        path.style.strokeDashoffset = 0
        path2.style.strokeDashoffset = 0
        wrapper.style.transform = 'rotate(0)' + 'scale(1)'
      } else {
        path.style.strokeDashoffset = totalLength
        path2.style.strokeDashoffset = totalLength2
        wrapper.style.transform = 'rotate(120deg)' + 'scale(.3)'
      }
    },
    displayButton (selectedValue) {
      const currentSequence = this.sequenceSteps[this.currentStep]
      if (selectedValue) {
        if (currentSequence === 'selectCountries') {
          this.selectedCountry = selectedValue
        } else if (currentSequence === 'selectCities') {
          this.selectedCity = selectedValue
        } else if (currentSequence === 'selectThemes') {
          this.selectedTheme = selectedValue
        }
      }
      let tempArr = []
      const increaseCount = setInterval(() => {
        switch (currentSequence) {
          case 'intro':
            return
          case 'init':
            tempArr = this.contriesArr
            break
          case 'selectCountries':
            tempArr = this.citiesArr
            break
          case 'selectCities':
            tempArr = this.themesArr
            break
          case 'selectThemes':
            return
        }
        this.counter++
        if (this.counter === tempArr.length) {
          clearInterval(increaseCount)
        }
      }, 50)
      this.counter = 0
    },
    nextStep (value) {
      if (this.currentStep < this.sequenceSteps.length - 1) {
        if (this.sequenceSteps[this.currentStep] === 'init' && value !== this.selectedCountry) {
          this.selectedCity = ''
        } else if (this.sequenceSteps[this.currentStep] === 'selectCountries' && value !== this.selectedCity) {
          this.selectedTheme = ''
        }
        this.endIntro = true
        this.currentStep++
        this.displayButton(value)
      }
    },
    previousStep () {
      console.log(this.currentStep)
      if (this.currentStep === 1) {
        this.endIntro = false
        this.currentStep--
      } else {
        this.currentStep--
        this.displayButton()
      }
    },
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
    }
  }
}
</script>
<style lang="scss" scoped>
.hide-content {
  // transition: opacity .3s cubic-bezier(.75, .01, .63, .87);
  display: none;
}
.slider {
    width: 200px; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}
.return-icon {
  text-align: center;
}
.avatar-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 24px;
  transition: all .5s cubic-bezier(0, .6, .6, 1.6);
  img {
    width: 64px;
    height: 64px;
    transition: all .5s cubic-bezier(0, .6, .6, 1.6);
  }
}
.translate-position {
  // height: 56px;
  transition: all .5s cubic-bezier(0, .6, .6, 1.6);
  img {
    transition: all .5s cubic-bezier(0, .6, .6, 1.6);
    width: 34px;
    height: 34px;
  }
}
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
      border-radius: 12px;
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
