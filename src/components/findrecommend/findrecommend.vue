<template>
	<div class="findrecommend">
		<div class="mySwp">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item, index) in items" :key="index">
					<img class="image" :src="item" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper> 
		</div>
			
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
        <findsheettitle></findsheettitle>
        <div class="recommend-list" @click="showSongSheet">
        	<findsheetlist 
        		v-for="(sheet, index) of listNum"
        		:key="sheet.id" 
        		:imagesrc="sheet.imgsrc" 
        		:listwidth="listwidth"
        		:listpadding="padding"
        		:showbottomtitle="sheet.showbottomtitle" 
        		:bottomtitle="sheet.bottomtitle"
        		></findsheetlist>
        </div>
	</div>
</template>

<script>
	import store from '../../store'
	import 'swiper/dist/css/swiper.css'
	import findsheettitle from '../findsheettitle/findsheettitle'
	import findsheetlist from '../findsheetlist/findsheetlist'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'


	export default{
		data() {
			return {
				listwidth: "33.3%",
				padding: "0.5%", 
				showbottomtitle: true,
				listNum: [
					{
						id: 1, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum1.jpg", 
						bottomtitle: "甜味摇滚丨温柔在耳边凝成絮语"
					},
					{
						id: 2, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum2.jpg", 
						bottomtitle: "我多想再见你，哪怕匆匆一眼就别离"
					},
					{
						id: 3, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum3.jpg", 
						bottomtitle: "当三首情歌遇上一个伤感的故事"
					},
					{
						id: 4, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum4.jpg", 
						bottomtitle: "盘尼西林&落日飞车"
					},
					{
						id: 5, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum5.jpg", 
						bottomtitle: "欧美治愈|决定转身的时候就不要频频回头"
					},
					{
						id: 6, 
						imgsrc: "https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/listNum6.jpg", 
						bottomtitle: "慢慢喜欢你-陈一发儿"
					}
				],
				items:[
					"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/taylor-swift.jpg",
					"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/xusong.jpg",
					"https://zhchi-me.github.io/vue-neteasyMusic/src/assets/images/swiper/linjunjie.jpg"
				],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable :true
					},
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					loop: true,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			showSongSheet () {
				console.log('showSongSheet')
				store.commit({
					type: 'setIsShowSongSheet',
					isShow: true
				})
			}
	    },
		components: {
            swiper,
            swiperSlide,
            findsheettitle,
            findsheetlist
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
		.mySwp
			min-height:165px;
		.swiper-container
			position:relative
			.swiper-wrapper
				.swiper-slide
					.image
						width:100%
			.swiper-pagination
				.swiper-pagination-bullet-active
						background:#C62F2F!important
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