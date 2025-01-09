import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import header_img from "./header_img.png";
import remove_bg_icon from "./remove_bg_icon.svg";
import upload_btn_icon from "./upload_btn_icon.svg";
import upload_icon from "./upload_icon.svg";
import download_icon from "./download_icon.svg";
import image_w_bg from "./image_w_bg.png";
import image_wo_bg from "./image_wo_bg.png";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import credit_icon from "./credit_icon.png";

export const assets = {
  logo,
  logo_icon,
  arrow_icon,
  header_img,
  remove_bg_icon,
  upload_icon,
  download_icon,
  image_w_bg,
  image_wo_bg,
  upload_btn_icon,
  credit_icon,
};

export const testimonialsData = [
  {
    id: 1,
    text: "I've been using Blankyfy.io for nearly a month, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    author: "Abdus Samad",
    image: profile_img_1,
    jobTitle: "Web Developer",
  },
  {
    id: 2,
    text: "I've been using Blankyfy.io for nearly 1 week, I had a fantastic experience. The quality is top-notch. I recommend others to try this service.",
    author: "Rohan Bablani",
    image: profile_img_2,
    jobTitle: "Student",
  },
];

export const plans = [
  {
    id: "Basic",
    price: 20,
    credits: 5,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 50,
    credits: 20,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 200,
    credits: 90,
    desc: "Best for enterprise use.",
  },
];
