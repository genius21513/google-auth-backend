
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "835466892579-q56868hjgcl85bml2blc7p80bio69ajo.apps.googleusercontent.com", // Your Credentials here.
    clientSecret: "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", // Your Credentials here.
    callbackURL: "http://localhost:3000/auth/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));