module.exports = async (req, res) => {
  // ★ CORS заголовки ★
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Обработка OPTIONS запроса (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const query = req.query.q || '';
    
    // Тестовые данные
    const products = [
      { id: 1, title: `Результат для "${query}"`, price: "1000 TON" },
      { id: 2, title: "Телефон", price: "1500 TON" },
      { id: 3, title: "Ноутбук", price: "2500 TON" }
    ];
    
    res.json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
