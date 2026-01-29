import { InputSection } from "./InputSection";

function CvInfo({
   personalInputData,
   setPersonalInputData,
   educationalInputData,
   setEducationalInputData,
   experienceInputData,
   setExperienceInputData,
}) {
   return (
      <div className="cv-info">
         <InputSection
            inputData={personalInputData}
            setInputData={setPersonalInputData}
            sectionName="Personal"
         ></InputSection>
         <InputSection
            inputData={educationalInputData}
            setInputData={setEducationalInputData}
            sectionName="Education"
         ></InputSection>
         <InputSection
            inputData={experienceInputData}
            setInputData={setExperienceInputData}
            sectionName="Experience"
         ></InputSection>
      </div>
   );
}

export default CvInfo;
