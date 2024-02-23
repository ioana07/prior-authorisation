"use client";

import Image from "next/image";
import UploadFile from "./components/uploadFile";
import { useEffect, useState } from "react";
import GuidelineBaseCard from "./components/loader";
import { getLLMPreAuthorisation } from "./service/LLMService";
import StepCard from "./components/stepCard";
import { AuthData } from "./model/types";
import Loader from "./components/loader";
import Summary from "./components/summary";

export default function Home() {
  const [medicalFileUploaded, setMedicalFileUploaded] = useState(false);
  const [medicalFileName, setMedicalFileName] = useState("");
  const [guidelinesFileUploaded, setGuidelinesFileUploaded] = useState(false);
  const [guidelinesFileName, setGuidelinesFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authData, setAuthData] = useState<AuthData>();

  useEffect(() => {
    if (guidelinesFileUploaded && medicalFileUploaded) {
      /* When both the medical file and the guidelines file have been uploaded, 
      we need to make an API call to get the result from the LLM Pipeline providing the two files as input 
      While we're waiting for this result, the UI will show a loader.
      We'll pretend we made the backend call
      */
      
      setIsLoading(true);
      const fetchData = async () => {
       
        try {
          const data = await getLLMPreAuthorisation();
          setAuthData(data);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchData();
       
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);  
    }
  }, [guidelinesFileUploaded, medicalFileUploaded]);
  
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="max-w-screen-md w-full justify-center border-b border-gray-100 text-lg pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-200 dark:bg-zinc-200/30 dark:from-inherit  lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
        <UploadFile 
          title={"Upload Medical Report"}
          fileUploaded={medicalFileUploaded}
          setFileUploaded={setMedicalFileUploaded}
          fileName={medicalFileName}
          setFileName={setMedicalFileName}>
        </UploadFile>
        <UploadFile 
          title={"Upload Guidelines"}
          fileUploaded={guidelinesFileUploaded}
          setFileUploaded={setGuidelinesFileUploaded}
          fileName={guidelinesFileName}
          setFileName={setGuidelinesFileName}>
        </UploadFile>

      </div>
      {authData && !isLoading && 
        <Summary
          is_met={authData.is_met}
          case_id={authData.case_id}
          procedure_name={authData.procedure_name}
          summary={authData.summary}>
          </Summary>
      }
      {medicalFileUploaded && guidelinesFileUploaded && isLoading &&
        <Loader isLoading={isLoading}></Loader>
      }
      {authData && !isLoading && 
          authData.steps.map((step, index) => 
          (<div key={index}>
            <StepCard step={step}></StepCard>
          </div>))
        }
    </main>
  );
}
