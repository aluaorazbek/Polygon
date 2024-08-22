import Ecosystem from "#/views/home/ecosystem";
import Emissions from "#/views/home/emissions";
import Features from "#/views/home/features";
import NewsSection from "#/views/home/news-section";
import ScalingTechnology from "#/views/home/scaling-technology";
import VideoCarousel from "#/views/home/video-carousel";
import WebAggregated from "#/views/home/web-aggregated";

const HomePage = () => (
  <main className="">
    <WebAggregated />
    <VideoCarousel />
    <ScalingTechnology />
    <Emissions />
    <Ecosystem />
    <Features />
    <NewsSection />
  </main>
);
export default HomePage;
