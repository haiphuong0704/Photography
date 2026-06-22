'use strict';
const GalleryModel = require('../models/GalleryModel');

class GalleryPresenter {
  static show(req, res) {
    // All items are sent to the view; client-side JS handles filtering.
    // activeFilter is passed so JS can initialize the correct tab on load.
    const activeFilter = req.query.filter || 'all';

    res.render('gallery', {
      title:        'Gallery — LỆCH STUDIO',
      currentPage:  'gallery',
      filters:      GalleryModel.getFilters(),
      activeFilter,
      items:        GalleryModel.getAll()
    });
  }
}

module.exports = GalleryPresenter;
