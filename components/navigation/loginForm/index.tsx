import { ButtonPrimary, TextInput } from "components/"
import React, { FormEvent, useState } from "react"
import styles from './loginForm.module.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { validateLogin, validatePassword, isErrorInObject } from 'utils/'

const formErrorsInit = {
  login: '',
  password: '',
}

interface LoginFormProps {
  setBlockHideLoginForm: (value: boolean) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  setBlockHideLoginForm
}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState(formErrorsInit)

  const handleFocus = () => {
    setBlockHideLoginForm(true);
  }
  const handleBlur = () => {
    setBlockHideLoginForm(false);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      
    }
  };

  const validateForm = (): boolean => {
    const errors = Object.assign({}, formErrorsInit);
    errors.login = validateLogin(login)
    errors.password = validatePassword(password)
    
    setFormErrors(errors)
    return isErrorInObject(errors)
  }

  return (
    <div className={styles.loginFrame}>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="login-input"
          onChange={(value) => setLogin(value)}
          label="Login"
          onFocus={handleFocus}
          onBlur={handleBlur}
          errorMessage={formErrors.login}
          marginTop="0"
        />
        <TextInput
          id="password-input"
          onChange={(value) => setPassword(value)}
          label="Password"
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="password"
          errorMessage={formErrors.password}
        />
        <div className={styles.buttonsWrapper}>
          <a href="/register" className={styles.anchor}>
            <ButtonPrimary>
              <div className={styles.registerIcon}>
                <BorderColorIcon />
              </div>
              Register
            </ButtonPrimary>
          </a>
          <ButtonPrimary type="submit">
            Login
            <div className={styles.loginIcon}>
              <ArrowForwardIcon />
            </div>
          </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}