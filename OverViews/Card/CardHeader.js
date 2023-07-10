import React from "react";
import { CardHeader as CardHeaderComponent } from "@mui/material";

export const CardHeader = ({
  children,
  sx,
  avatar,
  title,
  titleTypographyProps,
  subheader,
  subheaderTypographyProps,
  onClick,
  onChange,
  onMouseEnter,
  onMouseLeave,
  onScroll,
  onSubmit,
}) => {
  return (
    <CardHeaderComponent
      sx={{
        ...sx,
      }}
      avatar={avatar}
      title={title}
      titleTypographyProps={titleTypographyProps}
      subheader={subheader}
      subheaderTypographyProps={subheaderTypographyProps}
      onClick={onClick}
      onChange={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onScroll={onScroll}
      onSubmit={onSubmit}
    >
      {children}
    </CardHeaderComponent>
  );
};
