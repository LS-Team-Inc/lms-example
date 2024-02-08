import Image from "next/image";
import { course } from "../shared/mockData";

const Home = () => {
  return (
    <div className="bg-black200 w-full pb-[150px]">
      <div className="pt-[100px] w-full flex justify-center">
        <div className="border-b text-center border-blue200 w-[100px]">
          <p className="text-white w-[100px] mb-[8px] font-normal text-[16px]  cursor-pointer">
            All
          </p>
        </div>
        <div className="border-b border-gray text-center	w-[100px]">
          <p className="text-white w-[100px] mb-[8px] font-normal text-[16px] cursor-pointer">
            STUDYING
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-[50px]">
          {course.result.dashboardList.map(({ desctiption, items }) => (
            <div key={desctiption}>
              <h2 className="text-[16px] mt-[50px] mb-[25px] text-white font-bold">
                {desctiption}
              </h2>
              <div className="flex">
                {items.map(({ img, name, width, height }) => (
                  <div key={name} className="ml-[30px] first:ml-0">
                    <Image
                      style={{ objectFit: "contain" }}
                      width={width}
                      height={height}
                      alt=""
                      src={img}
                    />
                    <div
                      className={`w-[${width}px] h-[50px] flex items-center bg-black100`}
                    >
                      <p className="text-white ml-[10px]">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-[80px] h-[220px] flex justify-center relative bg-home-banner bg-no-repeat bg-[length:100%_100%] ">
          <div className="flex w-[720px] justify-between">
            <Image
              style={{ objectFit: "contain" }}
              width={150}
              height={150}
              alt=""
              src={"/images/home/banner-code.webp"}
            />
            <div className="mt-[60px]">
              <p className="text-white font-normal text-[28px] mt-[20]">
                Learn programming and get hired
              </p>
              <div className="w-100 flex justify-center">
                <button className="text-white mt-[20px] w-[150px] h-[37px] rounded-[4px] flex bg-blue200 items-center justify-center">
                  Sign up now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
