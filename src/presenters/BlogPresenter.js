'use strict';
const BlogModel = require('../models/BlogModel');

class BlogPresenter {
  static index(req, res) {
    const activeCategory = req.query.cat || 'all';
    const posts = activeCategory === 'all'
      ? BlogModel.getAll()
      : BlogModel.getAll().filter(p => p.catId === activeCategory);

    res.render('blog/index', {
      title:          'Blog — LỆCH STUDIO',
      currentPage:    'blog',
      posts,
      categories:     BlogModel.getCategories(),
      activeCategory
    });
  }

  static show(req, res) {
    const post = BlogModel.getBySlug(req.params.slug);
    if (!post) return res.status(404).send('Bài viết không tồn tại');

    const all    = BlogModel.getAll();
    const idx    = all.findIndex(p => p.slug === post.slug);
    const related = all.filter((p, i) => i !== idx).slice(0, 2);

    res.render('blog/post', {
      title:       `${post.title} — LỆCH STUDIO`,
      currentPage: 'blog',
      post,
      related
    });
  }
}

module.exports = BlogPresenter;
