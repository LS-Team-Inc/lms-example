import Image from "next/image";

const Profile = () => {
  return (
    <div className="bg-black200 w-full pb-[150px]">
      <div className="h-[100vh] flex flex-col items-center justify-center pt-[100px]">
        <div className="w-[400px] h-[400px] relative">
          <Image alt="" fill src="/images/comming-soon.svg" />
        </div>
        <p className="text-white text-[18px] font-semibold mt-[10px]">
          Coming soon!
        </p>
      </div>
    </div>
  );
};

export default Profile;
