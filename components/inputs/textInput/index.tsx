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
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  withoutMarginTop?: boolean;
  marginTop?: string;
  maxLength?: number;
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
  onKeyUp,
  marginTop = '20px',
  maxLength,
}) => {
  return (
    <div className={styles.componentInputWrapper} style={{ marginTop }}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <FormControl className={styles.textInputWrapper}>
        <StyledTextInput
          value={value}
          onChange={(e) => {
            const value = e.target.value;
            if (maxLength && maxLength < value.length) {
              return;
            }
            onChange(e.target.value)
          }}
          id={id}
          name={id}
          onFocus={onFocus}
          placeholder={placeholder}
          onKeyUp={onKeyUp}
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
