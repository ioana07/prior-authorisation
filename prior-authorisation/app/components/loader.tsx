import { MdContentCopy } from "react-icons/md";
import { PropagateLoader} from 'react-spinners';


type Props = {
    isLoading: boolean;
};

export default function Loader(props: Props) {
    
    return (
        <div className="max-w-screen-md w-full justify-center border-b border-gray-100 text-lg pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-200 dark:bg-zinc-200/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
            {props.isLoading ? 
                <div className="flex relative w-full justify-center mt-10">
                    <div className="absolute border-l border-r">
                        <PropagateLoader color="#009E67" size={25}></PropagateLoader></div>
                    <div className="relative pt-10 secondaryInfo text-sm">Evaluating guidelines...</div>
                </div>
                
            : <div></div>} 
        </div>
    )
}