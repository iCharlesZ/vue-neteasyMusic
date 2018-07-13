<template>
	<transition name="sliderUpHideRight">
		<div class="songsheet" ref="songsheet" v-show="showSongSheet">
			<div class="songheader">
				<i class="back icon-back" @click.stop="hideSongSheet"></i>
				<p class="title">歌单</p>
				<i class="search icon-search"></i>
				<i class="menu icon-list-circle"></i>
			</div>
		</div>
	</transition>
</template>

<script>
	import store from './../../store'
	
	export default{
		methods: {
			hideSongSheet () {
				store.commit({
					type: 'setIsShowSongSheet',
					isShow: false
				})
			}
		},
		computed: {
			showSongSheet () {
				this.isShow = this.$store.getters.getIsShowSongSheet ? this.$store.getters.getIsShowSongSheet : false
				return this.isShow
			}
		}
	}
</script>


<style lang="stylus" rel="stylesheet/stylus">
	.songsheet
		position:fixed
		left:0
		top:0
		bottom:0
		right:0
		z-index: 14
		background: #fff
		overflow:auto
		-webkit-overflow-scrolling:touch
		.songheader
			position:fixed
			transform:translateZ(0)
			top:0
			left:0
			right:0
			height:50px
			z-index:10
			display:flex
			align-items:center
			padding:0 10px
			background: #C62F2F
			i
				flex:0 0 36px
				width:36px
				height:36px
				line-height:36px
				text-align:center
				font-size:24px
				color:#fff
				&.menu
					font-size:20px
			.title
				flex:1 1 auto
				max-width:calc(100% - 108px)
				font-size:16px
				color:#fff
				font-weight:400
				text-overflow:ellipsis
				overflow:hidden
				white-space:nowrap
				margin:0
				padding:0 5px



		&.sliderUpHideRight-enter-to,&.sliderUpHideRight-leave-to
			transition: all 0.3s
		&.sliderUpHideRight-enter
			transform:translate3d(0,100%,0)
			opacity: 0
		&.sliderUpHideRight-leave-to
			transform:translate3d(100%,0,0)
			opacity: 0

</style>