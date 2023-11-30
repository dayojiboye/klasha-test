import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import CustomSelect from "components/CustomSelect/CustomSelect";
import React from "react";
import ArrowDown from "assets/icons/arrow-down.svg";
import { ReactSVG } from "react-svg";

const StyledDashboardFilters = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	> h2 {
		font-size: 20px;
		font-family: GS-Medium;
		letter-spacing: -0.4px;
	}

	hr {
		width: 24px;
		border-color: rgba(0, 0, 0, 0.1);
		transform: rotate(270deg);
	}

	.duration-filter {
		display: flex;
		gap: 24px;

		button {
			width: fit-content;
			height: fit-content;
			font-size: 14px;
			font-weight: 600;
			color: ${(props) => props.theme.colors.secondary};

			&.selected {
				color: ${(props) => props.theme.colors.pink};
			}
		}
	}

	.other-filters {
		display: flex;
		gap: 10px;
		margin-left: 25px;
		flex: 1;

		.channel-filter {
			flex: 1;
			max-width: 283px;
		}

		.download-btn {
			padding: 12px 16px;
		}
	}
`;

export default function DashboardFilters({ filters, onChangeFilter }) {
	const { duration, currency } = filters || {};

	const setFieldValue = (name, value) => {
		onChangeFilter(name, value);
	};

	return (
		<StyledDashboardFilters>
			<h2>Sales</h2>
			<hr />
			<div className="duration-filter">
				<button
					className={duration === 7 ? "selected" : ""}
					onClick={() => setFieldValue("duration", 7)}
				>
					7 days
				</button>
				<button
					className={duration === 30 ? "selected" : ""}
					onClick={() => setFieldValue("duration", 30)}
				>
					30 days
				</button>
			</div>
			<div className="other-filters">
				<CustomDropdown label={currency} />
				<CustomSelect
					cls="channel-filter"
					name="channel"
					placeholder="Select channel"
					defaultValue={{ label: "Email", value: "email" }}
					// options={[{ label: "Email", value: "email" }]}
					// handleChange={(channel) => setFieldValue("channel", channel.value)}
				/>
				<Button variant="outline" className="download-btn">
					<ReactSVG src={ArrowDown} /> Download report
				</Button>
			</div>
		</StyledDashboardFilters>
	);
}
