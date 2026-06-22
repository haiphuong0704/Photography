'use strict';
const StudioModel  = require('../models/StudioModel');
const GalleryModel = require('../models/GalleryModel');
const BlogModel    = require('../models/BlogModel');

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class HomePresenter {
  static show(req, res) {
    res.render('index', {
      title:       'LỆCH STUDIO — Nhiếp ảnh không theo khuôn',
      currentPage: 'index',
      heroPhotos: {
        main:  { photo: U('1622277430358-f4d134452e2e',500,667), ar: '3/4' },
        small: { photo: U('1552699611-e2c208d5d9cf',400,400),   ar: '1/1' }
      },
      categories: StudioModel.getCategories(),
      recentWork: [
        { photo: U('1604017011826-d3b4c23f8914',500,625), ar: '4/5', tag: '015', caption: 'Đám cưới Linh & Khoa', num: '015', cls: 'mosaic-a' },
        { photo: U('1654512697681-8434b50096dd',500,667), ar: '3/4', tag: '016', caption: 'BST Thu Đông',         num: '016', cls: 'mosaic-b' },
        { photo: U('1573496359142-b8d87734a5a2',400,400), ar: '1/1', tag: '017', caption: 'Chân dung CEO',        num: '017', cls: 'mosaic-c' },
        { photo: U('1690812063433-36b580074b8b',500,400), ar: '5/4', tag: '018', caption: 'Sài Gòn về đêm',       num: '018', cls: 'mosaic-d' }
      ],
      stats:      StudioModel.getStats(),
      quote:      StudioModel.getQuote(),
      showreel:   StudioModel.getShowreel(),
      recentPosts: BlogModel.getRecent(2)
    });
  }
}

module.exports = HomePresenter;

