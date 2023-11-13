import React from "react";
import AliceCarousel from "react-alice-carousel";
import {ImStarFull,ImStarHalf} from "react-icons/im"
import "react-alice-carousel/lib/alice-carousel.css";
import s from "../pages/Home/Home.module.css";
import 'react-alice-carousel/lib/alice-carousel.css';
import avatar1 from "../assets/avatars/avatar1.jpg";
import avatar2 from "../assets/avatars/avatar2.jpg";
import avatar3 from "../assets/avatars/avatar3.jpg";
import avatar4 from "../assets/avatars/avatar4.jpg";
import avatar5 from "../assets/avatars/avatar5.jpg";
import avatar6 from "../assets/avatars/avatar6.jpg";
import avatar7 from "../assets/avatars/avatar7.jpg";
import avatar8 from "../assets/avatars/avatar8.jpg";

const responsive = {
  400: {
    items: 1,
  },

  550: {
    items: 2,
  },
  980: {
    items: 3,
  },
  1170: {
    items: 3,
  },
};
const items = [
  {
    username: "Mehmet Demir",
    halfStar: false,
    review: "Grains Logistic Solution has consistently delivered exceptional service. From prompt pickups to secure and timely deliveries, they've proven to be a reliable partner for our business. Five stars all the way!",
    avatar: avatar1,
  },
  {
    username: "Pavel Sava",
    halfStar: false,
    review: "Shipments are handled with precision, and their reliability shines through. Our goods always reach their destination intact and on schedule.",
    avatar: avatar2,
  },
  {
    username: "Ayşe Yilmaz",
    halfStar: true,
    review: "The customer service at Grains Logistic Solution is outstanding. They truly prioritize customer satisfaction, and it reflects in their interactions. Responsive, friendly, and always ready to assist. A pleasure to work with!",
    avatar: avatar3,
  },
  {
    username: "Nur Akgün",
    halfStar: false,
    review: "Managing international shipments can be complex, but not with this logistics company. They make it seamless and stress-free. My goods arrived in perfect condition, and the process was smooth from start to finish.",
    avatar: avatar4,
  },
  {
    username: "Julia Chernenko",
    halfStar: false,
    review: "Timely deliveries, professional staff, and a commitment to improvement.",
    avatar: avatar5,
  },
  {
    username: "Marcin Kaczmarek",
    halfStar: false,
    review: "Grains Logistic Solution offers cost-effective logistics solutions without compromising quality. While there's always room for improvement, their competitive pricing earns them a well-deserved 5 stars.",
    avatar: avatar6,
  },
  {
    username: "Serhii Malinovskyi",
    halfStar: false,
    review: "I appreciate the company's commitment to environmental sustainability. Their green logistics initiatives demonstrate a responsible approach, making them a preferred choice for eco-conscious businesses.",
    avatar: avatar7,
  },
  {
    username: "Leon Klein",
    halfStar: true,
    review: "Grains Logistic Solution handles cross-border logistics efficiently. Some enhancements in communication during transit would elevate the overall experience.",
    avatar: avatar8,
  },
];

const customPrevButton = () => (
  <span
    style={{ color: 'var(--main-orange-color)', border: 'none', padding: '10px',float: 'right',cursor: 'pointer' }}
  >
    {'<'}
  </span>
);

const customNextButton = () => (
  <span
    style={{ color: 'var(--main-orange-color)', border: 'none', padding: '10px',float: 'left',cursor: 'pointer' }}
  >
    {'>'}
  </span>
);

const Reviews = () => {
  const mapItems = items.map((rev) => (
    <div className={s.single_review_column}>
      <div className={s.single_review}>
        <img src={rev.avatar} alt="avatar" />
        <div className={s.single_review_name}>{rev.username}</div>
        <div className={s.single_review_stars}>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          <ImStarFull/>
          {rev.halfStar ? <ImStarHalf/> : <ImStarFull/>}
        </div>
        <p>{rev.review}</p>
      </div>
    </div>
  ));
  return <AliceCarousel renderPrevButton={customPrevButton}
  renderNextButton={customNextButton} disableDotsControls responsive={responsive} items={mapItems} />;
};

export default Reviews;
