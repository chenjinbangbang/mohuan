<template>
    <div class="navFooter">
        <div class="footer_link">
            <div class="link_home">
                <div>
                    <p>手镯</p>
                    <ul>
                        <li><i class="fa fa-angle-right"></i><span>手镯</span></li>
                        <li><i class="fa fa-angle-right"></i><span>黄金</span></li>
                        <li><i class="fa fa-angle-right"></i><span>皮革</span></li>
                        <li><i class="fa fa-angle-right"></i><span>925银</span></li>
                        <li><i class="fa fa-angle-right"></i><span>蛇形链手链</span></li>
                        <li><i class="fa fa-angle-right"></i><span>最新</span></li>
                        <li><i class="fa fa-angle-right"></i><span>热门</span></li>
                    </ul>
                </div>
                <div>
                    <p>串饰</p>
                    <ul>
                        <li><i class="fa fa-angle-right"></i><span>串饰</span></li>
                        <li><i class="fa fa-angle-right"></i><span>925银</span></li>
                        <li><i class="fa fa-angle-right"></i><span>琉璃</span></li>
                        <li><i class="fa fa-angle-right"></i><span>黄金</span></li>
                        <li><i class="fa fa-angle-right"></i><span>闪石</span></li>
                        <li><i class="fa fa-angle-right"></i><span>最新</span></li>
                        <li><i class="fa fa-angle-right"></i><span>热门</span></li>
                    </ul>
                </div>
                <div>
                    <p>耳环</p>
                    <ul>
                        <li><i class="fa fa-angle-right"></i><span>黄金</span></li>
                        <li><i class="fa fa-angle-right"></i><span>耳坠</span></li>
                        <li><i class="fa fa-angle-right"></i><span>耳环钩</span></li>
                        <li><i class="fa fa-angle-right"></i><span>闪石</span></li>
                        <li><i class="fa fa-angle-right"></i><span>耳钉</span></li>
                        <li><i class="fa fa-angle-right"></i><span>最新</span></li>
                        <li><i class="fa fa-angle-right"></i><span>热门</span></li>
                    </ul>
                </div>
                <div>
                    <p>项链与坠饰</p>
                    <ul>
                        <li><i class="fa fa-angle-right"></i><span>项链</span></li>
                        <li><i class="fa fa-angle-right"></i><span>黄金</span></li>
                        <li><i class="fa fa-angle-right"></i><span>吊坠</span></li>
                        <li><i class="fa fa-angle-right"></i><span>有坠饰</span></li>
                        <li><i class="fa fa-angle-right"></i><span>925银</span></li>
                        <li><i class="fa fa-angle-right"></i><span>最新</span></li>
                        <li><i class="fa fa-angle-right"></i><span>热门</span></li>
                    </ul>
                </div>
                <div>
                    <p>戒指</p>
                    <ul>
                        <li><i class="fa fa-angle-right"></i><span>可叠戴款式</span></li>
                        <li><i class="fa fa-angle-right"></i><span>黄金</span></li>
                        <li><i class="fa fa-angle-right"></i><span>925银</span></li>
                        <li><i class="fa fa-angle-right"></i><span>非叠戴款式</span></li>
                        <li><i class="fa fa-angle-right"></i><span>闪石</span></li>
                        <li><i class="fa fa-angle-right"></i><span>最新</span></li>
                        <li><i class="fa fa-angle-right"></i><span>热门</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer_detail">
            <div class="logo1">
                <img src="../assets/img/logo1.png" alt="">
            </div>
            <div class="share">
                <p>了解魔幻饰界动态</p>
                <div class="wechat">
                    <div>
                        <div><img src="../assets/img/weibo.png" alt=""></div>
                        <span>微博</span>
                    </div>
                    <div>
                        <div><img src="../assets/img/wechat.png" alt=""></div>
                        <span>微信</span>
                    </div>
                </div>
            </div>
            <div class="address">
                <p>客服热线：400-7788-078 &nbsp;&nbsp;&nbsp;&nbsp; 0755-22742190</p>
                <p>公司地址：广东省深圳市罗湖区翠竹北路C33产业园（凯利大夏）509</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'navFooter',
        components: {},
        data() {
            return {
                msg: 'template'
            };
        }
    };
</script>

<style lang="scss">
    .navFooter{ widtH:100%; position:fixed; bottom:0;
        .footer_link{ background-color:#514650; color:#fff; height:300px; padding:30px 0;
            .link_home{ width:768px; margin:auto; display:flex; justify-content:space-between;
                >div{
                    p{ font-size:20px;}
                    ul{ margin-top:30px;
                        li{ margin-top:5px;
                            &:nth-child(6){
                                margin-top:25px;
                            }
                            i{}
                            span{ margin-left:6px;}
                        }
                    }
                }
            }
        }
        .footer_detail{ width:950px; margin:auto; height:150px; display:flex; padding-top:20px;
            .logo1{
                img{ width:60px;}
            }
            .share{ margin-left:10px;
                p{}
                .wechat{ height:30px; display:flex; align-items:center; justify-content:space-between;
                    >div{ display:flex;
                        img{ width:15px; margin-top:1px;}
                        span{ font-size:12px; margin-left:3px;}
                    }
                }

            }
            .address{ margin-left:auto; margin-right:50px;
                p{ margin-top:10px;}
            }
        }
    }
</style>
