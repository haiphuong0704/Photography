'use strict';
const StudioModel  = require('../models/StudioModel');
const GalleryModel = require('../models/GalleryModel');
const BlogModel    = require('../models/BlogModel');

class HomePresenter {
  static show(req, res) {
    res.render('index', {
      title:       'LỆCH STUDIO — Nhiếp ảnh không theo khuôn',
      currentPage: 'index',
      heroPhotos: {
        main:  { photo: '/images/ph-3x4.svg', ar: '3/4' },
        small: { photo: '/images/ph-1x1.svg', ar: '1/1' }
      },
      categories: StudioModel.getCategories(),
      recentWork: [
        { photo: '/images/ph-4x5.svg', ar: '4/5', tag: '015', caption: 'Đám cưới Linh & Khoa', num: '015', cls: 'mosaic-a' },
        { photo: '/images/ph-3x4.svg', ar: '3/4', tag: '016', caption: 'BST Thu Đông',         num: '016', cls: 'mosaic-b' },
        { photo: '/images/ph-1x1.svg', ar: '1/1', tag: '017', caption: 'Chân dung CEO',        num: '017', cls: 'mosaic-c' },
        { photo: '/images/ph-5x4.svg', ar: '5/4', tag: '018', caption: 'Sài Gòn về đêm',       num: '018', cls: 'mosaic-d' }
      ],
      stats:      StudioModel.getStats(),
      quote:      StudioModel.getQuote(),
      showreel:   StudioModel.getShowreel(),
      recentPosts: BlogModel.getRecent(2)
    });
  }
}

module.exports = HomePresenter;
