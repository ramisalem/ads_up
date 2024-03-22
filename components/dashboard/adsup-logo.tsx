import { GlobeAltIcon } from "@heroicons/react/24/outline";
//import { lusitana } from "@/app/ui/fonts";
//import clsx from "clsx";
type props = {
  showName: boolean;
};
export default function ADSUPLogo() {
  return (
    <div className="flex flex-row flex-grow items-center  leading-none text-white md:w-auto">
      <GlobeAltIcon className="h-12 w-10  text-sky-500 rotate-[15deg]" />
      <p className="text-[36px] hidden text-sky-500 md:block">ADSUP</p>
    </div>
  );
}
