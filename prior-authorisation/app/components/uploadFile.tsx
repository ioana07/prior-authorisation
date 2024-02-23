"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { TiTick } from "react-icons/ti";

type Props = {
    title: string;
    fileUploaded: boolean;
    setFileUploaded: Dispatch<SetStateAction<boolean>>;
    fileName: string;
    setFileName:  Dispatch<SetStateAction<string>>;
};

export default function UploadFile(props: Props) {
    
    const handleUpload = () => {
        //We pretend we've uploaded the actual files
        props.setFileUploaded(true);
        props.setFileName("Dummy_Med_Report.pdf");
    }

    return (
            <div className="w-full h-full relative flex pb-3">
                <button className="pl-20" onClick={handleUpload}>
                    <Image
                        className="neutralSVG"
                        src="/upload.svg"
                        alt="Upload Icon"
                        width={15}
                        height={15}
                        priority
                    />
                </button>
                <button className="text-sm ml-2 brandColor" onClick={handleUpload}>{props.title}</button>

                {!props.fileUploaded ? 
                    <span className="absolute right-0 pr-20 text-sm secondaryInfo">
                        No files attached
                    </span>
                    :
                    <span>
                        <span className="absolute right-0 pr-24 text-sm secondaryInfo">
                            {props.fileName} 
                        </span>
                        <span className="absolute right-0 pr-20 text-md brandColor">
                            <TiTick /> 
                        </span>
                    </span>  
                    
                }
            </div>
    )
}