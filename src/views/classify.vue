<template>
    <div class="classify">
        
      <div class="classify_top">
        <div class="classify_title">
          <h1>串饰</h1>
          <p>用PANDORA采用14k金，925银，Pandora Rose和穆拉诺琉璃手工制作的美丽串饰，装饰您的手链。</p>
        </div>
        <div class="classify_img">
          <img src="../assets/img/classify1.png" alt="">
          <p>由日到夜的时尚造型 <i class="fa fa-angle-right"></i></p>
        </div>
      </div>

      <div class="classify_nav">
        <div class="classify_nav_home">
          <div class="classify_texture">
            <p>材质</p>
            <el-select v-model="textureVal" placeholder="请选择材质" size="small">
              <el-option v-for="item in textures" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
          <div class="classify_jewel">
            <p>宝石</p>
            <el-select v-model="jewelVal" placeholder="请选择宝石" size="small">
              <el-option v-for="item in jewels" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </div>
        </div>
      </div>

      <div class="classify_goods">
        <ul class="classify_goods_first">
          <li class="active">
            <img src="../assets/img/classify2.png" alt="">
            <p>545.00 CNY</p>
          </li>
          <li>
            <img src="../assets/img/classify3.png" alt="">
            <p>145.00 CNY</p>
          </li>
          <li>
            <img src="../assets/img/classify4.png" alt="">
            <p>390.00 CNY</p>
          </li>
          <li>
            <img src="../assets/img/classify5.png" alt="">
            <p>798.00 CNY</p>
          </li>
        </ul>

        <div class="classify_goods_firstMain">

        </div>

      </div>

    </div>
</template>

<script>
export default {
  name: "classify",
  components: {},
  data() {
    return {
      textureVal: "所有材质",
      textures: ["所有材质", "925银", "调色", "珐琅", "琉璃", "钢丝"],
      jewelVal: "所有宝石",
      jewels: ["宝石", "宝石1", "宝石2", "宝石3", "宝石4", "宝石5"]
    };
  }
};
</script>

<style lang="scss">
.classify {
  .classify_top {
    height: 350px;
    position: relative;
    background: url("../assets/img/classify_bg.png") no-repeat;
    background-size: cover;
    background-position: right center;
    .classify_title {
      padding: 200px 0 0 140px;
      h1 {
        font-size: 44px;
        font-weight: normal;
      }
      p {
        width: 500px;
      }
    }
    .classify_img {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #fff;
      margin: 60px 250px 0 0;
      padding: 10px 20px;
      img {
      }
      p {
        i {
        }
      }
    }
  }

  .classify_nav {
    background-color: #eee;

    .classify_nav_home {
      width: 1244px;
      height: 70px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      p {
        padding: 4px 0;
      }
      //分类选择器样式
      .el-select {
        background-color: #ccc;
        width: 120px;
        .el-input__inner {
          background-color: #ddd;
          border-radius: 12px;
          outline: none;
          &:focus {
            border-color: #ccc;
          }
        }
        .el-input__suffix {
          border-left: 1px solid #ccc;
        }
      }
      .el-select .el-input .el-select__caret {
        color: #000;
      }
      .el-select .el-input.is-focus .el-input__inner {
        border-color: #ccc;
      }
    }
    .classify_texture {
    }
    .classify_jewel {
      margin-left: 30px;
    }
  }

  .classify_goods {
    width: 1024px;
    margin: auto;
    .classify_goods_first {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        border-bottom: 2px solid transparent;
        padding-bottom: 5px;
        &:hover,
        &.active {
          border-bottom: 2px solid #000;
        }
        img {
          width: 130px;
          margin: 30px 0;
        }
        p {
          font-size: 12px;
          color: #666;
        }
      }
    }
    .classify_goods_firstMain {
      height: 200px;
      border: 1px solid #ddd;
    }
  }
}
</style>
