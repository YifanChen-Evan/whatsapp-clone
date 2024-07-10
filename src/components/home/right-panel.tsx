// right-panel.tsx用于渲染右侧面板

"use client"; // 指示该文件只在客户端渲染

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // 导入用于显示用户头像的组件
import { Video, X } from "lucide-react"; // 从 lucide-react 库中导入 Video 和 X 图标组件。Video 图标用于视频通话，X 图标用于关闭聊天窗口
import MessageInput from "./message-input"; // 导入 MessageInput 组件（用于输入消息的自定义组件）
import MessageContainer from "./message-container"; // 导入 MessageContainer 组件（用于显示消息内容的自定义组件）
import ChatPlaceHolder from "@/components/home/chat-placeholder"; // 导入 ChatPlaceHolder 组件（用于在没有选择聊天时显示占位符内容的自定义组件）
import GroupMembersDialog from "./group-members-dialog"; // 导入 GroupMembersDialog 组件（用于显示群组成员的自定义组件）

// 定义 RightPanel 函数组件
const RightPanel = () => {
  // 定义 selectedConversation 变量，表示是否有选中的聊天会话
	const selectedConversation = true; // true代表有打开的聊天窗；null代表没有点开任何聊天窗
	if (!selectedConversation) return <ChatPlaceHolder />; // 如果selectedConversation = null，即没有选中的聊天会话，就返回 ChatPlaceHolder 组件

	const conversationName = "John Doe";
  const isGroup = true; // 如果是群聊，就会显示“See members”的trigger，点击后可以查看该群聊中的成员

	return (
    // 返回一个 div 元素，定义宽度为 3/4，并使用 flex 布局，方向为列
		<div className='w-3/4 flex flex-col'>
      {/* 创建一个 div 元素，用来装 会话名称，视频通话图标和关闭图标，宽度为 100%，使用 sticky 定位，使其在滚动时固定在顶部，层叠顺序为 50 */}
			<div className='w-full sticky top-0 z-50'>

				{/* Header包含头像、会话名称、群组成员对话框、视频通话链接和关闭图标 */}
				<div className='flex justify-between bg-gray-primary p-3'>

          {/* Header的左侧包含 头像、会话名称、群组成员对话框 */}
					<div className='flex gap-3 items-center'>
            {/* Avatar 组件用于显示用户头像，包括头像图片和加载动画 */}
						<Avatar>
							<AvatarImage src={"/placeholder.png"} className='object-cover' />
							<AvatarFallback>
								<div className='animate-pulse bg-gray-tertiary w-full h-full rounded-full' />
							</AvatarFallback>
						</Avatar>
            {/* 会话名称和 GroupMembersDialog 组件是垂直排列的 */}
						<div className='flex flex-col'>
							<p>{conversationName}</p>
							{isGroup && <GroupMembersDialog />} {/* 如果是群聊，就显示 GroupMembersDialog 组件 */}
						</div>
					</div>

          {/* Header的右侧包含 视频通话链接和关闭图标 */}
					<div className='flex items-center gap-7 mr-5'>
            {/* 视频通话链接包含 Video 图标 */}
						<a href='/video-call' target='_blank'>
							<Video size={23} />
						</a>
						<X size={16} className='cursor-pointer' /> {/* 具有可点击的样式 */}
					</div>
				</div>
			</div>

			{/* 渲染 MessageContainer 组件，用于显示聊天消息 */}
			<MessageContainer />

			{/* 渲染 MessageInput 组件，用于输入消息 */}
			<MessageInput />
		</div>
	);
};
export default RightPanel; // 导出 RightPanel 组件