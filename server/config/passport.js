const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user.model'); // Adjust path if needed
const passport = require('passport');

require('dotenv').config(); // Ensure this is added at the top to load .env variables

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;  // Load the secret from the environment variable

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      console.error("Error in JWT strategy:", error);
      return done(error, false);
    }
  })
);
