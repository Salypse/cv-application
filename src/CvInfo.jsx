import { personalInputFields } from "./data/personalInputFields";
import { educationalInputFields } from "./data/educationInputFields";
import { experienceInputFields } from "./data/experienceInputFields";

import { InputSection } from "./InputSection";

function CvInfo() {
   return (
      <>
         <InputSection
            sectionName="Personal"
            inputs={personalInputFields}
         ></InputSection>
         <InputSection
            sectionName="Education"
            inputs={educationalInputFields}
         ></InputSection>
         <InputSection
            sectionName="Experience"
            inputs={experienceInputFields}
         ></InputSection>
      </>
   );
}

export default CvInfo;
