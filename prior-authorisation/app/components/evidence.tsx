import { Evidence } from "../model/types";

type Props = {
    evidence: Evidence;
}

export default function Evidence(props: Props) {
    return (
            <div>
                <div>
                    <span className="tag p-1">{props.evidence.pdf_id}</span>
                    <span className="tag p-1 ml-2">{"Page " + props.evidence.page_number}</span>
                    <span className="tag p-1 ml-2">{props.evidence.event_datetime}</span>
                </div>
                <div className="pt-3 pb-3 italic">
                    {props.evidence.content}
                </div>
            </div>
    )
}