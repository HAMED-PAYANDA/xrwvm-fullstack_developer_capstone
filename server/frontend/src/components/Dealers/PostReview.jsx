import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Dealers.css";
import "../assets/style.css";
import Header from "../Header/Header";

const PostReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dealer, setDealer] = useState({});
  const [review, setReview] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [carmodels, setCarmodels] = useState([]);

  //  SAFE base URL
  const baseURL = window.location.origin;
  const dealerURL = `${baseURL}/djangoapp/dealer/${id}/`;
  const reviewURL = `${baseURL}/djangoapp/add_review/`;
  const carmodelsURL = `${baseURL}/djangoapp/get_cars/`;

  const getDealer = async () => {
    const res = await fetch(dealerURL);
    const data = await res.json();
    if (data.status === 200 && data.dealer.length > 0) {
      setDealer(data.dealer[0]);
    }
  };

  const getCars = async () => {
    const res = await fetch(carmodelsURL);
    const data = await res.json();
    setCarmodels(data.CarModels || []);
  };

  const postReview = async () => {
    let name =
      sessionStorage.getItem("firstname") +
      " " +
      sessionStorage.getItem("lastname");

    if (name.includes("null")) {
      name = sessionStorage.getItem("username");
    }

    if (!model || !review || !date || !year) {
      alert("All details are mandatory");
      return;
    }

    const [make_chosen, model_chosen] = model.split(" ");

    const payload = {
      name: name,
      dealership: id,
      review: review,
      purchase: true,
      purchase_date: date,
      car_make: make_chosen,
      car_model: model_chosen,
      car_year: year,
    };

    const res = await fetch(reviewURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (res.ok) {
        navigate(`/dealer/${id}`);
    }
    };

  useEffect(() => {
    getDealer();
    getCars();
  }, [id]);

  return (
    <div>
      <Header />

      <div style={{ margin: "5%" }}>
        <h1 style={{ color: "darkblue" }}>{dealer.full_name}</h1>

        <textarea
          cols="50"
          rows="7"
          placeholder="Write your review..."
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="input_field">
          Purchase Date{" "}
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="input_field">
          Car Make & Model
          <select onChange={(e) => setModel(e.target.value)} defaultValue="">
            <option value="" disabled>
              Choose Car Make and Model
            </option>
            {carmodels.map((car, index) => (
              <option
                key={index}
                value={`${car.CarMake} ${car.CarModel}`}
              >
                {car.CarMake} {car.CarModel}
              </option>
            ))}
          </select>
        </div>

        <div className="input_field">
          Car Year{" "}
          <input
            type="number"
            min="2015"
            max="2025"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <button className="postreview" onClick={postReview}>
          Post Review
        </button>
      </div>
    </div>
  );
};

export default PostReview;