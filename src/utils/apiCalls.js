const API_KEY = process.env.REACT_APP_API_KEY;

export const getNews = () => {
  return fetch(`https://gnews.io/api/v4/search?q=example&max=10&token=${API_KEY}&lang=en`)
    .then(res => res.json())
}

// export const getHeadlineNews = () => {
//   return fetch(`https://gnews.io/api/v4/top-headline?q=example&max=10&token=${API_KEY}&lang=en&topic=${topic}`)
//     .then(res => res.json())
// }
