import Emissions from "#/src/views/home/emissions";
import WebAggregated from "#/src/views/home/web-aggregated";

const HomePage = () => (
  <main className="tracking-wide">
    <WebAggregated />
    <Emissions />
  </main>
);
export default HomePage;
