import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { footerItems } from "../../shared/mockData";

const Footer = () => {
  return (
    <div className="bg-black100 flex items-center  w-full ">
      <div className="container mx-auto">
        <div className="flex w-full justify-between">
          {footerItems.result.footerList.map(({ description, items }) => (
            <>
              <div className="mt-[30px]">
                <div className="flex w-full">
                  <h6 className="text-blue100 text-[13px] uppercase font-semibold">
                    {description}
                  </h6>
                </div>
                <div>
                  {items.map(({ name, img, type }) => (
                    <>
                      <div className="flex items-center">
                        {img ? (
                          <div
                            className={twMerge(
                              "mt-[15px] mr-[5px] min-w-4 relative",
                              type === "store"
                                ? "w-[150px] h-[50px]"
                                : "w-[20px] h-[15px]"
                            )}
                          >
                            <Image fill alt="" src={img} />
                          </div>
                        ) : (
                          ""
                        )}

                        <p className="font-normal text-[13px] cursor-pointer  text-white mt-[18px]">
                          {name}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="border w-full border-blue100 mt-[35px]" />
        <div className=" mb-[20px] flex  w-full justify-between">
          <p className="font-semibold text-[13px]  text-white mt-[18px]">
            © LS TEAM 2024
          </p>
          <p className="font-semibold text-[13px]  text-white mt-[18px]">
            Made with ❤️ in SF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
