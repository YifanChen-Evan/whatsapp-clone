// left-panel.tsx用于渲染左侧面板，包括header、搜索框和会话列表

import { ListFilter, LogOut, MessageSquareDiff, Search, User } from "lucide-react"; // 从 lucide-react 库中导入在UI中要用到的图标组件
import { Input } from "../ui/input"; // 导入 Input 组件（自定义的输入框组件）
import ThemeSwitch from "./theme-switch"; // 导入 ThemeSwitch 组件（用于切换主题的自定义组件）
import { conversations } from "@/dummy-data/db"; // 导入 conversations 数据，这是一个包含会话数据的假数据文件
import Conversation from "./conversation"; // 导入 Conversation 组件（用于渲染单个会话的自定义组件）

// 定义 LeftPanel 函数组件
const LeftPanel = () => {

	return (
		// 返回一个 div 元素，定义了宽度为 1/4 和右边框颜色为 gray-600 的样式
		<div className='w-1/4 border-gray-600 border-r'>
			{/* 创建一个 div 元素，用来装4个图标按钮，设置 sticky 定位，使其在滚动时固定在顶部，背景颜色为 bg-left-panel，层叠顺序为 10 */}
			<div className='sticky top-0 bg-left-panel z-10'>

				{/* Header 具有 flex 布局，内容在主轴上均匀分布，背景颜色为 gray-primary，内边距为 3，子元素在交叉轴上居中对齐 */}
				<div className='flex justify-between bg-gray-primary p-3 items-center'>
					{/* 渲染 User 图标，大小为 24 */}
					<User size={24} />

					{/* 创建一个 div 元素，用来装除了User图标外的3个图标按钮，使这3个图标与User图标分布在div两侧 */}
					<div className='flex items-center gap-3'>
						<MessageSquareDiff size={20} /> {/* TODO: This line will be replaced with <UserListDialog /> */}
						<ThemeSwitch />
						<LogOut size={20} className='cursor-pointer' /> {/* 具有可点击的样式 */}
					</div>
				</div>

				{/* 创建一个容器，包含搜索框和过滤图标 */}
				<div className='p-3 flex items-center'>
					{/* 搜索框里包含搜索图标和输入框 */}
					<div className='relative h-10 mx-3 flex-1'>
						{/* 搜索图标位置绝对，位于输入框左侧，垂直居中 */}
						<Search
							className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10'
							size={18}
						/>

						{/* 输入框 */}
						<Input
							type='text'
							placeholder='Search or start a new chat'
							className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent'
						/>
					</div>

					{/* 过滤图标具有可点击的样式 */}
					<ListFilter className='cursor-pointer' />
				</div>
			</div>

			{/* 创建一个 div 显示聊天列表，具有 flex 布局，方向为列，最大高度为 80%，并且支持溢出滚动 */}
			<div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
				{/* 遍历 conversations 数据数组，为每个会话渲染一个 Conversation 组件，并将会话数据传递给 Conversation 组件 */}
				{conversations.map((conversation) => (
					<Conversation key={conversation._id} conversation={conversation} />
				))}

				{/* 如果 conversations 数组为空，显示提示信息，表示没有会话 */}
				{conversations?.length === 0 && (
					<>
						<p className='text-center text-gray-500 text-sm mt-3'>No conversations yet</p>
						<p className='text-center text-gray-500 text-sm mt-3 '>
							We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
						</p>
					</>
				)}
			</div>
		</div>
	);
};
export default LeftPanel; // 导出 LeftPanel 组件