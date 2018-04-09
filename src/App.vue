<template>
    <div id="app">
        <nav-header></nav-header>
        <div class="nav">
            <div class="nav_home">
                <ul>
                    <li class="active"><router-link to="/">最新款式</router-link></li>
                    <li><router-link to="/">主题款式</router-link></li>
                    <li><router-link to="/">串饰</router-link></li>
                    <li><router-link to="/">戒指</router-link></li>
                    <li><router-link to="/">手链</router-link></li>
                    <li><router-link to="/">项链</router-link></li>
                    <li><router-link to="/">耳环</router-link></li>
                    <li><router-link to="/">品牌</router-link></li>
                    <li><router-link to="/">科技</router-link></li>
                </ul>
                <div class="search">
                    <img src="./assets/img/search.png" alt="">
                </div>
            </div>
        </div>
        <router-view/>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from '@/views/header';
    import NavFooter from '@/views/footer';
    export default {
        name: 'App',
        components: {NavHeader,NavFooter},
        data() {
            return {
                msg: 'template'
            };
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //text-align: center;
        color: #2c3e50;
        font-size:14px;
        //font-weight:bold;
        .nav{
            .nav_home{ width:1244px; margin:auto; display:flex; align-items:center;
                ul{ height:50px; display:flex; align-items:center;
                    li{ padding:28px;
                        &.active,&:hover{
                            a{
                                color:#ccc;
                            }
                        }
                        a{ color:#000;}
                    }
                }
                .search{ margin-left:auto;
                    img{ width:30px; cursor:pointer;}
                }
            }
        }
    }
</style>
