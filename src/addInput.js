export function addInput(inputData, setInputData, sectionName) {
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

   const defaultSections = {
      Education: {
         schoolInfo: {
            schoolName: {
               name: "School Name",
               placeholder: "e.g. Harvard",
               type: "text",
               id: "educational-school-input",
               row: "school-info",
               value: "",
            },
            schoolField: {
               name: "Field of Study",
               placeholder: "e.g. Biology",
               type: "text",
               id: "educational-field-input",
               row: "school-info",
               value: "",
            },
         },

         schoolDate: {
            startDate: {
               name: "Start Date",
               placeholder: "e.g. August 2021",
               type: "text",
               id: "educational-start-input",
               row: "education-date",
               value: "",
            },

            endDate: {
               name: "End Date",
               placeholder: "e.g. June 2025",
               type: "text",
               id: "educational-end-input",
               row: "education-date",
               value: "",
            },
         },
      },

      Experience: {
         companyPosition: {
            company: {
               name: "Company Name",
               placeholder: "e.g. Amazon",
               type: "text",
               id: "experience-company-input",
               row: "company-position",
               value: "",
            },
            position: {
               name: "Position Title",
               placeholder: "e.g. UI/UX Designer",
               type: "text",
               id: "experience-position-input",
               row: "company-position",
               value: "",
            },
         },

         responsibilities: {
            responsibilities: {
               name: "Responsibilities",
               placeholder: "e.g. Design usable and accessible website",
               type: "text",
               id: "experience-responsibilities-input",
               row: "responsibilities",
               value: "",
            },
         },

         experienceDate: {
            startDate: {
               name: "Start Date",
               placeholder: "e.g. Jan 2026",
               type: "text",
               id: "experience-start-input",
               row: "experience-date",
               value: "",
            },

            endDate: {
               name: "End Date",
               placeholder: "e.g. Present",
               type: "text",
               id: "experience-end-input",
               row: "experience-date",
               value: "",
            },
         },
      },
   };

   const inputDataCopy =
      inputData.length > 0
         ? structuredClone(inputData[0])
         : structuredClone(defaultSections[sectionName]);

   //If theres inputData then copy needs to have values reset
   //If no inputData a blank copy is made with blank values so no reset is needed
   if (inputData.length > 0) {
      resetValues(inputDataCopy);
   }

   setInputData([...inputData, inputDataCopy]);
}
