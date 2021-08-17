import { withStyles } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { colors } from 'styles/colors';
import React from 'react';

export const DialogContent = withStyles(() => ({
  root: {
    background: colors.tertiary,
    padding: 20,
    fontSize: 16,
  },
}))(MuiDialogContent);

export const DialogActions = withStyles(() => ({
  root: {
    background: colors.tertiary,
    margin: 0,
    padding: 20,
  },
}))(MuiDialogActions);

export const DialogTitle = withStyles(() => ({
  root: {
    background: colors.tertiary,
    margin: 0,
    padding: 20,
  },
}))(MuiDialogTitle);

export const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});