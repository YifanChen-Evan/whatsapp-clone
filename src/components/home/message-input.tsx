// message-input.tsx文件用于在right-panel中构建消息输入框

import { Laugh, Mic, Plus, Send } from "lucide-react"; // 从 lucide-react 库中导入 Laugh, Mic, Plus, 和 Send 图标，分别表示 表情、语音、添加附件、发送
import { Input } from "../ui/input"; // 导入 Input 组件，用于构建聊天输入框
import { useState } from "react"; // 从 react 库中导入 useState 钩子
import { Button } from "../ui/button"; // 导入 Button 组件

// 定义名为 MessageInput 的函数组件
const MessageInput = () => {
	// 声明状态变量 msgText，初始化为空字符串，用于存储输入框中的消息文本
	const [msgText, setMsgText] = useState(""); // setMsgText 是更新 msgText 状态的方法

	// 返回一个包含消息输入区域的 div 元素
	return (
		<div className='bg-gray-primary p-2 flex gap-4 items-center'>

			{/* 在输入框左侧添加一个 div 元素，包含两个图标 Laugh 和 Plus，用于表情选择器和附件功能（未实现） */}
			<div className='relative flex gap-2 ml-2'>
				{/* EMOJI PICKER WILL GO HERE */}
				<Laugh className='text-gray-600 dark:text-gray-400' />
				<Plus className='text-gray-600 dark:text-gray-400' />
			</div>

			{/* 定义 form 元素，包含输入框和提交按钮 */}
			<form className='w-full flex gap-3'>
				<div className='flex-1'> {/* flex-1：在弹性布局中占据剩余空间，确保输入框能自动伸展 */}
					{/* Input 组件，用于输入消息文本 */}
					<Input
						type='text'
						placeholder='Type a message'
						className='py-2 text-sm w-full rounded-lg shadow-sm bg-gray-tertiary focus-visible:ring-transparent'
						value={msgText} // 输入框的值绑定到 msgText 状态
						onChange={(e) => setMsgText(e.target.value)} // 当输入框的值改变时，调用 setMsgText 更新状态
					/>
				</div>
				{/* 在输入框右侧添加一个 div 元素，包含发送按钮或语音按钮 */}
				<div className='mr-4 flex items-center gap-3'>
					{/* 条件渲染：如果消息文本长度大于0代表有输入的文本内容，此时显示发送按钮 */}
					{msgText.length > 0 ? (
						<Button
							type='submit'
							size={"sm"}
							className='bg-transparent text-foreground hover:bg-transparent'
						>
							<Send />
						</Button>
					// 否则没有输入消息文本，显示语音按钮
					) : (
						<Button
							type='submit'
							size={"sm"}
							className='bg-transparent text-foreground hover:bg-transparent'
						>
							<Mic />
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};
export default MessageInput;