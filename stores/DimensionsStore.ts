import { Dimensions, ScaledSize } from "react-native";
import { create } from "zustand";

type State = {
  window: ScaledSize;
  screen: ScaledSize;
};

type Actions = {
  update: (window: ScaledSize, screen: ScaledSize) => void;
};

type Selector = {
};

export const useDimensionsStore = create<State & Actions & Selector>((set, get) => ({
  window: Dimensions.get("window"),
  screen: Dimensions.get("screen"),
  update: (window: ScaledSize, screen: ScaledSize) => set((state) => ({
    window,
    screen,
  })),
}));
