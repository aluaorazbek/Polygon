import Emissions from "#/views/home/emissions";
import ScalingTechnology from "#/views/home/scaling-technology";
import WebAggregated from "#/views/home/web-aggregated";

import Ecosystem from "#/src/views/home/ecosystem";

const HomePage = () => (
  <main className="tracking-wide">
    <WebAggregated />
    <ScalingTechnology />
    <Emissions />
    <Ecosystem />
  </main>
);
export default HomePage;
