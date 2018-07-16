<template>
	<transition name="sliderUpHideRight">
		<div class="musicdetail" v-show="isShowMusicDetail">
			<div class="filterbg" :style="{backgroundImage : 'url('+ getMusicList.al.picUrl +')', backgroundSize : 'cover', backgroundPosition : 'center center'}">
			</div>
			<div class="detailcontent">
				<div class="content-header">
					<i class="back icon-back" @click="hideMusicDetail"></i>
					<div class="musicTopDetail">
						<p class="name">{{getMusicList.name}}</p>
						<p class="singer">{{getMusicList.ar[0].name}}</p>
					</div>
					<i class="share icon-share"></i>
				</div>
				<div class="content-wrapper" v-show="showCD">
					<div class="cd">
						<div class="swith-line">
							<div class="triger" :class="isPlaying ? '' : 'pause'"></div>
						</div>
						<div class="cd-content" ref="cdcontent">
							<div class="wrapper" ref="cd" :class="isPlaying ? 'animate ' : ''">
								<div class="cd-bg"></div>
								<img class="img" :src="getMusicList.al.picUrl">
							</div>
						</div>
					</div>
					<div class="musicDo">
						<i class="icon icon-like"></i>
						<i class="icon icon-download"></i>
						<i class="icon icon-msg"></i>
						<i class="icon icon-list-circle-small"></i>
					</div>
				</div>
				<div class="content-footer">
					<div class="div-range">
						<range></range>
					</div>
					<div class="musicDetailCtrl">
						<i class="playType icon-music-shunxu"></i>
						<i class="prev icon-prevdetail"></i>
						<i class="playPause" :class="isPlaying ? 'icon-pause-detail' : 'icon-playdetail' " @click.stop="playPause"></i>
						<i class="next icon-nextdetail"></i>
						<i class="menu icon-list-music"></i>
					</div>
				</div>
			</div>	
		</div>
	</transition>
</template>

<script>
	import store from './../../store'
	import range from './../range/range'
	import filterbg from '../../assets/images/tianfuzhen.jpg'

	export default {
		data () {
			return {
				isPlay: false,
				filterbg: filterbg,
				showCD: true,
				getMusicList: {
					name: "不醉不会",
					ar: [
						{name: "田馥甄"}
					],
					al: {
						picUrl: "http://p1.music.126.net/2i22n90QwyExuHYRJwCc7A==/109951163298361970.jpg"
					}
				}
			}
		},
		methods: {
			hideMusicDetail () {
				store.dispatch({
					type: 'set_MusicDetail',
					isShow: false
				})
			},
			playPause () {
				store.commit('togglePlay')
			}
		},
		computed: {
			isShowMusicDetail () {
				if (this.$store.getters.getMusicList.name) {
					this.getMusicList = this.$store.getters.getMusicList
				}
				return this.$store.getters.getMusicDetail
			},
			isPlaying () {
				this.isPlay = this.$store.getters.getIsPlaying
				return this.$store.getters.getIsPlaying ? this.$store.getters.getIsPlaying : ''
			}
		},
		watch: {
			isPlay: function (newisPlay, oldisPlay) {
				if (newisPlay !== true) {
					let imageTrans = getComputedStyle(this.$refs.cd).transform
					let contentTrans = getComputedStyle(this.$refs.cdcontent).transform
					this.$refs.cdcontent.style.transform = contentTrans === 'none' ? imageTrans : imageTrans.concat('', contentTrans)
				}

				
			}
		},
		components: {
			'range': range
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@keyframes goRotate{
		0%{
			transform: rotate(0)
		}
		50%{
			transform: rotate(180deg)
		}
		100%{
			transform: rotate(360deg)
		}
	}

	.musicdetail
		position:fixed
		top:0
		left:0
		bottom:0
		right:0
		z-index:20
		transform:translate3d(0,0,0)
		background:#aaa
		.filterbg
			position:fixed
			height:100%
			width:100%
			top:0
			left:0
			bottom:0
			transition:all 0.5s
			right:0
			z-index:16
			filter: url(../../common/blur.svg#blur)
			filter:blur(30px)
		.detailcontent
			position:fixed
			height:100%
			width:100%
			top:0
			left:0
			bottom:0
			right:0
			z-index:17
			background:rgba(0,0,0,0.15)

			.content-header
				position:absolute
				top:0
				left:0
				right:0
				display:flex
				height:10vh
				padding-top:1vh
				box-sizing:border-box
				align-items:center
				.back,.share
					width:50px
					flex:0 0 50px
					height:8vh
					color:#fff
					font-size:24px
					line-height:8vh
					text-align:center
				.share
					font-size:32px
				.musicTopDetail
					flex:1 1 auto
					display:flex
					flex-direction:column
					justify-content:center
					color:#fff
					width:calc(100% - 100px)
					.singer,.name
						margin:0
						color:#fff
						font-size:12px
						padding:4px 0
						text-overflow:ellipsis
						overflow:hidden
						white-space:nowrap
					.name
						font-size:14px
						font-weight:400

			.content-wrapper
				position:absolute
				top:10vh
				left:0
				bottom:20vh
				right:0
				overflow:hidden
				.cd
					.swith-line
						width:80%
						height:1px 
						background-image:-webkit-linear-gradient(to left, rgba(255,255,255,0),rgba(255,255,255,0.6),rgba(255,255,255,0)); 
						background-image:linear-gradient(to left, rgba(255,255,255,0),rgba(255,255,255,0.6),rgba(255,255,255,0));
						margin:0 auto
						.triger
							position:absolute
							top:-14px
							left:50%
							transform: translate3d(-16px,0,0)
							width:90px
							height:140px
							background-image:url('../../assets/images/swith.png')
							background-size:cover
							transform-origin:14px 16px
							transition:all 0.3s
							z-index:5
						.triger.pause
							transform: translate3d(-16px,0,0) rotateZ(-30deg)
					.cd-content
						width:44vh
						height:44vh
						position:relative
						margin: 0 auto
						margin-top:70px
						.wrapper
							width:44vh
							height:44vh
							position:relative
							margin: 0 auto
							margin-top:70px
							&.animate
								animation: goRotate 16s linear infinite 0.1s;
							.cd-bg
								width:44vh
								height:44vh
								position:absolute
								top:0
								left:50%
								transform:translate3d(-50%,0,0)
								background:url('../../assets/images/cd-mine.png')
								background-size:100%
								z-index:2
							.img
								position:absolute
								display:block
								width:28vh
								height:28vh
								top:8vh
								transition:all 0.3s
								left:50%
								transform:translate3d(-50%,0,0)
								z-index:1
				.musicDo
					width:70vw
					position:absolute
					height:40px
					left:50%
					bottom:0
					transform:translate3d(-50%,0,0)
					display:flex
					align-items:center
					justify-content:space-around
					i
						display:inline-block
						width:40px
						width:40px
						line-height:40px
						text-align:center
						color:rgba(255,255,255,0.8)
						font-size:20px

			.content-footer
				position:absolute
				bottom:0
				left:0
				right:0
				height:18vh
				color:#fff
				background-image:-webkit-linear-gradient(to top, rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0),rgba(0,0,0,0)) 
				background-image:linear-gradient(to top, rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0),rgba(0,0,0,0))
				.div-range
					height:6vh
				.musicDetailCtrl
					height:12vh
					width:100%
					display:flex
					align-items:center
					justify-content:center
					font-size:0
					i
						display:inline-block
						font-size:28px
						width:20vw
						height:50px
						line-height:50px
						text-align:center
						&.playType,&.menu
							font-size:20px
							color:#e1e1e1
						&.playPause
							font-size:46px




		&.sliderUpHideRight-enter-to,&.sliderUpHideRight-leave-to
			transition: all 0.3s
		&.sliderUpHideRight-enter
			transform:translate3d(0,100%,0)
			opacity: 0
		&.sliderUpHideRight-leave-to
			transform:translate3d(100%,0,0)
			opacity: 0
</style>