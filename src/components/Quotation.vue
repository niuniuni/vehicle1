<template>
    <div class="q">
        <header><p>可向多个商家咨询最低价，商家及时回复</p></header>
        <div class="content">
            <div data-hover="hover" class="q-info flex-row">
                <img :src="getquotation.details.serial.Picture">
                <div class="flex-column flex-centerX">
                    <p>{{getquotation.details.serial.AliasName}}</p> 
                    <p>{{getquotation.details.car_name}}</p>
                </div>
            </div>
            <div class="self-info">
                <p class="tip">个人信息</p> 
                <ul>
                    <li>
                        <span>姓名</span> 
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                    </li> 
                    <li>
                        <span>手机</span> 
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11" ref="phone">
                    </li> 
                    <li>
                        <span>验证码</span>
                        <input type="text" placeholder="请输入正确的验证码">
                        <button @click="click" :class="isSendSMS?'disable':''">{{isSendSMS?timer:'获取验证码'}}</button>
                    </li>
                    <li>
                        <span>城市</span> 
                        <span @click="showCity(true)">北京</span>
                        <cityList :class="isShowCity?'active': ''"></cityList>
                    </li>
                </ul> 
                <div class="quotation">
                    <button data-hover="hover">询最低价</button>
                </div>
            </div>
            <div class="dealer-info">
                <p class="tip">选择报价经销商</p> 
                <ul>
                    <li data-hover="hover" data-id="100051064" class="active" v-for="(item,index) in getquotation.list" :key="index">
                        <p>
                            <span>{{item.dealerShortName}}</span> 
                            <span>{{item.promotePrice}}万</span>
                        </p> 
                        <p>
                            <span>{{item.address}}</span> 
                            <span>售{{item.saleRange}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <footer>
            <button data-hover="hover">询最低价</button>
        </footer>
    </div>
</template>

<script>
    import cityList from './common/cityList.vue';
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity,
                city: state=>state.quotation.city,
                isSendSMS: state=>state.quotation.isSendSMS,
                timer: state=>state.quotation.timer,
                getquotation:state=>state.quotation.getquotation
            })
        },
        methods: {
            ...mapMutations({
                showCity: 'quotation/showCity'
            }),
            ...mapActions({
                getCapture: 'quotation/getCapture',
                getDealerList:'quotation/getDealerList'
            }),
            click(){
                if (this.isSendSMS){
                    return;
                }
                let phone = this.$refs.phone.value;
                if (!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
                    alert('请输入正确的手机号码');
                    return;
                }
                console.log('获取手机号：', phone);
                this.getCapture(phone);
            }
        },
        components: {
            cityList
        },
        mounted(){
            this.getDealerList()
        }
    }
</script>
<style lang="scss" scoped>
.q{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    header{
        height: .6rem;
        line-height: .1rem;
        width: 100%;
        background: #79cd92;
        text-align: center;
        z-index: 99;
        p{
            color: #fff;
            font-size: .3rem;
            display: inline-block;
        }
    }
    .content{
        flex: 1;
        width: 100%;
        height: auto;
        background: #f4f4f4;
        overflow-y: scroll;
        .q-info{
            background: #fff;
            padding: .32rem .18rem .24rem;
            position: relative;
            height: 2rem;
            box-sizing: border-box;
            :before{
                content: "";
                display: inline-block;
                padding-top: .16rem;
                padding-right: .16rem;
                border-top: 2px solid #ccc;
                border-right: 2px solid #ccc;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                position: absolute;
                right: .26rem;
                top: .9rem;
            }
            img{
                width: 2.3rem;
                height: 1.41rem;
                border: 1px solid #eee;
                box-sizing: border-box;
                border-radius: 5px;
            }
            .flex-column{
                display: flex;
                flex-direction: column;
                margin-left: .2rem;
                width: 4.3rem;
                p{
                    display: block;
                    &:first-child{
                        font-size: .36rem;
                        line-height: 1;
                    }
                    &:nth-child(2){
                        margin-top: .26rem;
                        font-size: .32rem;
                        line-height: 1.2;
                        color: #333;
                    }
                }
            }
        }
        .flex-row{
            display: flex;
        }
        .self-info{
            background: #fff;
            z-index:99;
            .tip {
                padding: 0 .2rem;
                height: .6rem;
                line-height: .6rem;
                font-size: .24rem;
                color: #666;
                background: #eee;
                p{
                    height: .5rem;
                    line-height: .5rem;
                }
            }
            ul{
                li:nth-child(3){
                    display: flex;
                    input{
                        width:65%;
                        text-align: center;
                    }
                    button{
                        height: .6rem;
                        margin-top:.1rem;
                        outline: none;
                        border: none;
                        font-size: .24rem;
                        width:80px;
                        line-height: .6rem;
                    }
                }
            }
            ul li {
                padding: 0 .2rem;
                font-size: .26rem;
                height: .88rem;
                line-height: .86rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                color: #000;
                input {
                    font-size: .32rem;
                    padding-right: .2rem;
                    width: 88%;
                    text-align: right;
                    box-sizing: border-box;
                    color: #555;
                    outline: none;
                    border: none;
                }
                span:nth-child(2) {
                    display: inline-block;
                    width: 88%;
                    color: #555;
                    text-align: right;
                    box-sizing: border-box;
                }
                span:nth-child(2):after{
                    content: "";
                    display: inline-block;
                    padding-top: .16rem;
                    padding-right: .16rem;
                    border-top: 1px solid silver;
                    border-right: 1px solid silver;
                    transform: rotate(45deg);
                }
            }
            .quotation{
                background: #fff;
                text-align: center;
                button {
                    font-size: .32rem;
                    color: #fff;
                    width: 80%;
                    background: #3aacff;
                    height: .7rem;
                    border-radius: .1rem;
                    outline: none;
                    border: none;
                    margin-bottom: .35rem;
                }
            } 
        }
        .dealer-info{
            .tip {
                padding: 0 .2rem;
                height: .5rem;
                line-height: .5rem;
                font-size: .24rem;
                color: #666;
                background: #eee;
            }
            ul {
                background: #fff;
                padding: 0 .18rem;
                li.active:before {
                    content: "";
                    display: inline-block;
                    width: .32rem;
                    height: .32rem;
                    border-radius: 50%;
                    border: 2px solid #ccc;
                    box-sizing: border-box;
                    position: absolute;
                    left: .05rem;
                    top: 50%;
                    transform: translate3d(0,-50%,0);
                }
                li.active:after {
                        content: "";
                        display: inline-block;
                        /* padding-top: .17rem; */
                        padding-right: .1rem;
                        border: 2px solid #fff;
                        transform: rotate(40deg) translate3d(0,-50%,0);
                        position: absolute;
                        left: .07rem;
                        border-left: none;
                        border-top: none;
                        top: 47%;
                    }
                li {
                    position: relative;
                    padding: .26rem 0 .26rem .54rem;
                    border-bottom: 1px solid #eee;
                    box-sizing: border-box;
                    height: 1.65rem;
                    p:first-child {
                        font-size: .3rem;
                    }
                    p:first-child span:last-child {
                        font-size: .24rem;
                        float: right;
                        color: red;
                    }
                     p:nth-child(2) {
                        margin-top: .1rem;
                        font-size: .24rem;
                        color: #a2a2a2;
                    }
                    p:nth-child(2) span:first-child {
                        display: inline-block;
                        max-width: 4.6rem;
                    }
                    p:nth-child(2) span:nth-child(2) {
                        float: right;
                    }
                }
            }
        }
    }
     footer {
        width: 100%;
        //z-index: 99;
        button {
            width: 100%;
            height: 1rem;
            line-height: 1rem;
            background: #3aacff;
            text-align: center;
            font-size: .34rem;
            color: #fff;
            outline: none;
            border: none;
        }
    }
}
    // button.disable{
    //     background: #666;
    // }
</style>
