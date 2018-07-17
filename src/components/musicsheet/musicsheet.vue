<template>
	<div class="musicsheet">
		<div class="title">
			<i class="toggle icon-down" ref="toggleicon"></i>
			<div class="detail">
				<span class="name">我创建的歌单</span>
				<span class="count">(1)</span>
				<i class="setting icon-setting"></i>
			</div>
		</div>
		<div v-for="(item, index) in data_list" @click.stop="showSongSheet(item)">
			<div class="content">
				<img class="sheetimg" alt="" :src="item.playlist.coverImgUrl">
				<div class="detail">
					<p class="name">{{item.playlist.name}}</p>
					<p class="count">{{item.playlist.trackCount}} 首歌曲</p>
					<i class="setting icon-list-circle" @click.stop="showMenu"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../../store'

	export default{
		props: {

		},
		data () {
			return {
				isShow: false,
				showDownloadImage: false,
				sheetData: {},
				data_list: []
			}
		},
		methods: {
			showSongSheet (data) {
				// console.log(data)
				store.dispatch({
					type: 'set_MusicSheetList',
					data: data
				})
				store.commit({
					type: 'setIsShowSongSheet',
					isShow: true
				})
			},
			showMenu () {
				store.dispatch({
					type: 'showMenuList'
				})
			},
			createSongSheet() {
		        // this.$http.get('https://bird.ioliu.cn/v1?url=https://www.zhchi.me/works/vuedata/neteasyMusic/createSongSheet.json')
		        this.$http.get('http://bird.ioliu.cn/v1?url=https://www.ugmax.cn/vuedata/createSongSheet.json')
		        	.then((response) => {
		        		this.data_list = response.data
		        	})
		        	.catch(function(error){
		        		console.log(error)
		        	})
		    }
		},
		mounted() {
		    this.createSongSheet()
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.musicsheet
		height:auto
		width:100%
		background:#fff
		.title
			display:block
			height:28px
			line-height:28px
			background:#e1e1e1
			position:relative
			.toggle
				position:absolute
				top:50%
				left:10px
				font-size:14px
				color:#666
				transition:all 0.5s;
				transform:translate3d(0,-50%,0)
			.detail
				margin-left:35px
				color:#666
				.name
					display:inline-block
					vertical-align:middle
					font-weight:400
					font-size:12px
				.count
					display:inline-block
					vertical-align:middle
					font-weight:300
					font-size:12px
				.setting
					font-size:16px
					position:absolute
					width: 28px;
					line-height: 28px;
					text-align: center;
					height: 28px;
					top:50%
					right:10px
					transform:translate(0,-50%)
		.content
			height:60px
			width:100%
			box-sizing:border-box
			position:relative
			display:flex
			&:active
				background:$list_active
			.sheetimg
				margin:5px
				width:50px
				height:50px
				flex:0 0 50px
			.detail
				height:60px
				padding-left:5px
				flex:1 1 auto
				box-sizing:border-box
				position:relative
				.name,.count
					width:80%
					text-overflow:ellipsis
					overflow:hidden
					white-space:nowrap
					margin:0
					height:25px
					line-height:25px
				.name
					margin-top:5px
					color:#333
					font-size:14px
				.count
					margin-bottom:5px
					font-weight:400
					font-size:12px
					color:#666;
				.border-1px
					margin:0
					border-1px($border_1px)
				.setting
					position:absolute
					right:5px
					width:36px
					height:36px
					line-height:36px
					text-align:center
					top:50%
					color:$icon_color
					transform:translate3d(0,-50%,0)
					&:active
						background:$list_active
</style>