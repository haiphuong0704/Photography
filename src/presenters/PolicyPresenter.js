'use strict';
const StudioModel = require('../models/StudioModel');

class PolicyPresenter {
  static show(req, res) {
    res.render('policy', {
      title:       'Chính sách — LỆCH STUDIO',
      currentPage: 'policy',
      studioInfo:  StudioModel.getInfo()
    });
  }
}

module.exports = PolicyPresenter;
