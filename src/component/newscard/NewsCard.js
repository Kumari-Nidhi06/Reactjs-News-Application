import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsCard.css";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);
// <-- we can integrate the api like this --->
  // const NewsFetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b9b23f886534add9c78f33a3ffb678d"
  //     );
  //     setNewsData(response.data.articles);
  //     console.log(response.data.articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // <-- we can integrate the api another way --->
  const NewsFetchData = async () => {
    const req = {
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2b9b23f886534add9c78f33a3ffb678d",
    }
    axios(req)
    .then((response) => {
       setNewsData(response.data.articles)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  useEffect(() => {
    NewsFetchData();
  }, []);
  return (
    <>
    <div className="main-conatiner">
      {newsData.map((ele) => {
        return (
        <div className="card">
          <img className="card-img-top" src={ele.urlToImage === null ? "https://www.investors.com/wp-content/uploads/2017/12/stock-nvidia-10-company.jpg" : ele.urlToImage} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{ele.author}</h5>
            <p className="card-text">
            {ele.title}
            </p>
            <div className="Read-more-main">
            <a href={ele.url} target="_blank" className="btn">
             Read More
            </a>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </>
  );
};

export default NewsCard;
