export type Evidence = {
    content: string;
    page_number: number;
    pdf_id: string;
    event_datetime: string;
}

export type Option = {
 key: number;
 text: string; 
 selected: boolean;
}

export type Step = {
    key: number;
    question: string;
    options: Option[];
    reasoning: string;
    decision: number;
    nextStep: number;
    evidence: Evidence[];
}

export type AuthData = {
    case_id: string;
    procedure_name: string;
    is_met: boolean;
    steps: Step[];
    summary: string;
}

