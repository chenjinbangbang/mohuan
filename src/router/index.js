import Vue from 'vue';
import Router from 'vue-router';


import home from '@/views/home';
import theme from '@/views/theme';
import brand from '@/views/brand';
import tech from '@/views/tech';

import about from '@/views/about';
import register from '@/views/register';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/theme',
            name: 'theme',
            component: theme
        },
        {
            path: '/brand',
            name: 'brand',
            component: brand
        },
        {
            path: '/tech',
            name: 'tech',
            component: tech
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/about',
            name: 'about',
            component: about
        }
    ]
});
