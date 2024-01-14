
const express = require('express');
const app = require('path');
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// about
app.get('/about', (req, res) => {
    res.send('About Page');
}
)
// contact
app.get('/contact', (req, res) => {
    res.send('Contact Page');
}
)
// services
app.get('/services', (req, res) => {
    res.send('Services Page');
}
)
app.get('/services/:id', (req, res) => {
    res.send('Services Page');
}
)
// gallery
app.get('/gallery', (req, res) => {
    res.send('Gallery Page');
}
)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
}
);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`)
})
