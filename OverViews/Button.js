import React from "react";
import { Button as ButtonComponent } from "@mui/material";

export const Button = ({
  children,
  sx,
  variant,
  type,
  size,
  color,
  onClick,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onKeyUp,
  onAnimationStart,
  startIcon,
}) => {
  return (
    <ButtonComponent
      sx={{
        ...sx,
      }}
      variant={variant}
      type={type}
      size={size}
      color={color}
      onClick={onClick}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onAnimationStart={onAnimationStart}
      startIcon={startIcon}
    >
      {children}
    </ButtonComponent>
  );
};
