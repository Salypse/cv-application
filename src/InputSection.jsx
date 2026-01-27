import { useState } from "react";

import Input from "./input";
import { InputSectionHeader } from "./InputSectionHeader";

export function InputSection({ inputs, sectionName }) {
   const [showInputs, setShowInputs] = useState(true);

   const inputFields = inputs.map((input) => (
      <li key={input.id}>
         <Input
            inputName={input.name}
            placeholder={input.placeholder}
            type={input.type}
            id={input.id}
         ></Input>
      </li>
   ));

   return (
      <div className="input-section">
         <InputSectionHeader
            name={sectionName}
            setShowInputs={setShowInputs}
         ></InputSectionHeader>
         {showInputs && <ul>{inputFields}</ul>}
      </div>
   );
}
