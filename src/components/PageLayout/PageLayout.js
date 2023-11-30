import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";
import { SIDEBAR_WIDTH } from "constants/general";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const StyledPageLayout = styled(Box)`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;

	@media (max-width: 1203px) {
		height: unset;
		overflow-y: visible;
	}
`;

const StyledMain = styled.main`
	margin-left: ${SIDEBAR_WIDTH};
	padding: 104px 32px 64px;

	@media (max-width: 1203px) {
		margin-left: 0px;
		padding: 72px 16px 64px;
	}
`;

const StyledOverlay = styled(Box)`
	position: fixed;
	visibility: ${({ open }) => (open ? "visible" : "hidden")};
	pointer-events: ${({ open }) => (open ? "all" : "none")};
	opacity: ${({ open }) => (open ? 1 : 0)};
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 8;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	transition: all 0.4s ease-in-out;

	@media screen and (min-width: 1204px) {
		display: none;
	}
`;

const HamburgerContainer = styled(Box)`
	display: none;

	@media (max-width: 1203px) {
		display: flex;
		width: 50px;
		margin-left: auto;
		margin-bottom: 16px;
		height: 50px;
		align-items: center;
		justify-content: center;
		background-color: ${(props) => props.theme.colors.pink};
		border-radius: 50%;
		position: fixed;
		top: 100px;
		right: 16px;
		z-index: 9;
	}
`;

const HamburgerButton = styled.button`
	background-color: transparent;
	border: none;
	width: fit-content;
	height: fit-content;
	padding: 0px;
	min-width: auto;
	min-height: auto;
	box-shadow: none !important;
	position: relative;
	/* z-index: ${({ open }) => (open ? 9 : "unset")}; */

	&:hover {
		background-color: transparent !important;
		border: none !important;
	}
`;

export default function PageLayout() {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	React.useEffect(() => {
		const layout = document.getElementById("page-layout");
		layout.scrollTo(0, 0); // for desktop screens
		window.scrollTo(0, 0);
		setIsOpen(false);
		document.body.setAttribute("style", "");
	}, [location.pathname]);

	return (
		<StyledPageLayout id="page-layout">
			<Sidebar open={isOpen} />
			<Header
				open={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<StyledMain>
				<Outlet />
			</StyledMain>
			<StyledOverlay
				open={isOpen}
				onClick={() => {
					document.body.setAttribute("style", "");
					setIsOpen(false);
				}}
			/>
			<HamburgerContainer>
				<HamburgerButton
					open={isOpen}
					onClick={() => {
						if (!isOpen) {
							document.body.style.touchAction = "none";
							document.body.style.overflow = "hidden";
							document.body.style.overscrollBehavior = "none";
						} else {
							document.body.setAttribute("style", "");
						}
						setIsOpen(!isOpen);
					}}
				>
					{isOpen ? (
						<CloseIcon color="white" boxSize={5} />
					) : (
						<HamburgerIcon color="white" boxSize={8} />
					)}
				</HamburgerButton>
			</HamburgerContainer>
		</StyledPageLayout>
	);
}
