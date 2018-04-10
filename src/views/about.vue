<template>
    <div class="about">
        <div class="about_title">
          <p>ABOUT US</p>
          <p>关于我们</p>
        </div>
        <div class="about_main">
          <div class="about1">
              <div class="about_left">
                <p>
                  <span>WHO</span>
                  <span>AMI</span>
                </p>
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
              <div class="about_right">
                <img src="../assets/img/about1.png" alt="">
              </div>
          </div>

          <div class="about2">
              <div class="about_left">
                <img src="../assets/img/about2.png" alt="">
              </div>
              <div class="about_right">
                <p>
                  <span>WHAT</span>
                  <span>DO YOU DO</span>
                </p>
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
            </div>

            <div class="about3">
              <div class="about_left">
                <p>
                  <span>WHY</span>
                  <span>DO</span>
                </p>
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
              <div class="about_right">
                <img src="../assets/img/about3.png" alt="">
              </div>
            </div>

            <div class="about4">
              <div class="about_left">
                <img src="../assets/img/about4.png" alt="">
              </div>
              <div class="about_right">
                <p>
                  <span>HOW</span>
                  <span>TO DO</span>
                </p>
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
            </div>

        </div>

        <div class="about_title">
          <p>BRAND</p>
          <p>品牌</p>
        </div>
        <div class="brand">
          <div class="brand1">
            <div class="brand_left">
              <div class="brand_top">
                <p class="brand_top_title">BRAND</p>
                <p class="brand_top_detail">
                  <span>品牌介绍</span>
                  <span>INTRODUCTION</span>
                </p>
              </div>
              <div class="brand_bottom">
                <img src="../assets/img/about6.png" alt="">
              </div>
            </div>
            <div class="brand_right">
              <img src="../assets/img/about5.png" alt="">
              <p>
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              </p>
            </div>
          </div>

          <div class="brand2">
            <div class="brand_right">
              <img src="../assets/img/about7.png" alt="">
            </div>
            <div class="brand_left">
              <div class="brand_top">
                <p class="brand_top_detail">
                  <span>品牌愿景</span>
                  <span>BRAND</span>
                </p>
                <p class="brand_top_title">VISION</p>
              </div>
              <div class="brand_bottom">
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
            </div>
          </div>

          <div class="brand3">
            <div class="brand_left">
              <div class="brand_top">
                <p class="brand_top_detail">
                  <span>运营模式</span>
                  <span>OPERATION</span>
                </p>
                <p class="brand_top_title">MODE</p>
              </div>
              <div class="brand_bottom">
                <p>
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                  关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                </p>
              </div>
            </div>
            <div class="brand_right">
              <img src="../assets/img/about8.png" alt="">
            </div>
          </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      msg: "template"
    };
  }
};
</script>

<style lang="scss">
.about {
  .about_title {
    height: 100px;
    text-align: center;
    padding-top: 20px;
    p {
      font-size: 16px;
      margin-top: 5px;
      &:nth-child(1) {
        font-weight: bold;
      }
    }
  }
  .about_main {
    background-color: #F6F6F6;
    padding-top: 50px;
    > div {
      width: 800px;
      margin: auto;
      padding-bottom: 50px;
      display: flex;
      img {
        width: 100%;
      }
      p {
        &:nth-child(1) {
          margin-top: 50px;
          span {
            &:nth-child(1) {
              font-size: 32px;
            }
            &:nth-child(2) {
              font-size: 16px;
            }
          }
        }
        &:nth-child(2) {
          margin-top: 30px;
        }
      }
    }

    .about1 {
      .about_left {
        flex: 3;
        margin-right: 30px;
      }
      .about_right {
        flex: 2;
      }
    }

    .about2 {
      .about_left {
        flex: 1;
      }
      .about_right {
        flex: 1;
        margin-left: 30px;
      }
    }

    .about3 {
      .about_left {
        flex: 1;
        margin-right: 30px;
      }
      .about_right {
        flex: 1;
      }
    }

    .about4 {
      .about_left {
        flex: 2;
      }
      .about_right {
        flex: 3;
        margin-left: 30px;
      }
    }
  }
  .brand {
    padding-top: 50px;
    > div {
      width: 800px;
      margin: auto;
      padding-bottom: 50px;
      display: flex;
    }
    .brand_left {
      .brand_top {
        width: 100%;
        height: 120px;
        display: flex;
        //justify-content: center;
        align-items: center;
        p {
        }
        .brand_top_title {
          font-size: 32px;
        }
        .brand_top_detail {
          margin: 0 5px;
          span { display:block;
            &:nth-child(1) {
              font-size: 18px;
            }
            &:nth-child(2) {
            }
          }
        }
      }
      .brand_bottom {
        img {
          width: 100%;
        }
      }
    }
    .brand_right {
      flex: 2;
      img {
        width: 100%;
      }
      p {
        margin-top: 10px;
      }
    }
    .brand1 {
      .brand_left {
        flex: 1;
      }
      .brand_right {
        flex: 2;
        margin-left: 30px;
      }
    }
    .brand2 {
      .brand_left {
        flex: 2;
        margin-left: 30px;
        .brand_top{
          .brand_top_detail{ margin-left:auto;}
        }
      }
      .brand_right {
        flex: 3;
      }
    }
    .brand3 {
      .brand_left {
        flex: 3;
      }
      .brand_right {
        flex: 2;
        margin-left: 30px;
      }
    }
  }
}
</style>
