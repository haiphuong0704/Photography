'use strict';
const PackagesModel = require('../models/PackagesModel');

class ContactPresenter {
  static show(req, res) {
    res.render('contact', {
      title:        'Liên hệ — LỆCH STUDIO',
      currentPage:  'contact',
      success:      req.query.success === '1',
      activeTab:    req.query.tab || 'message',
      contactPhoto: 'https://images.unsplash.com/photo-1622277430358-f4d134452e2e?w=600&h=750&fit=crop&auto=format&q=80',
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
