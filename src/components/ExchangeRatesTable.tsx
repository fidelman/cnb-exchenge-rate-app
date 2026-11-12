import type { FC } from "react";
import type { ExchangeRateRecord } from "../api/fetchCurrencyExchangeRates";
import { Table } from "./ExchangeRatesTable.styled";

interface ExchangeRatesTableProps {
	data: ExchangeRateRecord[]
}

export const ExchangeRatesTable: FC<ExchangeRatesTableProps> = ({data}) => {
	return (
		<Table data-testid="exchange-rates-table">
			<thead>
				<tr>
					<th>Country</th>
					<th>Currency</th>
					<th>Amount</th>
					<th>Code</th>
					<th>Rate</th>
				</tr>
			</thead>
			<tbody>
				{
					data.map(record => (
						<tr key={record.code}>
							<td>{record.country}</td>
							<td>{record.currency}</td>
							<td data-number="true">{record.amount}</td>
							<td>{record.code}</td>
							<td data-number="true">{record.rate}</td>
						</tr>
					))
				}
			</tbody>
		</Table>
	)
}