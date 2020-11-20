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
        <div class="recommend-list">
        	<findsheetlist 
        		v-for="(sheet) of listNum"
        		:key="sheet.id" 
        		:imagesrc="sheet.imgsrc" 
        		:listwidth="listwidth"
        		:listpadding="padding"
        		:showbottomtitle="sheet.showbottomtitle" 
        		:bottomtitle="sheet.bottomtitle"
        		:showSongSheetId="sheet.id"
        		></findsheetlist>
        </div>
	</div>
</template>

<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import store from '../../store'
	import findsheettitle from '../findsheettitle/findsheettitle'
	import findsheetlist from '../findsheetlist/findsheetlist'


	export default{
		data() {
			return {
				listwidth: "33.3%",
				padding: "0.5%", 
				showbottomtitle: true,
				listNum: [],
				items:[],
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable :true
					},
					autoplay: {
						delay: 3000,
						stopOnLastSlide: false,
						disableOnInteraction: false
					},
					loop: true,
					observer:true,			//修改swiper自己或子元素时，自动初始化swiper
          			observeParents:true		//修改swiper的父元素时，自动初始化swiper
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			getSwiperJson() {
		        this.$http.get('https://bird.ioliu.cn/v1?url=https://www.zhchi.me/works/vuedata/neteasyMusic/swiper.json')
				.then((response) => {
		        		this.items = response.data.items
		        	})
		        	.catch(function(error){
		        		console.log(error)
		        	})
			},
			getRecmdJson() {
		        this.$http.get('https://bird.ioliu.cn/v1?url=https://www.zhchi.me/works/vuedata/neteasyMusic/recmdList.json')
		        	.then((response) => {
		        		let result = [];
		        		let count = response.data.listNum.length;
		        		for (let i = 0; i < 6; i++) {
						    let index = ~~(Math.random() * count) + i;
						    result[i] = response.data.listNum[index];
						    response.data.listNum[index] = response.data.listNum[i];
						    count--;
						}
		        		this.listNum = result
		        	})
		        	.catch(function(error){
		        		console.log(error)
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
		    this.getRecmdJson()
		    this.getSwiperJson()
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