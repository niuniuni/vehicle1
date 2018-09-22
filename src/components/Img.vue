<template>
    <div class="car-img">
         <div class="tit">
            <p @click="onBtn(colorID)"><span>{{colour}}</span></p>
            <p @click="ClickType(carID)"><span>{{carModel}}</span></p>
        </div>
        <section>
            <div class="car-list" v-for="(item,index) in olist" :key="index">
                <div>
                    <ul class="img-default">
                        <div class="car-banner" @click="clickAll(item.Id)">
                            <p>{{item.Name}}</p>
                            <p>{{item.Count}}张></p>
                        </div>
                        <li v-for="(list,key) in item.List" :key="key">
                            <img :src="list.Url" alt="">
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
   computed:{
        ...mapState({
            olist:state=>state.getimg.olist,
            colour:state=>state.getimg.colour,
            carModel:state=>state.getimg.carModel,
            colorID:state=>state.getimg.colorID,
            carID:state=>state.getimg.carID
        }),
        
    },
    methods:{
        ...mapMutations({
            list:'getimg/list'
        }),
        ...mapActions({
            getImgList:'getimg/getImgList',
            getImgDetailList:'getimg/getImgDetailList'
        }),
        onBtn(id){
            this.$router.push({path:'/color',query:{id}})
        },
        ClickType(id){
            this.$router.push({path:'/type',query:{id}})
        },
        clickAll(id){
            console.log(id)
        }
    },
    mounted() {
        this.getImgList(this.$route.query.id)
    },
}
</script>
<style scoped lang="scss">
.car-img{
    width:100%;
    height: 100%;
    .tit{
        width:100%;
        height: .8rem;
        line-height: .8rem;
        display: flex;
        position: fixed;
        align-items: center;
        top:0;
        z-index: 100;
        background: #fff;
        p{
            flex: 1;
            text-align: center;
            box-sizing: border-box;
            color: #454545;
            font-size: .28rem;
            &:nth-child(2){
                border-left:1px solid #ccc;
            }
        }
    }
    section{
        margin-top: .6rem;
    }
    .car-list{
        width:100%;
        padding-top:.2rem;
        z-index: 1;
        .car-banner{
            position: absolute;
            background: rgba(56,90,130,.5);
            width: 2.45rem;
            height: 2.45rem;
            margin-top: .1rem;
            margin-left: 0.05rem;
            p{
                color: #fff;
                display: block;
                text-align: center;
            }
            p:first-child {
                font-size: .28rem;
                margin-top: .8rem;
            }
            p:nth-child(2) {
                font-size: .26rem;
            }
        }
        .img-default{
            display: flex;
            flex-wrap: wrap;
            position: relative;
            
            li{
                width: 2.45rem;
                height: 2.45rem;
                padding-top:.1rem;
                padding-left:0.05rem;
                
                img{
                    width: 100%;
                    height: 100%;
                }
            } 
        }
    }
}
</style>
