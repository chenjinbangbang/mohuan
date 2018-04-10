<template>
    <div class="navHeader">
        <div class="header_left">
            <div><img src="../assets/img/lock.png" alt="" class="icon"></div>
            <p>马上购买</p>
        </div>
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="header_right">
            <router-link to="/about">
                <img src="../assets/img/nav.png" alt="" class="icon">
            </router-link>
            <router-link to="/register">
                <img src="../assets/img/user.png" alt="" class="icon">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navHeader',
        components: {},
        data() {
            return {
                msg: 'template'
            };
        }
    };
</script>

<style lang="scss">
    .navHeader{ height:100px; width:1244px; margin:auto; display:flex; justify-content:space-between; align-items:center;
        .icon{ width:34px;}
        .header_left{ display:flex; align-items:center;
            img{}
            p{}
        }
        .logo{
            img{ width:200px;}
        }
        .header_right{
            img{
                &:nth-child(1){ margin-right:30px;}
            }
        }
    }
</style>
