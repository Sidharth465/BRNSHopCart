declare interface USER {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: {
    city: string;
    street: string;
    zipcode: string;
    country: string;
  };
}

declare interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  user: USER | null;
  isLoading: boolean;
  error: string | null;
}
