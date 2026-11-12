import { useQuery } from "@tanstack/react-query"
import { fetchCurrencyExchangeRates } from "./api/fetchCurrencyExchangeRates"
import { ExchangeRatesTable } from "./components/ExchangeRatesTable"
import { ExchangeRateCalculatorForm } from "./components/ExchangeRateCalculatorForm"
import { Container, Title, Wrapper } from "./App.styled"


function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["rateData"],
    queryFn: fetchCurrencyExchangeRates,
  })

  return (
    <Wrapper>
      <Container>
        <Title data-testid="title">Central banck exchange rate fixing</Title>
        {
          data && <>
            <p data-testid="current-date">Validity for {data.dateStr} (and, where relevant, the following Saturday, Sunday or public holiday)</p>
            <ExchangeRateCalculatorForm data={data.exchangeRates} />
            <ExchangeRatesTable data={data.exchangeRates} />
          </>
        }
        {isLoading && <p data-testid="loading">Loading...</p>}
        {error && <p data-testid="error">Something went wrong</p>}
      </Container>
    </Wrapper>
  )
}

export default App
