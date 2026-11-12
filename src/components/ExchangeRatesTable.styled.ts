import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	td, th {
		padding: 5px 10px;
    border: 1px solid ${p => p.theme.colors.cellBorder};
    font-size: 16px;
		margin: 0;
	}

	tr:nth-child(even) {
		background-color: ${p => p.theme.colors.row};
	}

	td[data-number="true"] {
		text-align: right;
	}

	th {
		background-color: ${p => p.theme.colors.rowHeader};
	}
`