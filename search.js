module.exports = async (req, res) => {
    // Разрешаем CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    try {
      const query = req.query.q || '';
      
      // Простые тестовые данные
      const products = [
        { id: 1, title: `Телефон ${query}`, price: "1000 TON", image: "https://via.placeholder.com/150" },
        { id: 2, title: `Ноутбук ${query}`, price: "2500 TON", image: "https://via.placeholder.com/150" },
        { id: 3, title: `Наушники ${query}`, price: "500 TON", image: "https://via.placeholder.com/150" }
      ];
      
      res.json(products);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };