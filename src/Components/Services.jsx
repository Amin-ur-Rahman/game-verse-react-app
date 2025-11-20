import React from "react";
import {
  FaCloudDownloadAlt,
  FaGamepad,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Massive Game Library",
    icon: <FaGamepad className="text-3xl text-emerald-500" />,
    description:
      "Access a wide collection of games across all genres, from indie gems to AAA titles.",
  },
  {
    id: 2,
    title: "Fast & Secure Downloads",
    icon: <FaCloudDownloadAlt className="text-3xl text-emerald-500" />,
    description:
      "Enjoy high-speed, secure downloads with our reliable servers and verified links.",
  },
  {
    id: 3,
    title: "Community & Support",
    icon: <FaUsers className="text-3xl text-emerald-500" />,
    description:
      "Join a passionate gamer community and get 24/7 help from our support team.",
  },
  {
    id: 4,
    title: "Safe & Verified Content",
    icon: <FaShieldAlt className="text-3xl text-emerald-500" />,
    description:
      "Every game we feature is verified for safety, quality, and authenticity.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Our Services & Features</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          We’re committed to providing gamers with the best experience possible.
          From fast downloads to community support, everything is built with you
          in mind.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-800 hover:bg-gray-750 transition-all duration-300 rounded-2xl p-6 text-center shadow-lg hover:shadow-emerald-500/30"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
