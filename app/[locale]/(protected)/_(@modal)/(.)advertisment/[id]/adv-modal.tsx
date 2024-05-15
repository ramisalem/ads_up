"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { type ElementRef, useEffect, useRef, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // const dialogRef = useRef<ElementRef<"dialog">>(null);
  console.log("in modal");
  // useEffect(() => {
  //   if (!dialogRef.current?.open) {
  //     dialogRef.current?.showModal();
  //   }
  // }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <Dialog>
      <div
        className=" fixed left-0 top-0 z-50 flex h-full w-full items-center 
                justify-center overflow-auto  bg-opacity-50  bg-black/5 dark:bg-white/5">
        <div className="shadow-xs m-auto w-96 rounded-lg  bg-white p-4 dark:bg-slate-800 ">
          <div className="flex grow flex-col items-center">
            <ExclamationTriangleIcon className="m-5 w-10 text-red-500" />
            {/* <div className="mt-2 flex-shrink-0 ">
              <p className="text-md  text-right  text-gray-500 dark:text-white">
                <b>Are you sure you want to delete this story?</b>
                <b>هل أنت متأكد انك تريد الحذف</b>
                <br />
                بمجرد موافقتك على الحذف لن تستطيع استرجاع القصة
              </p>
            </div> */}
            {children}
            <Button
              variant="secondary"
              onClick={onDismiss}
              //className="relative top-3 right-3 w-12 bg-red h-12 flex items-center justify-center"
            >
              close
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
    // ,
    // document.getElementById("modal-root")!
  );
}
