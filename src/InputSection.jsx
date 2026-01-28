import { useState } from "react";

import { Input } from "./input";
import { InputSectionHeader } from "./InputSectionHeader";

export function InputSection({ inputs, sectionName }) {
   const [showInputs, setShowInputs] = useState(true);

   const [inputFieldData, setInputFieldData] = useState(
      inputs.map((input) => ({
         ...input,
         value: "",
      })),
   );

   return (
      <div className="input-section">
         <InputSectionHeader
            name={sectionName}
            setShowInputs={setShowInputs}
         ></InputSectionHeader>
         {showInputs && (
            <ul>
               {inputFieldData.map((input) => (
                  <li key={input.id}>
                     <Input
                        inputName={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        id={input.id}
                        value={input.value}
                        inputData={inputFieldData}
                        setInputData={setInputFieldData}
                     ></Input>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
