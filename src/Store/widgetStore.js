// src/store/widgetStore.js
import { create } from 'zustand';

export const useWidgetStore = create((set) => ({
  widgets: [],
  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
    })),
  removeWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.id !== id),
    })),
}));
