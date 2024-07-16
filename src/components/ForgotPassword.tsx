import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [timer, setTimer] = useState(60);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSendOtp = async () => {
    setMessage("Sending OTP...");
    try {
      const response = await axios.post('https://axs2459.uta.cloud/check_email.php', `email=${email}`);
      if (response.data === 'success') {
        const otpResponse = await axios.post('https://axs2459.uta.cloud/send_otp.php', `email=${email}`);
        if (otpResponse.data === 'success') {
          setOtpSent(true);
          setMessage('OTP sent to email');
          startTimer();
        } else {
          setMessage(otpResponse.data);
        }
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage('Error sending OTP');
    }
    setOtpSent(true);
    setTimer(60);
  };

  const handleResendOtp = async () => {
    try {
      const response = await axios.post('https://axs2459.uta.cloud/check_email.php', `email=${email}`);
      if (response.data === 'success') {
        const otpResponse = await axios.post('https://axs2459.uta.cloud/send_otp.php', `email=${email}`);
        if (otpResponse.data === 'success') {
          setOtpSent(true);
          setMessage('OTP sent to email');
          startTimer();
        } else {
          setMessage(otpResponse.data);
        }
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage('Error sending OTP');
    }
    setMessage("Resending OTP...");
    setTimer(60); 
  };

  const handleVerifyOtp = async () => {
    setMessage("Verifying OTP...");
    try {
      const response = await axios.post('https://axs2459.uta.cloud/verify_otp.php', `email=${email}&code=${code}`);
      if (response.data === 'success') {
        setOtpVerified(true);
        setMessage('OTP verified');
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      setMessage('Error verifying OTP');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Resetting password...");
    try {
      const response = await axios.post('https://axs2459.uta.cloud/reset_password.php', `email=${email}&newPassword=${newPassword}`);
      const responseData = response.data;

      if (responseData === 'Password reset successfully') {
        setMessage(responseData);

        // Fetch role and redirect
        const roleResponse = await axios.post('https://axs2459.uta.cloud/get_role.php', `email=${email}`);
        const role = roleResponse.data.trim();

        const roleRedirectUrls = {
          'admin' :'https://axs2459.uta.cloud/admin',
                    'student' : 'https://axs2459.uta.cloud/student',
                    'instructor' : 'https://axs2459.uta.cloud/instructor',
                    'qao' : 'https://axs2459.uta.cloud/qa',
                    'pc' : 'https://axs2459.uta.cloud/pc'
        };
        const redirectPath = roleRedirectUrls[role];
        const redirectUrl = roleRedirectUrls[role];
        if (redirectPath) {
          window.location.href = redirectUrl;
        } else {
          console.error('Unknown role:', role);
        }
      } else {
        setMessage(responseData);
      }
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  const startTimer = () => {
    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setTimer(60);
    }, 60000);
  };
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
return(
  <div className="pcrpage_container">
  <form onSubmit={handleSubmit}>
    <label>Email:</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    <br />
    <button type="button" onClick={otpSent ? handleResendOtp : handleSendOtp} disabled={otpSent && timer > 0}>
      {otpSent ? 'Resend Code' : 'Send Code'}
    </button>
    {otpSent && timer > 0 && <span> ({timer}s)</span>}
    <br />

    {otpSent && (
      <>
        <label>Code:</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
        <br />
        <button type="button" onClick={handleVerifyOtp}>Verify Code</button>
        <br />
      </>
    )}

    {otpVerified && (
      <>
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        <br />
        <button type="submit">Reset Password</button>
      </>
    )}

    {message && <p>{message}</p>}
  </form>
</div>
);
};

export default ForgotPassword;
