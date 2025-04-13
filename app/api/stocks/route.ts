import { NextResponse } from "next/server";

// Replace with your actual API key from Financial Modeling Prep
const API_KEY = "O6umGwSf7EPytXUx4FmEtARmZ5odnGcn";

async function getStockData() {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/MSFT,AAPL,GOOGL?apikey=${API_KEY}`);
  const data = await response.json();
  return data;
}

export async function GET() {
  const stockData = await getStockData();
  return NextResponse.json(stockData);
}
