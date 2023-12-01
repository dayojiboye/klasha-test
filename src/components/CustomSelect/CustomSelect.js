import styled from "@emotion/styled";
import Select from "react-select";

const customStyles = (zIndex = 40) => {
	const style = {
		control: (provided, state) => {
			return {
				...provided,
				cursor: "pointer",
				width: "100%",
				height: "40px",
				minHeight: "unset",
				fontSize: "14px",
				fontWeight: "400",
				color: state.isDisabled ? "#ccc" : "#565C69",
				borderRadius: "8px",
				backgroundColor: "#fff",
				borderColor: "#F4F4F4 !important",
				boxShadow: state.menuIsOpen || state.isFocused ? "none !important" : "none !important",
				transition: "all 300ms ease-out",
			};
		},

		valueContainer: (provided, state) => {
			return {
				...provided,
				height: "100%",
				padding: "0px",
				paddingLeft: "8px",
				paddingRight: "8px",
			};
		},

		placeholder: (provided, state) => {
			return {
				...provided,
				fontSize: "14px",
				color: "#565C69",
			};
		},

		singleValue: (provided, state) => {
			return {
				...provided,
				color: "inherit",
			};
		},

		indicatorsContainer: (provided, state) => {
			return {
				...provided,
				height: "100%",
			};
		},

		indicatorSeparator: (provided, state) => {
			return {
				...provided,
				display: "none",
			};
		},

		dropdownIndicator: (provided, state) => {
			return {
				...provided,
				color: "#0A0A0A",
			};
		},

		menu: (provided, state) => {
			return {
				...provided,
				paddingLeft: "8px",
				paddingRight: "8px",
				borderRadius: "4px",
				backgroundColor: "#fff",
			};
		},

		menuList: (provided, state) => {
			return {
				...provided,
				maxHeight: "259px",
				backgroundColor: "inherit",
			};
		},

		option: (provided, state) => {
			return {
				...provided,
				paddingLeft: 0,
				paddingRight: 0,
				marginTop: "4px",
				marginBottom: "4px",
				fontSize: "14px",
				lineHeight: 1.3,
				cursor: "pointer",
				color: "#565C69",
				backgroundColor: "inherit !important",
				transition: "all 300ms ease-out",
			};
		},

		menuPortal: (base) => ({ ...base, zIndex }), // in conjuction with menuPortalTarget
	};

	return style;
};

export const StyledSelectContainer = styled.div`
	width: 100%;

	input {
		color: ${(props) => props.theme.colors.white} !important;
		height: 100% !important;
	}

	.react-select__multi-value {
		background-color: ${(props) => props.theme.colors.primary};
	}

	.react-select__multi-value__label {
		color: ${(props) => props.theme.colors.white};
	}
`;

const StyledCustomSelectInputField = styled(Select)`
	.react-select__dropdown-indicator svg {
		width: 24px;
		height: 24px;
	}
`;

export default function CustomSelect({
	name,
	handleChange,
	placeholder = "Search",
	options,
	optDesc,
	optValue,
	isSearchable = false,
	zIndex,
	cls,
	...props
}) {
	return (
		<StyledSelectContainer className={cls}>
			<StyledCustomSelectInputField
				name={name}
				inputId={name}
				instanceId={name}
				onChange={handleChange}
				isSearchable={isSearchable}
				styles={customStyles(zIndex)}
				classNamePrefix="react-select"
				placeholder={placeholder}
				options={options}
				getOptionLabel={(option) => (optDesc ? option[optDesc] : option.label)}
				getOptionValue={(option) => (optValue ? option[optValue] : option.value)}
				menuPortalTarget={document.body}
				blurInputOnSelect={false}
				{...props}
			/>
		</StyledSelectContainer>
	);
}
