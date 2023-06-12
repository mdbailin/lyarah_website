import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew, World } from '../sections';
import Youtube from '../sections/Youtube';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <Youtube />
    <div className="relative">
      <About />
      <div className="gradient-01 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-02 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
