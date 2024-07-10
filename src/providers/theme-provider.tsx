// theme-provider.tsx主要用来提供网站的主题切换功能

"use client"; // 指示这个文件只在客户端渲染，Next.js 通过这种方式来区分客户端和服务器端的代码

import * as React from "react"; // 导入 React 库，提供用于构建用户界面的功能
import { ThemeProvider as NextThemesProvider } from "next-themes"; // 从 next-themes 库中导入 ThemeProvider 组件，next-themes 是一个用于 Next.js 应用程序的主题切换库
import { type ThemeProviderProps } from "next-themes/dist/types"; // 从 next-themes 库中导入 ThemeProviderProps 类型，用于类型检查和定义 ThemeProvider 组件的属性

// 定义并导出一个名为 ThemeProvider 的函数组件。这个组件接受 ThemeProviderProps 类型的属性，其中包含子组件 (children) 和其他额外的属性 (...props)
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>; // 返回一个 NextThemesProvider 组件。它将所有传入的属性 (...props) 传递给 NextThemesProvider，并将子组件 (children) 作为其子节点渲染。这意味着 ThemeProvider 组件实际上是 NextThemesProvider 组件的一个封装，用于提供主题切换功能
}