import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Lucaas Friedman" },
  { id: "1", name: "Johns starc" },
  { id: "2", name: "Benjamin Clarke" },
  { id: "3", name: "Maxy Stokes" },
  { id: "4", name: "Narendra Agrawal" },
  { id: "5", name: "Sean Williams" },
];

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
});

export const usersActions = usersSlice.actions;

export default usersSlice;
