
const audioInfo = {
	state: {
		// 是否显示歌单列表
		showSongSheet: false
	},
	mutations: {
		// 设置是否显示歌单信息
		setIsShowSongSheet (state, obj) {
			state.showSongSheet = obj.isShow
		}
	},
	actions: {
		
	},
	getters: {
		// 获取歌单列表的显示状态
		getIsShowSongSheet: state => state.showSongSheet
	}
}
export default audioInfo