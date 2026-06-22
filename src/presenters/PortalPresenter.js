'use strict';
const ClientModel = require('../models/ClientModel');

class PortalPresenter {
  static login(req, res) {
    if (req.session.clientId) return res.redirect('/portal/gallery');
    res.render('portal/login', {
      title:       'Client Portal — LỆCH STUDIO',
      currentPage: 'portal',
      error:       req.query.error || null
    });
  }

  static authenticate(req, res) {
    const code   = (req.body.code || '').trim().toUpperCase();
    const client = ClientModel.findByCode(code);

    if (!client) return res.redirect('/portal?error=invalid');

    req.session.clientId = client.id;
    res.redirect('/portal/gallery');
  }

  static gallery(req, res) {
    if (!req.session.clientId) return res.redirect('/portal');

    const client = ClientModel.findById(req.session.clientId);
    if (!client) {
      req.session.destroy();
      return res.redirect('/portal');
    }

    res.render('portal/gallery', {
      title:       `${client.name} — Gallery riêng tư`,
      currentPage: 'portal',
      client
    });
  }

  static logout(req, res) {
    req.session.destroy(() => res.redirect('/portal'));
  }
}

module.exports = PortalPresenter;
