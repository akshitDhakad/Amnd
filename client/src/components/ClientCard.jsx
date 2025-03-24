import React from "react";
import { FaCircleDot } from "react-icons/fa6";
function ClientCard() {
  return (
    <div className="flex flex-col gap-y-10">
      {/* grid container */}
      <div className="w-full grid grid-cols-2 gap-x-2  md:grid-cols-8 gap-y-5">
        {/* item 1 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/CureMedia.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 2 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Ferretly.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 3 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Multilogin.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 4 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/ActivePlace.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 5 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/lexplore.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 6 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Skyloov.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 7 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/iOud.png"
            alt="AMNDTECH Software"
          />
        </div>
        {/* item 8 */}
        <div className="h-32 xl:h-48 md:w-32 xl:w-48 p-2 rounded-3xl border-4 shadow-lg  hover:cursor-pointer hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            loading="lazy"
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/st_mark.png"
            alt="AMNDTECH Software"
          />
        </div>
      </div>
      {/* button container */}
      <div className="flex justify-center gap-x-2">
        <div>
          <FaCircleDot className="text-purple-500" />
        </div>
        <div>
          <FaCircleDot />
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
