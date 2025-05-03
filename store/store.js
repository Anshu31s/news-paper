import { create } from "zustand";

const useStore = create((set) => ({
  language: "hi",
  country: "in",
  setLanguage: (language) => set({ language }),
  setCountry: (country) => set({ country }),
}));

export default useStore;
