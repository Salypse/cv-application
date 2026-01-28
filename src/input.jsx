export function Input({
   inputName = "Input",
   placeholder = "Placeholder",
   type = "text",
   id = "",
   value,
   inputData,
   setInputData,
}) {
   const inputId = `input-${id}`;

   const handleInputChange = (value, id) => {
      const updatedInputData = inputData.map((input) => {
         if (input.id === id) {
            return { ...input, value: value };
         } else {
            return input;
         }
      });

      setInputData(updatedInputData);
   };

   return (
      <div className="input-field">
         <label htmlFor={inputId}>{inputName}</label>
         <input
            id={inputId}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(event) => handleInputChange(event.target.value, id)}
         />
      </div>
   );
}
