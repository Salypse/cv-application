export const educationalInputFields = [
   {
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
];
