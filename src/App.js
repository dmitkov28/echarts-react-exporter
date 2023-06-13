import BarChart from "./BarChart";
import BubbleChart from "./BubbleChart";
import Heatmap from "./Heatmap";
import './index.css'

function App() {


  return (
    <div>
      <div className="my-2">
        <BubbleChart />
      </div>
      <div className="my-2">
        <Heatmap />
      </div>
      <div className="my-2">
        <BarChart />
      </div>

    </div>
  );
}

export default App;
