import { TbMessageChatbot } from "react-icons/tb";

function Banner() {
  return (
    <div
      style={{ backgroundColor: "#483285",border:"1px solid #483285" }}
      className="fixed z-[9999] bottom-4 right-4   shadow-lg rounded-full flex items-center justify-center w-16 h-16 p-4 cursor-pointer hover:scale-110 transition-transform"
    >
      <TbMessageChatbot size={32} className="text-white" />
    </div>
  );
}

export default Banner;
