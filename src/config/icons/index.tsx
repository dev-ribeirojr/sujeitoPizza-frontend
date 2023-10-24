import {
  FaBoxOpen,
  FaBookOpen,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaMoneyBillAlt,
  FaUser,
  FaUserPlus,
  FaSpinner,
} from "react-icons/fa";

import {
  MdLogout,
  MdAssignmentAdd,
  MdDescription,
  MdDriveFileRenameOutline,
  MdClose
} from 'react-icons/md';

import { PiSignInBold } from 'react-icons/pi';
import { BiSolidAddToQueue, BiSolidCategoryAlt, BiSolidImageAdd } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io'

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
  category: <BiSolidCategoryAlt />,
  money: <FaMoneyBillAlt />,
  description: <MdDescription />,
  name: <MdDriveFileRenameOutline />,
  addImage: <BiSolidImageAdd />,
  close: <MdClose />,
  arrowSelect: <IoMdArrowDropdown />

}