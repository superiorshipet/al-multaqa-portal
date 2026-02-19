import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'guest' | 'seeker' | 'company' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  city?: string;
  companyName?: string;
  companyLogo?: string;
}

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => void;
  logout: () => void;
  register: (userData: Partial<User>) => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>('guest');

  const login = (email: string, password: string, userRole: UserRole) => {
    // محاكاة تسجيل الدخول - سيتم استبداله بـ API لاحقاً
    const mockUsers: Record<string, User> = {
      'seeker@example.com': {
        id: '1',
        name: 'أحمد محمد',
        email: 'seeker@example.com',
        role: 'seeker',
        phone: '0501234567',
        city: 'الرياض',
      },
      'company@example.com': {
        id: '2',
        name: 'محمد علي',
        email: 'company@example.com',
        role: 'company',
        phone: '0509876543',
        companyName: 'شركة التقنية المتقدمة',
        companyLogo: 'https://via.placeholder.com/100',
      },
      'admin@example.com': {
        id: '3',
        name: 'فاطمة أحمد',
        email: 'admin@example.com',
        role: 'admin',
        phone: '0505555555',
      },
    };

    const foundUser = mockUsers[email];
    if (foundUser && foundUser.role === userRole) {
      setUser(foundUser);
      setRole(userRole);
    }
  };

  const logout = () => {
    setUser(null);
    setRole('guest');
  };

  const register = (userData: Partial<User>) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || '',
      email: userData.email || '',
      role: userData.role || 'seeker',
      phone: userData.phone,
      city: userData.city,
      companyName: userData.companyName,
      companyLogo: userData.companyLogo,
    };
    setUser(newUser);
    setRole(newUser.role);
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated: user !== null,
        login,
        logout,
        register,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
