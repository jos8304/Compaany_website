import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-white py-20 lg:py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 text-lg">if you have any questions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Phone",
              info: "02-1234-5678",
              subInfo: " 09:00 - 18:00",
            },
            {
              title: "email",
              info: "support@example.com",
              subInfo: "24/7 support",
            },
            {
              title: "address",
              info: "",
              subInfo: "",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.info}</p>
              <p className="text-gray-500 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12419.493869278576!2d-77.0157327743873!3d38.90400875287197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b797a9673a83%3A0xca67dbef35ea5242!2sinternational%20Office%20Building%2C%201319%20F%20St%20NW%2C%20Washington%2C%20DC%2020004!5e0!3m2!1sen!2sus!4v1739213698748!5m2!1sen!2sus"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            Contat Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
