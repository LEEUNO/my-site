<template>
  <div>
    <HanchaoSignUp v-show="showModal" @close="showModal = false"></HanchaoSignUp>
     <div
        class="sequence"
        v-if="qCurrentStep === 0">
        <div class="message show-up">
          <div class="title movement">
            <span class="highlight">Cool! </span>Which city would you like to visit?
          </div>
        </div>
        <div class="button-container">
          <ul>
            <li
              class="set-show"
              v-for="city in cities"
              :key="city.cityName"
              :value="city.cityName"
              :class="{ active : city.cityName === selectedCity }"
              @click="selectValue(city.cityName), nextStep() ">
              {{ city.cityName }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="sequence"
        v-if="qCurrentStep === 1">
        <div class="message show-up">
          <div class="title movement">
            I like <span class="highlight">{{ selectedCity }}</span> too! How many days you would like to spend for your trip?
          </div>
          
        </div>
        <div class="button-container">
          <ul>
            <li
            class="set-show"
            :key="day"
            :class="{ active : day == selectedDay }"
            @click="selectValue(day), nextStep()"
            v-for="day in days">
              {{day}} Days
            </li>
          </ul>
        </div>
      </div>
      <div
        class="sequence"
        v-if="qCurrentStep === 2">
        <div class="message show-up">
          <div class="title movement">
            You are <span class="highlight">interested</span> in ...
          </div>
        </div>
        <div class="button-container">
          <ul>
            <li
              class="set-show"
              :key="theme"
              :class="{ active : theme == selectedTheme }"
              v-for="theme in themes"
              @click="selectValue(theme), nextStep()">
              {{theme}}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="sequence"
        v-if="qCurrentStep === 3">
        <div class="message show-up">
          <div class="title movement">
            <span class="highlight">Brilliant!</span> Now I know what you're looking for!
          </div>
        </div>
      </div>
      <Footer
      v-if="!showModal"
      :qCurrentStep="qCurrentStep"
      :qTotalSteps="qTotalSteps"
      :selectedDay="selectedDay"
      :selectedCity="selectedCity"
      :selectedTheme="selectedTheme"
      @modalContoroller="modalContoroller()"
      @backToPrevious="previousStep(qCurrentStep)"
      >
    </Footer>
  </div>
</template>

<script>
import Footer from './Footer'
import HanchaoSignUp from '../../HanchaoSignUp'
export default {
  name: 'QuestionSeauence',
  components: {
    Footer,
    HanchaoSignUp
  },
  props: {
    cities: {
      Type: Array,
      default: []
    }
  },
  data () {
    return {
      qTotalSteps: ['init', 'selectCities', 'selectDays', 'selectThemes', 'summary'],
      qCurrentStep: 0,
      // counter: 0,
      selectedCity: '',
      selectedDay: 0,
      selectedTheme: '',
      days: [1,2,3,4,5],
      showModal: false,
      themes: ['familytrip', 'photospot', 'photography', 'shopping', 'relax', 'landmark', 'nature', 'outdooractivity', 'visit', 'foodmarket', 'honeymoon', 'firsttime', 'localexperience']
    }
  },
  mounted () {
    this.showListButton(0)
  },
  methods: {
    selectValue (val) {
      if (this.qCurrentStep === 0) {
        if (this.selectedCity !== val) {
          this.selectedDay = 0
        }
        this.selectedCity = val
      } else if (this.qCurrentStep === 1) {
        if (this.selectedDay !== val) {
          this.selectedTheme = ''
        }
        this.selectedDay = val
      } else if (this.qCurrentStep === 2) {
        this.selectedTheme = val
      }
    },
    modalContoroller () {
      this.showModal = true
    },
    showListButton (delay) {
      const list = document.getElementsByTagName('li')
      setTimeout(function() {
        for (const item of list) {
          // item.className += ' show-up'
          item.style.transform = 'translateZ(0)'
          item.style.opacity = 1
          item.style.transitionDelay = delay +'s'
          delay += .04
        }
      }, 500)
    },
    previousStep () {
      if (this.qCurrentStep === 0) {
        this.$emit('previousTotalStep')
      } else {
        this.qCurrentStep--
        this.showListButton(0)
      }
    },
    nextStep () {
      if (this.qCurrentStep === 3) {
        this.$emit('changeTotalStep')
        return
      }
      this.showListButton(0)
      this.qCurrentStep++
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/styles/animation.scss';
.sequence {
  padding-bottom: 42px;
  .message {
    padding: 12px 12px 24px;
    opacity: 0;
    .title {
      color: #2D343B;
      font-size: 32px;
      font-weight: 700;
      line-height: 38px;
      text-align: center;
    }
    .highlight {
      color: #0285FF;
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
          transition: transform .4s cubic-bezier(0, .6, .6, 1), opacity .8s cubic-bezier(0, .6, .6, 1);
        }
        &:hover {
          background-color: #0285FF;
          border-color: #0285FF;
          color: #ffffff;
          transition: all .1s ease-in-out;
          transition: transform .4s cubic-bezier(0, .6, .6, 1), opacity .8s cubic-bezier(0, .6, .6, 1);
        }
      }
      .set-show {
        opacity: 0;
        transition: transform .4s cubic-bezier(0, .6, .6, 1), opacity .8s cubic-bezier(0, .6, .6, 1);
        transform: translate3d(0,40px,0);
        transform-origin: center bottom;
      }
    }
  }
}

</style>
