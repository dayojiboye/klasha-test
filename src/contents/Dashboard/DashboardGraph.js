import React from "react";
import Chart from "react-apexcharts";
import { formatCurrency } from "utils/helpers";

export default function DashboardGraph({ series = [] }) {
	const [chartConfig] = React.useState({
		options: {
			chart: {
				// height: 200,
				type: "area",
				offsetY: 30,
				offsetX: -5,
				fontFamily: "Inter",
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			colors: ["#EF2C5A"],
			tooltip: {
				enabled: true,
				shared: false,
				followCursor: false,
				intersect: false,
				inverseOrder: false,
				custom: undefined,
				fillSeriesColor: false,
				theme: false,
				style: {
					fontSize: "14px",
					fontFamily: "Inter",
					fontWeight: 500,
				},
				onDatasetHover: {
					highlightDataSeries: true,
				},
				x: {
					show: false,
					formatter: undefined,
				},
				y: {
					formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
						return formatCurrency(value);
					},
					title: {
						formatter: (seriesName) => seriesName,
					},
				},
				z: {
					formatter: undefined,
				},
				marker: {
					show: false,
				},
				items: {
					display: "flex",
				},
				fixed: {
					enabled: false,
					position: "topRight",
					offsetX: 0,
					offsetY: 0,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
				labels: {
					formatter: function (value) {
						return formatCurrency(value, "");
					},
					style: {
						colors: "#0A0A0A",
						fontSize: "14px",
						fontFamily: "Inter",
						fontWeight: 400,
					},
				},
			},
			xaxis: {
				lines: {
					show: false,
				},
				labels: {
					formatter: function (value) {
						return value;
					},
					style: {
						colors: "#0A0A0A",
						fontSize: "14px",
						fontFamily: "Inter",
						fontWeight: 400,
					},
				},
			},
			legend: {
				show: false,
			},
			stroke: {
				show: true,
				curve: "straight",
				colors: undefined,
				width: 1,
			},
			fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.7,
					opacityTo: 0.9,
					stops: [0, 90, 100],
				},
				colors: ["#EF2C5A"],
			},
		},
	});

	return (
		<Chart
			options={chartConfig.options}
			series={series}
			type="area"
			height="250"
			// width="1000"
		/>
	);
}
