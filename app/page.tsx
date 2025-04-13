'use client';
import React, { useEffect, useState } from "react";

const mockArticles = [
  {
    title: "Microsoft’s AI Strategy is Working",
    url: "https://www.barrons.com/articles/microsoft-ai-growth"
  },
  {
    title: "How ETFs are Beating Hedge Funds in 2025",
    url: "https://www.bloomberg.com/news/articles/etfs-outperform-hedgefunds"
  },
  {
    title: "Palantir’s Government Contracts Expand",
    url: "https://www.reuters.com/markets/palantir-government-data"
  },
  {
    title: "Rivian's Q1 Deliveries Beat Expectations",
    url: "https://www.cnbc.com/rivian-ev-q1-2025"
  },
  {
    title: "ARM’s IPO Success Signals Chip Demand",
    url: "https://techcrunch.com/arm-holdings-ipo-analysis"
  }
];

export default function HomePage() {
  const [stockData, setStockData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchStockData() {
      const res = await fetch("/api/stocks");
      const data = await res.json();
      setStockData(data);
    }

    fetchStockData();
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Top Stocks to Watch (Live)</h1>
      {stockData.length > 0 ? stockData.map((stock, index) => (
        <div key={index} style={{ marginBottom: 16, padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: 18 }}>{stock.name} ({stock.symbol})</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>${stock.price}</p>
              <p style={{ color: stock.change >= 0 ? 'green' : 'red' }}>
                {stock.change >= 0 ? `+${stock.change}` : stock.change}
              </p>
            </div>
          </div>
        </div>
      )) : <p>Loading live stock data...</p>}

      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Top 5 Articles</h2>
      {mockArticles.map((article, idx) => (
        <a key={idx} href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 10, color: 'blue', textDecoration: 'underline' }}>
          {article.title}
        </a>
      ))}
    </main>
  );
}
// Trigger redeploy
