import EChartsReact from "echarts-for-react";
import { useRef } from "react";
import DownloadChart from "./DownloadChartButton";

export default function BarChart() {
    const chartRef = useRef(null)
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ],
        grid: {
            containLabel: true,
          }
    };
    return (
        <>
        <div ref={chartRef}>
            <EChartsReact option={option} />
        </div>
        <DownloadChart chartRef={chartRef}/>
        </>
    )
}
