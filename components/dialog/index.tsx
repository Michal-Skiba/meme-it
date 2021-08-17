import React, { ReactElement } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogTitle, DialogContent, Transition } from './styled';

interface DialogComponentProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  dialogContent: ReactElement | string;
  dialogTitle?: ReactElement | string;
  dialogActions: ReactElement;
}

export const DialogComponent: React.FC<DialogComponentProps> = ({ open, setOpen, dialogContent, dialogActions, dialogTitle }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {dialogTitle && (
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      )}
      <DialogContent dividers>
        {dialogContent}
      </DialogContent>
      <DialogActions>
        {dialogActions}
      </DialogActions>
    </Dialog>
  )
};
