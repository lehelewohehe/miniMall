<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in imgsData" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="/images/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		            <img src="/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		            <img src="/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		            <img src="/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>    

<script>
import { Toast } from 'mint-ui'
export default {
    data: function () {
        return {
            imgsData: ''
        }
    },
    created () {
        this.getImgs()
    },
    methods: {
        getImgs () {
            this.$http.get('images').then(response => {
                console.log(response.body)
                if(response.body.status ==0) {
                    this.imgsData = response.body.message
                    Toast('数据接收成功')
                } else {
                    Toast('数据接收错误')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
            &:nth-child(2) {
                background-color: blue;
            }
            &:nth-child(3) {
                background-color: pink;
            }
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .mui-table-view {
        background-color: #ffffff;
        .mui-table-view-cell {
            border: none;
            img {
                width: 60px;
            }
        }
    }
    
</style>