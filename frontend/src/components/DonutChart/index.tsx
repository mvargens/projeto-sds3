import axios from 'axios';
import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

const DonutChart = () => {

    type ChartData = {
        labels: string[];
        series: number[];
    }

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amout-by-saller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;