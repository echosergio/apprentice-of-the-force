import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface SidebarState {
  toggled: boolean;
  collapsed: boolean;
  actions: {
    setToggled: (payload: boolean) => void;
    setCollapsed: (payload: boolean) => void;
  };
}

export const useSidebarStore = create<SidebarState>()(
  devtools((set) => ({
    toggled: false,
    collapsed: false,
    actions: {
      setToggled: (payload: boolean) =>
        set(() => ({
          toggled: payload,
        })),
      setCollapsed: (payload: boolean) =>
        set(() => ({
          collapsed: payload,
        })),
    },
  })),
);

export const useSidebar = () =>
  useSidebarStore((state) => ({
    toggled: state.toggled,
    collapsed: state.collapsed,
  }));

export const useSidebarActions = () =>
  useSidebarStore((state) => state.actions);
