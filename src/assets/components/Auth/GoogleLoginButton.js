import React from 'react';
import { googleLogin } from '../api/auth';

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const response = await googleLogin();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;