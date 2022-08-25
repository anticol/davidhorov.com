import React from "react";

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div className="pt-14 pb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Interested in collaborating together?
        </h2>
        <a
          href="mailto:contact@davidhorov.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>

    </div>
  );
}

export default CTA;
