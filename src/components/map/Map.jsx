import React from "react";
import "./map.css";
const Map = () => {
  return (
    <iframe
      title="locationMap"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.5728557530642!2d23.608593476714653!3d46.79302054380373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490d16c328e845%3A0xb0f0fa385b45657a!2sStrada%20Sobarilor%2038c%2C%20Cluj-Napoca%20400270!5e0!3m2!1sen!2sro!4v1689581686336!5m2!1sen!2sro"
      width="100%"
      height="250vh"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Map;
