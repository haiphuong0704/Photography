'use strict';
const AboutModel = require('../models/AboutModel');

class AboutPresenter {
  static show(req, res) {
    res.render('about', {
      title:       'Về chúng tôi — LỆCH STUDIO',
      currentPage: 'about',
      storyPhoto:  AboutModel.getStoryPhoto(),
      values:      AboutModel.getValues(),
      team:        AboutModel.getTeam()
    });
  }
}

module.exports = AboutPresenter;
