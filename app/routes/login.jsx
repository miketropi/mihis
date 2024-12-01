import HeroSection from "../components/me/HeroSection"

export default function Login() {
  return (
    <main>
      <HeroSection title={ `Login Page` } />
      <form action="/auth/auth0" method="post">
        <button>Login with Auth0</button>
      </form>
    </main> 
  );
}