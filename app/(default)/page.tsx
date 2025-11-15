export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Hero />
      <Works/>
    </>
  );
}
