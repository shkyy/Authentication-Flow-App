export type User = {
    email: string;
}

export type AuthStatus = 'loading' | 'authenticated' | 'error' | 'idle';

export type AuthState = {
    user: User | null;
    status: AuthStatus;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}