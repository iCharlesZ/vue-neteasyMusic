<template>
	<div class="sidebar">
		<transition name="fade" @touchmove.stop.prevent>
			<div class="menu-mask" v-show="isReallShow" @click="hideMenu"></div>
		</transition>	
		<transition name="side">
			<div class="menu-content" v-show="isReallShow">
				
			</div>
		</transition>
	</div>
</template>

<script>
	import store from './../../store'

	export default{
		methods: {
			// 显示菜单
			hideMenu () {
				console.log('hideMenu')
				store.dispatch({
					type: 'hideSideBar'
				})
			}
		},
		computed: {
			// 显示
			isReallShow () {
				return store.state.sideBar.isShow
			}
		},
	}
</script>


<style lang="stylus" rel="stylesheet/stylus">
	.sidebar
		.menu-mask
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			opacity: 1
			z-index:10
			background:rgba(0,0,0,0.5)
			transfrom:translateZ(0)
			&.fade-enter-to, &.fade-leave-to
				transition: opacity 0.3s
			&.fade-enter, &.fade-leave-to
				opacity: 0
		.menu-content
			position:fixed
			width:286px
			height:100%	
			top:0
			left:0
			bottom:0
			z-index:11
			overflow-y:auto
			background:#fff
			-webkit-overflow-scrolling:touch				
			&.side-enter-to, &.side-leave-to
				transition: transform 0.3s
			&.side-enter, &.side-leave-to
				transform:translate3d(-286px,0,0)
			.menu-userInfo
				box-sizing:border-box
				width:100%
				height:168px	
				position:relative
				padding:50px 15px 15px 15px


</style>