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
      <section className="cv-info">
         <InputSection
            inputData={personalInputData}
            setInputData={setPersonalInputData}
            sectionName="Personal"
         ></InputSection>
         <InputSection
            inputData={educationalInputData}
            setInputData={setEducationalInputData}
            sectionName="Education"
            addInputButton={true}
         ></InputSection>
         <InputSection
            inputData={experienceInputData}
            setInputData={setExperienceInputData}
            sectionName="Experience"
            addInputButton={true}
         ></InputSection>
      </section>
   );
}

export default CvInfo;
