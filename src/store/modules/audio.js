
const audioInfo = {
	state: {
		// audio元素
		audioelement: '',
		// 是否显示audio的列表
		showMusicDetail: false,
		// 是否显示歌单列表
		showSongSheet: false,
		// 是否正在播放
		playing: false
	},
	mutations: {
		// play设置
		play (state) {
			state.playing = true
		},
		// 暂停设置
		pause (state) {
			state.playing = false
		},
		togglePlay (state) {
			if (state.playing) {
				state.playing = false
			} else {
				state.playing = true
			}
		},
		// 设置是否显示歌单信息
		setIsShowSongSheet (state, obj) {
			state.showSongSheet = obj.isShow
		},
		// 开关显示底部列表
		toggerMusicDetail (state) {
			state.showMusicDetail = !state.showMusicDetail
		},
		// 关闭底部列表
		setMusicDetail (state, obj) {
			state.showMusicDetail = obj.isShow
		}
	},
	actions: {
		set_MusicDetail ({commit}, obj) {
			commit('setMusicDetail', obj)
		}
	},
	getters: {
		// 获取歌单列表的显示状态
		getIsShowSongSheet: state => state.showSongSheet,
		// 获取音乐是否打开底部音乐列表
		getMusicDetail: state => state.showMusicDetail,
		// 获取音乐是否播放
		getIsPlaying: state => state.playing
	}
}
export default audioInfo