import { create } from 'zustand';

export const useStore = create((set) => ({
  isCommentVisible: false,
  setCommentVisible: (isVisible) => set({ isCommentVisible: isVisible }),
}));
