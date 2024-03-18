import { PayloadAction } from "@reduxjs/toolkit";
import { ThemeOptions } from "../../entities";

export const setThemeReducer = (
  state: string,
  action: PayloadAction<ThemeOptions>
) => {
  const theme = action.payload;
  console.log(theme);
  return theme;
};
