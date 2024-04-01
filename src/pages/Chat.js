import React from "react";

function Chat() {
  return (

<div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch pt-6 pr-4 pb-20 pl-1 my-auto w-full rounded-xl bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto text-3xl font-semibold text-black">
                  Groups
                </div>
                <div className="flex gap-5 justify-between self-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 self-start aspect-square w-[31px]"
                  />
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 aspect-square w-[34px]"
                  />
                </div>
              </div>
              <div className="shrink-0 mt-3.5 h-px bg-black border border-black border-solid max-md:max-w-full" />
              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-5 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-red-300 fill-opacity-60"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team A
                </div>
              </div>
              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-2 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-green-200"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team B
                </div>
              </div>

              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-2 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-orange-300"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team C
                </div>
              </div>
              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-2 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-orange-300"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team D
                </div>
              </div>
              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-2 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-orange-300"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team E
                </div>
              </div>
              <div className="flex gap-5 items-start px-6 pt-4 pb-3 mt-2 ml-3 text-2xl font-semibold text-black rounded-md bg-slate-50 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:flex-wrap max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start w-14 aspect-[1.05] fill-orange-300"
                />
                <div className="flex-auto my-auto max-md:max-w-full">
                  Team F
                </div>
              </div>
            </div>
          </div>
       
      
    
  );
}

export default Chat;