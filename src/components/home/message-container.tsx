// message-container.tsx文件用于在right-panel中显示消息列表

import { messages } from "@/dummy-data/db"; // 导入 messages 数据，这里 messages 是一个消息数组，包含消息内容和发送者信息
import ChatBubble from "./chat-bubble"; // 导入 ChatBubble 组件，用于显示单条消息的气泡样式

// 定义名为 MessageContainer 的函数组件
const MessageContainer = () => {
	// 返回一个 div 元素，作为消息容器，relative：使其子元素可以使用绝对定位，p-3：内边距为 3，flex-1：在弹性布局中占据剩余空间，overflow-auto：当内容溢出容器时显示滚动条，h-full：高度为 100%
	return (
		<div className='relative p-3 flex-1 overflow-auto h-full bg-chat-tile-light dark:bg-chat-tile-dark'>
			{/* 嵌套一个消息列表容器，水平外边距为 12，子元素垂直排列，子元素之间的间距为 3，高度为 100% */}
			<div className='mx-12 flex flex-col gap-3 h-full'>
				{/* 遍历 messages 数组，生成消息列表 */}
				{messages?.map((msg, idx) => (
					// 每条消息用一个 div 元素表示，并设置 key 属性（使用消息的 _id）
					<div key={msg._id}>
						{/* 在每个 div 元素中，渲染一个 ChatBubble 组件，表示单条消息的气泡样式 */}
						<ChatBubble />
					</div>
				))}
			</div>
		</div>
	);
};
export default MessageContainer;