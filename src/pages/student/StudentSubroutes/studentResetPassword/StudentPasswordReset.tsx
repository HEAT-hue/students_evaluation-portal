import { useContext, useState } from "react";
import { ViewResultContext } from "../../../../contexts/student";
import BackGroundComp from "../BackGroundComp";
import { StudentLogOutModal } from "../studentLogOut/StudentLogOut";

const StudentPasswordReset = () => {
  // SETTING UP THE GLOBAL CONTEXT ON THE RESULT MODAL
  const { CloseViewResult, showviewResult } = useContext(ViewResultContext);
  const [Password, setPassword] = useState("");
  return (
    <>
      {/* BACKGROUND IMAGE AND BLUR */}
      <BackGroundComp />
      {/* LOGOUT MODDAL */}
      {showviewResult.resultstatus && <StudentLogOutModal />}
      <div>
        {/* MAIN RESET PASWORD MENU */}
        <div
          className="bg-[#2b3b3c] md:w-[450px] h-[500px]
         my-28 rounded-2xl absolute md:left-[25%] lg:left-[45%]
         flex flex-col items-center capitalize gap-8 
          left-[5%] right-[5%] sm:left-[20%] sm:right-[16%] top-[-4%] sm:top-0"
        >
          <h1 className="mt-6 font-bold text-yellow-500">Reset Passsword</h1>
          <div>
            <form>
              <div></div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-2 text-white "
                  >
                    old Password
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="old pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mt-1 pl-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-10 text-white "
                  >
                    New Pasword
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="new pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mt-1 pl-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    return e.target.value;
                  }}
                />
              </div>
              <div>
                <div>
                  <label
                    htmlFor="term"
                    className=" font-bold text-xs flex ml-1 mt-10 text-white "
                  >
                    confrim Pasword
                  </label>
                </div>

                <input
                  type="text"
                  placeholder="confirm pasword"
                  className="border-2 rounded-md capitalize text-xs w-64 h-8 
                  outline-none mb-2 mt-1 pl-6"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    return e.target.value;
                  }}
                />
              </div>
            </form>
          </div>
          <div>
            <ul className="mt-6 flex justify-center  items-center gap-x-12">
              <li className="list-none">
                <button className="px-10 py-2  bg-slate-300 rounded-lg">
                  cancel
                </button>
              </li>
              <li>
                <button className="px-10 py-2 rounded-lg bg-yellow-600">
                  Reset
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export { StudentPasswordReset };
