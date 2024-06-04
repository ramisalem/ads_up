"use client";
import React, { type ElementRef, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Cross1Icon, Cross2Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const AdsModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }
    function openInPage() {
        //console.log('open in page', window.location);
        window.location.reload();
    }
    return createPortal(
        <div className=" flex items-center justify-center overflow-hidden  z-40 top-0 left-0 right-0 bottom-0 bg-transparent">
            <dialog
                ref={dialogRef}
                className=" absolute w-auto  h-auto   flex   items-center 
                justify-center   bg-opacity-50  bg-transparent"
                onClose={onDismiss}
            >
                <motion.div
                    drag
                    className="absolute top-[11rem] right-[30%] p-2 w-24 rounded-md bg-white flex z-50 flex-row space-x-6 items-center justify-between"
                >
                    <FaExternalLinkAlt
                        onClick={openInPage}
                        className="relative  cursor-alias w-6 text-blue-600 h-6   z-50 hover:w-8 hover:text-blue-300 "
                    />
                    <Cross2Icon
                        onClick={onDismiss}
                        className="relative  w-6 text-red-600 h-6   z-50 hover:w-8 hover:text-red-700 "
                    />
                </motion.div>
                <div className="relative shadow-xs m-auto md:max-w-max rounded-lg  bg-transparent p-4 dark:bg-slate-800 ">
                    {children}
                </div>
            </dialog>
        </div>,
        document.getElementById("modal-root")!,
    );
};
