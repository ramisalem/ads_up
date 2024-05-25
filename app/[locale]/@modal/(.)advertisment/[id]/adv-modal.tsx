'use client';
import React, { type ElementRef, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowRightToBracket } from 'react-icons/fa6';

export function AdsModal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathName = usePathname();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

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
                className=" relative w-auto h-auto   flex   items-center 
                justify-center   bg-opacity-50  bg-transparent"
                onClose={onDismiss}
            >
                <div className="absolute top-28 right-34 flex flex-row space-x-6 items-end justify-end">
                    <FaArrowRightToBracket
                        onClick={onDismiss}
                        className="absolute top-5 cursor-alias w-6 text-blue-600 h-6   z-50 hover:w-8 hover:text-blue-300 "
                    />
                    <FaExternalLinkAlt
                        onClick={openInPage}
                        className="absolute top-5 right-12 cursor-alias w-6 text-blue-600 h-6   z-50 hover:w-8 hover:text-blue-300 "
                    />
                </div>
                <div className="relative shadow-xs m-auto w-96 rounded-lg  bg-transparent p-4 dark:bg-slate-800 ">
                    {children}
                </div>
            </dialog>
        </div>,
        document.getElementById('modal-root')!
    );
}
