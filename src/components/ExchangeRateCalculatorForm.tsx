import { useMemo, useState, type FC } from "react"
import type { ExchangeRateRecord } from "../api/fetchCurrencyExchangeRates"
import { Form, InputGroup, SelectWrapper, StyledSelect, ResultGroup } from "./ExchangeRateCalculatorForm.styled"

interface ExchangeRatesTableProps {
	data: ExchangeRateRecord[]
}

export const ExchangeRateCalculatorForm: FC<ExchangeRatesTableProps> = ({ data }) => {
	const [valueFrom, setValueFrom] = useState(1)
	const [currencyTo, setCurrencyTo] = useState(data[0]?.code ?? "")

	const selectedRecord = useMemo(
		() => data.find(record => record.code === currencyTo),
		[data, currencyTo]
	)

	const valueTo = useMemo(
		() => selectedRecord
			? Number(((valueFrom * selectedRecord.rate) / selectedRecord.amount).toFixed(3))
			: 0, [selectedRecord, valueFrom]
	)

	const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		const newValue = value === "" ? 0 : Number(value)
		setValueFrom(newValue)
	}

	return (
		<Form>
			<InputGroup>
				<input
					id="value-from"
					data-testid="value-from"
					type="number"
					value={valueFrom}
					onChange={onHandleInputChange}
				/>
				<span data-testid="default-currency-from">CZK</span>
			</InputGroup>

			<ResultGroup>
				<SelectWrapper>
					<StyledSelect
						data-testid="currency-to"
						value={currencyTo}
						onChange={e => setCurrencyTo(e.target.value)}
					>
						{data.map(record => (
							<option key={record.code} value={record.code}>
								{record.code}
							</option>
						))}
					</StyledSelect>
				</SelectWrapper>
				<span data-testid="value-to">{valueTo}</span>
			</ResultGroup>
		</Form>
	)
}
