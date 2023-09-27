import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in collaborating together?
        </h2>
        <a
          href="mailto:horov.david@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Leave me a message
        </a>
      </div>

      <div className="pt-14 pb-20">
        <a
          href="tel:+421904247916"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Give me a call
        </a>
      </div>

    </div>
  );
}

export default CTA;
