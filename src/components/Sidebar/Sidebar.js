import styled from "@emotion/styled";
import { SIDEBAR_WIDTH } from "constants/general";
import React from "react";
import Logo from "assets/icons/logo.svg";
import { ReactSVG } from "react-svg";
import { Box, Button } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import QuestionMarkIcon from "assets/icons/question-mark-icon.svg";
import ChevronLeftIcon from "assets/icons/chevron-left.svg";
import dashRoutes from "components/Dashbase/DashRoutes";

const StyledSidebar = styled.nav`
	position: absolute;
	overflow-y: scroll;
	width: ${SIDEBAR_WIDTH};
	top: 0px;
	left: 0px;
	background-color: ${(props) => props.theme.colors.navBg};
	padding: 30px 48px 48px;
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: none;
	scrollbar-width: none;
	height: 100%;
	display: flex;
	flex-direction: column;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1203px) {
		position: fixed;
		left: ${({ open }) => (open ? 0 : "-100%")};
		transition: left 0.4s ease-in-out;
		min-height: 100%;
		padding: 30px 16px 80px;
		z-index: 9;
	}
`;

const LogoContainer = styled(Box)`
	svg {
		width: 83px;
		height: 23px;
	}
`;

const SidebarItems = styled.ul`
	margin-top: 65px;
	display: flex;
	flex-direction: column;
	gap: 34px;
	width: 100%;
	margin-bottom: 135px;
`;

const SidebarItem = styled.li`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;

	> p {
		color: #8d8d8d;
		font-family: GS-Medium;
		font-size: 16px;
		letter-spacing: -0.32px;
	}

	a {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 8px;
		color: ${(props) => props.theme.colors.secondary};
		font-size: 16px;

		&.active {
			color: ${(props) => props.theme.colors.pink};
			font-weight: 600;

			svg {
				path {
					stroke: ${(props) => props.theme.colors.pink};
				}
			}
		}

		svg {
			width: 24px;
			height: 24px;
		}
	}
`;

const SidebarFooter = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 14px;

	a,
	button {
		width: 120px;
	}
`;

export default function Sidebar({ open }) {
	return (
		<StyledSidebar open={open}>
			<LogoContainer>
				<ReactSVG src={Logo} />
			</LogoContainer>

			<SidebarItems>
				{dashRoutes.map((parentGroup, index) => {
					return (
						<SidebarItem key={index}>
							<p>{parentGroup.title}</p>
							{parentGroup.routes.map((group, groupIndex) => (
								<NavLink key={groupIndex} to={group.path}>
									<ReactSVG src={group.icon} /> <span>{group.title}</span>
								</NavLink>
							))}
						</SidebarItem>
					);
				})}
			</SidebarItems>

			<SidebarFooter>
				<Button as={Link} to="/" variant="primary">
					<ReactSVG src={QuestionMarkIcon} /> <span>Support</span>
				</Button>
				<Button variant="outline">
					<ReactSVG src={ChevronLeftIcon} /> <span>Hide panel</span>
				</Button>
			</SidebarFooter>
		</StyledSidebar>
	);
}
