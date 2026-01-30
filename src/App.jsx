import { useState } from "react";

import { CvSiteHeader } from "./CvSiteHeader";
import CvInfo from "./CvInfo";
import { PreviewSection } from "./PreviewSection";

import { personalInputFields } from "./data/personalInputFields";
import { educationalInputFields } from "./data/educationInputFields";
import { experienceInputFields } from "./data/experienceInputFields";

export function App() {
   const [personalInputData, setPersonalInputData] = useState(
      personalInputFields.map((field) => ({
         ...field,
         value: "",
      })),
   );

   const [educationalInputData, setEducationalInputData] = useState(
      educationalInputFields.map((field) => ({
         ...field,
         value: "",
      })),
   );

   const [experienceInputData, setExperienceInputData] = useState(
      experienceInputFields.map((field) => ({
         ...field,
         value: "",
      })),
   );

   return (
      <>
         <CvSiteHeader></CvSiteHeader>
         <CvInfo
            //Personal Input
            personalInputData={personalInputData}
            setPersonalInputData={setPersonalInputData}
            //Educational Input
            educationalInputData={educationalInputData}
            setEducationalInputData={setEducationalInputData}
            //Experience Input
            experienceInputData={experienceInputData}
            setExperienceInputData={setExperienceInputData}
         ></CvInfo>

         <PreviewSection inputData={personalInputData}></PreviewSection>
         <PreviewSection inputData={educationalInputData}></PreviewSection>
         <PreviewSection inputData={experienceInputData}></PreviewSection>
      </>
   );
}
