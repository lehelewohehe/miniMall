<template>
    <div class="newslist-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id" class="text-content">
                    <img class="mui-media-object mui-pull-left" src="/images/menu1.png">
                    <div class="mui-media-body">
                        <h1 class="title">{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{ item.add_time | dateFormat }}</span><span>点击{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data: function() {
            return {
                newslist: []
            }
        },
        created() {
            this.getNewsList()
        },
        methods: {
            getNewsList() {
                this.$http.get('newslist').then(result => {
                    if (result.body.status == 0) {
                        this.newslist = result.body.message
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
    .newslist-container {
        .text-content {
            padding: 5px 8px;
            .title {
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .mui-ellipsis {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                color: #226aff;
            }
        }
    }
</style>