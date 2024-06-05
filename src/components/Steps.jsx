import React from "react";
import CustomDateComponent from "./CustomDateComponent";
import PhotoUpload from "./PhotoUpload";
import CustomImage from "./CustomImage";
import { q_1_1, q_1_2, q_1_3 } from "./ImageExports";
import VedioStep from "./VedioStep";
import AudioStep from "./AudioStep";
import CustomStateComponent from "./CustomStateComponent";
import CustomDistrictComponent from "./CustomDistrictComponent";
import CourseSelectionComponent from "./CourseSelectionComponent";
const steps = [
  {
    id: "1",
    message:
      "Hello! This is a sample conversational from with HTML UI Elements",
    trigger: "name",
  },
  {
    id: "name",
    message: "Please Enter Your Name ",
    trigger: "username",
  },
  {
    id: "username",
    user: true,
    trigger: "userdateofbirth",
  },
  {
    id: "userdateofbirth",
    message: "Select Your Date Of Birth using date picker ",
    trigger: "dateofbirth",
  },
  {
    id: "dateofbirth",
    component: <CustomDateComponent />,
    waitAction: true,
    trigger: "storeDateOfBirth",
  },
  {
    id: "storeDateOfBirth",
    message: "Date picker demo done",
    trigger: "user-email",
    delay: 1000,
    metadata: {
      name: "dateOfBirth",
      value: "{previousValue}",
    },
  },
  {
    id: "user-email",
    message: "Demo for Email valiation",
    trigger: "email",
  },
  {
    id: "email",
    user: true,
    validator: (value) => {
      if (/^\S+@\S+\.\S+$/.test(value)) {
        return true;
      } else {
        return "Please enter a valid email address.";
      }
    },
    trigger: "userGender",
  },
  {
    id: "userGender",
    message: "Select Your Gender (Push button validation)",
    trigger: "gender",
  },
  {
    id: "gender",
    options: [
      { value: "male", label: "Male", trigger: "phone_number" },
      { value: "female", label: "Female", trigger: "phone_number" },
    ],
  },
  {
    id: "phone_number",
    message: "Enter your phone number (Number validation)",
    trigger: "phoneNumber",
  },
  {
    id: "phoneNumber",
    user: true,
    validator: (value) => {
      if (/^\d{10}$/.test(value)) {
        return true;
      } else {
        return "Please enter a valid 10-digit phone number.";
      }
    },
    trigger: "create_password",
  },
  {
    id: "create_password",
    message: "Create your password:",
    trigger: "password",
  },
  {
    id: "password",
    user: true,
    validator: (value) => {
      if (value.length >= 6) {
        return true;
      } else {
        return "Password must be at least 6 characters long.";
      }
    },
    trigger: "upload_photo",
  },
  {
    id: "upload_photo",
    message: "upload the photo (size should be less then 2MB)",
    trigger: "photo_file",
  },
  {
    id: "photo_file",
    component: <PhotoUpload />,
    trigger: "photo",
  },
  {
    id: "photo",
    user: true,
    trigger: "audio",
  },
  {
    id: "audio",
    message: "Do You Want to play audio",
    trigger: "audioOption",
  },
  {
    id: "audioOption",
    options: [
      {
        value: 1,
        label: "yes",
        trigger: "audioplayer",
      },
      { value: 2, label: "no", trigger: "nextoptions" },
    ],
  },
  {
    id: "audioplayer",
    component: <AudioStep />,
    trigger: "nextoptions",
  },
  {
    id: "nextoptions",
    options: [
      {
        value: 1,
        label: "For Next Question click here!",
        trigger: "video",
      },
    ],
  },
  {
    id: "video",
    message: "Do You Want to Watch video",
    trigger: "videoOption",
  },
  {
    id: "videoOption",
    options: [
      {
        value: 1,
        label: "yes",
        trigger: "videoplayer",
      },
      { value: 2, label: "no", trigger: "nextoption" },
    ],
  },
  {
    id: "videoplayer",
    component: <VedioStep />,
    trigger: "nextoption",
  },
  {
    id: "nextoption",
    options: [
      {
        value: 1,
        label: "For Next Question click here!",
        trigger: "select_image",
      },
    ],
  },

  {
    id: "select_image",
    message: "Please select body frame based on image",
    trigger: "5",
  },
  {
    id: "5",
    options: [
      {
        value: 1,
        label: <CustomImage src={q_1_1} />,
        component: <CustomImage src={q_1_1} selectedOption={1} />,
        trigger: "userstate",
      },
      {
        value: 2,
        label: <CustomImage src={q_1_2} />,
        component: <CustomImage src={q_1_2} selectedOption={2} />,
        trigger: "userstate",
      },
      {
        value: 3,
        label: <CustomImage src={q_1_3} />,
        component: <CustomImage src={q_1_3} selectedOption={3} />,
        trigger: "userstate",
      },
    ],
  },

  {
    id: "userstate",
    message: "Select Your State",
    trigger: "state",
  },
  {
    id: "state",
    component: <CustomStateComponent />,
    asMessage: false,
    waitAction: true,
    trigger: "displaySelectedState",
  },
  {
    id: "displaySelectedState",
    message: ({ previousValue }) => `You selected: ${previousValue}`,
    trigger: "userdistrict",
  },
  {
    id: "userdistrict",
    message: "Select Your District",
    trigger: "district",
  },
  {
    id: "district",
    component: <CustomDistrictComponent />,
    asMessage: false,
    waitAction: true,
    trigger: "displaySelecteddistrict",
  },
  {
    id: "displaySelecteddistrict",
    message: ({ previousValue }) => `You selected: ${previousValue}`,
    trigger: "usertaluk",
  },
  {
    id: "usertaluk",
    message: "Enter Your Taluk",
    trigger: "taluk",
  },
  {
    id: "taluk",
    user: true,
    trigger: "usercourses",
  },

  {
    id: "usercourses",
    message: "Please Select",
    trigger: "courses",
  },
  {
    id: "courses",
    component: <CourseSelectionComponent />,
    asMessage: false,
    waitAction: true,
    trigger: "end",
  },

  {
    id: "end",
    message: "Thank You",
    end: true,
  },
];

export default steps;
