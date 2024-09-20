const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

// Configure options for JwtStrategy
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extracts JWT from the authorization header
    secretOrKey: process.env.JWT_SECRET // Ensure this environment variable is set
};

// Define the JwtStrategy
const strategy = new Strategy(opts, (jwt_payload, done) => {
    // Logic to handle successful JWT verification
    // For example, find the user in your database using jwt_payload.id
    // done(null, user); or done(null, false);
});

// Use the strategy
passport.use(strategy);
