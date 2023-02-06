import decode from "jwt-decode";

const randomToken = () => {
  return Math.random().toString(36).substring(2);
};

const tokenGen = () => {
  return randomToken() + randomToken();
};

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decode = decode(token);
      if (decode.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem("token");
  }

  login() {
    localStorage.setItem("token", tokenGen());
    window.location.assign("/dashboard");
  }

  logout() {
    localStorage.removeItem("token");
    window.location.assign("/");
  }
}

export default new AuthService();
