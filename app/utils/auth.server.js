import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_remix_session',   
    secrets: ['your-secret-key'], // Replace with a secure secret
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
},
});

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator(sessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: "http://localhost:5173/auth/auth0/callback",
    clientID: "2SN5lQewltFFyQCPTN8HW0uo3OtKzUW4",
    clientSecret: "Ox8N9ySyAZ2mVNfgHUTQHloW0A1-GzIl8BH86FNVlXf82Ut6PGvezy4RlDn8W7a0",
    domain: "dev-nqbl6r82817yljyf.us.auth0.com",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value });
    return {
      id: 'mike_id',
      username: 'mike',
      displayName: 'Mike.Tropi',
      email: 'mike.tropi@gmail.com',
      profile
    }
  },
);

authenticator.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;
