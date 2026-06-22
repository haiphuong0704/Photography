'use strict';
const PackagesModel = require('../models/PackagesModel');

class ContactPresenter {
  static show(req, res) {
    res.render('contact', {
      title:        'Liên hệ — LỆCH STUDIO',
      currentPage:  'contact',
      success:      req.query.success === '1',
      activeTab:    req.query.tab || 'message',
      contactPhoto: 'https://picsum.photos/seed/ct301/400/500',
      packages:     PackagesModel.getAll(),
      sessionTypes: PackagesModel.getSessionTypes(),
      prefPackage:  req.query.package || ''
    });
  }

  static submit(req, res) {
    res.redirect('/contact?success=1&tab=message');
  }
}

module.exports = ContactPresenter;
