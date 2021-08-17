import { ButtonPrimary, ButtonSecondary, DialogComponent } from "components/"
import React from "react"

interface LogoutDialogProps {
  openLogoutDialog: boolean;
  setOpenLogoutDialog: (value: boolean) => void;
  handleLogout: () => void;
}

export const LogoutDialog: React.FC<LogoutDialogProps> = ({ setOpenLogoutDialog, openLogoutDialog, handleLogout }) => {
  const logoutDialogActions = () => {
    return (
      <>
        <ButtonSecondary onClick={() => handleLogout()}>
          Cancel
        </ButtonSecondary>
        <ButtonPrimary onClick={() => setOpenLogoutDialog(false)}>
          Logout
        </ButtonPrimary>
      </>
    )
  }

  return (
    <DialogComponent
      setOpen={setOpenLogoutDialog}
      open={openLogoutDialog}
      dialogActions={logoutDialogActions()}
      dialogContent='Are sure you want logout ?'
      dialogTitle="Logout"
    />
  )
}