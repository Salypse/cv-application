import Input from "./input";

export function InputSection({ inputs }) {
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
         <ul>{inputFields}</ul>
      </div>
   );
}
