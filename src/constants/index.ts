import { v4 as uuidv4 } from "uuid";
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
];
export const contacts = [
  {
    id: uuidv4(),
    title: "Github",
    link: "https://github.com/D1nviz",
    icon: FaGithub,
  },
  {
    id: uuidv4(),
    title: "Instagram",
    link: "https://www.instagram.com/d1nviz/",
    icon: FaInstagram,
  },
  {
    id: uuidv4(),
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/hetsyanyn-eugene-71a462273/",
    icon: FaLinkedin,
  },
  {
    id: uuidv4(),
    title: "Telegram",
    link: "https://t.me/Dinviz",
    icon: FaTelegram,
  },
];
