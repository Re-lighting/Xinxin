const config = {
	//网页元数据
	metaData: {
		title: '小星星的个人主页🎉',
		description: '欢迎来到小星星的奇妙世界！',
		keywords: '小星星,小星星,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "https://s41.ax1x.com/2025/12/20/pZ3B1O0.jpg", // 头像
	welcometitle: "Hi, I'm Xinxin", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['对党忠诚', '温柔体贴','服务人民', '随和亲切', '热爱祖国', '才思敏捷', '风趣幽默', '清正廉洁', '善解人意'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "海洋女孩",
				"preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
				"url": "/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://www.github.com/Re-lighting" },
		{ icon: "mdi-email", link: "mailto:wzxmss@outlook.com" },
		{ icon: "mdi-qqchat", link: "https://s41.ax1x.com/2025/12/23/pZGero8.jpg" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
	//{ icon: "mdi-youtube", link: "https://www.youtube.com" },
	//{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
		"顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
		"心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
		"生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。",
		"落日沉溺于橘色的海，晚风沦陷于赤诚的爱。",
		"囿于市井，面向山海，远隔巷弄，且看花开。",
		"愿你千山暮雪海棠依旧，不为岁月惊扰平添忧愁。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "https://s41.ax1x.com/2025/12/21/pZ3xEu9.jpg", title: "博客", subtitle: "欢迎您的访问", text: "这博客怕是得了 写作拖延症 ，就像薛定谔的猫 --你不点进去 或许它正在偷偷酝酿一篇惊天动地的文章，只是还没找到灵感，或者干脆在摸鱼。总之，博客的门关得紧紧的，仿佛在说：今天不营业，改天再来吧！", url: "https://re-lighting.github.io/", show: false },
		{ go: "🗂️ 前往", img: "https://s41.ax1x.com/2025/12/20/pZ3B4Xt.jpg", title: "网盘", subtitle: "云端的百宝箱，数据的避风港", text: "它不只是一个存储空间，更像是数字世界的 哆啦A 梦口袋 ，想要什么，一掏就有，只是别忘了，口袋再大，也得记得整理，不然找起文件来，比在现实世界找一只袜子还难！", url: "https://drive.google.com/drive/mobile/my-drive?pli=1", show: false },
		{ go: "📷 前往", img: "https://s41.ax1x.com/2025/12/21/pZ3Xi1H.jpg", title: "仑中", subtitle: "2024-2027北仑中学8班大家庭", text: "三载晴雨都收在这方教室———试卷边的余温，黑板上的光点，友善的同学，都是我们写给彼此青春的注脚。", url: "", show: false },
		{ go: "🎇 前往", img: "https://s41.ax1x.com/2025/12/21/pZ3jpbq.jpg", title: "星星", subtitle: "1000000颗", text: "每一颗闪烁的星星都是宇宙写给你的一封情书。轻轻滑动指尖，便能穿越亿万光年的寂静，与无数温柔的光点悄然相会。", url: "https://stars.chromeexperiments.com/", show: false },
		{ go: "🗃 前往", img: "https://s41.ax1x.com/2025/12/21/pZ3xJHI.png", title: "github", subtitle: "我的github主页", text: "以代码为墨，共写未来之书。每一行皆是星火，每一次协作都在点亮无界的版图。这里，技术理想生长为一片森林，包容着每一片独特的叶子，共迎阳光。", url: "https://www.github.com/Re-lighting", show: false },
		{ go: "🎨 前往", img: "/img/sunshine.jpg", title: "Project 6", subtitle: "6,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "", show: false },
		{ go: "💍 前往", img: "/img/sunshine.jpg", title: "Project 7", subtitle: "7,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "", show: false },
		{ go: "🔍 前往", img: "/img/sunshine.jpg", title: "Project 8", subtitle: "8,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Xinxin"],
}

export default config
