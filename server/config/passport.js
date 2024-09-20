const { Strategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET, // Ensure this line is present
};

const strategy = new Strategy(opts, (jwt_payload, done) => {
    // Your logic to handle the JWT payload and authentication
    // Example:
    // User.findById(jwt_payload.id)
    //     .then(user => {
    //         return done(null, user);
    //     })
    //     .catch(err => done(err, false));
});

passport.use(strategy);
