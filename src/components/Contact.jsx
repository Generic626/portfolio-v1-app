import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-white text-center mt-8 mb-16 md:mt-28 flex flex-col justify-center items-center"
    >
      {/* Call to action  */}
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl mb-2">
          Let's keep in contact.
        </h1>
        <h2 className="sm:text-xl">
          Shoot me an email and i'll reply asap. Many thanks!
        </h2>
      </div>

      {/* Container  */}
      <div className="max-w-[470px] bg-gray-300 h-[250px] m-4 sm:mx-auto p-4 rounded-xl">
        <form action="">
          <input
            type="text"
            placeholder="Message"
            className="w-full p-4 rounded-md mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-md mb-4"
          />

          <button className="w-full sm:w-[200px] p-4 bg-[#0a192f] sm:hover:bg-green-500 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
