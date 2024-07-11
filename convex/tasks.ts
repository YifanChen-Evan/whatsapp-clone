// tasks.ts文件对应于schema中建立的tasks表，使用 Convex 框架来定义数据库操作，包括查询任务、添加任务、标记任务为完成和删除任务

import { v } from "convex/values"; // 用于定义字段类型验证
import { mutation, query } from "./_generated/server"; // mutation, query是自动生成的服务器端函数，用于执行数据库操作

// 使用 query 函数创建一个查询操作
export const getTasks = query({
	args: {}, // 查询操作不需要参数
	handler: async (ctx, args) => { // 异步函数，接收 ctx (上下文) 和 args (参数) 作为参数
		const tasks = await ctx.db.query("tasks").collect(); // 查询名为 "tasks" 的表，并返回所有结果
		return tasks; // 返回查询到的 tasks 数据
	},
});

// 使用 mutation 函数创建一个添加操作
export const addTask = mutation({
	args: {
		text: v.string(), // 添加操作需要一个 text 参数
	},
	handler: async (ctx, args) => {
		const taskId = await ctx.db.insert("tasks", { text: args.text, completed: false }); // 插入一条新记录到 "tasks" 表中，其中 completed 默认为 false
		return taskId; // 返回新插入记录的 taskId
	},
});

// 使用 mutation 函数创建一个完成任务操作
export const completeTask = mutation({
	args: {
		id: v.id("tasks"), // 完成任务操作需要一个 id 参数，且必须是 tasks 表中的有效标识符
	},
	handler: async (ctx, args) => {
		await ctx.db.patch(args.id, { completed: true }); // patch函数用于局部更新或修改数据。更新 "tasks" 表中 id 对应记录的 completed 字段为 true，表示任务已完成
	},
});

// 使用 mutation 函数创建一个删除任务操作
export const deleteTask = mutation({
	args: {
		id: v.id("tasks"), // 删除任务操作需要一个 id 参数，且必须是 tasks 表中的有效标识符
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id); // 删除 "tasks" 表中 id 对应的记录
	},
});