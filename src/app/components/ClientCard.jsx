import React from "react";
import { FaCircleDot } from "react-icons/fa6";
function ClientCard() {
  return (
    <div className="flex flex-col gap-y-10">
    {/* grid container */}
      <div className="grid grid-cols-8">
        {/* item 1 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/CureMedia.png"
            alt=""
          />
        </div>
        {/* item 2 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Ferretly.png"
            alt=""
          />
        </div>
        {/* item 3 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Multilogin.png"
            alt=""
          />
        </div>
        {/* item 4 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/ActivePlace.png"
            alt=""
          />
        </div>
        {/* item 5 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/lexplore.png"
            alt=""
          />
        </div>
        {/* item 6 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/Skyloov.png"
            alt=""
          />
        </div>
        {/* item 7 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/iOud.png"
            alt=""
          />
        </div>
        {/* item 8 */}
        <div className="h-32 w-32 p-2 rounded-3xl shadow-xl hover:shadow-md hover:shadow-purple-600 bg-slate-50">
          <img
            className="w-full h-full object-cover object-center"
            src="https://devoxsoftware.com/wp-content/uploads/2021/09/st_mark.png"
            alt=""
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
