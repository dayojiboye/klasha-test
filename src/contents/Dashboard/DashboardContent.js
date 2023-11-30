import styled from "@emotion/styled";
import SalesOverviewCard from "components/Cards/SalesOverviewCard";
import React from "react";
import GraphUpward from "assets/images/graph-upward.png";
import GraphDownward from "assets/images/graph-downward.png";

const Container = styled.div`
	width: 100%;

	h1 {
		font-size: 20px;
		font-family: GS-Medium;
		letter-spacing: -0.4px;
	}

	.sales-overview {
		display: flex;
		margin-top: 24px;
		gap: 24px;
		flex-wrap: wrap;

		@media (min-width: 1024px) {
			flex-wrap: unset;
		}
	}
`;

export default function DashboardContent() {
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
		</Container>
	);
}
