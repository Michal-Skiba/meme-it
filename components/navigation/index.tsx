import React, { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image'
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';;
import styles from './navigation.module.scss'
import logo from 'public/logo.png'
import { navData } from './navData';
import { TooltipComponent } from 'components/';
import { LogoutDialog } from './logoutDialog';
import { AccountBox } from './accountBox';

export const Navigation = () => {
  const [openNav, setOpenNav] = useState(false)
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const [isUserLogged, setIsUserLogged] = useState(false);

  const router = useRouter();

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  const handleLogout = () => {
    setOpenLogoutDialog(false)
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
                  <TooltipComponent title="Logout" placement="bottom" key={navElement.name}>
                    <div
                      className={styles.logoutIconWrapper}
                      onClick={() => setOpenLogoutDialog(true)}
                    >
                      <ExitToAppIcon />
                    </div>
                  </TooltipComponent>
                )
              } else {
                return (
                  <div key={navElement.name}>
                    <AccountBox navElement={navElement} />
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
      <LogoutDialog
        setOpenLogoutDialog={setOpenLogoutDialog}
        handleLogout={handleLogout}
        openLogoutDialog={openLogoutDialog}
      />
    </div>
  )
};
