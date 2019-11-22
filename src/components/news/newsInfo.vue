<template>
    <div class="newsinfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>

        <hr>

        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>

        <!-- 评论子组件区域 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                newsinfo: {},
                id: this.$route.params.id
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo() {
                this.$http.get('newsinfo/' + this.id).then(result => {
                    // console.log(this.id)
                    // console.log(this.$route.params.id)
                    if (result.body.status == 0) {
                        this.newsinfo = result.body.message[0]
                        Toast('数据接收成功')
                    } else {
                        Toast('数据接收错误')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" >
    .newsinfo-container {
        padding: 0 4px;

        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }

        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }

        .content {
            img {
                width: 100%;
            }
        }
    }
</style>