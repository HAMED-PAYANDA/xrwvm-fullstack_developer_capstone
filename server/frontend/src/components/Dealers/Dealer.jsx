import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Dealers.css";
import "../assets/style.css";

import positive_icon from "../assets/positive.png";
import neutral_icon from "../assets/neutral.png";
import negative_icon from "../assets/negative.png";
import review_icon from "../assets/reviewbutton.png";

import Header from "../Header/Header";

const Dealer = () => {
  const { id } = useParams();

  const [dealer, setDealer] = useState({});
  const [reviews, setReviews] = useState([]);
  const [unreviewed, setUnreviewed] = useState(false);

  // ✅ SAFE base URL (works everywhere)
  const baseURL = window.location.origin;
  const dealerURL = `${baseURL}/djangoapp/dealer/${id}/`;
  const reviewsURL = `${baseURL}/djangoapp/reviews/dealer/${id}/`;

  const getDealer = async () => {
    try {
      const res = await fetch(dealerURL);
      const data = await res.json();
      if (data.status === 200 && data.dealer.length > 0) {
        setDealer(data.dealer[0]);
      }
    } catch (err) {
      console.error("Error fetching dealer:", err);
    }
  };

  const getReviews = async () => {
    try {
      const res = await fetch(reviewsURL);
      const data = await res.json();
      if (data.status === 200) {
        data.reviews.length > 0
          ? setReviews(data.reviews)
          : setUnreviewed(true);
      }
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const sentimentIcon = (sentiment) =>
    sentiment === "positive"
      ? positive_icon
      : sentiment === "negative"
      ? negative_icon
      : neutral_icon;

  useEffect(() => {
    getDealer();
    getReviews();
  }, [id]); // ✅ only dependency needed

  return (
    <div style={{ margin: "20px" }}>
      <Header />

      <div style={{ marginTop: "10px" }}>
        <h1 style={{ color: "grey" }}>
          {dealer.full_name}

          {/* ✅ SPA-safe navigation */}
          {sessionStorage.getItem("username") && (
            <Link to={`/postreview/${id}`}>
              <img
                src={review_icon}
                alt="Post Review"
                style={{
                  width: "10%",
                  marginLeft: "10px",
                  marginTop: "10px",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          )}
        </h1>

        <h4 style={{ color: "grey" }}>
          {dealer.city}, {dealer.address}, Zip - {dealer.zip}, {dealer.state}
        </h4>
      </div>

      <div className="reviews_panel">
        {reviews.length === 0 && !unreviewed && (
          <div>Loading Reviews…</div>
        )}

        {unreviewed && <div>No reviews yet!</div>}

        {reviews.map((review, index) => (
          <div key={index} className="review_panel">
            <img
              src={sentimentIcon(review.sentiment)}
              className="emotion_icon"
              alt="Sentiment"
            />
            <div className="review">{review.review}</div>
            <div className="reviewer">
              {review.name} {review.car_make} {review.car_model}{" "}
              {review.car_year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealer;