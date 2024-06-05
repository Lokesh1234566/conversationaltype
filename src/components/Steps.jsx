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
      "Hello! This is a sample conversational form with HTML UI Elements",
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
    message: "Hi {previousValue}, Select Your Date Of Birth using date picker ",
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
    message: "Date picker value {previousValue} demo done",
    trigger: "user-email",
    delay: 1000,
    metadata: {
      name: "dateOfBirth",
      value: "{previousValue}",
    },
  },
  {
    id: "user-email",
    message: "Email data entry with validation",
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
    message:
      "your email is {previousValue}, please Select Your Gender (Push button demo)",
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
    message:
      "you selected {previousValue} Enter your phone number (Number validation)",
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
    message: "Now, lets do audio demo",
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
        label: "As Next Question is based on video, click here to watch video",
        trigger: "videoplayer",
      },
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
        label:
          "Answer the question carefully based on above video, click here!",
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
    message: "Select Your State (Check button demo)",
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
    trigger: "usercourses",
  },

  {
    id: "usercourses",
    message: "Radio button demo  Please Select",
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
    message: "Thank You For Watching The DEMO",
    end: true,
  },
];

export default steps;
