export const uniqueArticles = (articles) => {
  // creating map data structure to store unique article titles
  const uniqueArticleTitles = new Map();
  // result array for returning unique articles
  let result = [];
  // iterating over every articles
  articles.forEach((article) => {
    // checking if map contains article title already
    if (!uniqueArticleTitles.has(article.title)) {
      // if it does not contain article title that means this is a new article
      // adding this new article title to map so that if a duplicate article with same title is found it will be ignored
      uniqueArticleTitles.set(article.title);
      // pushing the article to result array
      result.push(article);
    }
  });
  return result;
};
