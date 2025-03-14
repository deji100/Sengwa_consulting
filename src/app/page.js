import Hero from "./components/hero";
import JobHunt from "./components/job-hunt";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonial";

export default function Home() {
  return (
    <div className="page">
      <Hero />
      <JobHunt />
      <Testimonials />
    </div>
  );
}
