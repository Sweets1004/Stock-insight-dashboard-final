'use client';
import React from "react";

const mockData = [
  {
    ticker: "MSFT",
    name: "Microsoft",
    price: "$388.45",
    change: "+1.74%",
    category: "Income & Stability"
  },
  {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    price: "$490.55",
    change: "+1.78%",
    category: "Income & Stability"
  },
  {
    ticker: "PLTR",
    name: "Palantir",
    price: "$88.55",
    change: "-0.06%",
    category: "Growth & IPO"
  },
  {
    ticker: "ARM",
    name: "Arm Holdings",
    price: "$103.99",
    change: "+3.42%",
    category: "Growth & IPO"
  },
  {
    ticker: "RIVN",
    name: "Rivian",
    price: "$11.47",
    change: "+0.18%",
    category: "Growth & IPO"
  }
];

const articles = [
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
  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Top 5 Stocks to Watch (Today)</h1>
      {mockData.map((stock, index) => (
        <div key={index} style={{ marginBottom: 16, padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: 18 }}>{stock.name} ({stock.ticker})</h2>
              <p style={{ color: '#666' }}>{stock.category}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>{stock.price}</p>
              <p style={{ color: stock.change.includes('+') ? 'green' : 'red' }}>{stock.change}</p>
            </div>
          </div>
        </div>
      ))}
      <h2 style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Top 5 Articles</h2>
      {articles.map((article, idx) => (
        <a key={idx} href={article.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 10, color: 'blue', textDecoration: 'underline' }}>
          {article.title}
        </a>
      ))}
    </main>
  );
}
