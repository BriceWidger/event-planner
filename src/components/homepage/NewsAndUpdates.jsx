import React from "react";

const NewsAndUpdates = () => {
  return (
    <div
      id="news-updates-container"
      className="news-updates-container d-flex justify-content-center align-items-center"
      style={{ height: 1075.97, backgroundColor: "#eaeaea" }}
    >
      <div className="container mt-5 mb-5">
        <div className="row text-center">
          <div className="col-md-8 offset-md-2">
            <h2 className="mb-4">News & Updates</h2>
            <p className="mb-5">
              Cras posuere non dui eu tincidunt. Maecenas congue dignissim
              tortor, eget euismod ex. Duis fringilla auctor faucibus. Donec
              pulvinar venenatis nisi. Nam vitae lectus egestas, pretium ante
              sed, ultrices ligula. Donec erat elit, semper eu risus et, gravida
              sollicitudin enim. Nunc sit amet imperdiet tellus. Ut lacinia odio
              urna, non eleifend odio porttitor in. Fusce vitae dictum dui, at
              cursus enim.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/eventcreate/image/upload/v1575844569/themes/theme%20assets/news_bar_ycbvgq.jpg"
            />
          </div>
          <div className="col-md-6 mb-5">
            <h5 className="mb-3">
              <strong>Join us for a kick-off Cocktail Hour</strong>
            </h5>
            <h4 className="mb-3">
              <strong>Posted November 1</strong>
            </h4>
            <p>
              Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed
              nisi massa. Aliquam eget enim nunc. Praesent blandit blandit
              ornare. Sed lacinia felis quis elit luctus, et tincidunt elit
              aliquam. Sed porttitor eros id purus sollicitudin, quis
              pellentesque nunc pulvinar. Ut accumsan a sem quis dignissim. Sed
              lacus mauris, efficitur ac lobortis id, faucibus at quam.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/eventcreate/image/upload/v1575844568/themes/theme%20assets/news_speaker_msi3hf.jpg"
            />
          </div>
          <div className="col-md-6 mb-5">
            <h5 className="mb-3">
              <strong>Call for Speakers!</strong>
            </h5>
            <h4 className="mb-3">
              <strong>Posted October 20</strong>
            </h4>
            <p>
              Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed
              nisi massa. Aliquam eget enim nunc. Praesent blandit blandit
              ornare. Sed lacinia felis quis elit luctus, et tincidunt elit
              aliquam. Sed porttitor eros id purus sollicitudin, quis
              pellentesque nunc pulvinar. Ut accumsan a sem quis dignissim. Sed
              lacus mauris, efficitur ac lobortis id, faucibus at quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
