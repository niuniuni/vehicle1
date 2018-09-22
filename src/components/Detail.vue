<template>
    <div class="car">
        <div class="content">
            <div class="img">
                <img :src="info.CoverPhoto" @click="onBtn(info.SerialID)">
                <span>{{info.pic_group_count}}张照片</span>
            </div>
            <div class="info">
                <p>{{info.market_attribute&&info.market_attribute.dealer_price}}</p> 
                <p>指导价{{info.market_attribute&&info.market_attribute.official_refer_price}}</p> 
                <div class="action active flex-row">
                    <button data-hover="hover" @click="quotation">{{info.BottomEntranceTitle}}</button>
                </div>
            </div>
            <div class="car-list">
                <div class="c-type">
                    <span @click="changeYear(item)" v-for="(item,index) in year" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
                </div>
                <div class="banner">
                    <ul v-for="(item,index) in list" :key="index">
                        <p>{{index}}</p>
                        <li v-for="(list,index) in item" :key="index">
                            <p>{{list.market_attribute.year +'款' + list.car_name}}</p>
                            <p>{{`${list.max_power}马力${list.gear_num}挡${list.trans_type}`}}</p>
                            <p>
                                <span>{{`指导价${list.market_attribute.dealer_price_min}`}}</span>
                                <span>{{list.market_attribute.official_refer_price}}</span>
                            </p>
                            <button @click="quotation">{{info.BottomEntranceTitle}}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom flex-column flex-centerY">
            <p>{{info.BottomEntranceTitle}}</p>
            <p>{{info.BottomEntranceSubTitle}}</p>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState({
            info:state=>state.detail.info,
            currentYear:state=>state.detail.currentYear,
            carId:state=>state.detail.carId
        }),
        ...mapGetters({
            year:'detail/year',
            list:'detail/list'
        }),
    },
    methods:{
        ...mapMutations({
            Info:'detail/Info',
            changeYear:'detail/changeYear'
        }),
        ...mapActions({
            getInfoAndList:'detail/getInfoAndList'
        }),
        onBtn(id){
            this.$router.push({path:'/img',query:{id}})
        },
        quotation(){
             _hmt.push(['_trackEvent', '车辆信息，地址', 'tap', '点击按钮']);
            this.$router.push({path:'/quotation'})
        }
    },
    mounted() {
        this.getInfoAndList(this.$route.query.id)
    },
}
</script>


<style lang="scss" scoped>
.car{
    background: #f4f4f4;
    width:100%;
    height: 100%;
    .content{
        height: 100%;
        .img {
            position: relative;
            height: 3.29rem;
            overflow: hidden;
            img {
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                border: none;
            }
            span {
                position: absolute;
                bottom: .3rem;
                right: .3rem;
                color: #fff;
                padding: 1px .1rem;
                border-radius: .2rem;
                background: rgba(0,0,0,.6);
                font-size: .24rem;
            }
        }
        .info {
            padding: .36rem .2rem .3rem;
            background: #fff;
            position: relative;
            p:first-child {
                font-size: .36rem;
                color: red;
                font-weight: 500;
            }
            p {
                max-width: 3.4rem;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p:nth-child(2) {
                font-size: .26rem;
                color: silver;
            }
            .action {
                padding-top: .2rem;
                justify-content: space-between;
                width: 50%;
                position: absolute;
                right: .1rem;
                top: .22rem;
            }
            .flex-row {
                display: flex;
                -webkit-box-direction: normal;
            }
            .action button:last-child {
                background: #00afff;
                color: #fff;
            }
            .action button {
                border-radius: .1rem;
                font-size: .32rem;
                height: .7rem;
                width: 3.45rem;
                border: none;
                box-sizing: border-box;
            }
        }
        .banner{
            margin-bottom: 1rem;
        }
        .car-list .c-type {
            border-top: .15rem solid #f4f4f4;
            padding: 0 .3rem;
            font-size: .32rem;
            height: .77rem;
            line-height: .77rem;
            background: #fff;
            span {
                padding-right: .46rem;
            }
            span.active {
                color: #3aacff;
            }
        }
        .car-list ul {
            background: #fff;
        }
        .car-list ul>p {
            padding: 0 .2rem;
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            color: #999;
            background: #f4f4f4;
        }
        .car-list ul li:last-child {
            border-bottom: 0;
        }
        .car-list ul li {
            padding: 0 .2rem;
            border-bottom: .18rem solid #f4f4f4;
            overflow: hidden;
        }
        .car-list ul li p:first-child {
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        .car-list ul li p:nth-child(2) {
            color: #bdbdbd;
            font-size: .26rem;
        }
        .car-list ul li p:nth-child(3) {
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
        }
        .car-list ul li p:nth-child(3) span:nth-child(2) {
            font-size: .3rem;
            color: #ff2336;
            margin-left: .1rem;
        }
        .car-list ul li button {
            border: none;
            border-top: 1px solid #eee;
            width: 110%;
            height: .8rem;
            font-size: .32rem;
            color: #00afff;
            background: #fff;
            font-weight: 500;
            margin-left: -.3rem;
        }
    }
}
.bottom {
        position: fixed;
        width: 100%;
        bottom:0;
        background: #3aacff;
        height: 1rem;
        color: #fff;
        z-index: 10;
        p:first-child {
            font-size: .32rem;
            margin-top: .12rem;
            font-weight: 500;
        }
        p:nth-child(2) {
            font-size: .24rem;
        }
    }
    .flex-centerY {
        display: flex;
        align-items: center;
    }
    .flex-column {
        -webkit-box-orient: vertical;
        flex-direction: column;
    }
</style>

