import styled from "@emotion/styled";
import React from "react";

const StyledTableContainer = styled.div`
	overflow-x: auto;
	width: 100%;
	padding-top: 32px;
	padding: 32px 0px 0px;

	table {
		width: 100%;

		th {
			font-size: 16px;
			color: #5f5f5f;
			white-space: nowrap;
			text-align: left;
			font-family: GS-SemiBold;
			padding: 8px 16px;
		}

		tbody {
			tr {
				&:hover {
					background-color: #f7f7f7;
				}
			}
		}

		td {
			padding: 23px 16px;
			font-size: 14px;
			color: #484848;
			white-space: nowrap;
			text-align: left;
		}
	}
`;

export default function CustomTable({ headings = [], bodyData = [] }) {
	return (
		<>
			<StyledTableContainer>
				<table>
					<thead>
						<tr>
							{headings.map((item, index) => {
								return <th key={index}>{item}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{bodyData.map((bodyDataItem, index) => {
							return (
								<tr key={index}>
									{Object.values(bodyDataItem).map((content, i) => {
										return <td key={i}>{content}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</StyledTableContainer>
		</>
	);
}
