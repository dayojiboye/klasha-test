import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { SIDEBAR_WIDTH } from "constants/general";
import React from "react";
import ChevronDown from "assets/icons/chevron-down.svg";
import UserIcon from "assets/icons/user-icon.svg";
import { ReactSVG } from "react-svg";

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
	background-color: ${(props) => props.theme.colors.white};
	z-index: 4;
	gap: 16px;

	@media (max-width: 1203px) {
		margin-left: 0px;
		padding: 16px;
	}
`;

const UserPanel = styled(MenuButton)`
	width: 60px;
	display: flex;
	align-items: center;
	gap: 0px;
	background-color: transparent !important;
	font-size: 14px;
	color: ${(props) => props.theme.colors.secondary};
	border-radius: 0px;
	padding: 0px;
	height: 32px;
	font-weight: 600;

	&:hover {
		background-color: transparent;
	}
`;

export default function Header({ open, onClick }) {
	return (
		<>
			<StyledHeader>
				<Menu>
					<UserPanel as={Button} rightIcon={<ReactSVG src={ChevronDown} />}>
						<ReactSVG src={UserIcon} />
					</UserPanel>
					<MenuList zIndex={10} bg="cardBg" borderColor="#EDEDED" />
				</Menu>

				<Menu>
					<UserPanel
						as={Button}
						rightIcon={<ReactSVG src={ChevronDown} />}
						width="46px !important"
						height="24px !important"
					>
						En
					</UserPanel>
					<MenuList zIndex={10} bg="cardBg" borderColor="#EDEDED" />
				</Menu>
			</StyledHeader>
		</>
	);
}
