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
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        ulLeft: -200+'px',
        ulLeftIndex: 1,
      };
    },
    methods: {
      theme2_left(){
        if(this.ulLeftIndex > 0){
          this.ulLeftIndex--;
        }
        this.ulLeft = -170 * this.ulLeftIndex + 'px';
      },
      theme2_right(){
        if(this.ulLeftIndex < 2){
          this.ulLeftIndex++;
        }
        this.ulLeft = -170 * this.ulLeftIndex + 'px';
      }
    }
  };
</script>

<style lang="scss">
  .home{
    .home1{ padding:40px 0;
      .home1_home{ width:1244px; margin:auto; display:flex; justify-content:flex-end;
        img{ width:450px; margin-left:20px;}
      }
    }
    .home2{ background-color: #F6F6F6;
      .home2_home{ width:1000px; margin:auto; background-color: #fff;
        .home2_top{
          img{ width:100%;}
        }
        .home2_title{ height:80px; text-align:center;
          p{ font-size:12px; margin-top:30px;}
          h1{ margin-top:10px;}
        }

        .theme2{ padding:30px 0;
          .theme2_homeMain{ width:1000px; margin:auto; position:relative;
            .angle{
              width:50px; height:50px; line-height:50px; border:1px solid #ccc; text-align:center; background-color:#fff; position:absolute; z-index:1; cursor:pointer;
              &:hover{ opacity:0.8;}
              i{ font-size:24px;}
            }
            .theme2_left{ left:-25px; top:115px;
              i{}
            }
            .theme2_right{ right:-25px; top:115px;
              i{}
            }
            .theme2_home{ width:1000px; margin:auto; position:relative; overflow:hidden;
              ul{ width:1450px; transition:all 1s; //margin-left:-170px;
                li{ width:280px; height:280px; background-color:#fff; text-align:center; float:left; box-shadow:0 3px 2px #ddd; margin:5px;
                  img{ margin-top:50px; width:130px;}
                  p{ margin-top:15px;}
                }
              }
            }
            .search_btn{ width:240px; height:45px; display:block; margin:30px auto; border:1px solid #000; background-color:transparent; cursor:pointer;}
          }
        }
      }


    }
  }
</style>
