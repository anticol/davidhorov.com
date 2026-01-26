import React from 'react'

type SectionTitleProps = {
  title: string;
}

function SectionTitle({title}: SectionTitleProps) {
    return (
      <div className="overflow-x-hidden w-full pt-5 mb-6">
        <div className="flex items-center gap-4 max-w-sm md:max-w-max mx-auto md:mx-0">
          <h2 className="text-center md:text-left relative text-3xl md:text-4xl font-bold pt-4 md:pt-0">
            {title}
          </h2>
          <div className="hidden md:block h-1 flex-grow bg-gradient-to-r from-fun-pink/50 to-transparent rounded-full max-w-[200px]" />
        </div>
      </div>
    )
}

export default SectionTitle
