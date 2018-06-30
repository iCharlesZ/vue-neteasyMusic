<template>
	<div class="header">
		<div class="header-warpper">
			<i class="menu icon-menu"></i>
			<div class="centermenu">
				<router-link tag="i" to="/mymusic">
					<i class="music icon-music"></i>
				</router-link>
				<router-link tag="i" to="/findmusic">
					<i class="find icon-wangyi"></i>
				</router-link>
				<router-link tag="i" to="/community">
					<i class="community icon-community"></i>
				</router-link>
			</div>
			<i class="search icon-search"></i>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default{

}
</script>


<style lang="stylus" rel="stylesheet/stylus">
	.header
		position:fixed
		top:0
		left:0
		right:0
		height:50px
		z-index:10
		background:#C62F2F
		.header-warpper
			height:100%
			background:$primarycolor
			display:flex
			align-items:center
			justify-content:space-between
			.icon-menu,.icon-search
				color:#fff
				font-size:26px
				padding:10px 15px
			.centermenu
				font-size:24px
				i
					margin:0 5px
					color:#eee
					&.router-link-active
						i
							color:$link_active
					&.active
						color:#4AE0A8
					&.music
						font-size:22px
</style>