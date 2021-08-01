import React, { FocusEventHandler, ReactNode } from "react";
import {
  createStyles,
  FormControl,
  withStyles,
  Input,
} from "@material-ui/core";
import { colors } from 'styles/colors'
import styles from '../inputs.module.scss'

const StyledTextInput = withStyles(() =>
  createStyles({
    root: {
      borderRadius: '4px',
      backgroundColor: 'white',
      border: `1px solid ${colors.primary}`,
      fontSize: '16px',
      padding: '3px 6px',
      width: '100%',
    },
    focused: {
      border: `2px solid ${colors.activeColor}`,
      padding: '2px 5px',
    }
  })
)(Input);

interface TextInputProps {
  id: string;
  placeholder?: string;
  type?: "number" | "text" | "password";
  onChange: (value: string) => void;
  value?: string;
  errorMessage?: string;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  label?: ReactNode;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  withoutMarginTop?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  onChange,
  onBlur,
  value,
  placeholder,
  type = "text",
  errorMessage = "",
  disabled,
  label,
  onFocus,
  withoutMarginTop,
}) => {
  return (
    <div className={styles.componentInputWrapper} style={{ marginTop: withoutMarginTop ? "0" : "20px" }}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <FormControl className={styles.textInputWrapper}>
        <StyledTextInput
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          name={id}
          onFocus={onFocus}
          placeholder={placeholder}
          fullWidth
          disableUnderline
          error={!!errorMessage}
          disabled={disabled}
          inputProps={{
            type: type,
          }}
          onBlur={(e) => {
            onBlur && onBlur(e.target.value);
          }}
        />
      </FormControl>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
