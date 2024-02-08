import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="mt-[30px] w-full">
      <div className="w-full flex items-center justify-between px-[15px] h-[40px] bg-[#344356] rounded-[4px] border border-[#9b9b9b]">
        <Image alt="" src="/images/modal/facebook.svg" width={25} height={25} />
        <p className="text-[14px] font-bold text-white">
          Sign Up with Facebook
        </p>
        <div className="w-[25px]" />
      </div>
      <div className="w-full flex items-center justify-between px-[15px] mt-[15px] h-[40px] bg-[#344356] rounded-[4px] border border-[#9b9b9b]">
        <Image alt="" src="/images/modal/google.svg" width={25} height={25} />
        <p className="text-[14px] font-bold text-white">Sign Up with Google</p>
        <div className="w-[25px]" />
      </div>
      <div className="w-full flex items-center justify-between px-[15px] mt-[15px] h-[40px] bg-[#344356] rounded-[4px] border border-[#9b9b9b]">
        <Image alt="" src="/images/modal/apple.svg" width={25} height={25} />
        <p className="text-[14px] font-bold text-white">Sign Up with Apple</p>
        <div className="w-[25px]" />
      </div>
    </div>
  );
};

export default SocialButtons;
