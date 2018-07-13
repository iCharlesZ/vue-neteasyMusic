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
	import taylorswift from '../../assets/images/swiper/taylor-swift.jpg'
	import xusong from '../../assets/images/swiper/xusong.jpg'
	import linjunjie from '../../assets/images/swiper/linjunjie.jpg'

	import listNum1 from '../../assets/images/listNum1.jpg'
	import listNum2 from '../../assets/images/listNum2.jpg'
	import listNum3 from '../../assets/images/listNum3.jpg'
	import listNum4 from '../../assets/images/listNum4.jpg'
	import listNum5 from '../../assets/images/listNum5.jpg'
	import listNum6 from '../../assets/images/listNum6.jpg'

	export default{
		data() {
			return {
				listwidth: "33.3%",
				padding: "0.5%", 
				showbottomtitle: true,
				listNum: [
					{
						id: 1, 
						imgsrc: "http://p1.music.126.net/FcLkEIrwyp3p-OOjvBnV9A==/109951163396453847.jpg?param=140y140", 
						bottomtitle: "甜味摇滚丨温柔在耳边凝成絮语"
					},
					{
						id: 2, 
						imgsrc: "http://p1.music.126.net/aouIEl00w9ys8cFQ5Spyqw==/109951163401657454.jpg?param=140y140", 
						bottomtitle: "我多想再见你，哪怕匆匆一眼就别离"
					},
					{
						id: 3, 
						imgsrc: "http://p1.music.126.net/TU8_pba3jSzeKQ64PLFkiA==/109951163376936973.jpg?param=140y140", 
						bottomtitle: "当三首情歌遇上一个伤感的故事"
					},
					{
						id: 4, 
						imgsrc: "http://p1.music.126.net/mfYxWU5mq2KMURFZKps36g==/109951163346749380.jpg?param=140y140", 
						bottomtitle: "盘尼西林&落日飞车"
					},
					{
						id: 5, 
						imgsrc: "http://p1.music.126.net/Kav1gMEbl7pOqlCJqgkzZQ==/19123805742515320.jpg?param=140y140", 
						bottomtitle: "欧美治愈|决定转身的时候就不要频频回头"
					},
					{
						id: 6, 
						imgsrc: "http://p1.music.126.net/PRmxpnXD_F2PjEKjITaT5g==/109951163391429716.jpg?param=140y140", 
						bottomtitle: "慢慢喜欢你-陈一发儿"
					}
				],
				items:[
					taylorswift,
					xusong,
					linjunjie
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
					loop: true
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