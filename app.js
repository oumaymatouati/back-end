const express =require('express');
const app=express();

app.get('/', (req, res) => {
  res.send('test route => home page');
});
// Page Not founded
app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not founded',
  });
});

