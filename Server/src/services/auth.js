import jwt from "jsonwebtoken";

import User from "../models/User";
import constants from "../config/constants";

export async function requireAuth(user) {
  if (!user || !user._id) {
    throw new Error("Unauthorized1");
  }

  const me = await User.findById(user._id);

  if (!me) {
    throw new Error("Unathorized2");
  }

  return me;
}

export function decodeToken(token) {
  const arr = token.split(" ");

  if (arr[0] === "Bearer") {
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }

  throw new Error("Token not valid");
}
