export function Input({
   inputName = "Input",
   placeholder = "Placeholder",
   type = "text",
   id = "",
   value,
   setInputData,
}) {
   const inputId = `input-${id}`;

   const handleInputChange = (value, id) => {
      //Find the object where id is equal to given id in function then update its value to be the given value in function
      const updateValue = (obj) => {
         if (obj !== null && typeof obj === "object") {
            if (obj.id === id) {
               return { ...obj, value: value };
            }

            const newObject = {};
            for (const key in obj) {
               newObject[key] = updateValue(obj[key]);
            }

            return newObject;
         }
         return obj;
      };

      setInputData((prev) =>
         prev.map((inputSection) => updateValue(inputSection)),
      );
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
