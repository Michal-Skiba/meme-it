import { ReactElement } from 'react';
import { withStyles, Tooltip } from '@material-ui/core';
import { colors } from 'styles/colors';

interface TooltipComponentProps {
  title: string;
  placement?: "bottom" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
  children: ReactElement;
}

const CustomizedTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: colors.primary,
    color: colors.tertiary,
    padding: 10,
    maxWidth: 250,
    fontSize: '14px',
    boxShadow: colors.cardShadowSecondary
  },
  arrow: {
    color: colors.primary,
  },
}))(Tooltip);

export const TooltipComponent: React.FC<TooltipComponentProps> = ({ title, placement = "bottom", children }) => {
  const tooltipTitle = () => {
    return (
      <div>
        {title}
      </div>
    )
  }

  return (
    <CustomizedTooltip arrow title={tooltipTitle()} placement={placement}>
      {children}
    </CustomizedTooltip>
  )
};
