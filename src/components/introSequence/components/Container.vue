<template>
  <div>
    <div class="avatar-wrapper show-up"
         :class="{'translate-position':totalStep > 0}">
      <img src="../avatar/logo.svg" alt="avatar">
    </div>

    <!-- IntroSequence -->
    <IntroSequence
      @changeTotalStep="changeTotalStep('Next')"
      v-if="totalStep === 0">
    </IntroSequence>

    <!-- QuestionSequence --> 
    <QuestionSequence
      v-if="totalStep === 1"
      :cities="cities"
      @previousTotalStep="changeTotalStep('Previous')"
      @changeTotalStep="changeTotalStep('Next')"
    ></QuestionSequence>
  </div>
</template>

<script>
import IntroSequence from './IntroSequence'
import QuestionSequence from './QuestionSequence'
import SignUp from '../../SignUp'
import HanchaoSignUp from '../../HanchaoSignUp'

export default {
  name: 'hanchaoSignUp',
  components: {
    IntroSequence,
    QuestionSequence,
    SignUp,
    HanchaoSignUp
  },
  data () {
    return {
      totalStep: 0,
      cities:[
        { 
          cityName: 'Seoul',
          themes: ['seoulTheme1','seoulTheme2','seoulTheme3','seoulTheme4','seoulTheme5',] 
        },
        {
          cityName: 'Jeju',
          themes: ['jejuTheme1', 'jejuTheme2', 'jejuTheme3', 'jejuTheme4', 'jejuTheme5', 'jejuTheme6'] 
        },
        { 
          cityName: 'Busan',
          themes: ['busanTheme1', 'busanTheme2', 'busanTheme3', 'busanTheme4'] 
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    changeTotalStep (value) {
      if (value === 'Next') {
        this.totalStep++
      } else if (value === 'Previous'){
        this.totalStep--
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'src/styles/animation.scss';

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
  transition: all .5s cubic-bezier(0, .6, .6, 1.6);
  img {
    transition: all .5s cubic-bezier(0, .6, .6, 1.6);
    width: 34px;
    height: 34px;
  }
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
