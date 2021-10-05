export const uniqueArticles = (articles) => {
  const uniqueArticleTitles = new Map();
  let result = [];
  articles.forEach((article) => {
    if (!uniqueArticleTitles.has(article.title)) {
      uniqueArticleTitles.set(article.title);
      result.push(article);
    }
  });
  return result;
};
