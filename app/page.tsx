import About from "./components/About";
import Authenticity from "./components/Authenticity";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Authenticity/>
      <WhyChooseUs/>
      <JoinUs/>
    </div>
  );
}
