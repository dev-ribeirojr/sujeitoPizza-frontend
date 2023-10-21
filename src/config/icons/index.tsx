import {
  FaBoxOpen,
  FaBookOpen,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaUser,
  FaUserPlus,
  FaSpinner,
} from "react-icons/fa";
import { MdLogout, MdAssignmentAdd } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';
import { BiSolidAddToQueue, BiSolidCategoryAlt } from 'react-icons/bi';

export const icons = {
  email: <FaEnvelope />,
  user: <FaUser />,
  password: <FaEyeSlash />,
  passwordVisible: <FaEye />,
  newUser: <FaUserPlus />,
  logOut: <MdLogout />,
  signIn: <PiSignInBold />,
  loading: <FaSpinner />,
  catalog: <FaBookOpen />,
  box: <FaBoxOpen />,
  addCategory: <MdAssignmentAdd />,
  add: <BiSolidAddToQueue />,
  category: <BiSolidCategoryAlt />
}