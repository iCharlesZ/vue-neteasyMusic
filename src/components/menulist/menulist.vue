<template>
	<div class="menulist">
		<transition name="sideUp">
			<div class="content" ref="content" v-show="showMenu">
				<p class="title">
					删除歌单
				</p>
			</div>
		</transition>
		<transition name="fade">
			<div class="mask" v-show="showMenu" @click="hideMenuList" @touchmove.stop.prevent="stopTouch($event)"></div>
		</transition>
	</div>
</template>

<script>
	import store from './../../store'

	export default {
		data () {
			return {
				isShow: false
			}
		},
		methods: {
			stopTouch (event) {
				return
			},
			hideMenuList () {
				store.dispatch({
					type: 'hideMenuList'
				})
			}
		},
		computed: {
			showMenu () {
				this.isShow = this.$store.getters.getIsShow ? this.$store.getters.getIsShow : false
				return this.$store.getters.getIsShow ? this.$store.getters.getIsShow : false
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">	

	.menulist
		font-size:12px
		.content
			background:#fff
			position:fixed
			z-index:16
			height:auto
			bottom:0
			left:0
			right:0
			padding:25px 0
			&.sideUp-enter-to,&.sideUp-leave-to
				transition: transform 0.3s
			&.sideUp-enter,&.sideUp-leave-to
				transform:translate3d(0,100%,0)
			.title
				margin:0
				height:20px
				line-height:20px
				padding:0 15px
		.mask
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			z-index:15
			opacity:1
			background:rgba(0,0,0,0.5)
			&.fade-enter-to,&.fade-leave-to
				transition: all 0.3s
			&.fade-enter,&.fade-leave-to
				opacity:0
</style>
