import axios from 'axios';
import Cookies from 'js-cookie';

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
  } catch (error) {
    console.error('Login failed:', error);
  }
}