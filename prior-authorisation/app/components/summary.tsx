type Props = {
    case_id: string;
    summary: string;
    is_met: boolean;
    procedure_name: string;
};

export default function Summary(props: Props) {
    return (
    <div className="max-w-screen-md w-full justify-center border-b border-gray-100 text-lg pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-200 dark:bg-zinc-200/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
        <div className="w-full h-full relative flex text-sm row secondaryInfo pl-12 pr-12">
            <div className="col">
                <div className="font-bold underline">{props.case_id}
                </div>
                <div>{props.procedure_name}</div>
            </div>
            <div className="col w-full text-lg text-right">
                {props.is_met ? 
                    <div className="approved">Likely approved</div>
                    : 
                    <div className="denied">Likely denied</div>
                }
            </div>
        </div>
        <div className="secondaryInfo ml-12 mr-12 mt-5 text-sm">
            {props.summary}
        </div>
    </div>
    )
}