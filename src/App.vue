<template>
    <div id="app">
        <nav-header></nav-header>
        <div class="nav">
            <div class="nav_home">
                <ul>
                    <li :class="{active: $route.path === '/'}"><router-link to="/">最新款式</router-link></li>
                    <li :class="{active: $route.path === '/theme'}"><router-link to="/theme">主题款式</router-link></li>
                    <li @click="classifyName" :class="{active: $route.path === '/classify' && $route.query.name === '串饰'}"><router-link to="/classify?name=串饰">串饰</router-link></li>
                    <li @click="classifyName" :class="{active: $route.path === '/classify' && $route.query.name === '戒指'}"><router-link to="/classify?name=戒指">戒指</router-link></li>
                    <li @click="classifyName" :class="{active: $route.path === '/classify' && $route.query.name === '手链'}"><router-link to="/classify?name=手链">手链</router-link></li>
                    <li @click="classifyName" :class="{active: $route.path === '/classify' && $route.query.name === '项链'}"><router-link to="/classify?name=项链">项链</router-link></li>
                    <li @click="classifyName" :class="{active: $route.path === '/classify' && $route.query.name === '耳环'}"><router-link to="/classify?name=耳环">耳环</router-link></li>
                    <li :class="{active: $route.path === '/brand'}"><router-link to="/brand">品牌</router-link></li>
                    <li :class="{active: $route.path === '/tech'}"><router-link to="/tech">科技</router-link></li>
                </ul>
                <div class="search">
                    <img src="./assets/img/search.png" alt="">
                </div>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
        
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from "@/views/header";
import NavFooter from "@/views/footer";
export default {
  name: "App",
  components: { NavHeader, NavFooter },
  data() {
    return {
      msg: "template"
    };
  },
  created() {
    //console.log(this.$route);
  },
  methods: {
    classifyName(){
      let name = this.$route.query.name;
      if(name){
        this.$store.dispatch('setName',name);
      }
    }
  }
};
</script>

<style lang="scss">
//分类选择器样式
.el-select-dropdown__item.selected {
  color: #333;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #000;
  font-size: 14px;

  .content {
    > div {
      //min-height:calc(100vh - 600px); padding-bottom:600px;
    }
  }
  .nav {
    border-bottom: 1px solid #ccc;
    .nav_home {
      width: 1244px;
      margin: auto;
      display: flex;
      align-items: center;
      ul {
        height: 50px;
        display: flex;
        align-items: center;
        li {
          &.active,
          &:hover {
            a {
              color: #ccc;
            }
          }
          a {
            color: #000;
            display: block;
            padding: 28px;
          }
        }
      }
      .search {
        margin-left: auto;
        img {
          width: 30px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
