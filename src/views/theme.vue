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
      <div class="theme4_tip" @click="theme4Hide = !theme4Hide">
        <p>显示所有</p>
        <i class="fa fa-angle-down"></i>
      </div>

      <transition name="animate">
        <div v-if="theme4Hide">
          <div class="theme4_more1">
            <div class="theme4_more1Main">
              <div class="theme4_more1_content">
                <img src="../assets/img/theme5_1.png" alt="">
                <p>指引方向</p>
                <p>巧妙暗示赠礼者，获赠中意的礼物</p>
                <div>发送暗示</div>
              </div>
              <div class="theme4_more1_content">
                <img src="../assets/img/theme5_2.png" alt="">
                <p>爱的礼物</p>
                <p>使用珠宝礼物搜索器找到适合她的情人节礼物。</p>
                <div>寻找礼物</div>
              </div>
            </div>
          </div>

          <div class="theme4_more2">
            <div class="theme2_homeMain">
              <div class="theme2_left angle" @click="theme2_left1">
                <i class="fa fa-angle-left"></i>
              </div>
              <div class="theme2_right angle" @click="theme2_right1">
                <i class="fa fa-angle-right"></i>
              </div>

              <div class="theme2_home">
                <ul :style="{'margin-left': ulLeft1}">
                  <li>
                    <img src="../assets/img/theme5_3.png" alt="">
                    <p>点点滴滴</p>
                    <p>米妮的经典波点和蝴蝶结套装，奠定本季饰品基调</p>
                    <div>探索系列</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_4.png" alt="">
                    <p>为她选择完美情人节礼物</p>
                    <p>用惊喜礼物套装让她笑颜如花。</p>
                    <div>探索礼物套装</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_5.png" alt="">
                    <p>初见之慕</p>
                    <p>用PANDORA Rose系列珠宝为自己的造型增添一抹浪漫粉色</p>
                    <div>探索系列</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_3.png" alt="">
                    <p>点点滴滴</p>
                    <p>米妮的经典波点和蝴蝶结套装，奠定本季饰品基调</p>
                    <div>探索系列</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_4.png" alt="">
                    <p>为她选择完美情人节礼物</p>
                    <p>用惊喜礼物套装让她笑颜如花。</p>
                    <div>探索礼物套装</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_5.png" alt="">
                    <p>初见之慕</p>
                    <p>用PANDORA Rose系列珠宝为自己的造型增添一抹浪漫粉色</p>
                    <div>探索系列</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_3.png" alt="">
                    <p>点点滴滴</p>
                    <p>米妮的经典波点和蝴蝶结套装，奠定本季饰品基调</p>
                    <div>探索系列</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_4.png" alt="">
                    <p>为她选择完美情人节礼物</p>
                    <p>用惊喜礼物套装让她笑颜如花。</p>
                    <div>探索礼物套装</div>
                  </li>
                  <li>
                    <img src="../assets/img/theme5_5.png" alt="">
                    <p>初见之慕</p>
                    <p>用PANDORA Rose系列珠宝为自己的造型增添一抹浪漫粉色</p>
                    <div>探索系列</div>
                  </li>
                </ul>
                <div class="clearfix"></div>
                <div class="animate_nav">
                  <div :class="{active: ulLeftIndex1 === 0}"></div>
                  <div :class="{active: ulLeftIndex1 === 1}"></div>
                  <div :class="{active: ulLeftIndex1 === 2}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>



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
      ulLeftIndex: 1,
      ulLeft1: 0,
      ulLeftIndex1: 0,
      theme4Hide: false
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
    },
    theme2_left1() {
      if (this.ulLeftIndex1 > 0) {
        this.ulLeftIndex1--;
      }else{
        this.ulLeftIndex1 = 2;
      }
      this.ulLeft1 = -200 * 5 * this.ulLeftIndex1 + "px";
    },
    theme2_right1() {
      if (this.ulLeftIndex1 < 2) {
        this.ulLeftIndex1++;
      }else{
        this.ulLeftIndex1 = 0;
      }
      this.ulLeft1 = -200 * 5 * this.ulLeftIndex1 + "px";
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

  .theme4{ background-color:#fff;
    .theme4_tip{ height:70px; text-align:center; font-weight:bold; cursor:pointer;
      p{ padding-top:20px;}
      i{ font-size:26px;}
    }


    .theme4_more1{ background-color:#F1F1F3; padding:50px 0;
      .theme4_more1Main{ width:800px; margin:auto; display:flex;
        .theme4_more1_content{ flex:1; margin:5px; text-align:center; background-color:#fff; height:400px;
          img{ width:100%;}
          p{
            &:nth-child(2){ font-size:16px; margin-top:25px;}
            &:nth-child(3){ margin:12px;}
          }
          div{ width:200px; height:40px; line-height:40px; border:1px solid #000; text-align:center; margin:auto;}
        }
      }
    }

    .theme4_more2 {
      //padding: 30px 0;
      .theme2_homeMain {
        width: 1000px;
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
            font-weight:bold;
          }
        }
        .theme2_left {
          left: 15px;
          top: 125px;
          i {
          }
        }
        .theme2_right {
          right: 15px;
          top: 125px;
          i {
          }
        }
        .theme2_home {
          width: 930px;
          margin: auto;
          position: relative;
          overflow: hidden;
          ul {
            width: 2790px;
            transition: all 1s;
            padding:10px 0;
            border-top:30px solid #f6f6f6;
            li {
              width: 300px;
              height: 420px;
              margin:5px;
              background-color: #fff;
              text-align: center;
              float: left;
              //box-shadow: 0 3px 2px #ddd;
              border-right:2px solid #eee;
              img {
                width:100%;
                height: 220px;
              }
              p {
                margin-top: 15px;
                &:nth-child(2){ font-size:20px; font-weight:bold; margin:20px 0 30px;}
                &:nth-child(3){ width:190px; margin:auto; color:#999; margin-bottom:20px;}
              }
              div{ width:200px; height:40px; line-height:40px; border:1px solid #000; text-align:center; margin:auto;}
            }
          }

          .animate_nav{ display:flex; justify-content:center; align-items: center; margin-bottom:40px;
            div{ width:10px; height:10px; border-radius:50%; background-color:#999; margin:0 15px; //box-sizing:content-box;
              &.active{ background-color:#000;}
            }
          }
        }
      }
    }

  }
}
</style>
