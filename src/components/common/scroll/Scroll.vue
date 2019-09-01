<template>
    <div class="wrapper" ref="scrollWrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: "Scroll",
    props: {
        probeType:{   //使用这个组件时可能有些地方不需要实时监听滚动事件，可以由父组件决定
            type: Number,
            default: 0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll: null,
        }
    },
    mounted(){
        const wrapper = this.$refs.scrollWrapper;  //即使别的组件类名相同，也保证渠道scroll组件中的wrapper==>div
        //1.初始化better-scroll插件
        this.scroll = new BScroll(wrapper, {
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
            click: true, //设置为true，better-scroll才不会阻止元素的点击事件（button元素除外）
        })
        //2.监听滚动事件
        if(this.probeType===2 || this.probeType===3 ){
            this.scroll.on('scroll',(position) =>{
                //console.log(position)
                this.$emit('scroll',position);  //向父组件传递滚动事件
            })
        }
        //3.监听上拉加载事件
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp');
            })
        }
    },
    methods:{
        ScrollTo(x, y, time=300){
            this.scroll  && this.scroll.scrollTo(x, y, time);
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
        },
        refresh(){
            this.scroll && this.scroll.refresh();
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0;
        }
    }
}
</script>

<style scoped>

</style>