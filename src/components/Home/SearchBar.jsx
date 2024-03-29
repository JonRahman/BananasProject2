import React from 'react';
import { useState } from "react";
import random from "../../assets/images/quiz.jpg";

export default function SearchBar() {
  const [focusBox, setFocusBox] = useState(false);
  const focusHandler = () => {
    setFocusBox(!focusBox);
  };

  return (
    <div className="relative z-40">
      <input
        type="text"
        placeholder="Search by Category, Module, Topic"
        onFocus={focusHandler}
        onBlur={focusHandler}
        className="bg-white bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
      />
      {focusBox && (
        <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
          <h2 className="uppercase text-gray-400 font-bold">trending topics</h2>
          <div className="my-4 flex items-center gap-2 flex-wrap">
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">AI - Technology</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">
              Front-End Web Development
            </p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">
              Facial Recognition
            </p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Cyber Security</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Law</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">MIT</p>
          </div>
          <div>
            <h2 className="uppercase text-gray-400 font-bold py-4">projects</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                    Cyber Security
                  </h1>
                  <p className="opacity-40">400 Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
              
                <h1 className="font-light capitalize text-base">AI</h1>
                <p className="opacity-40">350 Projects</p>
                <h1 className="font-light capitalize text-base">
                  Geography
                </h1>
                <p className="opacity-40">102 Projects</p>

              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
              <img
                src={random}
                alt="random"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="font-light capitalize text-base">
                  Web Development
                </h1>
                <p className="opacity-40">300 Projects</p>
              </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>

                  <h1 className="font-light capitalize text-base">Python</h1>
                  <p className="opacity-40">250 Projects</p>

                  <h1 className="font-light capitalize text-base">
                  Science
                  </h1>
                  <p className="opacity-40">102 Projects</p>

                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}
