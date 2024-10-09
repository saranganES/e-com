require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { connectDB } = require('../config/db');
const userRoutes = require('../routes/userRoutes');
const productsRoutes = require('../routes/productsRoutes');

connectDB();
const app = express();
app.use(express.json({ limit: '4mb' }));
app.use(helmet());

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

//root route
app.get('/', (req, res) => {
  res.send('App works properly!');
});

app.use('/api/user/', userRoutes);
app.use('/api/products/', productsRoutes);

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
