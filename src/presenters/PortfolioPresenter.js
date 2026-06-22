'use strict';
const PortfolioModel = require('../models/PortfolioModel');

class PortfolioPresenter {
  static show(req, res) {
    res.render('portfolio', {
      title:       'Portfolio — LỆCH STUDIO',
      currentPage: 'portfolio',
      sections:    PortfolioModel.getSections()
    });
  }
}

module.exports = PortfolioPresenter;
