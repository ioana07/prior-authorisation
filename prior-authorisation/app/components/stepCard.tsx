import { Step } from "../model/types";
import { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import Evidence from "./evidence";

type Props = {
    step: Step;
};

export default function StepCard(props: Props) {
    const [showReasoning, setShowReasoning] = useState(false);
    let keyCopy: number = props.step.key;
    const questionNumber: number = ++keyCopy;

    const handleSeeReasoning = () => {
        setShowReasoning(!showReasoning);
    }

    return (
        <div className="max-w-screen-md w-full justify-center border-b pl-12 pr-12 border-gray-100 text-lg pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-200 dark:bg-zinc-200/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
            <span className="relative text-sm flex secondaryInfo font-bold">{questionNumber + " " + props.step.question}</span>
            <div className="relative w-full  ">
            {
                props.step.options.map((option, index) => (
                    <div key={index} className={option.selected ? "brandColor secondaryInfo text-sm" : "secondaryInfo text-sm"}>
                        <span className={option.selected ? "brandColor absolute" : "absolute"}><IoCheckbox/></span>
                        <label className={option.selected ? "brandColor ml-4" : "ml-4"}>{option.text}</label>
                    </div>))
            }
            </div>
            <button className="brandColor text-sm" onClick={handleSeeReasoning}>See evidences</button>
            {showReasoning && <div className="text-sm secondaryInfo">
                {props.step.evidence.map((evidence, index) => (
                    <Evidence evidence={evidence}></Evidence>
                ))}
                </div>}
            
           
        </div>
    )
}