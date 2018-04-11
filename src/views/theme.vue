<template>
  <div class="theme">

    <div class="theme_banner">
      <img src="../assets/img/theme1.png" alt="">
    </div>

    <!--第一个-->
    <div class="theme1">
      <div class="theme1_top">
        <p>"锁"住承诺</p>
        <p>浪漫心形</p>
        <p>用手工珠宝产品打开她的芳心。</p>
      </div>
      <div class="theme1_foot">
        <img src="../assets/img/theme1_1.png" alt="">
      </div>
    </div>

    <div class="theme2">
      <div class="theme2_homeMain">
        <div class="theme2_left angle" @click="theme2_left">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="theme2_right angle" @click="theme2_right">
          <i class="fa fa-angle-right"></i>
        </div>

        <div class="theme2_home">
          <ul :style="{'margin-left': ulLeft}">
            <li>
              <img src="../assets/img/theme1_4.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme1_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme1_3.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme1_4.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme1_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
          </ul>
        </div>
        <button class="search_btn">搜索目录</button>
      </div>
    </div>

    <div class="theme3">
      <div class="theme3_home">
        <div class="theme3_home1">
          <img src="../assets/img/theme1_5.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
        <div class="clearfix"></div>
        <div class="theme3_home2">
          <img src="../assets/img/theme1_6.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
      </div>
    </div>

    <!--第二个-->
    <div class="theme1">
      <div class="theme1_top">
        <p>"锁"住承诺</p>
        <p>浪漫心形</p>
        <p>用手工珠宝产品打开她的芳心。</p>
      </div>
      <div class="theme1_foot">
        <img src="../assets/img/theme2_1.png" alt="">
      </div>
    </div>

    <div class="theme2">
      <div class="theme2_homeMain">
        <div class="theme2_left angle" @click="theme2_left">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="theme2_right angle" @click="theme2_right">
          <i class="fa fa-angle-right"></i>
        </div>

        <div class="theme2_home">
          <ul :style="{'margin-left': ulLeft}">
            <li>
              <img src="../assets/img/theme2_4.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme2_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme2_3.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme2_4.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme2_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
          </ul>
        </div>
        <button class="search_btn">搜索目录</button>
      </div>
    </div>

    <div class="theme3">
      <div class="theme3_home">
        <div class="theme3_home1">
          <img src="../assets/img/theme2_5.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
        <div class="clearfix"></div>
        <div class="theme3_home2">
          <img src="../assets/img/theme2_6.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
      </div>
    </div>

    <!--第三个-->
    <div class="theme1">
      <div class="theme1_top">
        <p>"锁"住承诺</p>
        <p>浪漫心形</p>
        <p>用手工珠宝产品打开她的芳心。</p>
      </div>
      <div class="theme1_foot">
        <img src="../assets/img/theme3_1.png" alt="">
      </div>
    </div>

    <div class="theme2">
      <div class="theme2_homeMain">
        <div class="theme2_left angle" @click="theme2_left">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="theme2_right angle" @click="theme2_right">
          <i class="fa fa-angle-right"></i>
        </div>

        <div class="theme2_home">
          <ul :style="{'margin-left': ulLeft}">
            <li>
              <img src="../assets/img/theme3_4.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme3_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme3_3.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme3_4.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme3_1.png" alt="">
              <p>798.00 CNY</p>
            </li>
          </ul>
        </div>
        <button class="search_btn">搜索目录</button>
      </div>
    </div>

    <div class="theme3">
      <div class="theme3_home">
        <div class="theme3_home1">
          <img src="../assets/img/theme3_5.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
        <div class="clearfix"></div>
        <div class="theme3_home2">
          <img src="../assets/img/theme3_6.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
      </div>
    </div>

    <!--第四个-->
    <div class="theme1">
      <div class="theme1_top">
        <p>"锁"住承诺</p>
        <p>浪漫心形</p>
        <p>用手工珠宝产品打开她的芳心。</p>
      </div>
      <div class="theme1_foot">
        <img src="../assets/img/theme4_1.png" alt="">
      </div>
    </div>

    <div class="theme2">
      <div class="theme2_homeMain">
        <div class="theme2_left angle" @click="theme2_left">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="theme2_right angle" @click="theme2_right">
          <i class="fa fa-angle-right"></i>
        </div>

        <div class="theme2_home">
          <ul :style="{'margin-left': ulLeft}">
            <li>
              <img src="../assets/img/theme4_4.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme4_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme4_3.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme4_4.png" alt="">
              <p>98.00 CNY</p>
            </li>
            <li>
              <img src="../assets/img/theme4_2.png" alt="">
              <p>798.00 CNY</p>
            </li>
          </ul>
        </div>
        <button class="search_btn">搜索目录</button>
      </div>
    </div>

    <div class="theme3">
      <div class="theme3_home">
        <div class="theme3_home1">
          <img src="../assets/img/theme4_5.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
        <div class="clearfix"></div>
        <div class="theme3_home2">
          <img src="../assets/img/theme4_6.png" alt="">
          <div class="theme3_btn">立即选购</div>
        </div>
      </div>
    </div>

    <div class="theme4">

    </div>

  </div>
</template>

<script>
export default {
  name: "theme",
  components: {},
  data() {
    return {
      ulLeft: -170 + "px",
      ulLeftIndex: 1
    };
  },
  methods: {
    theme2_left() {
      if (this.ulLeftIndex > 0) {
        this.ulLeftIndex--;
      }
      this.ulLeft = -170 * this.ulLeftIndex + "px";
    },
    theme2_right() {
      if (this.ulLeftIndex < 2) {
        this.ulLeftIndex++;
      }
      this.ulLeft = -170 * this.ulLeftIndex + "px";
    }
  }
};
</script>

<style lang="scss">
.theme {
  .theme_banner {
    img {
      width: 100%;
    }
  }

  .theme1 {
    text-align: center;
    background: url("../assets/img/theme_bg.png") no-repeat;
    background-position: top left;
    .theme1_top {
      margin: 30px 0;
      p {
        &:nth-child(1) {
          font-size: 12px;
        }
        &:nth-child(2) {
          font-size: 24px;
          margin: 10px 0;
        }
        &:nth-child(3) {
        }
      }
    }
    .theme1_foot {
      margin-top: 40px;
    }
  }

  .theme2 {
    padding: 30px 0;
    background-color: #fcf2f1;
    .theme2_homeMain {
      width: 860px;
      margin: auto;
      position: relative;
      .angle {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #ccc;
        text-align: center;
        background-color: #fff;
        position: absolute;
        z-index: 1;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        i {
          font-size: 24px;
        }
      }
      .theme2_left {
        left: -25px;
        top: 95px;
        i {
        }
      }
      .theme2_right {
        right: -25px;
        top: 95px;
        i {
        }
      }
      .theme2_home {
        width: 860px;
        margin: auto;
        position: relative;
        overflow: hidden;
        ul {
          width: 1250px;
          transition: all 1s; //margin-left:-170px;
          li {
            width: 240px;
            height: 240px;
            border: 5px solid #fcf2f1;
            background-color: #fff;
            text-align: center;
            float: left;
            img {
              margin-top: 50px;
              width: 130px;
            }
            p {
              margin-top: 15px;
            }
          }
        }
      }
      .search_btn {
        width: 240px;
        height: 45px;
        display: block;
        margin: 30px auto;
        border: 1px solid #000;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }

  .theme3 {
    padding: 30px 0;
    background-color: #fcf2f1;
    .theme3_home {
      width: 1024px;
      margin: auto;
      position: relative;
      padding-bottom: 80px;
      .theme3_btn {
        width: 180px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        text-align: center;
        position: absolute;
      }
      .theme3_home1 {
        position: relative;
        img {
          width: 650px;
          float: right;
        }
        div {
          right: 80px;
          top: 500px;
        }
      }
      .theme3_home2 {
        position: absolute;
        top: 80px;
        left: 0;
        img {
          width: 480px;
        }
        div {
          left: 80px;
          top: 480px;
        }
      }
    }
  }
}
</style>
