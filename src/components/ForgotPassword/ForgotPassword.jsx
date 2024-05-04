import React, { useState } from 'react';
import { auth } from '../../firebase'; // Import Firebase authentication instance

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setSuccessMessage('Password reset email sent. Check your inbox.');
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleResetPassword}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;