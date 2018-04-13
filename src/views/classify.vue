<template>
  <div class="classify">

    <div class="classify_top">
      <div class="classify_title">
        <h1>{{name}}</h1>
        <p>用PANDORA采用14k金，925银，Pandora Rose和穆拉诺琉璃手工制作的美丽串饰，装饰您的手链。</p>
      </div>
      <div class="classify_img">
        <img src="../assets/img/classify1.png" alt="">
        <p>由日到夜的时尚造型 <i class="fa fa-angle-right"></i></p>
      </div>
      <div class="classify_theme">
        <div class="classify_themeMain">
          <div class="title">串饰</div>
          <ul>
            <li :class="{active: sortIndex === index}" v-for="(item,index) in sorts" @click="sortFn(index)">{{item}}</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="classify_nav">
      <div class="classify_nav_home">
        <div class="classify_texture">
          <p>材质</p>
          <el-select v-model="textureVal" placeholder="请选择材质" size="small" @change="textureChange">
            <el-option v-for="item in textures" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </div>
        <div class="classify_jewel">
          <p>宝石</p>
          <el-select v-model="jewelVal" placeholder="请选择宝石" size="small" @change="jewelChange">
            <el-option v-for="item in jewels" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="classify_goods">
      <ul v-if="!goodsLoading && !goodsNo">
        <li v-for="item in goodsList" @mousemove="goodsDetails($event)" @mouseout="goodsDetailsShow = false">
          <div class="imgUrl">
            <img :src="item.imgUrl" alt="">
          </div>
          <p>{{item.price}} CNY</p>
        </li>
      </ul>
      <div class="loadingStatus" v-if="goodsLoading">
        商品加载中...
      </div>
      <div class="loadingStatus" v-if="goodsNo">
        很抱歉，没有查询到您需要的商品！
      </div>
    </div>
    <div class="clearfix"></div>

    <div class='classify_goodsMore'>
      <button class="more_btn" @click="goodsMore">显示所有</button>
      <p>
        显示所有显示所有显示所有显示所有显示所有显示所有显示所有
        显示所有显示所有显示所有显示所有显示所有显示所有显示所有
        显示所有显示所有显示所有显示所有显示所有显示所有显示所有
        </p>
    </div>

    <!-- <div class="xx" :style="{top: detail_top+'px',left: detail_left+'px'}" v-show="goodsDetailsShow"></div> -->

    <div class="detail" :style="{top: detail_top+'px',left: detail_left+'px'}" v-show="goodsDetailsShow">
      <div class="detail_more">
        <ul>
          <li v-for="(item,index) in [1,2]" :class="{active: index === 0}">
            <img src="../assets/img/classify4.png" alt="">
          </li>
        </ul>
      </div>

      <div class="detail_intro">
        <div class="detail_intro_left">
          <img src="../assets/img/classify4.png" alt="">
          <div class="qrcode">
            <div><img src="../assets/img/qrcode.png" alt=""></div>
            <p>扫描二维码查看产品体验报告</p>
          </div>
        </div>

        <div class="detail_intro_right">
          <div class="intro">
            <h2>我爱你</h2>
            <p>商品 #7865596CZR</p>
            <p>扫描二维码查看产品体验报告扫描二维码查看产品体验报告扫描二维码查看产品体验报告</p>
            <p><span>金属：</span>双色 - 925银和PANDORA Rose</p>
            <p><span>颜色：</span>红色</p>
            <p><span>石质：</span>立方氧化锆石</p>
          </div>
          <div class="pay">
            <h2>598.00 CNY</h2>
            <div class="pay_btn">
              <img src="../assets/img/pay_btn.png" alt="">
              <p>立即选购</p>
            </div>
          </div>
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
            <div class="clearfix"></div>
            <div class="animate_nav">
              <div :class="{active: ulLeftIndex === 0}"></div>
              <div :class="{active: ulLeftIndex === 1}"></div>
              <div :class="{active: ulLeftIndex === 2}"></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { getGoodsList } from "@/api/goods";
export default {
  name: "classify",
  components: {},
  data() {
    return {
      goodsList: [],
      goodsLoading: true, //商品加载中...
      goodsNo: false, //没有商品

      //name: '串饰',
      sortIndex: 0,
      sort: "所有",
      textureVal: "所有材质",
      jewelVal: "所有宝石",

      classifyInfos: {
        //串饰
        串饰: {
          sorts: ["所有", "串饰", "吊饰", "卡扣", "夹片", "安全链"],
          textures: ["所有材质", "925银", "调色", "珐琅", "琉璃", "钢丝"],
          jewels: ["所有宝石", "无宝石", "珍珠", "钻石"]
        },
        //戒指
        戒指: {
          sorts: ["所有", "闭口款式", "开口款式"],
          textures: ["所有材质", "珐琅"],
          jewels: ["所有宝石", "无宝石", "珍珠"]
        },
        //手链
        手链: {
          sorts: ["所有", "蛇形链", "手镯"],
          textures: ["所有材质", "珐琅", "纺织物", "皮革"],
          jewels: ["所有宝石", "无宝石"]
        },
        //项链
        项链: {
          sorts: ["所有", "无吊饰", "坠饰"],
          textures: ["所有材质", "珐琅"],
          jewels: ["所有宝石", "无宝石"]
        },
        //耳环
        耳环: {
          sorts: ["所有", "耳钉", "耳坠", "耳钉钩", "珐琅耳环", "宝石耳环"],
          textures: ["所有材质", "珐琅"],
          jewels: ["所有宝石", "无宝石", "珍珠"]
        }
      },
      sorts: [],
      textures: [],
      jewels: [],
      limit: 40,

      detail_top: 0, //商品详情距离上边距离
      detail_left: 0, //商品详情距离左边距离
      goodsDetailsShow: false, //商品详情的显示与隐藏
      ulLeft: 0,
      ulLeftIndex: 0
    };
  },
  computed: {
    //当前属于哪个主分类
    name() {
      return this.$store.getters.name;
    }
  },
  watch: {
    name() {
      this.getClassify();
      this.getGoodsList();
    }
  },
  created() {
    this.getClassify();
    this.getGoodsList();
  },
  methods: {
    getClassify() {
      let infos = this.classifyInfos[this.name];
      //console.log(infos);
      this.sorts = infos.sorts;
      this.textures = infos.textures;
      this.jewels = infos.jewels;
    },
    getGoodsList() {
      let params = {
        limit: this.limit, //查询数量
        name: this.name, //主分类
        sort: this.sort, //副分类
        texture_classify: this.textureVal, //材质
        jewel_classify: this.jewelVal //宝石
      };
      this.goodsLoading = true;
      this.goodsNo = false;

      getGoodsList(params).then(res => {
        if (res.error_code === 0) {
          this.goodsList = res.data;
          this.goodsLoading = false;
          if (this.goodsList.length === 0) {
            this.goodsNo = true;
          }
        }
      });
    },
    sortFn(index) {
      this.sortIndex = index;
      this.sort = this.sorts[index];
      this.limit = 40;
      this.getGoodsList();
    },
    textureChange() {
      this.limit = 40;
      this.getGoodsList();
    },
    jewelChange() {
      this.limit = 40;
      this.getGoodsList();
    },
    goodsMore() {
      this.limit = null;
      this.getGoodsList();
    },
    //鼠标经过显示商品详情
    goodsDetails(event) {
      this.goodsDetailsShow = true;
      //console.log(event);
      let e = event.path;

      e.forEach(item => {
        if (item.localName === "li") {

          let width = document.body.clientWidth;
          
          //console.log(width);

          let left = (width - 1000)/2;
          let top = item.offsetTop + item.clientHeight;
          this.detail_left = left;
          this.detail_top = top;
        }
      });
    },
    theme2_left() {
      if (this.ulLeftIndex > 0) {
        this.ulLeftIndex--;
      } else {
        this.ulLeftIndex = 2;
      }
      this.ulLeft = -200 * 5 * this.ulLeftIndex + "px";
    },
    theme2_right() {
      if (this.ulLeftIndex < 2) {
        this.ulLeftIndex++;
      } else {
        this.ulLeftIndex = 0;
      }
      this.ulLeft = -200 * 5 * this.ulLeftIndex + "px";
    }
  }
};
</script>

<style lang="scss">
.xx {
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: #f00;
  left: 95vw;
}
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
    .classify_theme {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      .classify_themeMain {
        width: 1244px;
        margin: auto;
        display: flex;
        .title {
          font-weight: bold;
          font-size: 16px;
        }
        ul {
          margin: auto;
          display: flex;
          li {
            padding: 6px 15px;
            cursor: pointer;
            &:hover,
            &.active {
              background-color: #fff;
            }
          }
        }
      }
    }
  }

  .classify_nav {
    background-color: #f1f1f3;

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
    width: 1000px;
    margin: auto;
    ul {
      li {
        width: 25%;
        float: left;
        text-align: center;
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:hover,
        &.active {
          border-bottom: 2px solid #000;
        }
        .imgUrl {
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            margin: 20px 0;
          }
        }

        p {
          margin-bottom: 5px;
        }
      }
    }
    .loadingStatus {
      height: 300px;
      line-height: 300px;
      text-align: center;
      color: #666;
      font-size: 18px;
    }
  }

  .classify_goodsMore {
    text-align: center;
    background-color: #dfdee2;
    button {
      width: 130px;
      height: 40px;
      background-color: #ececee;
      cursor: pointer;
      margin-top: 15px;
      border: none;
      border-radius: 4px;
    }
    p {
      width: 800px;
      margin: auto;
      padding: 40px 0;
    }
  }

  .detail {
    position: absolute;
    margin-top:2px;
    width: 1000px;
    border: 1px solid #ccc;
    background-color: #fff;
    .detail_more {
      position: absolute;
      margin: 5px;
      ul {
        width: 70px;
        padding: 5px;
        li {
          border: 2px solid transparent;
          cursor: pointer;
          &:hover,
          &.active {
            border: 2px solid #ccc;
          }
          img {
            width: 100%;
          }
        }
      }
    }

    .detail_intro {
      display: flex;
      .detail_intro_left {
        flex: 2;
        text-align: center;
        border-right: 1px solid #ccc;
        > img {
          width: 300px;
        }
        .qrcode {
          display: flex;
          justify-content: center;
          margin: 40px 0;
          img {
            width: 50px;
          }
          p {
            font-size: 16px;
            margin: 20px 0 0 8px;
          }
        }
      }
      .detail_intro_right {
        flex: 1;
        position: relative;
        .intro {
          padding: 20px;
          h2 {
            color: #666;
          }
          p {
            &:nth-child(3) {
              margin: 10px 0;
            }
            span {
              color: #666;
            }
          }
        }
        .pay {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 240px;
          > h2 {
          }
          .pay_btn {
            height: 55px;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            color: #fff;
            img {
              width: 40px;
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
    }

    .theme2 {
      //padding: 30px 0;
      .theme2_homeMain {
        width: 1000px;
        margin: auto;
        position: relative;
        .angle {
          width: 50px;
          height: 50px;
          line-height: 50px;
          //border: 1px solid #ccc;
          text-align: center;
          //background-color: #fff;
          position: absolute;
          z-index: 1;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
          i {
            font-size: 34px;
            font-weight: bold;
          }
        }
        .theme2_left {
          left: 0;
          top: 115px;
          i {
          }
        }
        .theme2_right {
          right: 0;
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
            width: 3030px;
            transition: all 1s;
            padding: 10px 0;
            border-top: 30px solid #f6f6f6;
            li {
              width: 200px;
              height: 200px;
              background-color: #fff;
              text-align: center;
              float: left;
              box-shadow: 0 3px 2px #ddd;
              border-right: 2px solid #eee;
              &:nth-child(5n) {
                border-right: 1px solid transparent;
              }
              img {
                margin-top: 30px;
                width: 130px;
              }
              p {
                margin-top: 15px;
              }
            }
          }
          .animate_nav {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            div {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #999;
              margin: 0 15px; //box-sizing:content-box;
              &.active {
                background-color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
