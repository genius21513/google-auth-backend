
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "597553148438-d05anlgbker7qtqrlcvgeqn2oqjpre1q.apps.googleusercontent.com", // Your Credentials here.
    clientSecret: "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", // Your Credentials here.
    callbackURL: "http://localhost:4000/auth/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));