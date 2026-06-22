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
        main:  { photo: 'https://picsum.photos/seed/lechia1/500/667', ar: '3/4' },
        small: { photo: 'https://picsum.photos/seed/lechib2/400/400', ar: '1/1' }
      },
      categories: StudioModel.getCategories(),
      recentWork: [
        { photo: 'https://picsum.photos/seed/wed015/500/625', ar: '4/5', tag: '015', caption: 'Đám cưới Linh & Khoa', num: '015', cls: 'mosaic-a' },
        { photo: 'https://picsum.photos/seed/edt016/500/667', ar: '3/4', tag: '016', caption: 'BST Thu Đông',         num: '016', cls: 'mosaic-b' },
        { photo: 'https://picsum.photos/seed/por017/400/400', ar: '1/1', tag: '017', caption: 'Chân dung CEO',        num: '017', cls: 'mosaic-c' },
        { photo: 'https://picsum.photos/seed/str018/500/400', ar: '5/4', tag: '018', caption: 'Sài Gòn về đêm',       num: '018', cls: 'mosaic-d' }
      ],
      stats:      StudioModel.getStats(),
      quote:      StudioModel.getQuote(),
      showreel:   StudioModel.getShowreel(),
      recentPosts: BlogModel.getRecent(2)
    });
  }
}

module.exports = HomePresenter;
