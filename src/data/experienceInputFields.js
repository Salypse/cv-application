export const experienceInputFields = [
   {
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
];
