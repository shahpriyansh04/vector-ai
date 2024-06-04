import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const getDocuments = query({
  args: {},
  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())
      ?.tokenIdentifier as string;

    if (!userId) {
      return [];
    }
    const docs = await ctx.db
      .query("documents")
      .withIndex("by_tokenIdentifier", (q) => q.eq("tokenIdentifier", userId))
      .collect();
    return docs;
  },
});

export const createDocument = mutation({
  args: {
    title: v.string(),
  },
  async handler(ctx, args) {
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

    if (!userId) {
      throw new ConvexError("Not authenticated");
    }

    await ctx.db.insert("documents", {
      title: args.title,
      tokenIdentifier: userId,
    });
  },
});
