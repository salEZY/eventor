import { createContext } from "react";

export const AppContext = createContext({
  data: [],
  sortedData: [],
  grid: false,
  country: "",
  loading: true,
  handleLoading: () => {},
  handleCurrentCountry: () => {},
  removeCountry: () => {},
  enableGrid: () => {},
  enableList: () => {},
  handleData: () => {},
  removeData: () => {},
  handleSortedData: () => {},
  removeSortedData: () => {},
  handleCategories: () => {},
  removeCategories: () => {},
});
