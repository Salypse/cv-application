import NumberIcon from "../assets/img/number-icon.svg";
import LocationIcon from "../assets/img/location-icon.svg";
import EmailIcon from "../assets/img/email-icon.svg";

export const personalInputFields = [
   {
      personal: {
         name: {
            name: "Name",
            placeholder: "e.g. John Smith",
            type: "text",
            id: "personal-name-input",
            row: "name",
            value: "",
         },
      },

      availability: {
         phone: {
            name: "Phone Number",
            placeholder: "e.g. 111-222-3333",
            type: "tel",
            id: "personal-number-input",
            img: NumberIcon,
            row: "availability",
            value: "",
         },
         location: {
            name: "Location",
            placeholder: "e.g. Chicago, Il",
            type: "text",
            id: "personal-location-input",
            img: LocationIcon,
            row: "availability",
            value: "",
         },
      },

      email: {
         email: {
            name: "Email",
            placeholder: "e.g. johnSmith123@gmail.com",
            type: "email",
            id: "personal-email-input",
            img: EmailIcon,
            row: "email",
            value: "",
         },
      },
   },
];
