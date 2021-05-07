import { createContext } from "react";

export const AppContext = createContext({
  data: [],
  grid: false,
  country: "",
  loading: true,
  categories: [],
  handleCategories: () => {},
  handleLoading: () => {},
  handleCurrentCountry: () => {},
  removeCountry: () => {},
  enableGrid: () => {},
  enableList: () => {},
  handleData: () => {},
  removeData: () => {},
});
