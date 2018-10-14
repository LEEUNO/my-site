<template>
<div id="app">
  <router-view></router-view>
  <!-- <nav>
    <div class="logo">
      <router-link :to="goHome">PORTFOLIO</router-link>
    </div>
     <ul class="menu-list">
        <li
          v-for="(menu, index) in menuList"
          :key="index">
          <router-link :to="menu">{{menu}}</router-link>
        </li>
      </ul>
    <div class="user-info">
      <div class="name">Yoonho</div>
      <div class="profile"></div>
    </div>
  </nav>

  
  <section>
    <div class="side-menu">
      <ul>
        <li
          v-for="(menu, index) in menuList"
          :key="index">
          <router-link :to="menu">{{menu}}</router-link>
        </li>
      </ul>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
  </section> -->
</div>
</template>

<script>
import router from './router'

export default {
  name: 'app',
  data() {
    return {
      goHome: '/',
      menuList: ['Works', 'About', 'Contact']
    }
  }
}
</script>

<style lang="scss">
@import './styles/initStyle.scss';
// @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
* {
  box-sizing: border-box;
  font-family: 'Roboto';
  appearance: none;
  -webkit-appearance: none;
}
#app {
  height: 100%;
  width: 100%;
	font-family: 'Roboto';
}
html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
nav {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 36px;
    width: 100%;
    height: 62px;
    border-bottom: 1px solid #ededed;
    background-color: #ffffff;
    z-index: 1000;
    .menu-list {
      width: 400px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      li {
          margin-right: 20px;
      }
    }
    .logo {
        /* display: inline-block; */
        display: flex;
        font-size: 24px;
        font-weight: 700;
        color: #3150ff;
    }
    .user-info {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .user-info .profile {
        width: 38px;
        height: 38px;
        background-color: #eeeeee;
        border-radius: 50%;
    }
    .user-info .name {
        margin-right: 16px;
        font-size: 16px;
        color: #3150ff;
    }
}
section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 62px;
    width: 100%;
    height: 100%;
    .side-menu {
        display: flex;
        min-width: 200px;
        height: 100%;
        border-right: 1px solid #ededed;
        ul {
            margin-left: 65px;
            margin-top: 36px;
            li {
                margin-bottom: 28px;
                color: #3150ff;
            }
            li:hover {
                opacity: 0.5;
            }
            li.selected {
                font-weight: 700;
            }
        }
    }
    .contents {
      width: 100%;
      overflow: hidden;
    }
}
footer {
  position: fixed;
  bottom: 20px;
  left: 30px;
  .icon-wrapper {
    .sns-icon {
      margin-right: 12px;
    }
  }
}
</style>
