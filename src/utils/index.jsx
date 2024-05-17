import axios from 'axios';
import Cookies from 'js-cookie';

async function signup(username, password) {
  try {
    const response = await axios.post('http://localhost:3000/auth/signup', {
      username,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // Lưu token vào cookies
    Cookies.set('accessToken', accessToken, { expires: 7 });
    Cookies.set('refreshToken', refreshToken, { expires: 7 });

    console.log('Signup successful, tokens are stored in cookies.');
    return { success: true, message: 'Signup successful' };
  } catch (error) {
    console.error('Signup failed:', error);
    return { success: false, message: 'Signup failed' };
  }
}

export async function login(username, password) {
  try {
    const response = await axios.post('http://localhost:3000/auth/signin', {
      username,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    // Lưu token vào cookies
    Cookies.set('accessToken', accessToken, {expires: 7});
    Cookies.set('refreshToken', refreshToken), {expires: 7};

    console.log('Login successful, tokens are stored in cookies.');
    return { success: true, message: 'Login successful' };
  } catch (error) {
    if (error.response && error.response.status === 403) {
      const shouldSignup = window.confirm('Account does not exist. Would you like to create a new account?');
      if (shouldSignup) {
        return await signup(username, password);
      }
    } else {
      console.error('Login failed:', error);
      return { success: false, message: 'Login failed' };
    }
  }
}