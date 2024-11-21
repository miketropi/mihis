import type { MetaFunction } from "@remix-run/node";
import { Button } from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function index() {
  return <main className="">
    <section className="w-full py-[100px] bg-[#f2f3fc]">
      Hero section...!
    </section>
    <div className="container mx-auto px-4">
      <h2>Welcome to the Main Layout!</h2>
      <Button>Click me...!</Button> 
    </div>
  </main>
}
