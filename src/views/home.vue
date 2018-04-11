<template>
  <div class="home">

    <div class="home1">
      <div class="home1_home">
        <div><img src="../assets/img/home1.png" alt=""></div>
        <div><img src="../assets/img/home2.png" alt=""></div>
      </div>
    </div>

    <div class="home2">
      <div class="home2_home">
        <div class="home2_top">
          <img src="../assets/img/home3.png" alt="">
        </div>

        <div class="home2_title">
          <p>2018情人节珠宝系列</p>
          <h1>“锁”住承诺</h1>
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
                  <img src="../assets/img/home6.png" alt="">
                  <p>798.00 CNY</p>
                </li>
                <li>
                  <img src="../assets/img/home4.png" alt="">
                  <p>798.00 CNY</p>
                </li>
                <li>
                  <img src="../assets/img/home5.png" alt="">
                  <p>98.00 CNY</p>
                </li>
                <li>
                  <img src="../assets/img/home6.png" alt="">
                  <p>98.00 CNY</p>
                </li>
                <li>
                  <img src="../assets/img/home4.png" alt="">
                  <p>798.00 CNY</p>
                </li>
              </ul>
            </div>
            <button class="search_btn">搜索新系列</button>
          </div>
        </div>

        <div class="home2_detail">

          <div class="home2_detail_left">
            <div class="home2_detail1">
              <img src="../assets/img/home7.png" alt="">
              <div class="home2_content1">
                <h2>变身米妮</h2>
                <p>迷人的波点串饰和小挂饰可展现米妮的经典风格</p>
                <p>
                  <span>搜索系列</span> 
                  <span class="angle_right"><i class="fa fa-angle-right"></i></span>
                  </p>
              </div>
            </div>

            <div class="home2_detail2">
              <img src="../assets/img/home10.png" alt="">
              <div class="home2_content1">
                <h2>DO SURPRISE ME THIS VALENTINE'S DAY</h2>
                <p>发送暗示，得到真正中意的礼物</p>
                <p>
                  <span>向他指引方向</span> 
                  <span class="angle_right"><i class="fa fa-angle-right"></i></span>
                </p>
              </div>
            </div>

            <div class="home2_detail3">
              <div class="home2_content2">
                <h2>耀眼光辉</h2>
                <p>马上探索</p>
                <p class="angle_right"><i class="fa fa-angle-right"></i></p>
              </div>
              <img src="../assets/img/home12.png" alt="">
            </div>

          </div>

          <div class="home2_detail_right">
            <div class="home2_detail1">
              <img src="../assets/img/home8.png" alt="">
              <div class="home2_content1">
                <h2>爱情之锁</h2>
                <p>用PANDORA的吊坠盒系列珍藏您的回忆</p>
                <p>
                  <span>马上探索</span> 
                  <span class="angle_right"><i class="fa fa-angle-right"></i></span>
                  </p>
              </div>
            </div>

            <div class="home2_detail3">
              <div class="home2_content2">
                <h2>你的心情</h2>
                <p>马上探索</p>
                <p class="angle_right"><i class="fa fa-angle-right"></i></p>
              </div>
              <img src="../assets/img/home9.png" alt="">
            </div>

            <div class="home2_detail2">
              <img src="../assets/img/home11.png" alt="">
              <div class="home2_content1">
                <h2>2019版PANDORA俱乐部串饰</h2>
                <p>分享自己的想法和创意，与其他PANDORA俱乐部会员携手打造品牌年度俱乐部串饰</p>
                <p>
                  <span>开始创作</span> 
                  <span class="angle_right"><i class="fa fa-angle-right"></i></span>
                </p>
              </div>
            </div>

          </div>
          

        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      ulLeft: -225 + "px",
      ulLeftIndex: 1
    };
  },
  methods: {
    theme2_left() {
      if (this.ulLeftIndex > 0) {
        this.ulLeftIndex--;
      }
      this.ulLeft = -225 * this.ulLeftIndex + "px";
    },
    theme2_right() {
      if (this.ulLeftIndex < 2) {
        this.ulLeftIndex++;
      }
      this.ulLeft = -225 * this.ulLeftIndex + "px";
    }
  }
};
</script>

<style lang="scss">
.home {
  .home1 {
    padding: 40px 0;
    .home1_home {
      width: 1244px;
      margin: auto;
      display: flex;
      justify-content: flex-end;
      img {
        width: 450px;
        margin-left: 20px;
      }
    }
  }
  .home2 {
    background-color: #f6f6f6;
    .home2_home {
      width: 1000px;
      margin: auto;
      background-color: #fff;
      .home2_top {
        img {
          width: 100%;
        }
      }
      .home2_title {
        height: 80px;
        text-align: center;
        p {
          font-size: 12px;
          margin-top: 30px;
        }
        h1 {
          margin-top: 10px;
          color:#333;
        }
      }

      .theme2 {
        padding: 30px 0;
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
            }
          }
          .theme2_left {
            left: -25px;
            top: 115px;
            i {
            }
          }
          .theme2_right {
            right: -25px;
            top: 115px;
            i {
            }
          }
          .theme2_home {
            width: 1000px;
            margin: auto;
            position: relative;
            overflow: hidden;
            ul {
              width: 1450px;
              transition: all 1s; //margin-left:-170px;
              li {
                width: 280px;
                height: 280px;
                background-color: #fff;
                text-align: center;
                float: left;
                box-shadow: 0 3px 2px #ddd;
                margin: 5px;
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

      .home2_detail {
        display: flex;
        img {
          width: 100%;
        }
        .angle_right {
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 50%;
          box-shadow: 1px 1px 2px #999;
          //border:1px solid #f00;
          i {
            font-size: 20px;
          }
        }
        .home2_content1 {
          text-align: center;
          h2 {
            margin: 20px 0;
            color: #666;
          }
          p {
            &:nth-child(2) {
              color: #666;
            }
            &:nth-child(3) {
              font-size: 16px;
              margin: 20px 0;
              span {
                &:nth-child(1) {
                }
              }
            }
          }
        }
        .home2_content2 {
          text-align: center;
          h2 {
            margin-top: 50px;
            color: #666;
          }
          p {
            margin-top: 10px;
            &:nth-child(2) {
              color: #333;
            }
            &:nth-child(3) {
            }
          }
        }

        .home2_detail3 {
          display: flex;
          .home2_content2 {
            flex: 1;
          }
          img {
            flex: 1;
          }
        }

        .home2_detail_left,.home2_detail_right {
          flex: 1;
          padding:8px;
        }
        .home2_detail_left{
          border-right:2px solid #F6F6F6;
        }
      }
    }
  }
}
</style>
