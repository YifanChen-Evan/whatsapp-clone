// db.ts文件导出三个常量：conversations、messages 和 users，它们分别表示聊天会话、消息和用户的数据

// 导出一个名为 conversations 的数组，包含多个聊天会话对象
export const conversations = [
	{
		_id: "1", // 会话的唯一标识符
		admin: "user1", // 群聊管理员的用户 ID
		groupImage: null, // 群聊的图片，如果是私人聊天则为 null
		groupName: "Group A", // 群聊的名称，如果是私人聊天则为 null
		participants: ["user1", "user2", "user3"], // 参与会话的用户 ID 列表
		_creationTime: 1638232272, // 会话创建时间 Unix timestamp for 2021-11-30 12:04:32 UTC
		lastMessage: {
			_id: "1", // 最后一条消息的唯一标识符
			messageType: "text", // 消息类型（例如：文本、图像、视频）
			content: "Hello everyone!", // 消息内容
			sender: "user1", // 发送消息的用户 ID
		},
		sender: "user1", // 发送最后一条消息的用户 ID
		isOnline: true, // 会话是否在线
	},
	{
		_id: "2",
		admin: null, // 不是一个群聊，因此管理员为 null
		groupImage: "https://avatars.githubusercontent.com/u/75279146?v=4", // 群聊图片，如果是私人聊天则为 null
		groupName: null, // 群聊名称，如果是私人聊天则为 null
		participants: ["user4", "user5"],
		_creationTime: 1638235872, // Unix timestamp for 2021-11-30 13:04:32 UTC
		lastMessage: {
			_id: "2",
			messageType: "text",
			content: "Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!",
			sender: "user2",
		},
		sender: "user4",
		isOnline: true,
	},
	{
		_id: "3",
		admin: null,
		groupImage: null,
		groupName: null,
		participants: ["user6", "user7"],
		_creationTime: 1638239472, // Unix timestamp for 2021-11-30 14:04:32 UTC
		lastMessage: {
			_id: "3",
			messageType: "image",
			content: "image_url.jpg",
			sender: "user6",
		},
		sender: "user6",
		isOnline: false,
	},
	{
		_id: "4",
		admin: null,
		groupImage:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
		groupName: null,
		participants: ["user8", "user9", "user10"],
		_creationTime: 1638243072, // Unix timestamp for 2021-11-30 15:04:32 UTC
		lastMessage: {
			_id: "4",
			messageType: "video",
			content: "video_url.mp4",
			sender: "user9",
		},
		sender: "user9",
		isOnline: true,
	},
];

// 导出一个名为 messages 的数组，包含多个消息对象
export const messages = [
	{
		_id: "1", // 消息的唯一标识符
		content: "Hello everyone!", // 消息内容
		sender: "user1", // 发送消息的用户 ID
		messageType: "text", // 消息类型（例如：文本、图像、视频）
	},
	{
		_id: "2",
		content: "Hey there!",
		sender: "user2",
		messageType: "text",
	},
	{
		_id: "3",
		content: "How's it going!?",
		sender: "user1",
		messageType: "text",
	},
	{
		_id: "4",
		content: "Fine, thanks!",
		sender: "user2",
		messageType: "text",
	},
];

// 导出一个名为 users 的数组，包含多个用户对象
export const users = [
	{
		_id: "user1", // 用户的唯一标识符
		name: "John Doe", // 用户的名称
		email: "johndoe@email.com", // 用户的电子邮件
		image: "https://randomuser.me/api/portraits/men/67.jpg", // 用户的头像图片 URL
		admin: true, // 是否为管理员
		isOnline: true, // 用户是否在线
	},
	{
		_id: "user2",
		name: "Jane Doe",
		email: "janedoe@email.com",
		image: "https://randomuser.me/api/portraits/women/67.jpg",
		isOnline: true,
	},
	{
		_id: "user3",
		name: "Alice",
		email: "alice@email.com",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
		isOnline: false,
	},
];