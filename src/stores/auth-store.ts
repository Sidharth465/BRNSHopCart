import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import EncryptedStorage from 'react-native-encrypted-storage';
import { zustandEncryptedStorage } from './secure-store';

export const useAuthState = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        try {
          console.log(
            'validateEmail(email)',
            validateEmail(email),
            'validateEmail(pass)',
            validatePassword(password),
          );
          set({ isLoading: true });

          if (validateEmail(email) && validatePassword(password)) {
            console.log('inside');
            set({
              isAuthenticated: true,
              user: {
                id: 'mnx123',
                email,
                name: 'Sidharth Verma',
                phone: '8744098062',
                address: {
                  city: 'delhi',
                  country: 'india',
                  street: 'J-67',
                  zipcode: '110044',
                },
              },
              error: null,
            });
            await EncryptedStorage.setItem('token', 'xyz123456890935446023');

            return true;
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: 'Invalid Credentials',
            });
          }
          return false;
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: 'Login failed',
          });
          return false;
        } finally {
          setTimeout(() => {
            set({ isLoading: false });
          }, 1000);
        }
      },

      logout: async () => {
        await EncryptedStorage.removeItem('token');
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },
    }),
    {
      name: 'session',
      storage: zustandEncryptedStorage,
    },
  ),
);
