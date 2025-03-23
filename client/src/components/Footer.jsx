import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterest,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-theme-bg-dark m-1 rounded-2xl ">
      {/* Uppper Navbar  */}
      <div className="max-w-9xl m-auto py-20 bg-opacity-90 bg-cover vg-center bg-[url(/assets/images/background/background-img2.jpg)]">
        <div className="grid md:grid-cols-4 gap-2 gap-y-10 px-8 ">
          {/* col 1 */}
          <div className="px-4 flex flex-col gap-5 md:gap-y-5">
            <div>
              <h2 className="text-white font-bold tracking-wide font-theme-font">
                Expertise
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Front End Development</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Back End Development</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Mobile Development</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>DevOps</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Quality Assurance</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Database Development</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Web Design</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* col 2 */}
          <div className="px-4 flex flex-col gap-5 md:gap-y-5">
            <div>
              <h2 className="text-white font-bold tracking-wide font-theme-font">
                Cities of Our Expertise
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Software Development </span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Web Application Development</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""} className="flex flex-nowrap gap-x-1">
                    <span>Web Development</span>
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* col 3 */}
          <div className="px-4 flex flex-col gap-5 md:gap-y-5">
            <div>
              <h2 className="text-white font-bold tracking-wide font-theme-font">
                Industries
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Finance Software</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Logistics</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Artificial Intelligence</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* col 4 */}
          <div className="flex flex-col gap-5 md:gap-y-10">
            <div>
              <h2 className="text-white font-bold tracking-wide font-theme-font">
                Industries
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Finance Software</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Logistics</Link>
                </li>
                <li className="text-sm text-gray-500 tracking-wide font-theme-font hover:font-semibold hover:text-white delay-100">
                  <Link to={""}>Artificial Intelligence</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-9xl m-auto" />
      {/* Lower Navbar  */}
      <div className="max-w-9xl m-auto py-10">
        <div className="px-4 lg:px-8 flex flex-col gap-y-5 md:flex-row justify-between items-between">
          {/* left container  */}
          <div className="text-center text-sm">
            <span className="text-md mx-1 text-gray-500 tracking-wide font-theme-font">
              @2024
            </span>
            <span className=" text-purple-600 hover:text-purple-500 tracking-wide font-theme-font">
              DigiTechii SOFTWARE.
            </span>
            <span className=" text-gray-500 tracking-wide font-theme-font">
              {" "}
              All Rights Reserved
            </span>
            <span className=" mx-1 text-white hover:text-purple-500 hover:cursor-pointer font-semibold tracking-wide font-theme-font">
              {" "}
              Privacy Policy
            </span>
          </div>
          {/* center container  */}
          <div className="text-white tracking-wide font-theme-font text-center">
            <span className="text-sm font-thin mx-2">Powered By</span>

            <span className="text-white font-semibold hover:text-blue-500 hover:cursor-pointer delay-100">
              DigiTechii Team.
            </span>
          </div>
          {/* right container */}
          <div className="flex items-center justify-center gap-x-4">
            <div>
              <Link to={""}>
                {" "}
                <span className="block rounded-full p-2 bg-gray-800 hover:bg-blue-500 delay-100">
                  <FaFacebook className="text-xl text-white " />
                </span>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <span className="block rounded-full p-2 bg-gray-800 hover:bg-blue-500 delay-100">
                  <FaInstagram className="text-xl text-white" />
                </span>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <span className="block rounded-full p-2 bg-gray-800 hover:bg-blue-500 delay-100">
                  <FaXTwitter className="text-xl text-white" />
                </span>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <span className="block rounded-full p-2 bg-gray-800 hover:bg-blue-500 delay-100">
                  <FaYoutube className="text-xl text-white" />
                </span>
              </Link>
            </div>
            <div>
              <Link to={""}>
                <span className="block rounded-full p-2 bg-gray-800 hover:bg-blue-500 delay-100">
                  <FaPinterest className="text-xl text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
