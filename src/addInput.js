export function addInput(inputData, setInputData) {
   const resetValues = (obj) => {
      if (obj !== null && typeof obj === "object") {
         for (const key in obj) {
            if (key === "value") {
               obj[key] = "";
            } else if (key === "id") {
               obj[key] = obj[key] + (inputData.length + 1);
            } else {
               resetValues(obj[key]);
            }
         }
      }
   };

   const inputDataCopy = structuredClone(inputData[0]);
   resetValues(inputDataCopy);

   setInputData([...inputData, inputDataCopy]);
}
