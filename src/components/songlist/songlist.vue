<template>
	<div class="songlists" v-if="getSongSheet.playlist">
		<div class="songlist" v-for="(item, index) in getSongSheet.playlist.tracks" :key="index" @click="playIndex(item.id)">
			<div class="warpper">
				<div class="listIndex">
					<span class="index">{{index + 1}}</span>
				</div>
				<div class="songInfo">
					<div class="detail">
						<p v-if="getSongSheet.playlist" class="name">{{getSongSheet.playlist.tracks[index].name}}</p>
						<p v-if="getSongSheet.playlist" class="singer">{{getSongSheet.playlist.tracks[index].ar[0].name}}</p>
					</div>
					<div class="border-1px"></div>
				</div>
			</div>
			<i class="rightSetting icon-list-circle"></i>
		</div>
	</div>
</template>

<script>
	import store from './../../store'

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			playIndex (id) {
				this.$http.get('https://bird.ioliu.cn/netease/song?id=' + id)
					.then((res) => {
						if (res.data.data.mp3.url) {
							store.dispatch({
								type: 'set_MusicDetail',
								isShow: true
							})
							store.commit({
								type: 'setMusicList',
								data: res.data.data
							})
							store.commit({
								type: 'playIndex',
								url: res.data.data.mp3.url
							})
							store.commit('play')
						} else {
							alert("该资源为VIP专享!")
						}
					})
					.catch(function(error){
				        console.log(error)
				    })
			}
		},
		computed: {
			getSongSheet () {
				return this.$store.getters.getMusicSheetList ? this.$store.getters.getMusicSheetList : ''
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.songlists
		padding-bottom:46px
		.songlist
			height:54px
			position:relative
			.warpper
				display:flex
				height:54px
				position:absolute
				top:0
				left:0
				right:0
				botttom:0
				&:active
					background:$list_active
				.listIndex
					width:54px
					height:54px
					flex: 0 0 54px
					font-size:0
					.iconIndex
						display:inline-block
						font-size:14px
						color:$primarycolor
						width:54px
						height:54px
						line-height:54px
						text-align:center
					.index
						display:inline-block
						font-size:16px
						font-weight:500
						color:#BABABA
						width:54px
						height:54px
						line-height:54px
						text-align:center
				.songInfo
					flex:1 1 auto
					height:54px
					max-width: calc(100% - 54px)
					box-sizing:border-box
					.border-1px
						border-1px($border_1px)
					.detail
						width:auto
						max-width: calc(100% - 54px)
						height:100%
						display:flex
						padding:5px
						box-sizing:border-box
						flex-direction: column
						justify-content: space-around
						p
							margin: 0
							width: 100%;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							&.name
								font-size:14px
								color:#333
								padding: 2px 0;
								font-weight:400
							&.singer
								font-size:10px
								color:#aaa
								padding: 2px 0;
								font-weight:400
			.rightSetting
				position:absolute
				right:0
				top:0
				width:54px
				height:54px
				line-height:54px
				font-size:14px
				text-align:center
				color:#aaa
				&:active
					background:$list_active
</style>