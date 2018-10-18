<template>
 <transition name="fade">
  <div class="sign-up">
      <div class="page-header">
          <!-- <div class="close-button"> -->
            <!-- <router-link to="/" tag="button" class="close-button">Close</router-link> -->
            <div class="close-button" @click="close">
                <img src="../../static/assets/btn-close.svg" alt="close">
            </div>
          <!-- </div> -->
          <div class="title">Sign Up</div>
      </div>
      <div class="contents-wrapper">
            <div class="input-wrapper">
                <div class="label">
                    Name
                </div>
                <input type="text" placeholder="Type your name">
            </div>
            <div class="input-wrapper">
                <div class="label">
                    Gender
                </div>
                <div class="button-wrapper">
                    <div class="button-style" :class="{'active' : selectedGender === 'Male'}" @click="selectedGender = 'Male'">
                        Male
                    </div>
                    <div class="button-style" :class="{'active' : selectedGender === 'Female'}" @click="selectedGender = 'Female'">
                        Female
                    </div>
                </div>
            </div>
             <div class="input-wrapper">
                <div class="label">
                    Region
                </div>
                <input type="text" placeholder="Type your region">
            </div>
            <div class="input-wrapper">
                <div class="label">
                    Email
                </div>
                <input type="email" placeholder="Type your email address">
            </div>
      </div>
      <div class="footer-section">
        <div class="footer-button">
            Done
        </div>
      </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      selectedGender: 'Male'
    }
  },
  methods: {
      close () {
          this.$emit('close')
      }
  }
}
</script>

<style lang="scss" scoped>
* {
    font-family: 'Roboto';
}
.sign-up {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999999999999999999999999;
    padding: 16px;
    background: #ffffff;
    .page-header {
        position: fixed;
        display: flex;
        justify-content: center;
        background-color: #ffffff;
        top: 0;
        left: 0;
        width:100%;
        height: 56px;
        .close-button {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #0285FF;
            border: none;
            right: 12px;
            width: 42px;
            height: 56px;
        }
        .title {
            display: flex;

            justify-content: center;
            align-items: center;
        }
    }
    .contents-wrapper {
        margin-top: 56px;
        .input-wrapper {
            margin-bottom: 40px;
            // .label {
            //     // height:14px;
            //     font-size:16px;
            //     font-weight:400;
            //     // text-align: center;
            //     color: #0285FF;
            //     margin-bottom: 8px;
            // }
            .label {
                width:57px;
                height:14px;
                font-size:14px;
                font-weight:400;
                color:rgba(45,52,59,1);
                margin-bottom: 8px;
            }
            input, select {
                width: 100%;
                height:40px;
                padding: 12px;
                font-size: 14px;
                border: 1px solid rgba(222,222,222,1);
                background-color: #fafafa;
                border-radius: 2px;
            }
            .select-wrapper {
                position: relative;
                select {
                    padding: 0 8px;
                }
                .down-arrow {
                    position: absolute;
                    right: 2px;
                    top: 2px;
                    pointer-events: none;
                }
            }
            input::placeholder {
                opacity:.4;
            }
            .button-wrapper {
                display: flex;
                .button-style {
                    cursor: pointer;
                    display: flex;
                    flex-grow: 1;
                    text-align: center;
                    max-width: 116px;
                    margin-right: 12px;
                    font-size: 14px;
                    border: 1px solid #ededed;
                    height: 44px;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                }
                .active {
                    background-color: #0285FF;
                    border-color: #0285FF;
                    color: #ffffff;
                }
            }
        }
    }
    .footer-section {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        .footer-button {
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 43px;
            width: 100%;
            background-color: #2D343B;
            border-radius: 20px 4px 20px 20px;
            color: #ffffff;
        }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: all .4s cubic-bezier(.4,0,0,1);
  transform: translateY(0);
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: all .4s cubic-bezier(.4,0,0,1);
  opacity: 0;
  transform: translateY(10%);
}
</style>