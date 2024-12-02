import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_remix_app_session',   
    secrets: [process.env.REMIXAPP_COOKIESESSION_SECRETS], // Replace with a secure secret
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
    callbackURL: process.env.AUTH0_CALLBACKURL,
    clientID: process.env.AUTH0_CLIENTID,
    clientSecret: process.env.AUTH0_CLIENTSECRET,
    domain: process.env.AUTH0_DOMAIN,
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value });
    console.log(profile);
    return profile;
  },
);

authenticator.use(auth0Strategy);

export const { getSession, commitSession, destroySession } = sessionStorage;
