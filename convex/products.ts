// products.ts文件对应于schema中建立的products表，使用 Convex 框架来定义数据库操作，包括查询、添加和删除，无需创建标记完成的操作是因为产品通常是静态数据，一旦添加到数据库中，它们的信息就不会像任务一样需要经常更新状态

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// 查询操作
export const getProducts = query({
	args: {},
	handler: async (ctx, args) => {
		const products = await ctx.db.query("products").collect(); // 查询数据库中的所有产品数据，并返回结果
		return products;
	},
});

// 添加操作
export const addProduct = mutation({
	args: {
		name: v.string(),
		price: v.number(),
	},
	handler: async (ctx, args) => {
		const productId = await ctx.db.insert("products", { name: args.name, price: args.price }); // 向数据库中插入新产品，并返回插入的产品 ID
		return productId;
	},
});

// 删除操作
export const deleteProduct = mutation({
	args: {
		id: v.id("products"), // 进行类型验证，确保是 products 表中的有效 ID
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id); // 删除指定 ID 的产品数据
	},
});