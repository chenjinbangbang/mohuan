<template>
    <div class="theme">
        
        <div class="theme_banner">
          <img src="../assets/img/theme1.png" alt="">
        </div>

        <div class="theme1">
          <div class="theme1_top">
            <p>"锁"住承诺</p>
            <p>浪漫心形</p>
            <p>用手工珠宝产品打开她的芳心。</p>
          </div>
          <div class="theme1_foot">
            <img src="../assets/img/theme2.png" alt="">
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "theme",
  components: {},
  data() {
    return {
      msg: "template"
    };
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
    background: url("../assets/img/theme3.png") no-repeat;
    background-position:top left;
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
}
</style>
