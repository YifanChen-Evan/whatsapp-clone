// theme-switch.tsx文件用于主题切换功能

"use client";
import { Button } from "@/components/ui/button"; // 导入 Button 组件
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // 导入与下拉菜单相关的组件
import { useTheme } from "next-themes"; // 从 "next-themes" 导入 useTheme 钩子，用于处理主题切换
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"; // 导入 MoonIcon 和 SunIcon 图标，分别表示2种主题

// 定义名为 ThemeSwitch 的函数组件
const ThemeSwitch = () => {
	const { setTheme } = useTheme(); // 使用 useTheme 钩子，从中解构出 setTheme 方法，用于设置主题

	// 返回一个包含主题切换按钮的 DropdownMenu 组件
	return (
		<DropdownMenu>
			{/* DropdownMenuTrigger 组件包裹一个 Button 组件，作为下拉菜单的触发器，asChild：表示触发器将作为其子组件 */}
			<DropdownMenuTrigger asChild className='bg-transparent relative'>
				<Button variant='outline' size='icon'>
					{/* 浅色主题图标 */}
					<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					{/* 深色主题图标 */}
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					{/* 仅供屏幕阅读器读取的文本，用于可访问性，显示“Toggle theme” */}
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			{/* DropdownMenuContent 组件包含三个 DropdownMenuItem 项目，分别用于切换到不同的主题 */}
			<DropdownMenuContent align='end' className='bg-gray-primary'>
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
export default ThemeSwitch;