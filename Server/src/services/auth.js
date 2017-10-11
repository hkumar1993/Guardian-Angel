import jwt from "jsonwebtoken";

import User from "../models/User";
import constants from "../config/constants";

export async function requireAuth(user) {
  if (!user || !user._id) {
    throw new Error("Unauthorized");
  }

  const me = await User.findById(user._id);

  if (!me) {
    throw new Error("Unathorized");
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
