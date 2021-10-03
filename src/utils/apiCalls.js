export const getNews = () => {
  return fetch('https://gnews.io/api/v4/search?q=example&token=461ae41c507a8d0eece2d688d1af4369&lang=en&max=10')
    .then(res => res.json())
}