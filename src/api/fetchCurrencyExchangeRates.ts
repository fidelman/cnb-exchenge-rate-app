const CNB_EXCHENGE_RATE_URL = "/cnb-api/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"

export interface ExchangeRateRecord {
  country: string,
  currency: string,
  amount: number,
  code: string,
  rate: number
}

const fetchRawCurrencyExchangeRates = async () => {
  const res = await fetch(CNB_EXCHENGE_RATE_URL)
  if (!res.ok) {
    console.log("WTF")
    throw new Error(`Server returned status ${res.status}`);
  }
  const payload = await res.text()
  return payload
}

const getProcessedExchangeRates = (rawExchangeRateData: string) => {
  const raws = rawExchangeRateData.split('\n')
  const dateStr = raws[0].split(" #")[0]

  // 2 is for date and header
  // -1 is to remove the last unused line
  const exchangeRates: ExchangeRateRecord[] = raws.slice(2, -1).map(raw => {
    const [country, currency, amountStr, code, rateStr] = raw.split("|")
    return {
      country,
      currency,
      amount: Number(amountStr),
      code,
      rate: Number(rateStr)
    }
  })

  return {
    dateStr, exchangeRates
  }
}

export const fetchCurrencyExchangeRates = async () => {
  const payload = await fetchRawCurrencyExchangeRates()
  const processedExchangeRates = getProcessedExchangeRates(payload)
  return processedExchangeRates
}