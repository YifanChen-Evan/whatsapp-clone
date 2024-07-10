// conversation.tsx文件定义了一个 Conversation 组件，用于显示 left-panel 对话列表中的单个对话项，包括头像、对话名称、最后一条消息的摘要和时间

import { formatDate } from "@/lib/utils"; // 导入 formatDate 函数用于格式化日期
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; // 导入用于显示头像的组件
import { MessageSeenSvg } from "@/lib/svgs"; // 导入用于显示消息已读图标的组件
import { ImageIcon, Users, VideoIcon } from "lucide-react"; // 导入图片图标、用户图标、视频图标组件

// 定义 Conversation 组件，接受 conversation 对象作为参数
const Conversation = ({ conversation }: { conversation: any }) => {
	const conversationImage = conversation.groupImage; // 从 conversation 对象中提取 groupImage 并存储在 conversationImage 变量中
	const conversationName = conversation.groupName || "Private Chat"; // 从 conversation 对象中提取 groupName，如果 groupName 不存在则默认为 "Private Chat"
	const lastMessage = conversation.lastMessage; // 从 conversation 对象中提取 lastMessage
	const lastMessageType = lastMessage?.messageType; // 从 lastMessage 对象中提取 messageType 并存储在 lastMessageType 变量中

    // 定义 authUser 变量，表示当前用户（假设当前用户的 ID 是 "user1"）
	const authUser = { _id: "user1" };

    // 返回 JSX 代码，用于渲染组件
	return (
		<>
			<div className={`flex gap-2 items-center p-3 hover:bg-chat-hover cursor-pointer `}>
                {/* 显示头像 */}
				<Avatar className='border border-gray-900 overflow-visible relative'>
                    {/* 如果当前在线，就显示一个表示在线状态的小绿点 */}
					{conversation.isOnline && (
						<div className='absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground' />
					)}
                    {/* 头像图片如果不存在就显示占位图 */}
					<AvatarImage src={conversationImage || "/placeholder.png"} className='object-cover rounded-full' />
                    {/* 头像加载失败时显示占位符 */}
					<AvatarFallback>
						<div className='animate-pulse bg-gray-tertiary w-full h-full rounded-full'></div>
					</AvatarFallback>
				</Avatar>

                {/* 创建一个包含对话信息的容器 div，并设置宽度 */}
				<div className='w-full'>
                    {/* 创建一个子容器用于显示对话名称和时间 */}
					<div className='flex items-center'>
						<h3 className='text-xs lg:text-sm font-medium'>{conversationName}</h3>
						<span className='text-[10px] lg:text-xs text-gray-500 ml-auto'>
							{formatDate(lastMessage?._creationTime || conversation._creationTime)}
						</span>
					</div>
                    {/* 创建一个段落 p 用于显示最后一条消息的摘要 */}
					<p className='text-[12px] mt-1 text-gray-500 flex items-center gap-1 '>
                        {/* 如果最后一条消息的发送者是当前用户，则显示消息已读图标 */}
						{lastMessage?.sender === authUser?._id ? <MessageSeenSvg /> : ""}
                        {/* 如果是群聊，显示群组图标 */}
						{conversation.isGroup && <Users size={16} />}
                        {/* 如果没有最后一条消息，显示 "Say Hi!" */}
						{!lastMessage && "Say Hi!"}
                        {/* 如果最后一条消息类型是文本，只需检查该消息内容是否为大于或超过30个字符 */}
						{lastMessageType === "text" ? lastMessage?.content.length > 30 ? (
                            // 如果长度超过30个字符，则只取前30个字符并在末尾添加...
							<span className='text-xs'>{lastMessage?.content.slice(0, 30)}...</span>
						) : (
                            // 否则把消息照原样呈现
							<span className='text-xs'>{lastMessage?.content}</span>
                            // 如果不是文本类型，比如图片或者视频，就返回空，不显示图片或视频的url，只显示相应的图片或视频图标
						) : null}
						{lastMessageType === "image" && <ImageIcon size={16} />}
						{lastMessageType === "video" && <VideoIcon size={16} />}
					</p>
				</div>
			</div>
            {/* 使用 hr 元素在对话之间添加一条分隔线 */}
			<hr className='h-[1px] mx-10 bg-gray-primary' />
		</>
	);
};
export default Conversation;