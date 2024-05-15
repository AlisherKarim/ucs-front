import { create } from 'zustand'
import { TUser } from '../types/user';

type UserStore = {
  user: TUser,
  handleUser: (newUserData: TUser) => void  
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  handleUser: (newUser) => set((state) => ({ user: newUser })),
}));