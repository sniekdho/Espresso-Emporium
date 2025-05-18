import React from "react";
import logo from "../assets/more/logo1.png";
import bottomImage from "../assets/more/10.png";
import footerImage from "../assets/more/24.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bottomImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="bg-cover bg-center text-[#331A15] p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left side */}
          <div className="space-y-6">
            <div>
              <img src={logo} alt="Logo" className="w-12 mb-2" />
              <h1 className="text-2xl font-bold">Espresso Emporium</h1>
              <p className="mt-2 text-sm">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/sniekdho.shafiq/"
                target="_blank"
              >
                <FaFacebookF className="hover:text-[#D2B48C] cursor-pointer" />
              </a>
              <FaTwitter className="hover:text-[#D2B48C] cursor-pointer" />
              <FaInstagram className="hover:text-[#D2B48C] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#D2B48C] cursor-pointer" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
              <p className="flex items-center gap-2">
                <FaPhone /> +88 01533 333 333
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> info@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="p-8 space-y-4 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">
              Connect with Us
            </h2>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Message"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="btn btn-outline btn-accent rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="relative text-base-content">
        {/* Background Image */}
        <img
          src={footerImage}
          alt="Footer background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Footer Content */}
        <div className="relative z-10 footer footer-center p-3 text-white">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All rights reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
