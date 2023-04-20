
    document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "AIzaSyBK52_UDE8tZ10HbmLy200fQasVREeEXIc"; 
  const placeId = "ChIJ7Tvw5Xr31WsRuWIZ4Tm8T1k";
  const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
  const reviewsContainer = document.getElementById("reviews-container");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.result && data.result.reviews) {
        const fiveStarReviews = data.result.reviews.filter((review) => review.rating === 5);

        fiveStarReviews.forEach((review) => {
          const reviewDiv = document.createElement("div");
          reviewDiv.classList.add("review");

          const authorName = document.createElement("h3");
          authorName.textContent = review.author_name;

          const reviewText = document.createElement("p");
          reviewText.textContent = review.text;

          reviewDiv.appendChild(authorName);
          reviewDiv.appendChild(reviewText);
          reviewsContainer.appendChild(reviewDiv);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching reviews:", error);
    });
});