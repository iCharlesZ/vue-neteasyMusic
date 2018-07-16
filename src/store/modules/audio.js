
const audioInfo = {
	state: {
		// audio元素
		audioelement: '',
		// 是否显示audio的列表
		showMusicDetail: false,
		// 是否显示歌单列表
		showSongSheet: false,
		// 全部音乐信息  包括歌单等等
		musicAllList: [],
		// 音乐播放信息
		musicList: [],
		// 是否正在播放
		playing: false,
		// 音乐歌单信息
		musicSheetList: []
	},
	mutations: {
		// play设置
		play (state) {
			state.playing = true
			state.audioelement.play()
		},
		// 暂停设置
		pause (state) {
			state.playing = false
			state.audioelement.pause()
		},
		togglePlay (state) {
			if (state.playing) {
				state.playing = false
				state.audioelement.pause()
			} else {
				state.playing = true
				state.audioelement.play()
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
		// 获取音乐元素 Dom
		setAudioElement (state, ele) {
			state.audioelement = ele
		},
		// 关闭底部列表
		setMusicDetail (state, obj) {
			state.showMusicDetail = obj.isShow
		},
		// 插入播放列表信息
		setMusicList (state, obj) {
			state.musicList = obj.data
		},
		playIndex (state, obj) {
			state.audioelement.setAttribute('src', obj.url)
		},
		// 设置音乐播放器的歌单列表数据
		setMusicSheetList (state, obj) {
			state.musicSheetList = obj.data
		}
	},
	actions: {
		set_AudioElement ({commit}, ele) {
			commit('setAudioElement', ele)
		},
		set_MusicDetail ({commit}, obj) {
			commit('setMusicDetail', obj)
		},
		set_MusicSheetList ({commit}, obj) {
			commit('setMusicSheetList', obj)
		}
	},
	getters: {
		// 获取歌单列表的显示状态
		getIsShowSongSheet: state => state.showSongSheet,
		// 获取音乐是否打开底部音乐列表
		getMusicDetail: state => state.showMusicDetail,
		// 获取音乐是否播放
		getIsPlaying: state => state.playing,
		// 获取音乐播放列表信息
		getMusicList: state => state.musicList,
		// 获取歌单信息
		getMusicSheetList: state => state.musicSheetList
	}
}
export default audioInfo