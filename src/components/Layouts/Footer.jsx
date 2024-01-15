import React from "react";
import propTypes from "prop-types";

import Logo from "../Fragments/Logo";

const Footer = () => {
  return (
    <footer className="container border border-black/10 shadow-2xl shadow-black flex justify-center items-start gap-28 mt-28 py-10 px-[135px]">
      <Logo
        imageClassName="w-6 h-6"
        textClassName="text-2xl leading-9"
        textLogo="Pawsome"
      />
      <section className="info flex gap-[135px]">
        <div className="card text-stone-500">
          <div className="card-title text-lg mb-6">Education</div>
          <div className="card-content flex flex-col gap-4">
            <p>Pet care guides</p>
            <p>Health & Nutrition Tips</p>
            <p>FAQ’s</p>
          </div>
        </div>

        <div className="card text-stone-500">
          <div className="card-title text-lg mb-6">About Us</div>
          <div className="card-content flex flex-col gap-4">
            <p>Mission & Values</p>
            <p>Partnerships</p>
          </div>
        </div>

        <div className="card text-stone-500">
          <div className="card-title text-lg mb-6">Contact Us</div>
          <div className="card-content flex flex-col gap-4">
            <p>+1 466 9923 222</p>
            <p>pawsome@mail.com</p>
            <p>Green Park Blvd, Terrace road No. 26 Austin, TX</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
