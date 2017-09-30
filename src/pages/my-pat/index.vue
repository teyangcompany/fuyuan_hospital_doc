<template>
  <div class="page">
    <app-header class="noflex" title="患者" ref="header">

    </app-header>
    <scroll :height="scrollHeight">
        <div class="wrapper">
          <div class="headerContain">
            <div class="headerItem" v-for="item of nav" @click="goRouter(item.route)">
              <div :class="item.name">
              </div>
              <div class="headerText">{{item.value}}</div>
            </div>
          </div>
          <div class="recently">
            <span>最近消息</span>
          </div>
          <div class="detail" v-for="item of 3">
            <div class="detailImg">
              <img src="../../../static/img/3.jpg" alt="">
            </div>
            <div class="detailText">
              <p>
                <span>李冰</span>
                <span class="showDate">2017-5-23</span>
              </p>
              <p>
                <span>你好，我关注了你.....</span>
              </p>
            </div>
          </div>
        </div>
    </scroll>

    <app-footer class="noflex" :currentNav="currentNav" ref="footer"></app-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import AppFooter from "../../components/app-footer.vue"
  import AppHeader from "../../components/app-header.vue"
  import {mainHeightMixin} from "../../lib/mixin"
  import config from "../../lib/config"
  import api from '../../lib/http'

  import scroll from '../../base/scroll.vue'

  export default {
    data() {
      return {
        currentNav: 1,
        nav: config.my_pat_nav,
        scrollHeight:""
      };
    },
    filters:{

    },
    created(){
      this.scrollHeight = window.innerHeight-60-45;
      console.log(this.scrollHeight,99999)
    },
    computed: {},
    components: {
      AppFooter,
      AppHeader,
      scroll
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
      goRouter(name){
        console.log(name,6666)
        this.$router.push(name)
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "../../common/common.scss";
.page{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
  .headerContain{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid gainsboro;
  }
  .headerImg{
    width: 70px;
    height: 70px;
  }
  @each $i in book, guide, queuing{
    .#{$i}{
      width: 70px;
      height: 70px;
      background-image: url('../../../static/img/index/#{$i}.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin:0 auto;
    }
  }
  .recently{
    padding: 10px;
    background: ghostwhite;
  }
  .detail{
    display: flex;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid gainsboro;
  }
  .detailImg{
    flex: 2;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    flex-shrink:0;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }
  .detailText{
    flex: 8;
  }
  .showDate{
    float: right;
    margin-right: 20px;
  }
</style>
