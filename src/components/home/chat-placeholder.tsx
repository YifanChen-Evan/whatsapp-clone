// chat-placeholder.tsx文件用于在没有选择任何聊天时显示一个占位符界面，包括下载 WhatsApp for Windows 的提示信息和按钮，以及消息加密的提示

import { Lock } from "lucide-react"; // 从 lucide-react 库中导入 Lock 图标组件
import Image from "next/image"; // 从 next/image 库中导入 Image 组件，用于优化图片加载
import { Button } from "../ui/button"; // 导入 Button 组件

// 定义名为 ChatPlaceHolder 的函数组件
const ChatPlaceHolder = () => {
	return (
		// 返回一个 div 元素，设置了宽度为 3/4，背景颜色为 gray-secondary，并且使用了 Flexbox 布局，使其子元素在垂直方向上居中对齐，并有一定的内边距（py-10）
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>

			{/* 内部的 div 元素，继续使用 Flexbox 布局，使其子元素在垂直方向上居中对齐，并有一定的内边距（py-10）和元素之间的间距（gap-4） */}
			<div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
				{/* 使用 Image 组件加载并显示一张图片 */}
				<Image src={"/desktop-hero.png"} alt='Hero' width={320} height={188} />
				{/* 文本，字体大小为 3xl，字体为超细字体（font-extralight），上边距为 5（mt-5），下边距为 2（mb-2） */}
				<p className='text-3xl font-extralight mt-5 mb-2'>Download WhatsApp for Windows</p>
				{/* 一段描述文本，宽度为 1/2，文本居中（text-center），文本颜色为 gray-primary，字体大小为 sm，并且有 muted foreground 样式 */}
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>
					Make calls, share your screen and get a faster experience when you download the Windows app.
				</p>

				{/* Button 组件，具有圆角（rounded-full），上下外边距为 5（my-5），背景颜色为 green-primary，并且在悬停时变为 green-secondary */}
				<Button className='rounded-full my-5 bg-green-primary hover:bg-green-secondary'>
					Get from Microsoft Store
				</Button>
			</div>

			{/* 一个 p 元素，宽度为 1/2，上下边距为 auto（mt-auto），文本居中（text-center），文本颜色为 gray-primary，字体大小为 xs，并且有 muted foreground 样式。使用 Flexbox 布局，使其子元素水平居中对齐，并设置子元素之间的间距为 1 */}
			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
				<Lock size={10} /> Your personal messages are end-to-end encrypted
			</p>
		</div>
	);
};
export default ChatPlaceHolder; // 导出 ChatPlaceHolder 组件，以便其他文件可以导入和使用