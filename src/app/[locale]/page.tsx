import Emissions from "#/views/home/emissions";
import ScalingTechnology from "#/views/home/scaling-technology";
import WebAggregated from "#/views/home/web-aggregated";

const HomePage = () => (
  <main className="tracking-wide">
    <WebAggregated />
    <ScalingTechnology />
    <Emissions />
  </main>
);
export default HomePage;
