<template>
    <div class="page">
        <top class="noflex" title="首页" ref="header">
            <div slot="back" class="mfb" style="color: blue;margin-left: 10px">客服支持</div>
            <div slot="right" class="right absolute" style="color: blue">业务设置</div>
        </top>
        <div class="wrap">
            <div class="swiper-container" id="swiperImg">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item of 3">
                        <img class="banner" src="../../../static/img/3.jpg" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div>

            </div>
            <div class="contain">
                <div class="containItem" v-for="item of base_home">
                    <div  :class="item.name"></div>
                    <div>{{item.value}}</div>
                </div>
            </div>
            <div class=" stop">
                <div class="notice">院内公告</div>
                <div class="swiper-container " id="stopText">
                    <div class="swiper-wrapper">
                        <div  class="swiper-slide">关于我院将进行......</div>
                        <div  class="swiper-slide">李教授将来我院进行培训....</div>
                        <div  class="swiper-slide">顿领导将会来视察.....</div>
                    </div>
                </div>
            </div>
        </div>

        <app-footer class="noflex" :currentNav="currentNav"  ref="footer"></app-footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import {mainHeightMixin} from '../../lib/mixin'
    import config from '../../lib/config'
    import http from '../../lib/http'
    import appFooter from '../../components/app-footer.vue'
    export default{
        components: {
            top,
            appFooter
        },
        mixins: ['mainHeightMixin'],
        data(){
            return {
                currentNav: 0,
                adsettings:[],
                base_home:config.base_home
            }
        },
        created(){
          this.swiper = null;
          this.swipers = null;
        },
        mounted(){
            this._swiper();
            this._swiper1();
        },
        methods:{
            _swiper(){
                setTimeout(()=>{
                    this.swiper = new Swiper ('#swiperImg', {
                        direction: 'horizontal',
                        loop: true,
                        // 如果需要分页器
                       pagination: '.swiper-pagination',
                        autoplay:3000
                    })
                },100)
            },
            _swiper1(){
                setTimeout(()=>{
                    this.swiper = new Swiper ('#stopText', {
                        direction: 'vertical',
                        loop: true,
                        // 如果需要分页器
                       pagination: '.swiper-pagination',
                        autoplay:3000
                    })
                },200)
            },

        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/common.scss';
    .page{
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .swiper-container{
        width: 100%;
        height:300px;
    }
    .wrap{
        flex: 1;
    }
    .banner{
        width: 100%;
        height: 100%;
    }
    .contain{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap:wrap;
        border-bottom: 1px solid gainsboro;
        border-top: 1px solid gainsboro;
        padding: 30px 0;
    }
    .containItem{
        text-align: center;
        width: 180px;
    }
    @each $i in book, guide, queuing, payment, report, steward, help, more{
        .#{$i}{
            width: 90px;
            height: 90px;
            background-image: url('../../../static/img/index/#{$i}.png');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin:0 auto;
        }
    }
.stop{
    display: flex;
    padding: 20px;
    border-bottom: 1px solid gainsboro;
}
    .notice{
        flex: 2;
        flex-shrink:0
    }
    #stopText{
        flex: 8;
        height: 45px;
    }

</style>
