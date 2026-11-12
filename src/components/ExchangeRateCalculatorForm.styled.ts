import styled from "styled-components";


export const Form = styled.form`
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const InputGroup = styled.div`
  display: inline-flex;
	font-size: 14px;

  input {
		background: ${p => p.theme.colors.inputBg};
    border: none;
    padding: 12px 0 12px 15px;
    outline: none;
		line-height: 20px;
		color: ${p => p.theme.colors.text};

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		-moz-appearance: textfield;
		appearance: textfield;
  }

  span {
		background: ${p => p.theme.colors.inputBg};
    padding: 12px 15px;
    display: flex;
    align-items: center;
  }
`;


export const SelectWrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100px;

  &::after {
    content: "▼";
    position: absolute;
    right: 15px;
    color: ${p => p.theme.colors.text};
    font-size: 12px;
    pointer-events: none;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  background: ${p => p.theme.colors.inputBg};
	border: none;
  cursor: pointer;
	line-height: 20px;
	color: ${p => p.theme.colors.text};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }
`;

export const ResultGroup = styled.div`
	display: flex;
	span {
		padding: 12px 15px;
	}

	@media (min-width: 576px) {
		flex-direction: row-reverse;
	}
`