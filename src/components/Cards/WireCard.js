import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import LinesBg from "assets/images/wire-lines.png";

const StyledWireCard = styled.div`
	background: url(${LinesBg}) ${(props) => props.theme.colors.pink};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 24px;
	border-radius: 8px;
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	height: 284px;
	overflow: hidden;

	@media (min-width: 1024px) {
		height: calc(100% - 40px);
		width: 304px;
	}

	h3 {
		max-width: 192px;
		color: ${(props) => props.theme.colors.white};
		font-size: 20px;
		font-family: GS-Medium;
		letter-spacing: -0.4px;
		line-height: 32px;
	}

	button {
		margin-top: auto;
		width: 130px;
	}
`;

export default function WireCard() {
	return (
		<StyledWireCard>
			<h3>KlashaWire - send money to businesses globally from Africa</h3>
			<Button variant="secondary">Send a Wire</Button>
		</StyledWireCard>
	);
}
