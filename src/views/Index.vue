<template>
  <div class="index">
    <div class="bg">
      <!-- 头部 navbar-part -->
      <div class="navbar-part">
        <div class="container">
          <img src="../assets/index/logo.png" alt="湖州师范学院" class="logo" />
          <img src="../assets/index/xiaoxun.png" alt="" class="xiaoxun" />
          <div class="english">
            <router-link to="#">English</router-link>
          </div>
        </div>
      </div>
      <!-- 导航栏 nav-part -->
      <div class="nav-part">
        <div class="container">
          <ul class="nav">
            <li class="nav-item">
              <router-link to="#" class="nav-link">网站首页</router-link>
            </li>
            <li class="nav-item" id="nav-item-2">
              <router-link to="#" class="nav-link">校情总览</router-link>
              <!-- 下拉框 -->
              <div class="dropdown" id="dropdown1">
                <!-- 内容 -->
                <div class="content">
                  <dl>
                    <dd v-for="i in 9" :key="i">
                      <router-link to="#">学校概况</router-link>
                    </dd>
                  </dl>
                </div>
                <!-- 图片 -->
                <div class="menu-img">
                  <img src="/img/menu-img.jpg" alt="学校图片" />
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">人才培养</router-link>
              <!-- 下拉框 -->
              <div class="dropdown" id="dropdown1">
                <!-- 内容 -->
                <div class="content">
                  <dl>
                    <dd v-for="i in 4" :key="i">
                      <router-link to="#">本专科教育</router-link>
                    </dd>
                  </dl>
                </div>
                <!-- 图片 -->
                <div class="menu-img">
                  <img src="/img/menu-img.jpg" alt="学校图片" />
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">科学研究</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">师资队伍</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">招生就业</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">合作交流</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">文化生活</router-link>
            </li>
            <li class="nav-item">
              <router-link to="#" class="nav-link">信息服务</router-link>
              <!-- 下拉框 -->
              <div class="dropdown" id="dropdown1">
                <!-- 内容 -->
                <div class="content">
                  <dl>
                    <dd v-for="i in 4" :key="i">
                      <router-link to="#">本专科教育</router-link>
                    </dd>
                  </dl>
                </div>
                <!-- 图片 -->
                <div class="menu-img">
                  <img src="/img/menu-img.jpg" alt="学校图片" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 轮播图 swipe-part-->
      <div class="swipe-part">
        <div class="container">
          <ul>
            <li v-for="i in 4" :key="i">
              <router-link to="#">
                <img :src="`/img/swipe/${i}.jpg`" alt="" />
              </router-link>
            </li>
          </ul>
          <div class="pointer">
            <router-link to="#" v-for="i in 5" :key="i"></router-link>
          </div>
          <div class="prev-next">
            <router-link class="prev" to="#"></router-link>
            <router-link class="next" to="#"></router-link>
          </div>
          <!-- <el-carousel height="451px" indicator-position="right">
            <el-carousel-item v-for="i in 4" :key="i">
              <img :src="`/img/swipe/${i}.jpg`" alt="">
            </el-carousel-item>
          </el-carousel> -->
        </div>
      </div>
      <!-- 学校服务 server-part -->
      <div class="server-part">
        <div class="container">
          <!-- 服务详情 -->
          <div class="server-content">
            <router-link to="#" v-for="i in 8" :key="i" class="server-item">
              <img :src="require(`../assets/index/${i}.png`)" alt="" />
              <p>{{ server[i - 1] }}</p>
            </router-link>
          </div>
          <!-- 搜索框 -->
          <div class="search">
            <input type="search" placeholder="请输入关键字" name="" id="" />
            <button>搜索</button>
          </div>
        </div>
      </div>
      <!-- 新闻部分 news-part -->
      <div class="news-part">
        <div class="container">
          <!-- 新闻头部 -->
          <div class="news-header">
            <div>
              <h1>湖师新闻</h1>
              <p>News</p>
            </div>
            <div>
              <router-link class="right" to="#">新闻网</router-link>
            </div>
          </div>
          <!-- 新闻内容 -->
          <div class="news-content">
            <!-- 左边的轮播图 -->
            <div class="left-swipe"></div>
            <!-- 右边的新闻详情 -->
            <div class="right-news">
              <div class="main-news">
                <div>
                  <router-link to="#">
                    <h2>
                    省委第十巡视组巡视湖州师范学院党委工作动员会议召开（图）
                    </h2>
                  </router-link>
                  <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    根据省委统一部署，2021年9月13日下午，省委第十巡视组巡视湖州师范学院党委工作动员会议召开。会前，省委第十巡视组组长夏建成主持召开与院党委书记金佩华、院长蒋云良的见面沟通会，传达了省委书记专题会议的有关精神，通报了有关工作安排。会上，夏建成作了动员讲话，对做好巡视工作提出要求。金佩华主持会议并作表态发言。
                    <!-- <router-link to="#">[详情]</router-link> -->
                  </p>
                </div>
                <!-- 日期 -->
                <div>
                  <div class="day">13</div>
                  <div class="month">09月</div>
                  <div class="year">2021</div>
                </div>
              </div>
              <ul class="news">
                <li v-for="i in 6" :key="i">
                  <p>{{news[i-1].title}}</p>
                  <p>{{news[i-1].date}}</p>
                </li>
              </ul>
              <div>
                <img src="/img/news/1.jpg" alt="" />
                <img src="/img/news/2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热点部分 hotspot-part -->
      <div class="hotspot-part"></div>
      <!-- 学校介绍 introduce-part -->
      <div class="introduce-part"></div>
      <!-- 网站介绍 web-part -->
      <div class="web-part"></div>
      <!-- 页尾 bottom-part -->
      <div class="bottom-part"></div>
    </div>
  </div>
</template>

// 尝试用js绑定事件，使得点击nav的校情总览时，展示下拉框
// document.getElementById('#nav-item-2').addEventListener('click',function(){
//   console.log('点击');
//   document.getElementById('#dropdown1').display="block";
// })
// export default {
//   data() {
//     return {
//       server:['智慧校园','VPN登录','图书馆','电子邮件','招聘信息','信息公开','领导信箱','最多跑一次']
//     }
//   },
// }


<script>
export default {
  data() {
    return {
      server: [
        "智慧校园",
        "VPN登录",
        "图书馆",
        "电子邮件",
        "招聘信息",
        "信息公开",
        "领导信箱",
        "最多跑一次",
      ],
      news:[
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
        {title:'我校召开党史学习教育专题组织生活会（图）',date:'2021-09-12'},
      ]
    };
  },
};
</script>
<style scoped lang="scss">
a{
  color:#333333;
}
.index {
  width: 100%;
  height: 100%;
  .bg {
    width: 100vw;
    height: 100vh;
    background-image: url("/img/bg.png");
    background-size: cover;
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.navbar-part {
  .container {
    // background-color: red;
    padding: 15px;
  }
  img {
    height: 80px;
  }
  .logo {
    float: left;
  }
  .xiaoxun {
    position: relative;
    left: 130px;
  }
  .english {
    float: right;
    a {
      color: black;
      font-size: 13px;
    }
  }
}
.nav-part {
  height: 55px;
  background-color: #bf0000;
  .nav {
    display: flex;
    line-height: 55px;
    // justify-content: space-around;
    // padding: 0 40px;
    .nav-item {
      padding: 0 30px;
      position: relative;
      a {
        color: white;
      }
      &:hover {
        background-color: white;
        a {
          color: #bf0000;
        }
      }
      // 第一个下拉框
      .dropdown {
        position: absolute;
        left: 0px;
        display: none;
        background-color: white;
        width: 830px;
        height: 135px;
        padding: 20px 30px 20px 20px;
        .content {
          // background-color: blue;
          width: 500px;
          float: left;
          border-right: 1px solid #ddd;
          dl {
            display: block;
            dd {
              display: block;
              width: 130px;
              height: 36px;
              overflow: hidden;
              text-align: left;
              float: left;
              border-bottom: 1px solid #ddd;
              // padding: 10px 0 0 10px;
              margin-right: 35px;
              a {
                display: block;
                line-height: 36px;
                font-size: 14px;
                padding-left: 3px;
                color: black;
              }
            }
          }
        }
        .menu-img {
          img {
            padding-left: 25px;
          }
        }
      }
    }
  }
}
// 尝试用hover绑定事件，使得点击nav的校情总览时，展示下拉框
.nav-item:hover #dropdown1 {
  display: block;
}
.swipe-part {
  // 让轮播的图片落在一起
  .container {
    position: relative;
    height: 450px;
    li {
      position: absolute;
    }
    .pointer {
      position: absolute;
      bottom: 10px;
      right: 10px;
      a {
        float: left;
        width: 25px;
        height: 6px;
        background-color: #919191;
        margin-left: 4px;
      }
      a:hover {
        background-color: #bf0000;
      }
    }
    .prev-next {
      a {
        // background-color: red;
        width: 45px;
        height: 99px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        background-image: url(../assets/index/swipelogo.png);
        &:hover {
          opacity: 1;
        }
      }
      .prev {
        position: absolute;
        left: 0;
        background-position: 90px 0;
        opacity: 0.6;
      }
      .next {
        position: absolute;
        right: 0;
        background-position: 45px;
        opacity: 0.6;
      }
    }
  }
}

.server-part {
  .container {
    height: 102px;
    display: flex;
    justify-content: space-between;
    background-color: #eeeeee;
    a {
      color: black;
    }
    .server-content {
      display: flex;
      .server-item {
        padding: 13px 3px;
        img {
          width: 40px;
          height: 40px;
          margin: 2px 25px;
        }
      }
      :last-child {
        p {
          color: red;
        }
      }
    }
    .search {
      // width: 410px;
      // height: 102px;
      padding: 28px 23px;
      border-left: 1px solid #d1d1d1;
      input {
        width: 240px;
        height: 46px;
        font-size: 16px;
        padding-left: 10px;
      }
      button {
        width: 100px;
        height: 46px;
        background-color: #bf0000;
        color: white;
        font-size: 16px;
        margin-left: 13px;
      }
    }
  }
}
.news-part {
  .news-header {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #bf0000;
    // 交叉轴基线对齐
    align-items: baseline;
    position: relative;
    :first-child {
      display: flex;
      // 交叉轴基线对齐
      align-items: baseline;
      h1 {
        font-size: 18px;
        color: #333333;
        font-weight: bold;
        margin-right: 10px;
      }
      p {
        font-size: 14px;
        color: #808080;
        font-style: italic;
      }
    }
    .right {
      color: #bf0000;
      position: absolute;
      right: 0;
      bottom: 15px;
    }
  }
  .news-content{
    padding: 20px 0;
    .left-swipe{
      width: 50%;
      float: left;
    }
    .right-news{
      width: 50%;
      float: right;
      .main-news{
        height: 84px;
        padding-bottom: 10px;
        border-bottom: 1px #dfdfdf dotted;
        &>:nth-child(1){
          float: left;
          width: 500px;
          h2{
            font-size: 16px;
            text-align: left;
            padding-bottom: 8px;
          }
          p{
            font-size: 12px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            /* 多⾏省略，兼容性不佳慎⽤ */
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        &>:nth-child(2){
          float: right;
          width: 72px;
          height: 84px;
          text-align: center;
          background-color: #e6e6e6;
          div{
            height: 28px;
            line-height: 28px;
            color: #333333;
            border-bottom: 1px #cccccc dotted;
          }
          &>div:nth-child(1){
            font-weight: bold;
          }
          &>div:nth-child(3){
            color: white;
            background-color: #bf0000;
            border-bottom: 0;
          }
        }
      }
      .news{
        li{
          height: 39px;
          line-height: 39px;
          :nth-child(1){
            float: left;
          }
          :nth-child(2){
            float: right;
          }
        }
      }
    }
  }
}
</style>
