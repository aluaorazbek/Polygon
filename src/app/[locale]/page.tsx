import Emissions from "#/views/home/emissions";
import ScalingTechnology from "#/views/home/scaling-technology";
import WebAggregated from "#/views/home/web-aggregated";

import Ecosystem from "#/views/home/ecosystem";
import Carousel from "#/views/home/carousel";

const HomePage = () => (
  <main className="tracking-wide">
    <WebAggregated />
    <Carousel />
    <ScalingTechnology />
    <Emissions />
    <Ecosystem />
  </main>
);
export default HomePage;
