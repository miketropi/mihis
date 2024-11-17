import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function index() {
  return <div>
    <h2>Welcome to the Main Layout!</h2>
    <Button>Click me...!</Button> 
  </div>;
}
