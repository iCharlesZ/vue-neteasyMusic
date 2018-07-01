<template>
	<div class="findrecommend">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(item, index) in items" :key="index">
				<img class="image" :src="item" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div> 
		</swiper> 
		<div class="recommend-type">
        	<div class="div-type">
        		<i class="icon-type icon-fm"></i>
        		<p class="title">私人FM</p>
        	</div>
        	<div class="div-type">
        		<i class="icon-type icon-date"></i>
        		<p class="title">每日听歌推荐</p>
        	</div>
        	<div class="div-type">
        		<i class="icon-type icon-rank-list"></i>
        		<p class="title">云音乐热歌榜</p>
        	</div>
        </div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		data() {
			return {
				items:[
					'/static/images/swiper/taylor-swift.jpg',
					'/static/images/swiper/xusong.jpg',
					'/static/images/swiper/linjunjie.jpg'
				],
				swiperOption: {
					autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					autoplayDisableOnInteraction: false,
					observeParents: true,
					loop: true,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		components: {
            swiper,
            swiperSlide
        },
        mounted() {
			// 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
			// this.swiper.slideTo(3, 1000, false)
			console.log('mounted');
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.findrecommend
		position:fixed
		background:#fff
		overflow:auto
		top:86px
		bottom:46px
		left:0
		right:0
		z-index:11
		background:#fff
		-webkit-overflow-scrolling:touch
		.swiper-container
			position:relative
			.swiper-wrapper
				.swiper-slide
					.image
						width:100%
		.recommend-type
			width:100%
			height:90px
			display:flex
			align-items:center
			.div-type
				flex:1
				height:100%
				width:33.333333%
				font-size:0
				display:flex
				flex-direction: column
				justify-content: center
				align-items: center
				padding:0 10px
				.icon-type
					display:inline-block
					color: #C62F2F
					font-size:32px
					width:50px
					height:50px
					line-height:50px
					text-align:center
					border:1px solid #C62F2F
					border-radius:50%
				.title
					font-size:12px
					font-weight:400
					margin:0
					margin-top:8px
					text-overflow:ellipsis
					overflow:hidden
					white-space:nowrap
					width:100%
					text-align:center
		
</style>