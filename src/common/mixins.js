import { debounce } from 'common/utils';
import BackTop from 'components/content/backtop/BackTop'

export const itemImgListenerMixin = {
    data(){
        itemImgListener: null
    },
    mounted() {
        //监听goodsItem的图片是否加载完成
        const refresh = debounce(this.$refs.scroll.refresh, 50)
        this.itemImgListener = ()=>{
            refresh();
        }
        this.$bus.$on('ImageLoaded',this.itemImgListener)
    }
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data(){
        return {
            IsShowBackTop: false,
        }
    },
    methods:{
        BackTop(){
            this.$refs.scroll.ScrollTo(0, 0, 500);  //取到scroll组件的ScrollTo()方法完成回到顶部
          }
    }

}