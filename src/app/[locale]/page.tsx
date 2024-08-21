import Ecosystem from "#/views/home/ecosystem";
import Emissions from "#/views/home/emissions";
import NewsSection from "#/views/home/news-section";
import ScalingTechnology from "#/views/home/scaling-technology";
import VideoCarousel from "#/views/home/video-carousel";
import WebAggregated from "#/views/home/web-aggregated";

const HomePage = () => (
  <main className="tracking-wide">
    <WebAggregated />
    <VideoCarousel />
    <ScalingTechnology />
    <Emissions />
    <Ecosystem />
    <NewsSection />
  </main>
);
export default HomePage;
