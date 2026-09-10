import { create } from 'zustand';

export type CursorVariant = 'default' | 'button' | 'text' | 'canvas' | 'hidden';

interface CursorState {
  variant: CursorVariant;
  text: string;
  setVariant: (variant: CursorVariant, text?: string) => void;
}

export const useCursorStore = create<CursorState>((set) => ({
  variant: 'default',
  text: '',
  setVariant: (variant, text = '') => set({ variant, text }),
}));
