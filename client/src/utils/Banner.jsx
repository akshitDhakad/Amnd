import React, { useState } from "react";
import { TbMessageChatbot } from "react-icons/tb";

function Banner() {
  const [open, setOpen] = useState(false);
  return (
    <>

    <PopBox/>
      <div
        onClick={() => setOpen(false)}
        style={{ backgroundColor: "#483285",border:"1px solid #483285" }}
        className="fixed z-[9999] bottom-4 right-4 shadow-lg rounded-full flex items-center justify-center w-16 h-16 p-4 cursor-pointer hover:scale-110 transition-transform"
      >
        <TbMessageChatbot size={32} className="text-white" />
      </div>
    </>
  );
}

const PopBox = ({open, setOpen}) => {
  return (
    <div className={`${open?"fixed":"hidden"} z-[9999] bottom-4 right-4 shadow-lg rounded-lg bg-white w-96 h-96 p-4`}>
      <h1 className="text-xl font-bold">Let's Connect </h1>
      <p>Chat with me!</p>
    </div>
  );
}

export default Banner;
