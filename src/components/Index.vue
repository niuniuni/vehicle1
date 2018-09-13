<template>
  <div class="box">
    <div class="wrap">
      <section>
        <div v-for="(item,index) in brand" :key="index">
          <ul>
            <p :id="index">{{index}}</p>
            <li v-for="(value,key) in item" :key="key" @click="onBtn(value.MasterID)">
              <img :data-src="value.CoverPhoto" src="../assets/black.jpg">
              <span>{{value.Name}}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <main v-show="isShow" class="main">
      <span>{{letter}}</span>
    </main>
    <aside @touchstart="touchStart"
           @touchmove="touchmove"
           @touchend="touchEnd">
      <span v-for="(item,index) in letters" :key="index">{{item}}</span>
    </aside>
    <List></List>
  </div>
</template>

<script>
import{mapState,mapActions,mapMutations} from 'vuex';
import List from './common/list'
import lazyLoad from '../util/lazyLoad.js';
export default {
  // name: '',
  // data () {
  //   return {
      
  //   }
  // },
  components:{
    List
  },
  computed:{
    ...mapState({
      letters:state=>state.index.letters,
      brand:state=>state.index.brand,
      letter:state=>state.index.letter,
      isShow:state=>state.index.isShow
    })
  },
  methods:{
    ...mapActions({
      initState:'index/initState',
      onBtn:'index/onBtn'
    }),
    ...mapMutations({
      showLetter: 'index/showLetter',
      changeLetter:'index/changeLetter'
    }),
    touchStart(e){
      this.showLetter(true);
      let letter = e.target.innerHTML;
      console.log(letter,e.target);
      if(this.letter !=letter){
        //改变当前的字母
        this.changeLetter(letter)
      }
    },
    touchmove(e){
      // console.log('e',e.touches);
      //获取手指的位置
      let pageY = e.touches[0].pageY;
      // console.log(pageY)
      //计算当前在哪一个字母
      let index = Math.floor((pageY-this.marginTop)/this.height)
      // console.log(index)
      //字母边界处理
      if(index<0){
        index=0
      }else if(index > this.letters.length-1){
        index = this.letters.length-1
      }
      //console.log(this.letters[index]);
      if(this.letter != this.letters[index]){
        //查询id为当前字母的元素
        let ele = document.getElementById(this.letters[index]);
        // console.log(ele)
        let top = ele.offsetTop;
        // console.log(top)
        //当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
        document.querySelector('.wrap').scrollTop = top
        //改变当前的字母
        this.changeLetter(this.letters[index])
      }
    },
    touchEnd(){
      this.showLetter(false);
    }
  },
  mounted() {
    this.initState()
  },
  updated() {
    //获取每个字母的高度
    this.height = 0.4*window.innerWidth/750*100;
    //获取字母列表距离顶部的高度
    this.marginTop = (window.innerHeight - (this.letters.length)*this.height)/2
    lazyLoad('.wrap');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .box{  
        width:100%;
        height: 100%;
    }
    .wrap{
        height: 100%;
        overflow: scroll;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
    .main{
      position: fixed;
      top:50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      width:1rem;
      height: 1rem;
      background: rgba(0,0,0,.6);
      font-size: .4rem;
      color:#fff;
      border-radius: .1rem;
      text-align: center;
      line-height: 1rem;
    }
</style>
