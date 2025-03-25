// NewsList.js
import React from "react";
import NewsItem from "./NewsItem";
import { getDynamicDate } from "../homeMainPictureComponent/HomeMainPictureComponent";

const calculateDate = (offsetDays) => {
  const dynamicDate = getDynamicDate(); // Now a Date object
  dynamicDate.setDate(dynamicDate.getDate() + offsetDays);
  return dynamicDate.toLocaleDateString(undefined, { month: "long", day: "numeric" });
};

const newsItems = [
  {
    image:
      "https://res.cloudinary.com/eventcreate/image/upload/v1575844569/themes/theme%20assets/news_bar_ycbvgq.jpg",
    title: "Join us for a kick-off Cocktail Hour",
    date: `Posted ${calculateDate(-30)}`, // 1 month before "Join us on {getDynamicDate()}"
    text: "Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa. Aliquam eget enim nunc. Praesent blandit blandit ornare. Sed lacinia felis quis elit luctus, et tincidunt elit aliquam. Sed porttitor eros id purus sollicitudin, quis pellentesque nunc pulvinar. Ut accumsan a sem quis dignissim. Sed lacus mauris, efficitur ac lobortis id, faucibus at quam.",
  },
  {
    image:
      "https://res.cloudinary.com/eventcreate/image/upload/v1575844568/themes/theme%20assets/news_speaker_msi3hf.jpg",
    title: "Call for Speakers!",
    date: `Posted ${calculateDate(-42)}`, // 12 days before the first date
    text: "Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa. Aliquam eget enim nunc. Praesent blandit blandit ornare. Sed lacinia felis quis elit luctus, et tincidunt elit aliquam. Sed porttitor eros id purus sollicitudin, quis pellentesque nunc pulvinar. Ut accumsan a sem quis dignissim. Sed lacus mauris, efficitur ac lobortis id, faucibus at quam.",
  },
];

const NewsList = () => {
  return (
    <div>
      {newsItems.map((item, index) => (
        <NewsItem
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default NewsList;
