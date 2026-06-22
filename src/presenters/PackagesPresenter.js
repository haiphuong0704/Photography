'use strict';
const PackagesModel = require('../models/PackagesModel');

class PackagesPresenter {
  static show(req, res) {
    res.render('packages', {
      title:       'Bảng giá — LỆCH STUDIO',
      currentPage: 'packages',
      packages:    PackagesModel.getAll()
    });
  }
}

module.exports = PackagesPresenter;
