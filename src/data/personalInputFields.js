import NumberIcon from "../assets/img/number-icon.svg";
import LocationIcon from "../assets/img/location-icon.svg";
import EmailIcon from "../assets/img/email-icon.svg";

export const personalInputFields = [
   {
      name: "Name",
      placeholder: "e.g. John Smith",
      type: "text",
      id: "personal-name-input",
      row: "name",
   },
   {
      name: "Phone Number",
      placeholder: "e.g. 111-222-3333",
      type: "tel",
      id: "personal-number-input",
      img: NumberIcon,
      row: "availability",
   },
   {
      name: "Location",
      placeholder: "e.g. Chicago, Il",
      type: "text",
      id: "personal-location-input",
      img: LocationIcon,
      row: "availability",
   },
   {
      name: "Email",
      placeholder: "e.g. johnSmith123@gmail.com",
      type: "email",
      id: "personal-email-input",
      img: EmailIcon,
      row: "email",
   },
];
