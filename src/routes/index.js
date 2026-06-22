'use strict';
const express = require('express');
const router  = express.Router();

const HomePresenter      = require('../presenters/HomePresenter');
const GalleryPresenter   = require('../presenters/GalleryPresenter');
const PortfolioPresenter = require('../presenters/PortfolioPresenter');
const AboutPresenter     = require('../presenters/AboutPresenter');
const ContactPresenter   = require('../presenters/ContactPresenter');
const PackagesPresenter  = require('../presenters/PackagesPresenter');
const BookingPresenter   = require('../presenters/BookingPresenter');
const BlogPresenter      = require('../presenters/BlogPresenter');
const PortalPresenter    = require('../presenters/PortalPresenter');
const PolicyPresenter    = require('../presenters/PolicyPresenter');

// Core pages
router.get('/',          HomePresenter.show);
router.get('/portfolio', PortfolioPresenter.show);
router.get('/gallery',   GalleryPresenter.show);
router.get('/about',     AboutPresenter.show);
router.get('/contact',   ContactPresenter.show);
router.post('/contact',  ContactPresenter.submit);

// Packages
router.get('/packages',  PackagesPresenter.show);

// Booking
router.get('/booking',   BookingPresenter.show);
router.post('/booking',  BookingPresenter.submit);

// Blog
router.get('/blog',           BlogPresenter.index);
router.get('/blog/:slug',     BlogPresenter.show);

// Policy
router.get('/policy', PolicyPresenter.show);

// Client portal
router.get('/portal',          PortalPresenter.login);
router.post('/portal/login',   PortalPresenter.authenticate);
router.get('/portal/gallery',  PortalPresenter.gallery);
router.get('/portal/logout',   PortalPresenter.logout);

module.exports = router;
