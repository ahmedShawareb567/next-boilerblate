import GoogleStrategy from "passport-google-oauth";
import passport from "passport";
const chalk = require("chalk");
const env = require("dotenv").config().parsed;

let user = {};

passport.serializeUser(function (user: any, done) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  done(null, user);
});

const socialElements = {
  google: new GoogleStrategy.OAuth2Strategy(
    {
      clientID: env.GOOGLE_KEY,
      clientSecret: env.GOOGLE_SECRET,
      callbackURL: env.GOOGLE_CALLBACK,
    },
    (token: any, tokenSecret: any, profile: any, done: any) => {
      user = { ...profile };
      return done(null, profile);
    }
  ),
};

export default socialElements;
