import { AdvType } from "@/constants/types";
import Image from "next/image";
import Search from "./search";
import { lusitana } from "../fonts";
export default async function AdvertTable({ ads }: { ads: AdvType[] }) {
  return (
    <div className="flex w-auto flex-col">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Ads</h1>
      <Search placeholder="Search Ads..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          {/* <div className="inline-block min-w-fit align-middle"> */}
          <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {ads?.map((ad) => (
                <div
                  key={ad.uuid}
                  className="mb-2 w-full rounded-md bg-white p-4">
                  <div className="flex items-center justify-between border-b pb-4 hover:bg-slate-200">
                    <div>
                      <div className="mb-2 flex items-center">
                        <div className="flex items-center gap-3">
                          {/* <Image
                              src={ad.thumbnail}
                              className="rounded-full"
                              alt={`${ad.title}'s profile picture`}
                              width={28}
                              height={28}
                            /> */}
                          <p>{ad.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{ad.description}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-b py-5">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Pending</p>
                      <p className="font-medium">{ad.status}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs">Paid</p>
                      <p className="font-medium">{ad.link}</p>
                    </div>
                  </div>
                  <div className="pt-4 text-sm">
                    <p>{ad.price} </p>
                  </div>
                </div>
              ))}
            </div>
            <table className="flex flex-wrap  rounded-md text-gray-900 md:table">
              <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    avatar
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Description
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    price
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    location
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    Start
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    End
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-900">
                {ads.map((ad) => (
                  <tr key={ad.uuid} className="group">
                    <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src={ad.images}
                          className="rounded-full"
                          alt={`${ad.title}'s profile picture`}
                          width={28}
                          height={28}
                        />
                      </div>
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      <p>{ad.title}</p>
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {ad.description}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {ad.price}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                      {ad.location}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      {ad.start}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      {ad.end}
                    </td>
                    <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      {ad.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
