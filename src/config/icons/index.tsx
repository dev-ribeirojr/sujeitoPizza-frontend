import { FaEye, FaEyeSlash, FaEnvelope, FaUser, FaUserPlus, FaSpinner } from "react-icons/fa";
import { MdLogout } from 'react-icons/md';
import { PiSignInBold } from 'react-icons/pi';

export const icons = {
  email: <FaEnvelope />,
  user: <FaUser />,
  password: <FaEyeSlash />,
  passwordVisible: <FaEye />,
  newUser: <FaUserPlus />,
  logOut: <MdLogout />,
  signIn: <PiSignInBold />,
  loading: <FaSpinner />
}