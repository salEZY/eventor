import { createContext } from "react";

export const AppContext = createContext({
  data: [],
  sortedData: [],
  grid: false,
  enableGrid: () => {},
  enableList: () => {},
  handleData: () => {},
  removeData: () => {},
  handleSortedData: () => {},
  removeSortedData: () => {},
  handleCategories: () => {},
  removeCategories: () => {},
});
