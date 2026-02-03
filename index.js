const express = require('express');
const app = express();

app.use(express.json());

// 故意寫一個有 bug 的 API
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // TODO: 應該要驗證 userId 是不是數字
    res.json({ id: userId, name: 'Test User' });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    // TODO: 缺少 input validation
    res.status(201).json({ id: Date.now(), name, email });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
