<template>
    <div class="color-nav">
        <h5>全部颜色</h5>
        <div class="color-type">
            <p class="c-type">
                <span v-for="(item,index) in ColorList" :key="index" @click="year(item)">
                   {{index}} 
                </span>  
            </p>
        </div>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            ColorList:state=>state.color.ColorList,
            colorDetailList: state => state.color.colorDetailList,
            id:state=>state.color.id
        })
    },
    methods:{
        ...mapActions({
            getColorList:'color/getColorList'
        }),
        year(item){
            console.log(item)
            
        }
    },
    mounted() {
        this.getColorList(this.$route.query.id)
    }
}
</script>
<style scoped lang="scss">
.color-nav{
    width:100%;
    height:100%;
    background:#f4f4f4;
    h5{
        margin: .15rem 0;
        font-size: .34rem;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
        width:100%;
        font-weight: normal;   
    }
    .c-type{
        margin-top: .15rem;
        padding-left: .2rem;
        font-size: .3rem;
        line-height: .76rem;
        height: .76rem;
        width: 100%;
        background: #fff;
        overflow-x: scroll;
        span {
            padding-right: .42rem;
        }
    }
}

</style>


