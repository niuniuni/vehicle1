<template>
    <div>
        <div>
            <p>询价页面</p>
            <button @click="showCity(true)">当前选择：{{currentCity?currentCity:city.name+city.id}}</button>
            <cityList :class="isShowCity?'active': ''"></cityList>
        </div>
        <div class="input">
            <span>手机号:</span> <input type="text" placeholder="请输入手机号">
            <button @click="send">
                <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
                <span v-if="!sendMsgDisabled">发送验证码</span>
            </button>
        </div>
        
    </div>
    
</template>

<script>
    import cityList from './common/cityList.vue';
    import {mapState, mapMutations,mapActions} from 'vuex';
    export default {
        data(){
            return {
                time:60,
                sendMsgDisabled:false
            }
        },
        computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity,
                city: state=>state.quotation.city
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'quotation/showCity'
            }),
            ...mapActions({
                getDealerList:'quotation/getDealerList'
            }),
            send(){
                let me = this;
                me.sendMsgDisabled = true;
                let interval = window.setInterval(function() {
                    if ((me.time--) <= 0) {
                        me.time = 60;
                        me.sendMsgDisabled = false;
                        window.clearInterval(interval);
                    }
                }, 1000); 
            }
        },
        mounted() {
            this.getDealerList(this.$route.query.id)
        },
        components: {
            cityList
        }
    }
</script>
<style lang="scss" scoped>
    .input{
        width:100%;
        input{
            height: .5rem;
            border:0;
            border:1px solid #cac1c181;
        }
        span{
            font-size: .32rem;
        }
        button {
            width: 2rem;
            height: .55rem ;
            background: #ccc;
            border:0;
        }
    }
    
</style>

