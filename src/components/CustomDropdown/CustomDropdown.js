import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import ChevronDown from "assets/icons/chevron-down.svg";
import { ReactSVG } from "react-svg";

const StyledDropdown = styled(MenuButton)`
	width: 91px;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	border-radius: 6px;
	background-color: transparent !important;
	height: 40px;
	border: 1px solid ${(props) => props.theme.colors.secondary} !important;
	color: ${(props) => props.theme.colors.secondary};
	font-size: 14px;
	font-weight: 500;
	gap: 6px;

	&:hover {
		background-color: transparent;
	}

	svg {
		width: 18px;
		height: 18px;
	}
`;

export default function CustomDropdown({ cls, label }) {
	return (
		<Menu>
			<StyledDropdown className={cls} as={Button} rightIcon={<ReactSVG src={ChevronDown} />}>
				{label}
			</StyledDropdown>
			<MenuList zIndex={10} bg="cardBg" borderColor="#EDEDED" />
		</Menu>
	);
}
