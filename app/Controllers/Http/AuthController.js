"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request }) {
    const data = request.only(["username", "email", "password"]);
    return await User.create(data);
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    return await auth.attempt(email, password);
  }

  async logout({ auth }) {
    return await auth.logout();
  }
}

module.exports = AuthController;
