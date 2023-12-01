import styled from "@emotion/styled";
import React from "react";

const StyledSalesOverviewCard = styled.div`
	padding: 25px 24px 24px;
	border: 1px solid ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	color: ${(props) => props.theme.colors.black};
	min-height: 240px;
	display: flex;
	flex-direction: column;

	@media (min-width: 640px) {
		min-height: unset;
	}

	&:hover {
		background-color: ${(props) => props.theme.colors.black};
		color: ${(props) => props.theme.colors.white};
	}

	&:first-of-type {
		h3 {
			margin-top: unset;
		}
	}

	h3 {
		margin-top: auto;
	}

	h3,
	p {
		font-size: 14px;
	}

	h4 {
		margin-top: 4px;
		font-family: GS-Medium;
		font-size: 20px;
	}

	img {
		height: auto;
		width: 100%;
		object-fit: contain;
		margin: 26px 0px 19px;
	}
`;

export default function SalesOverviewCard({ title, graphImgSrc, dateRange, value }) {
	return (
		<StyledSalesOverviewCard>
			{dateRange && <p>{dateRange}</p>}
			{graphImgSrc && <img alt={title} width={300} height={300} src={graphImgSrc} />}
			<h3>{title}</h3>
			<h4>{value}</h4>
		</StyledSalesOverviewCard>
	);
}
