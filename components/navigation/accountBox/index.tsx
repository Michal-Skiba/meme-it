import React, { useState } from "react"
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { LoginForm } from "../loginForm"
import { NavData } from '../navData';
import styles from '../navigation.module.scss'

interface AccountBoxProps {
  navElement: NavData;
}

export const AccountBox: React.FC<AccountBoxProps> = ({ navElement }) => {
  const [isLoginIconHovered, setIsLoginIconHovered] = useState(false);
  const [blockHideLoginForm, setBlockHideLoginForm] = useState(false);

  return (
    <div
      className={`
        ${styles.loginIconWrapper}
        ${(isLoginIconHovered || blockHideLoginForm) ? styles.loginIconWrapperHovered : ''}`
      }
      onMouseEnter={() => setIsLoginIconHovered(true)}
      onMouseLeave={() => setIsLoginIconHovered(false)}
    >
      <a
        href={navElement.path}
      >
        <AccountBoxIcon />
      </a>
      {(isLoginIconHovered || blockHideLoginForm) &&
        <LoginForm setBlockHideLoginForm={setBlockHideLoginForm} />
      }
    </div>
  )
}