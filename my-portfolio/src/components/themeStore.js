import { create } from 'zustand';

export const useThemeStore = create(set => ({
  dark: false,
  toggleDark: () => set(state => ({ dark: !state.dark }))
}));
