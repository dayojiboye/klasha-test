import styled from "@emotion/styled";
import React from "react";

export const StyledInputContainer = styled.div`
	width: 100%;
	position: relative;

	.input-icon-container {
		position: absolute;
		right: 8px;
		top: 50%;
		transform: translateY(-50%);

		svg {
			width: 20px;
			height: 20px;
		}
	}
`;

export const StyledInput = styled.input`
	display: block;
	height: 40px;
	width: 100%;
	border-radius: 8px;
	border: 1px solid #f4f4f4;
	background-color: ${(props) => props.theme.colors.white};
	padding: 14px 8px 14px 14px;
	font-size: 14px;
	color: ${(props) => props.theme.colors.black} !important;
	outline: none;

	&::placeholder {
		color: #565c69;
	}
`;

export default function CustomInput({
	className,
	name,
	onChange,
	value,
	placeholder,
	icon,
	...props
}) {
	return (
		<StyledInputContainer className={className}>
			<StyledInput
				name={name}
				placeholder={placeholder}
				id={props.id ? props.id : name}
				onChange={onChange}
				value={value}
				{...props}
			/>
			{icon && (
				<label htmlFor={props.id ? props.id : name} className="input-icon-container">
					{icon}
				</label>
			)}
		</StyledInputContainer>
	);
}
