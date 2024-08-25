export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-ali.png",
    name: "Ali Mansoor",
  },
  {
    image: "/assets/images/dr-korir.png",
    name: "Alex Korir",
  },
  {
    image: "/assets/images/dr-mwendwa.png",
    name: "Esther Mwendwa",
  },
  {
    image: "/assets/images/dr-mwihaki.png",
    name: "Rachael Mwihaki",
  },
  {
    image: "/assets/images/dr-nasibu.png",
    name: "Stefan Nasibu",
  },
  {
    image: "/assets/images/dr-nzibo.png",
    name: "Roman Nzibo",
  },
  {
    image: "/assets/images/dr-patel.png",
    name: "Patel Kumar",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Alyana Powell",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Mikel Remirez",
  },
  {
    image: "/assets/images/dr-upendo.png",
    name: "Skylar Upendo",
  },
  {
    image: "/assets/images/dr-yakub.png",
    name: "Musa Yakub",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  canceled: "/assets/icons/canceled.svg",
};
