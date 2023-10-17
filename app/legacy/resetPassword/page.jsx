'use client'
import React from 'react'

import { useState, useEffect } from "react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';



export default function ResetPassword() {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [password, setPassword] = useState("");
  const supabase=createClientComponentClient(accessToken, setAccessToken)

  useEffect(() => {
    // Get the access token and refresh token from the URL
    if (typeof window !== "undefined") {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      setAccessToken(hashParams.get("access_token") || "");
      setRefreshToken(hashParams.get("refresh_token") || "");
    }
  }, []);

  useEffect(() => {
    // Authenticate the user using the access token and refresh token
    const getSessionWithTokens = async () => {
      if (accessToken && refreshToken) {
        const { data, error } = await supabase
        .auth
        .setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        console.log(data);

        if (error) {
          alert(`Error signing in: ${error.message}`);
        }
      }
    };

    // Call this function only when accessToken and refreshToken are available.
    if (accessToken && refreshToken) {
      getSessionWithTokens();
    }
  }, [accessToken, refreshToken]);

  const handlePasswordUpdate = async (newPassword) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        throw error;
      }

      if (data) {
        alert("Password has been updated successfully!");
      }
    } catch (error) {
      alert(`Error updating password: ${error.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePasswordUpdate(password);
  };

  return (
    <>
     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change your password
              </h1>
            
                  <div>
                      <label for="email" className="block mb-2 text-sm 
                      font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" 
        
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                      <label for="password" >Password</label>
                      <input type="password"  placeholder="••••••••" 
                    
                      />
                  </div>
           
                 
                  <button onClick={handleSubmit}>Change password</button>
    <p>{Lmsg}</p>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
    </>
 
  )
}