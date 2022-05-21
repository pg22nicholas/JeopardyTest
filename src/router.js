/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'
import test from '@/routes/test.vue'
import Board from '@/routes/Board.vue'

export default new Router({
    routes: [
        { path:"/",     name:"About", component: About },
        { path:"/home", name:"Home", component: Home, props: { name: "DemoApp"} },
        { path: "/test", name: "Test", component: test },
        { path: "/board", name: "Board", component: Board }
    ]
});