module.exports = {
	PID: 'A00', // 网球小程序

	NAV_COLOR: '#ffffff',
	NAV_BG: '#23C788',

	MEET_NAME: '预约',

	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单
 
	NEWS_CATE: '1=小黑板|leftbig1,2=网球知识|leftbig1,3=赛事快讯|leftbig3',
	MEET_TYPE: '1=场地预约|leftbig1,2=教练预约|leftbig2,3=团课预约',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}