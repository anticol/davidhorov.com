import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";
import styled from 'styled-components';

const arrowUp = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000">
    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
    <g><g><path d="M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c270.2,0,490-219.8,490-490C990,229.8,770.2,10,500,10z M730.8,512.5c-24.4,24.4-64.1,24.4-88.4,0l-79.9-79.8v285.7c0,34.5-28,62.6-62.6,62.6c-34.5,0-62.6-28-62.6-62.6V432.7l-79.8,79.8c-12.2,12.2-28.2,18.3-44.2,18.3c-16,0-32-6.1-44.2-18.3c-24.4-24.4-24.4-64,0-88.5L500,193.2L730.8,424C755.2,448.4,755.2,488.1,730.8,512.5z" /></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
  </svg>
)
function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-2 justify-between items-start">
        {/* {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })} */}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@davidhorov.com"
              className="text-fun-gray-light font-medium"
            >
              David Horov
            </a>
          </div>
        </p>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12" onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }}>
        <ArrowUpWrapper>
          {arrowUp}
        </ArrowUpWrapper>
      </div>
    </footer>
  );
}

export default Footer;


const ArrowUpWrapper = styled.div`
  filter: invert(1);
  width:40px;
  position: fixed;
  right:20px;
  bottom:20px;
  cursor:pointer;
`