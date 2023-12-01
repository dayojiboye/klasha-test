import styled from "@emotion/styled";
import CustomInput from "components/CustomInput/CustomInput";
import React from "react";
import { ReactSVG } from "react-svg";
import SearchIcon from "assets/icons/search-icon.svg";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import FilterIcon from "assets/icons/filter-icon.svg";
import { Button } from "@chakra-ui/react";
import CustomTable from "components/CustomTable/CustomTable";
import CustomPagination from "components/CustomPagination/CustomPagination";

const Container = styled.div`
	width: 100%;
	border-radius: 8px;
	border: 1px solid #f0f0f0;
	padding: 16px 0px 17px;

	h1 {
		font-size: 18px;
		font-family: GS-Medium;
		letter-spacing: -0.36px;
		margin-left: 16px;
		padding-bottom: 24px;
	}

	.filter-panel {
		border-top: 1px solid #f0f0f0;
		border-bottom: 1px solid #f0f0f0;
		padding: 5px 16px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 8px;

		@media (min-width: 640px) {
			flex-wrap: nowrap;
			gap: unset;
		}

		.search-input {
			width: 180px;
		}

		.filter-actions {
			display: flex;
			gap: 12px;

			.filter-btn {
				border-radius: 8px;
				width: 94px;
				padding: 12px 20px;
				font-size: 12px;
				font-weight: 600;
			}

			.export-btn {
				width: 79px;
			}
		}
	}

	.pagination-panel {
		border-top: 1px solid #f0f0f0;
		padding: 16px 16px 0px;
		display: flex;
		justify-content: flex-end;
	}
`;

const tableHeadings = [
	"Transaction ID",
	"Source",
	"Customer name",
	"Customer email",
	"Amount",
	"Request date",
	"Status",
];

const getTableData = [
	{
		transactionId: "GB124QWERTY12346",
		source: "GTB",
		customerName: "Mike Owen",
		customEmail: "0223337281",
		amount: "$230.00",
		requestDate: "24.08.2021",
		status: "Pending",
	},
	{
		transactionId: "CB328ABCEDF23416",
		source: "UBA",
		customerName: "Steve O'Shassy",
		customEmail: "0982764829",
		amount: "$480.00",
		requestDate: "22.08.2021",
		status: "Successful",
	},
	{
		transactionId: "GB124QWERTY12346",
		source: "GTB",
		customerName: "Mike Owen",
		customEmail: "0223337281",
		amount: "$230.00",
		requestDate: "24.08.2021",
		status: "Pending",
	},
	{
		transactionId: "GB124QWERTY12346",
		source: "GTB",
		customerName: "Mike Owen",
		customEmail: "0223337281",
		amount: "$230.00",
		requestDate: "24.08.2021",
		status: "Pending",
	},
];

export default function TransactionsContent() {
	const [page, setPage] = React.useState(0);

	const handlePagination = ({ selected }) => {
		setPage(selected);
	};

	return (
		<Container>
			<h1>Transaction history</h1>

			<div className="filter-panel">
				<CustomInput
					className="search-input"
					placeholder="Search"
					name="search"
					icon={<ReactSVG src={SearchIcon} />}
				/>

				<div className="filter-actions">
					<CustomDropdown cls="filter-btn" label="Filter" icon={FilterIcon} />
					<Button className="export-btn" variant="outline">
						Export
					</Button>
				</div>
			</div>

			<CustomTable headings={tableHeadings} bodyData={getTableData} />

			<div className="pagination-panel">
				<CustomPagination forcePage={page} paginate={handlePagination} totalPages={10} />
			</div>
		</Container>
	);
}
