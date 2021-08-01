import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';;
import styles from './navigation.module.scss'
import logo from 'public/logo.png'
import { navData } from './navData';
import { LoginForm } from './loginForm';
import Tooltip from '@material-ui/core/Tooltip';

export const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)
  const [isLoginIconHovered, setIsLoginIconHovered] = useState(false);
  const [blockHideLoginForm, setBlockHideLoginForm] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(true);

  const router = useRouter();

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navDesktopWrapper}>
        <a href="/" className={styles.companyLogo}>
          <Image src={logo} alt="Company logo" className={styles.companyLogo} />
        </a>
        <nav className={styles.navigationWrapper}>
          {navData.map(navElement => {
            if (navElement.name === 'Login') {
              if (isUserLogged) {
                return (
                  <Tooltip title="Logout" placement="bottom">
                    <div
                      className={styles.logoutIconWrapper}
                      key={navElement.name}
                    >
                      <ExitToAppIcon />
                    </div>
                  </Tooltip>
                )
              } else {
                return (
                  <div
                    className={`
                      ${styles.loginIconWrapper}
                      ${(isLoginIconHovered || blockHideLoginForm) ? styles.loginIconWrapperHovered : ''}`
                    }
                    onMouseEnter={() => setIsLoginIconHovered(true)}
                    onMouseLeave={() => setIsLoginIconHovered(false)}
                    key={navElement.name}
                  >
                    <a
                      href={navElement.path}
                    >
                      <AccountBoxIcon />
                    </a>
                    {(isLoginIconHovered || blockHideLoginForm) &&
                      <LoginForm setIsLoginIconHovered={setIsLoginIconHovered} setBlockHideLoginForm={setBlockHideLoginForm} />
                    }
                  </div>
                )
              }

            }
            return (
              <a
                key={navElement.name}
                href={navElement.path}
                className={`${styles.navigationElement} ${router.pathname === navElement.path ? styles.activeLink : styles.unActiveLink}`}
              >
                {navElement.name}
              </a>
            )
          }
          )}
        </nav>
      </div>
      <div className={styles.mobileNavigationIcon}>
        {openNav ? <MenuOpenIcon onClick={() => toggleNav()} /> : <MenuIcon onClick={() => toggleNav()} />}
      </div>
      {openNav &&
        <div className={styles.mobileNavigationWrapper} onClick={() => setOpenNav(false)}>
          <nav className={styles.mobileNavigation} onClick={(e) => e.stopPropagation()}>
            {navData.map(navElement =>
              <a
                key={navElement.name}
                href={navElement.path}
                className={`
                ${styles.mobileNavigationElement}
                ${router.pathname === navElement.path ? styles.activeLink : styles.unActiveLink}`
                }
              >
                {navElement.name}
              </a>
            )}
          </nav>
        </div>
      }
    </div>
  )
};
