/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-10-31 22:24:38
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e72d692"],{"0f60":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"player-container"},[l("el-divider",{attrs:{"content-position":"left"}},[e._v(" 视频地址采用cdn加速服务，开发时需部署到到本地，使用方法可查看群文档 ")]),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[l("el-card",{attrs:{shadow:"hover"}},[l("div",{attrs:{slot:"header"},slot:"header"},[e._v("播放传统MP4")]),l("vab-player-mp4",{attrs:{config:e.config1},on:{player:function(t){e.Player1=t}}})],1)],1),l("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[l("el-card",{attrs:{shadow:"hover"}},[l("div",{attrs:{slot:"header"},slot:"header"},[e._v("播放m3u8，且不暴露视频地址")]),l("vab-player-hls",{attrs:{config:e.config2},on:{player:function(t){e.Player2=t}}})],1)],1)],1)],1)},a=[],n=l("7341"),o={name:"Player",components:{VabPlayerMp4:n["VabPlayerMp4"],VabPlayerHls:n["VabPlayerHls"]},data:function(){return{config1:{id:"mse1",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.mp4",volume:1,autoplay:!1},Player1:null,config2:{id:"mse2",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.m3u8",volume:1,autoplay:!1},Player2:null,config3:{id:"mse3",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.flv",volume:1,autoplay:!1},Player3:null}},created:function(){},mounted:function(){},methods:{}},s=o,i=l("2877"),u=Object(i["a"])(s,r,a,!1,null,null,null);t["default"]=u.exports},7341:function(e,t,l){"use strict";l.r(t),l.d(t,"VabPlayerMp4",(function(){return a})),l.d(t,"VabPlayerHls",(function(){return n})),l.d(t,"VabPlayerFlv",(function(){return o})),l.d(t,"VabPlayerCustom",(function(){return s}));var r=l("3236"),a=r["Mp4"],n=r["Hls"],o=r["Flv"],s=r["Custom"]}}]);