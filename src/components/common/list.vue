<template>
    <div :class="isShowList?'list active': 'list'"
            ref='list'
           @touchstart="touchstart"
           @touchmove="touchmove"
           @touchend="touchend">
        <ul v-for="(item,index) in makeList" :key="index">
            <p>{{item.GroupName}}</p>
                
                    <li v-for="(list,index) in item.GroupList" :key="index" @click="onBtnList(list.SerialID)">
                     <!-- <router-link :to="{path:'quotation',query:{id:list.SerialID}}"> -->
                        <img :data-src="list.Picture" src="../../assets/black.jpg">
                        <div>
                            <p>{{list.AliasName}}</p>
                            <p>{{list.DealerPrice}}</p>
                        </div>
                        <!-- </router-link> -->
                    </li>
               
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import lazyLoad from '../../util/lazyLoad.js'
export default {
    computed:{
        ...mapState({
            makeList:state=>state.index.makeList,
            isShowList:state=>{
                //console.log(state.index.isShowList)
                return state.index.isShowList
            }
        })
    },
    methods:{
        // ...mapActions({
        //      onBtnList:'index/onBtnList'
        // }),
        ...mapMutations({
            hideMakeList:'index/hideMakeListe',
        }),
        touchstart(e){
            this.offsetX = 0
            this.touch = e.touches[0]
        },
        touchmove(e){
            let touch = e.touches[0];
            this.offsetX = touch.pageX-this.touch.pageX;
            if(this.offsetX > 0){
                this.$refs.list.style = `transform: translate3d(${this.offsetX}px,0,0)`
            }
            //console.log(this.offsetX)
        },
        touchend(e){
            this.$refs.list.style = ``
            if(this.offsetX > 100){
                this.hideMakeList()
            }
        },
        onBtnList(id){
           this.$router.push({path: '/detail', query: {id}})
        }
    },
    updated() {
        lazyLoad('.list');
    },
}
</script>
<style scoped lang="scss">
    .list{
        position: fixed;
        top:0;
        right: 0;
        width:72%;
        height: 100%;
        background: #fff;
        overflow: scroll;
        transform: translate3d(100%,0,0);
        box-shadow: -3px 0px 10px rgba(0,0,0,.1);
        ul>p{
            margin-left:1px;
            font-size: .28rem;
            line-height: .48rem;
            background: #f2f2f2;
            padding-left:.3rem;
            color: #717171;
        }
        ul{
            margin-left:.1rem;
           li{
                display: inline-block;
                text-decoration: none;
                height: 1.4rem;
               box-sizing: border-box;
               border-bottom:1px solid #ddd;
               display: flex;
               align-items: center;
               img{
                   margin:0 .1rem 0 .2rem;
                   width:1.8rem;
                   height: 1.2rem;
               }
               p:nth-child(1){
                   font-size: .34rem;
                   color: #5f687a;
               }
               p:nth-child(2){
                   margin-top:.1rem;
                   font-size: .28rem;
                   color: red
               }
           }
        }
    }
    .list.active{
        transform: translate3d(0,0,0);
        transition:transform .3s linear;
    }
</style>
