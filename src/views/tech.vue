<template>
    <div class="tech">
        <div class="interact">

          <div class="interact1">
            <img src="../assets/img/tech1.png" alt="" class="interact_img">
            <div class="interact_detail">
              <div class="interact_left">
                <div class="interact_time">
                  <p>11</p>
                  <p>
                    <span>一月</span>
                    <span>2018</span>
                  </p>
                </div>
                <div class="interact_content">
                  <p>DO CELEBRATE LOVE</p>
                  <p>用全新请人节系列装扮每一天，特别是2月14日这一天----发送暗示以求完美礼物。</p>
                  <button>欣赏款式 <i class="fa fa-angle-down"></i></button>
                </div>
              </div>
              <div class="interact_right">
                <div class="interact_icon">
                  <div>
                    <img src="../assets/img/tech_icon1.png" alt="">
                    <img src="../assets/img/tech_icon2.png" alt="">
                    <img src="../assets/img/tech_icon3.png" alt="">
                  </div>
                </div>
                <div class="interact_btn">
                  <button>宣传活动</button>
                  <button>当季趋势</button>
                </div>
              </div>
            </div>
          </div>

          <div class="interact2">
            <img src="../assets/img/tech2.png" alt="" class="interact_img">
            <div class="interact_detail">
              <div class="interact_left">
                <div class="interact_time">
                  <p>4</p>
                  <p>
                    <span>一月</span>
                    <span>2018</span>
                  </p>
                </div>
                <div class="interact_content">
                  <p>收藏家单品抢先看</p>
                  <p>用全新请人节系列装扮每一天，特别是2月14日这一天----发送暗示以求完美礼物。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interact3">
            <img src="../assets/img/tech3.png" alt="" class="interact_img">
            <div class="interact_detail">
              <div class="interact_left">
                <div class="interact_time">
                  <p>2</p>
                  <p>
                    <span>一月</span>
                    <span>2018</span>
                  </p>
                </div>
                <div class="interact_content">
                  <p>情人节抢先看</p>
                  <p>用全新请人节系列装扮每一天，特别是2月14日这一天----发送暗示以求完美礼物。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interact4">
            <img src="../assets/img/tech4.png" alt="" class="interact_img">
            <div class="interact_detail">
              <div class="interact_left">
                <div class="interact_time">
                  <p>27</p>
                  <p>
                    <span>十二月</span>
                    <span>2017</span>
                  </p>
                </div>
                <div class="interact_content">
                  <p>2018年，我希望...</p>
                  <p>用全新请人节系列装扮每一天，特别是2月14日这一天----发送暗示以求完美礼物。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interact5">
            <img src="../assets/img/tech5.png" alt="" class="interact_img">
            <div class="interact_detail">
              <div class="interact_left">
                <div class="interact_time">
                  <p>26</p>
                  <p>
                    <span>十二月</span>
                    <span>2017</span>
                  </p>
                </div>
                <div class="interact_content">
                  <p>准备参加派对</p>
                  <p>用全新请人节系列装扮每一天，特别是2月14日这一天----发送暗示以求完美礼物。</p>
                </div>
              </div>
            </div>
          </div>


        </div>
    </div>
</template>

<script>
export default {
  name: "tech",
  components: {},
  data() {
    return {
      msg: "template"
    };
  }
};
</script>

<style lang="scss">
.tech {
  .interact {
    width: 1024px;
    margin: auto;
    padding-top: 30px;
    > div {
      margin-bottom:80px;
      border-bottom:1px solid #eee;
    }
    .interact_img {
      width: 100%;
    }
    .interact_detail {
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .interact_left {
        height: 80px;
        display: flex;
        .interact_time {
          display: flex;
          padding-right: 20px;
          border-right: 1px solid #ccc;
          margin-right: 10px;
          p {
            &:nth-child(1) {
              font-size: 48px;
            }
            &:nth-child(2) { margin-top:10px;
              span {
                display: block;
                &:nth-child(1) {
                }
                &:nth-child(2) {
                  color:#999;
                }
              }
            }
          }
        }
        .interact_content { width:500px;
          p {
            &:nth-child(1) {
              font-size:18px;
            }
            &:nth-child(2) {
              margin: 5px 0;
            }
          }
          button {
            background-color: #000;
            color: #fff;
            font-size: 12px;
            padding: 0 8px;
            outline: none;
            border: none;
            cursor: pointer;
          }
        }
      }
      .interact_right {
        height: 60px;
        .interact_icon {
          display: flex;
          justify-content: flex-end;
          img {
            width: 22px; margin-left:10px;
          }
        }
        .interact_btn {
          margin-top: 20px;
          button {
            font-size: 12px;
            cursor: pointer;
            border:1px solid #ccc;
            background-color:#eee;
            padding:2px 4px;
          }
        }
      }
    }
  }
}
</style>
