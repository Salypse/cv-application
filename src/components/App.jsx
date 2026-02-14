import { useState } from "react";

import { CvSiteHeader } from "./CvSiteHeader";
import { ScrollText } from "./ScrollText";
import CvInfo from "./CvInfo";
import { PreviewSection } from "./PreviewSection";

import { personalInputFields } from "../data/personalInputFields";
import { educationalInputFields } from "../data/educationInputFields";
import { experienceInputFields } from "../data/experienceInputFields";

export function App() {
   const [personalInputData, setPersonalInputData] =
      useState(personalInputFields);

   const [educationalInputData, setEducationalInputData] = useState(
      educationalInputFields,
   );

   const [experienceInputData, setExperienceInputData] = useState(
      experienceInputFields,
   );

   return (
      <>
         <CvSiteHeader></CvSiteHeader>
         <ScrollText></ScrollText>
         <section className="content">
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

            <section className="live-preview">
               <PreviewSection
                  inputData={personalInputData}
                  sectionName={"personal-input-preview"}
               ></PreviewSection>
               <PreviewSection
                  header="Education"
                  inputData={educationalInputData}
                  sectionName={"educational-input-preview"}
               ></PreviewSection>
               <PreviewSection
                  header="Experience"
                  inputData={experienceInputData}
                  sectionName={"experience-input-preview"}
               ></PreviewSection>
            </section>
         </section>
      </>
   );
}
