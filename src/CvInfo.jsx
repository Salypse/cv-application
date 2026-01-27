import { personalInputFields } from "./data/personalInputFields";
import { educationalInputFields } from "./data/educationInputFields";
import { experienceInputFields } from "./data/experienceInputFields";

import { InputSection } from "./InputSection";

function CvInfo() {
   return (
      <>
         <InputSection inputs={personalInputFields}></InputSection>
         <InputSection inputs={educationalInputFields}></InputSection>
         <InputSection inputs={experienceInputFields}></InputSection>
      </>
   );
}

export default CvInfo;
