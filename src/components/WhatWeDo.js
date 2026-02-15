import React from "react";
import "./WhatWeDoStyles.css";

import corporateImg from "../assets/49.jpg";
import weddingImg from "../assets/54.jpg";
import concertImg from "../assets/55.jpg";
import collegeFestImg from "../assets/57.jpg";
import birthdayImg from "../assets/60.jpg";
import exhibitionImg from "../assets/63.jpg";
import brandPromoImg from "../assets/65.jpg";
import conferenceImg from "../assets/78.jpg";

const whatWeDoItems = [
  {
    id: 1,
    title: "Corporate Events",
    image: corporateImg,
    description: "Offsites, launches, award nights and annual days planned end‑to‑end.",
    cta: "Plan a corporate event",
  },
  {
    id: 2,
    title: "Weddings",
    image: weddingImg,
    description: "From intimate ceremonies to grand destination weddings with curated themes.",
    cta: "Design my wedding",
  },
  {
    id: 3,
    title: "Concerts & Live Shows",
    image: concertImg,
    description: "High‑energy concerts, artist management and complete stage production.",
    cta: "Host a concert",
  },
  {
    id: 4,
    title: "College Fests",
    image: collegeFestImg,
    description: "Youth‑centric fests with stages, competitions, décor and crowd engagement.",
    cta: "Create a college fest",
  },
  {
    id: 5,
    title: "Birthday Parties",
    image: birthdayImg,
    description: "Theme‑based birthdays, kids’ parties and milestone celebrations.",
    cta: "Celebrate a birthday",
  },
  {
    id: 6,
    title: "Exhibitions",
    image: exhibitionImg,
    description: "Expos, trade fairs and curated stalls with impactful brand experiences.",
    cta: "Plan an exhibition",
  },
  {
    id: 7,
    title: "Brand Promotions",
    image: brandPromoImg,
    description: "On‑ground activations, roadshows and promo campaigns that stand out.",
    cta: "Promote my brand",
  },
  {
    id: 8,
    title: "Conferences",
    image: conferenceImg,
    description: "Industry conferences, seminars and meet‑ups with seamless coordination.",
    cta: "Host a conference",
  },
];

const WhatWeDo = () => {
  return (
    <section className="what-we-do" aria-labelledby="what-we-do-heading">
      <div className="what-we-do-header">
        <p className="what-we-do-eyebrow">What We Do</p>
        <h2 id="what-we-do-heading" className="what-we-do-title">
          Our Event Management Solutions
        </h2>
        <p className="what-we-do-subtitle">
          From intimate gatherings to large‑scale experiences, we craft events that feel effortless, immersive and
          unforgettable.
        </p>
      </div>

      <div className="what-we-do-grid">
        {whatWeDoItems.map((item) => (
          <article key={item.id} className="what-card">
            <div className="what-card-media">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="what-card-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button type="button" className="what-card-btn">
                  {item.cta}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;

