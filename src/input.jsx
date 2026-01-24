function Input({
   inputName = "Input",
   placeholder = "Placeholder",
   type = "text",
   id = "",
}) {
   const inputId = `input-${id}`;

   return (
      <div className="input-field">
         <label htmlFor={inputId}>{inputName}</label>
         <input id={inputId} type={type} placeholder={placeholder} />
      </div>
   );
}

export default Input;
