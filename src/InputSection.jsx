import { useState } from "react";

import { Input } from "./input";
import { InputSectionHeader } from "./InputSectionHeader";
import { addInput } from "./addInput";

export function InputSection({
   inputData,
   setInputData,
   sectionName,
   addInputButton = false,
}) {
   const [showInputs, setShowInputs] = useState(true);

   return (
      <div className="input-section">
         <InputSectionHeader
            name={sectionName}
            setShowInputs={setShowInputs}
         ></InputSectionHeader>
         {showInputs &&
            inputData.map((inputSection, index) => (
               <ul
                  key={`${sectionName}${index}`}
                  id={`${sectionName.toLowerCase()}-inputs`}
               >
                  {Object.entries(inputSection).map(([rowName, inputRow]) => (
                     <div key={rowName} className={`row input-${rowName}`}>
                        {Object.values(inputRow).map((input) => (
                           <li key={input.id}>
                              <Input
                                 inputName={input.name}
                                 placeholder={input.placeholder}
                                 type={input.type}
                                 id={input.id}
                                 value={input.value}
                                 inputData={inputData}
                                 setInputData={setInputData}
                              ></Input>
                           </li>
                        ))}
                     </div>
                  ))}
               </ul>
            ))}
         {addInputButton && (
            <button
               className="add-input"
               onClick={() => addInput(inputData, setInputData)}
            >{`Add ${sectionName}`}</button>
         )}
      </div>
   );
}
