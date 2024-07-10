// group-members-dialog.tsx文件用于显示一个对话框，其中包含一个按钮 "See members"。点击后，会显示当前组的所有成员列表，每个成员包括头像、姓名（或邮箱前缀）以及在线状态。如果用户是管理员，还会显示一个皇冠图标

import { users } from "@/dummy-data/db"; // 导入 users 数据，这里 users 是一个用户数组，包含用户的信息
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"; // 导入用于构建对话框的相关组件
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"; // 导入用于显示用户头像的相关组件
import { Crown } from "lucide-react"; // 从 lucide-react 库中导入 Crown 图标组件，👑 用于显示管理员标志

// 定义名为 GroupMembersDialog 的函数组件
const GroupMembersDialog = () => {
	return (
		// 返回一个 Dialog 组件，表示对话框
		<Dialog>

			{/* DialogTrigger 组件包裹了一个 p 元素，点击这个 p 元素将会触发对话框的打开 */}
			<DialogTrigger>
				<p className='text-xs text-muted-foreground text-left'>See members</p>
			</DialogTrigger>

			{/* DialogContent 组件包含对话框的内容 */}
			<DialogContent>
				{/* DialogHeader 包含对话框的头部 */}
				<DialogHeader>
					{/* DialogTitle 设置对话框的标题 */}
					<DialogTitle className='my-2'>Current Members</DialogTitle>
					{/* DialogDescription 包含对话框的描述部分，这里使用一个 div 元素包含用户列表 */}
					<DialogDescription>
						<div className='flex flex-col gap-3 '>
                            {/* 遍历 users 数组，生成用户列表 */}
							{users?.map((user) => (
								// 每个用户项用一个 div 元素表示，设置了 key 属性（使用用户的 _id），flex 布局，项目之间的间距为 3，居中对齐，并有内边距和圆角
								<div key={user._id} className={`flex gap-3 items-center p-2 rounded`}>
									{/* Avatar 组件显示用户头像 */}
									<Avatar className='overflow-visible'>
										{/* 如果用户在线，则显示一个绿色的小圆点 */}
										{user.isOnline && (
											<div className='absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-foreground' />
										)}
										{/* AvatarImage 显示用户的图片 */}
										<AvatarImage src={user.image} className='rounded-full object-cover' />
										{/* 如果加载失败则显示 AvatarFallback，一个带动画的灰色圆形背景 */}
										<AvatarFallback>
											<div className='animate-pulse bg-gray-tertiary w-full h-full rounded-full'></div>
										</AvatarFallback>
									</Avatar>

									<div className='w-full '>
										{/* div 元素包含用户的姓名（或邮箱前缀，如果姓名不可用） */}
										<div className='flex items-center gap-2'>
											<h3 className='text-md font-medium'>
                                                {/* johndoe@gmail.com */}
												{user.name || user.email.split("@")[0]}
											</h3>
											{/* 如果用户是管理员，则显示一个黄色的皇冠图标 */}
											{user.admin && <Crown size={16} className='text-yellow-400' />}
										</div>
									</div>
								</div>
							))}
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
export default GroupMembersDialog;