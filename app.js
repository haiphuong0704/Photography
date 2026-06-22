'use strict';
const express      = require('express');
const path         = require('path');
const session      = require('express-session');
const routes       = require('./src/routes');
const StudioModel  = require('./src/models/StudioModel');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'lech-studio-secret-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 4 } // 4 hours
}));

// Make studio info + current year available to every view
app.use((req, res, next) => {
  res.locals.studioInfo  = StudioModel.getInfo();
  res.locals.currentPage = '';
  res.locals.session     = req.session;
  next();
});

app.use('/', routes);

app.use((req, res) => res.status(404).send('404 — Trang không tìm thấy'));

module.exports = app;
