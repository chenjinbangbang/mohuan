<template>
    <div class="brand">
        <div class="banner">
          <img src="../assets/img/brand1.png" alt="">
        </div>

        <div class="brand_about">
          <div class="brand_about_left">
            <img src="../assets/img/brand2.png" alt="">
          </div>
          <div class="brand_about_right">
            <h1>About us</h1>
            <p>
              关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
            </p>
          </div>
        </div>

        <div class="brand_all">
          <h1>产品畅销全球，上百家店铺遍布全国</h1>
          <p>产品畅销全球，上百家店铺遍布全国</p>
          <img src="../assets/img/brand3.png" alt="">
        </div>

        <div class="brand_join_title">
          <p>BRAND TO JOIN</p>
          <p>品牌加盟</p>
        </div>
        <div class="brand_join">

          <div class="brand_join1">
            <div class="brand_join_left">
              <img src="../assets/img/brand4.png" alt="">
            </div>
            <div class="brand_join_right">
              <p>
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              </p>
            </div>
          </div>

          <div class="brand_join2">
            <div class="brand_join_right">
              <p>
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              </p>
            </div>
            <div class="brand_join_left">
              <img src="../assets/img/brand5.png" alt="">
            </div>
          </div>

          <div class="brand_join3">
            <div class="brand_join_left">
              <img src="../assets/img/brand6.png" alt="">
            </div>
            <div class="brand_join_right">
              <p>
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
                关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们
              </p>
            </div>
          </div>

        </div>

    </div>
</template>

<script>
export default {
  name: "brand",
  components: {},
  data() {
    return {
      msg: "template"
    };
  }
};
</script>

<style lang="scss">
.brand {
  .banner {
    img {
      width: 100%;
    }
  }

  .brand_about {
    width: 1024px;
    margin: auto;
    display: flex;
    padding: 40px 0;
    .brand_about_left {
      flex: 1;
      img {
        width: 100%;
      }
    }
    .brand_about_right {
      flex: 3;
      margin-left: 50px;
      h3 {
      }
      p {
        line-height: 24px;
        margin-top: 5px;
      }
    }
  }

  .brand_all {
    background-color: #000;
    text-align: center;
    padding: 30px 0;
    h1 {
      color: #fff;
    }
    p {
      font-size: 16px;
      color: #ccc;
      margin: 10px 0;
    }
    img {
      width: 800px;
    }
  }

  .brand_join_title {
    height: 130px;
    text-align: center;
    padding-top: 30px;
    p {
      margin-top: 5px;
      &:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
      }
      &:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
  .brand_join {
    > div {
      width: 900px;
      margin: auto;
      display: flex;
      margin-bottom:50px;
      .brand_join_left {
        flex: 3;
        img {
          width: 100%;
        }
      }
      .brand_join_right {
        flex: 1;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#eee;
        padding:20px;
        p {
        }
      }
    }
  }
}
</style>
