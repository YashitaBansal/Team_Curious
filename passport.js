const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
  
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
    clientID: "519786807615-kv886ft3mkpeutie1hv9ft7ugca17mp1.apps.googleusercontent.com", // Your Credentials here.
    clientSecret: "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", // Your Credentials here.
    callbackURL: "http://localhost:4000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));