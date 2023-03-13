// jshint esversion:6
import login from "../../../assets/login.jpg";
import school from "../../../assets/school.jpg";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let newDate = days[new Date().getDay()];

const list = { name: "uche", class: "ss1", userStatus: "Student" };
console.log(list.name);

const time = ["Morning", "Afternoon", "Evening"];

function ParenttHome() {
  return (
    <>
      <section className="fixed top-0 bottom-0 right-0">
        {/* background image setup */}
        <div className="student-image h-screen fixed left-0 top-0 bottom-0 right-0 md:left-1/4">
          <img
            src={school}
            alt="coridor"
            className=" studenthome-image w-full h-full"
          />
        </div>
        {/* front blur */}
        <div className=" student-image left-0  md:left-1/4 fixed top-0 h-screen botttom-0 right-0 bg-black opacity-60"></div>

        {/* STUDENT'S  MAIN PAGE SET UP */}
        <div className=" w-full h-full">
          <section
            className="text-slate-50 flex ml fixed right-0 student-image
             capitalize pt-8 gap-5 pl-8 justify-around"
          >
            <div className=" mr-8">
              {/* student's name */}
              <p className="ml-2">
                hello{" "}
                <span className="uppercase text-amber-500 font-bold">
                  {list.name}
                </span>
              </p>
            </div>
            <div className="p-2 font-semibold">
              {/* student class */}
              <p className="text-xs">class</p>
              <p className="text-lg">{list.class}</p>
            </div>
            <div className="flex mr-8 w-26">
              <div className="w-3/4 text-start">
                <p>{list.name}</p>
                <p>{list.userStatus}</p>
              </div>
              <div className=" w-10 h-10 ml-1 overflow-hidden rounded-full">
                {/* student profile */}
                <img
                  src={login}
                  alt="logo"
                  className="w-full h-full overflow-hidden block"
                />
              </div>
            </div>
          </section>
          <section
            className="student-image md:left-1/4 text-slate-50 fixed right-0 flex-col gap-y-9 h-28 
            items-center text-lg top-52 flex  justify-center"
          >
            <h1 className="font-bold">
              Good Day{" "}
              <span className="text-amber-500 uppercase">{list.name}</span>
            </h1>
            <h1>Welcome to your Dashboard</h1>
          </section>
          <section
            // EDUCATION DESCRIPTION
            className="student-image text-slate-50 fixed right-0 h-28 ml-10
            items-center text-lg bottom-24 flex  justify-center md:left-1/4"
          >
            <div className="w-96">
              Education is the passport to the future, for tomorrow belongs to
              those who prepare for it today.
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export { ParenttHome };
