import chairIcon from "@/public/images/chairIcon.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Cta from "../navbar/Cta";

const PricingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-4">
      <div className="flex flex-col items-left justify-between gap-5 bg-[#EAFFE3] p-10 rounded-xl h-[450px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={chairIcon}
              alt="chair"
              className="bg-[#F9690E] h-10 w-10 p-2 rounded-xl animate-pulse"
              priority
            />
            <h1 className="text-[13px] font-bold">Hot Desk Access</h1>
            <p className="text-[13px] font-thin">(Non-Membership)</p>
          </div>
          <div>
            <ul className="list-disc">
              <li className="text-sm">Access to Hot Desk Area</li>
              <li className="text-sm">Limited Access to Lounge Area</li>
              <li className="text-sm">Complimentary Wi-Fi</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="flex items-center justify-between">
            Daily <span className="font-bold">#5,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Weekly <span className="font-bold">#25,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Monthly <span className="font-bold">#100,000</span>
          </h1>
        </div>
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          label="Book a space"
          className="bg-[#F9690E] hover:bg-[#fe7723] py-4"
        ></Cta>
      </div>
      <div className="flex flex-col items-left justify-between gap-5 bg-[#EAFFE3] p-10 rounded-xl h-[450px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={chairIcon}
              alt="chair"
              className="bg-[#F9690E] h-10 w-10 p-2 rounded-xl animate-pulse"
              priority
            />
            <h1 className="text-[13px] font-bold">Private Desk</h1>
            <p className="text-[13px] font-thin">(Single Membership)</p>
          </div>
          <div>
            <ul className="list-disc">
              <li className="text-sm">Dedicated Desk Reserved For You</li>
              <li className="text-sm">Limited Access to Premuim Lounge Area</li>
              <li className="text-sm">Free Wi-Fi</li>
              <li className="text-sm">Membership Onboarding</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="flex items-center justify-between">
            Weekly <span className="font-bold">#30,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Monthly <span className="font-bold">#120,000</span>
          </h1>
        </div>
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          label="Book a space"
          className="bg-[#F9690E] hover:bg-[#fe7723] py-4"
        ></Cta>
      </div>
      <div className="flex flex-col items-left justify-between gap-5 bg-[#EAFFE3] p-10 rounded-xl h-[450px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={chairIcon}
              alt="chair"
              className="bg-[#F9690E] h-10 w-10 p-2 rounded-xl animate-pulse"
              priority
            />
            <h1 className="text-[13px] font-bold">Private Office</h1>
            <p className="text-[13px] font-thin">(Membership Plan)</p>
          </div>
          <div>
            <ul className="list-disc">
              <li className="text-sm">
                Assigned Private Office (Max 3 persons)
              </li>
              <li className="text-sm">Access to assigned Private office</li>
              <li className="text-sm">
                Unlimited access to the premium lounge
              </li>
              <li className="text-sm">Membership Onboarding</li>
              <li className="text-sm">Free Wi-Fi</li>
              <li className="text-sm">Complimentary Coffee</li>
            </ul>
          </div>
        </div>
        <div>
          {/*} <h1 className="flex items-center justify-between">
            Weekly <span className="font-bold">#38,000</span>
          </h1>*/}
          <h1 className="flex items-center justify-between">
            Monthly <span className="font-bold">#220,000</span>
          </h1>
          {/*<h1 className="flex items-center justify-between">
            Quarterly <span className="font-bold">#450,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Bi-Annually <span className="font-bold">#390,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Annually <span className="font-bold">#780,000</span>
          </h1>*/}
        </div>
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          label="Book a space"
          className="bg-[#F9690E] hover:bg-[#fe7723] py-4"
        ></Cta>
      </div>
      <div className="flex flex-col items-left justify-between gap-5 bg-[#EAFFE3] p-10 rounded-xl h-[450px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={chairIcon}
              alt="chair"
              className="bg-[#F9690E] h-10 w-10 p-2 rounded-xl animate-pulse"
              priority
            />
            <h1 className="text-[13px] font-bold">Meeting Room</h1>
            <p className="text-[13px] font-thin">(Hour Based)</p>
          </div>
          <div>
            <ul className="list-none">
              <li className="text-sm">
                Book a meeting room for presentations, meetings and
                brainstorming sessions.
              </li>
              {/*= <li className='text-sm'>Access to Lounge Area</li>
                        <li className='text-sm'>Free Coffee</li>
                        <li className='text-sm'>Free Wi-Fi</li> */}
            </ul>
            <div>
              <li className="text-sm">Teleconferencing</li>
              <li className="text-sm">12 Executive Seating Space</li>
            </div>
          </div>
        </div>
        <div>
          <h1 className="flex items-center justify-between">
            Hourly <span className="font-bold">#36,000</span>
          </h1>
          {/*<h1 className="flex items-center justify-between">
            Hourly (10-15 persons) <span className="font-bold">#30,000</span>
          </h1>
          <h1 className="flex items-center justify-between">
            Hourly (15-20 persons) <span className="font-bold">#40,000</span>
          </h1>*/}
        </div>
        <Cta
          link="https://forms.gle/Qo2XG1smyRqqHNNM6"
          label="Book a space"
          className="bg-[#F9690E] hover:bg-[#fe7723] py-4"
        ></Cta>
      </div>
    </div>
  );
};
export default PricingCard;
