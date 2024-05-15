import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { TUser } from "../types/user";
import { LOCAL_STORAGE_USER } from "../core/constants";

type UserStore = {
  user: TUser;
  handleUser: (newUserData: TUser) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      handleUser: (newUser) => set((state) => ({ user: newUser })),
    }),
    {
      name: LOCAL_STORAGE_USER,
    }
  )
);
