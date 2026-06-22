'use strict';

class ContactPresenter {
  static show(req, res) {
    res.render('contact', {
      title:        'Liên hệ — LỆCH STUDIO',
      currentPage:  'contact',
      success:      req.query.success === '1',
      contactPhoto: 'https://images.unsplash.com/photo-1622277430358-f4d134452e2e?w=600&h=750&fit=crop&auto=format&q=80'
    });
  }

  static submit(req, res) {
    res.redirect('/contact?success=1');
  }
}

module.exports = ContactPresenter;
