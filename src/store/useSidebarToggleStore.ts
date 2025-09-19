"use client";
import { create } from "zustand";

interface SidebarToggleState {
  visible: boolean;
  toggle: () => void;
  show: () => void;
  hide: () => void;
}

export const useSidebarToggleStore = create<SidebarToggleState>((set) => ({
  visible: true,
  toggle: () => set((state) => ({ visible: !state.visible })),
  show: () => set({ visible: true }),
  hide: () => set({ visible: false }),
}));
