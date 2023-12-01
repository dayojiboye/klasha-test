import styled from "@emotion/styled";
import SalesOverviewCard from "components/Cards/SalesOverviewCard";
import React from "react";
import GraphUpward from "assets/images/graph-upward.png";
import GraphDownward from "assets/images/graph-downward.png";
import DashboardFilters from "./DashboardFilters";
import DashboardGraph from "./DashboardGraph";
import WireCard from "components/Cards/WireCard";

const Container = styled.div`
	width: 100%;

	h1 {
		font-size: 20px;
		font-family: GS-Medium;
		letter-spacing: -0.4px;
	}

	.sales-overview {
		margin-top: 24px;
		gap: 24px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));

		@media (min-width: 1024px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.sales-report {
		margin-top: 32px;
		width: 100%;
		gap: 24px;
		display: grid;
		grid-template-columns: 1fr;

		@media (min-width: 1024px) {
			grid-template-columns: 1fr auto;
		}

		.sales-graph {
			.graph-panel {
				border-radius: 8px;
				border: 1px solid ${(props) => props.theme.colors.secondary};
				background-color: ${(props) => props.theme.colors.white};
				padding: 0px 0px 34px;
				margin-top: 2px;
			}
		}
	}
`;

export default function DashboardContent() {
	const [filters, setFilters] = React.useState({
		duration: 7,
		currency: "USD",
		channel: "email",
	});

	const onChangeFilter = (name, value) => {
		setFilters({
			...filters,
			[name]: value,
		});
	};

	return (
		<Container>
			<h1>Sales overview</h1>
			<div className="sales-overview">
				<SalesOverviewCard title="Today's sales" value="₦1,652.50" />
				<SalesOverviewCard
					title="This week"
					dateRange="24 Aug - 01 Sep 21"
					value="₦1,652.50"
					graphImgSrc={GraphUpward}
				/>
				<SalesOverviewCard
					title="This month"
					dateRange="24 Aug - 01 Sep 21"
					value="₦1,652.50"
					graphImgSrc={GraphDownward}
				/>
				<SalesOverviewCard
					title="Last month"
					dateRange="24 Aug - 01 Sep 21"
					value="₦1,652.50"
					graphImgSrc={GraphUpward}
				/>
			</div>
			<div className="sales-report">
				<div className="sales-graph">
					<DashboardFilters filters={filters} onChangeFilter={onChangeFilter} />
					<div className="graph-panel">
						<DashboardGraph
							series={[
								{
									name: "",
									data: [
										{
											x: "20 Aug",
											y: 3000,
										},
										{
											x: "21 Aug",
											y: 2000,
										},
										{
											x: "22 Aug",
											y: 3000,
										},
										{
											x: "23 Aug",
											y: 2000,
										},
										{
											x: "24 Aug",
											y: 4000,
										},
										{
											x: "25 Aug",
											y: 3000,
										},
									],
								},
							]}
						/>
					</div>
				</div>
				<WireCard />
			</div>
		</Container>
	);
}
