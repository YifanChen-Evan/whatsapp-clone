// schema.ts文件用于定义 Convex 数据库的模式(schema)文件。Convex 是一个用于构建实时应用的框架

// 导入 Convex 提供的函数和验证器，用于定义数据库模式和表
import { defineSchema, defineTable } from "convex/server"; // 用于定义数据库的模式和表
import { v } from "convex/values"; // 提供了一组验证器，用于定义字段的类型和验证规则

// 使用 defineSchema 函数定义并导出数据库模式(schema)
export default defineSchema({
	// 定义一个名为 tasks 的表，表中的字段有text，completed
	tasks: defineTable({
		text: v.string(),
		completed: v.boolean(),
	}),
	// 定义一个名为 products 的表，表中的字段有name，price
	products: defineTable({
		name: v.string(),
		price: v.number(),
	}),
});