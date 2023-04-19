import { defineStore } from "pinia";
import { store } from "../index";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({}),
  getters: {},
  actions: {},
});

export const useAppStoreWithOut = () => {
  return useAppStore(store);
};
