import { AuthState } from "@/types/authTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// mock credentials (for demo)
const VALID_EMAIL = 'test@visionexdigital.com.au';
const VALID_PSW = 'password123';

export const useAuthStore = create<AuthState>()(
    persist((set) => ({
        user: null,
        status: 'idle',
        error: null,
        login: async (email, password) => {
            set({ status: 'loading', error: null });

            try {
                await new Promise((res) => setTimeout(res, 800)) // simulation of the api call

                if (email === VALID_EMAIL && password === VALID_PSW) {
                    set ({
                        user: { email },
                        status: 'authenticated',
                        error: null,
                    });
                } else {
                    set ({
                        status: 'error',
                        error: 'Invalid email or password. Please try again..',
                    });
                } 
            } catch (error) {
                set({
                    status: 'error',
                    error: 'Unexpected error. Please try again later..'
                })
            }

        },

        logout: () => {
            set ({
                user: null,
                status: 'idle',
                error: null,
            });
        },

        clearError: () => {
            set ({
                error: null
            });
        },
    }),

    { 
        name: 'auth-storage', // local storage name
    
        // for customizing local storage
        partialize: (state) => ({
            user: state.user,
            status: state.status
        }),
    }
)
);