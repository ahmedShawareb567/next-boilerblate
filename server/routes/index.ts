import { Router } from "express";
import passport from "passport";
import Callback from "../callback";

const router = Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  Callback
);

export default router;
