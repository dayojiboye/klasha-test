import styled from "@emotion/styled";
import React from "react";
import ReactPaginate from "react-paginate";
import ArrowLeft from "assets/icons/chevron-left-2.svg";

export const StyledPagination = styled(ReactPaginate)`
	display: inline-flex;
	width: 100%;
	max-width: 375px;
	align-items: center;
	border-radius: 5px;
	border: 1px solid #e8e8e8;
	background-color: ${(props) => props.theme.colors.white};
	height: 38px;
	justify-content: space-between;

	@media (max-width: 500px) {
		max-width: 100px;
	}

	.page-item {
		@media (max-width: 500px) {
			display: none;
		}
	}

	.prev-page-item {
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.next-page-item {
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.page-item,
	.next-page-item,
	.prev-page-item {
		font-size: 14px;
		color: #a39d9e;
		font-weight: 600;
	}

	.page-item.selected {
		background-color: #f0f0f0;
		color: ${(props) => props.theme.colors.secondary};
		border-radius: 50%;
	}

	.page-item a {
		width: 31px;
		height: 31px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}

	.prev-page-item {
		border-radius: 0;
	}

	.next-page-item {
		border-radius: 0;
	}

	.next-page-item a,
	.prev-page-item a {
		width: 42px;
		height: 38px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
	}

	.prev-page-item a::before {
		content: "";
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		background: url(${ArrowLeft}) no-repeat center;
		background-size: contain;
	}

	.next-page-item a::after {
		content: "";
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		background: url(${ArrowLeft}) no-repeat center;
		background-size: contain;
		transform: rotate(180deg);
	}
`;

export default function CustomPagination({ totalPages, paginate, ...props }) {
	const pageRange = 1.5;

	return (
		<StyledPagination
			breakLabel="..."
			previousLabel=""
			nextLabel=""
			renderOnZeroPageCount={null}
			marginPagesDisplayed={3}
			pageRangeDisplayed={pageRange}
			breakClassName="page-item"
			containerClassName="pagination"
			pageClassName="page-item"
			previousClassName="prev-page-item"
			nextClassName="next-page-item"
			onPageChange={paginate}
			pageCount={totalPages}
			{...props}
		/>
	);
}
