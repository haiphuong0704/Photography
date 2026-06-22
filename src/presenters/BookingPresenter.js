'use strict';
const PackagesModel = require('../models/PackagesModel');

class BookingPresenter {
  static show(req, res) {
    res.render('booking', {
      title:        'Đặt lịch chụp — LỆCH STUDIO',
      currentPage:  'booking',
      packages:     PackagesModel.getAll(),
      sessionTypes: PackagesModel.getSessionTypes(),
      success:      req.query.success === '1',
      prefPackage:  req.query.package || ''
    });
  }

  static submit(req, res) {
    // Production: save to DB + send confirmation email
    res.redirect('/booking?success=1');
  }
}

module.exports = BookingPresenter;
