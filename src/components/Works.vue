<template>
<div class="works-comp">
  <div class="filters">
    <ul>
      <li
        v-for="(filter, index) in filterList"
        :class=" {'isSelected': selectedFilter === filter}"
        @click="selectFilter($event)"
        :key="index">
        {{filter}}
      </li>
    </ul>
  </div>
  <div class="list-item-wrapper">
    <div class="list-item"
        :class="{'selected' : selectedItem === index}"
        v-for="(item, index) in postItmes"
        v-if="filterShow(item.category)"
        @click="selectedItem = index"
        :key="index">
      <div class="image" :style="'background-image: url(' + item.coverImageUrl +')'">
        <div class="hover-back" :style="'background-color:'+ item.pointColor"></div>
        <div class="discription">
          <div class="checked-item-icon" v-if="selectedItem === index"></div>
          <p class="category">{{item.category}}</p>
        </div>
      </div>
      <div class="badge">{{item.time}}</div>
      <p class="title">{{item.title}}</p>
      <!-- <p class="title"><span class="index">{{index + 1}} </span>{{item.title}}</p> -->
    </div>
  </div>
  <div class="detail-view">
    <div class="image-wrapper" v-for="(detailImage, index) in postItmes[selectedItem].detailImages" :key="index">
      <img :src="detailImage" alt="#">
    </div>  
  </div>
</div>
</template>

<script>
export default {
  name: 'Works',
  data() {
    return {
      selectedFilter: 'All',
      selectedItem: 0,
      filterList: ['All', 'UI UX', 'Branding', 'Graphic'],
      postItmes: [{
          pointColor: '#00C63D',
          time: 2016,
          title: '네이버 인테리어 포스트 디자인 설계 (가상)',
          coverImageUrl: 'https://i.pinimg.com/564x/62/48/e6/6248e6e1313d8e822932c7438f213744.jpg',
          category: 'UI UX',
          detailImages: [
            'https://notefolio.net/data/img/cc/cd/cccd817d9a6843a46b58c47166b51d9caf2323879535da93978cc63147fc3133_v1.jpg'
            ]
        },
        {
          pointColor: '#3150FF',
          time: 2012,
          title: 'A SHOWER BOOTH IN TRUCK',
          coverImageUrl: 'https://i.pinimg.com/564x/d9/a3/74/d9a374af35b1c22322f6cb50bc9a3245.jpg',
          category: 'UI UX',
          detailImages: ['https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/cbbac353807771.5a61d076847b7.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/2800/f5262e53807771.5948eb23e1756.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/a6fd5853807771.5a61d07684441.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/e5852053807771.5a61d076833c6.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/0f0c5d53807771.5a61d07683956.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ad2d5a53807771.5a61d076851f8.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/5e407e53807771.5a61d07684cf8.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/b1df0353807771.5a61d07683c6a.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/ab036e53807771.5a61d07685a0b.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4621a053807771.5a61d076856ff.gif',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/db841b53807771.5a61d07682972.gif',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8c360653807771.5a61d07682e0a.gif',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400/3ed33453807771.5a61d07682392.gif'

            ]
        },
        {
          pointColor: '#806289',
          time: 2018,
          title: 'DESERT NIGHT',
          coverImageUrl: 'https://i.pinimg.com/564x/44/9b/dc/449bdcc1c0283126ed2c868044c26fa7.jpg',
          category: 'Graphic',
          detailImages: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400/1940b535047037.56f12587aa601.png']
        },
        {
          pointColor: '#F6AD32',
          time: 2018,
          title: 'Jukebox Summer Sale',
          coverImageUrl: 'https://i.pinimg.com/564x/5c/a6/d1/5ca6d1c008b29c02e341a6c725152e01.jpg',
          category: 'Branding',
          detailImages: ['https://i.pinimg.com/564x/5c/a6/d1/5ca6d1c008b29c02e341a6c725152e01.jpg',]
        },

      ]
    }
  },
  methods: {
    selectFilter (event) {
      const value = event.target.innerText
      this.selectedFilter = value
    },
    filterShow (itemCategory) {
      if (this.selectedFilter === 'All') {
        return true
      } else if (this.selectedFilter === itemCategory) {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
.filters {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: transparent;
  padding: 20px;
  ul {
    display: flex;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    li {
      cursor: pointer;
      margin-right: 20px;
      border: 1px solid #ededed;
      padding: 10px 20px;
      border-radius: 20px;
    }   
    .isSelected {
      background-color: #333;
      color: #fff; 
    }
  }
}
.works-comp {
    position: relative;
    display: flex;
    height: 100%;
    max-width: calc(100vw - 200);
    padding-top: 90px;
    .detail-view {
      display: flex;
      flex-direction: column;
      flex-grow: 8;
      align-content: center;
      // box-sizing: border-box;
      width: 100%;
      overflow-y: scroll;
      height: 100%;
      padding: 20px 20px 200px;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-top: -3px;
      }
    }
    .list-item-wrapper {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: flex-start;
      flex-grow: 4;
      padding: 20px 40px 40px;
      min-width: 340px;
      height: 100%;
      overflow-y: scroll;
      .list-item {
        display: inline-block;
        cursor: pointer;
        margin: 0 auto;
        width: 245px;
        margin-bottom: 42px;
        transition: transform .1s ease-in-out;
        &:last-child {
          padding-bottom: 200px;
        }
      }
    }
    .image {
      position: relative;
      width: 245px;
      height: 245px;
      border-radius: 52px;
      background-color: #f7f7f7;
      margin-bottom: 16px;
      box-shadow: 0px 0px 0px rgba(0,0,0,0);
      transition: all .2s ease-in-out;
      background-size: cover;
      overflow: hidden;
      .checked-item-icon {
        display: flex;
        align-content: center;
        justify-content: center;
        width: 55px;
        height: 55px;
        background-image: url('/static/assets/checked.svg');
      }
      .hover-back {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        opacity: 0;
        transition: all .2s ease-in-out;
      }
      .discription {
        color: #ededed;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 400;
        position: absolute;
        text-align: center;
        top: 0;
        p {
          transform: translateY(20px);
          opacity: 0;
          transition: all .2s ease-in-out;
          background-color: #333;
          color: #fff;
          padding: 10px 20px;
          border-radius: 24px;
        }
      }
    }
    .badge {
      display: flex;
      transition: all .2s ease-in-out;
      justify-content: center;
      max-width: 52px;
      padding: 8px 10px 7px;
      border-radius: 16px;
      font-size: 12px;
      background-color: #333;
      color: #ffffff;
      margin-bottom: 8px;
      margin: 0 auto;
    }
    .title {
      margin-top: 12px;
      font-size: 16px;
      color: #333;
      text-align: center;
    }
    
    .list-item:hover {
      .image {
        transition: all .2s ease-in-out;
        .hover-back {
          opacity: .8;
          transition: all .2s ease-in-out;
        }
        .discription {
          p {
            transform: translateY(0);
            opacity: 1;
            transition: all .2s ease-in-out;
          }
        }
      }
      // .badge {
      //   transition: all .2s ease-in-out;
      //   background-color: #ededed;
      //   color: #555;
      // }
      .title {
        color: #555;
      }
    }
    .selected {
      .image {
        transform: scale(1.06);
        box-shadow: 0 30px 40px rgba(0,0,0,0.3);
        transition: all .3s ease-in-out;
        .hover-back {
          background-color: #3150ff;
          opacity: .8;
          transition: all .3s ease-in-out;
        }
        .discription {
          p {
            display: none !important;
          }
        }
      }
      .badge {
        background-color: #ededed !important;
        color: #ffffff !important;
      }
      .title {
        color: #dedede !important;
      }
    }
}
@media screen and (max-width: 750px) {
  
}

</style>
