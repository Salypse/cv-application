export function deleteInput(inputData, setInputData, index) {
   const updatedInputData = inputData.filter(
      (_, inputIndex) => inputIndex !== index,
   );

   setInputData(updatedInputData);
}
