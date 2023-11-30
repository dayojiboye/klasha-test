import styled from "@emotion/styled";
import { SIDEBAR_WIDTH } from "constants/general";
import React from "react";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
	height: 64px;
	margin-left: ${SIDEBAR_WIDTH};
	border-bottom: 1px solid #ededed;
	padding: 16px 32px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${(props) => props.theme.colors.mainBg};
	z-index: 4;

	@media (max-width: 1203px) {
		margin-left: 0px;
		padding: 16px;
	}
`;

export default function Header({ open, onClick }) {
	const navigate = useNavigate();

	return (
		<>
			<StyledHeader></StyledHeader>
		</>
	);
}
