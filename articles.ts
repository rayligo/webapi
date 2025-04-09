import * as model from "../models/articles";

// Get all articles
const getAll = async (ctx: RouterContext) => {
  const articles = await model.getAll();
  ctx.body = articles.length ? articles : {};
};

// Get article by ID
const getById = async (ctx: RouterContext) => {
  const id = ctx.params.id;
  const article = await model.getById(id);
  if (article.length) {
    ctx.body = article[0];
  } else {
    ctx.status = 404;
  }
};

// Create new article
const createArticle = async (ctx: RouterContext) => {
  const body = ctx.request.body;
  const result = await model.add(body);
  if (result.status === 201) {
    ctx.status = 201;
    ctx.body = body;
  } else {
    ctx.status = 500;
    ctx.body = { err: "Insert failed" };
  }
};