import axios from "axios";

export default {
  async loadNews(context) {
    const response = await axios.get(
      "https://vue-animal-shelter-7c71c-default-rtdb.europe-west1.firebasedatabase.app/news.json"
    );

    const responseData = await response.data;

    const news = [];

    for (const key in responseData) {
      const article = {
        id: key,
        image: responseData[key].image,
        text: responseData[key].text,
        title: responseData[key].title,
      };
      news.push(article);
    }

    context.commit("setNews", news);
  },
};
