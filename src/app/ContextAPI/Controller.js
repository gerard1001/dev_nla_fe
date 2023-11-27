"use client"
import { useRouter } from 'next/router';
import React, { createContext, use, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [activeNa, setVi] = useState(true);
  const [user, setUser] = useState(null);

  // const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const button = ()=>{
      setVi(!activeNa)
  }

  
  return (
    <AuthContext.Provider value={{

      button,
      activeNa,
      user

    }}>
      {children}
    </AuthContext.Provider>
  )
}

