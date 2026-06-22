'use strict';

class PackagesModel {
  static getAll() {
    return [
      {
        id:          'standard',
        name:        'STANDARD',
        price:       4500000,
        priceLabel:  '4.500.000 ₫',
        tagline:     'Buổi chụp gọn — kết quả rõ',
        enTagline:   'Quick session — clear results',
        duration:    '2 giờ',     enDuration: '2 hours',
        photos:      '25 ảnh',    enPhotos:   '25 photos',
        edits:       '25 ảnh chỉnh màu',
        locations:   '1 địa điểm',
        delivery:    'Giao trong 10 ngày', enDelivery: 'Delivered in 10 days',
        extras:      [],          enExtras: [],
        features: [
          '2 giờ chụp tại địa điểm bạn chọn',
          '25 ảnh đã chỉnh sửa hoàn chỉnh',
          'File digital độ phân giải cao',
          'Tư vấn trang phục trước buổi chụp',
          'Giao ảnh qua Google Drive'
        ],
        enFeatures: [
          '2-hour shoot at your chosen location',
          '25 fully edited photos',
          'High-resolution digital files',
          'Outfit consultation before shoot',
          'Delivery via private Google Drive'
        ],
        highlighted: false,
        cta:         'Đặt gói Standard',  enCta: 'Book Standard'
      },
      {
        id:          'signature',
        name:        'SIGNATURE',
        price:       8000000,
        priceLabel:  '8.000.000 ₫',
        tagline:     'Lệch Studio đề xuất',
        enTagline:   'Recommended by Lệch Studio',
        duration:    '4 giờ',     enDuration: '4 hours',
        photos:      '50 ảnh',    enPhotos:   '50 photos',
        edits:       '50 ảnh chỉnh màu',
        locations:   '2 địa điểm',
        delivery:    'Giao trong 7 ngày', enDelivery: 'Delivered in 7 days',
        extras:      ['In ảnh 20×30 cm (2 tấm)'],
        enExtras:    ['2 prints 20×30 cm included'],
        features: [
          '4 giờ chụp — 2 địa điểm',
          '50 ảnh đã chỉnh sửa hoàn chỉnh',
          'File digital + in ảnh 20×30 (2 tấm)',
          'Tư vấn concept & trang phục',
          'Giao ảnh trong 7 ngày',
          'Chỉnh sửa thêm không giới hạn (1 lần)'
        ],
        enFeatures: [
          '4-hour shoot — 2 locations',
          '50 fully edited photos',
          'Digital files + 2 prints 20×30 cm',
          'Concept & outfit consultation',
          'Delivery in 7 days',
          'One free round of color revision'
        ],
        highlighted: true,
        cta:         'Đặt gói Signature', enCta: 'Book Signature'
      },
      {
        id:          'premium',
        name:        'PREMIUM',
        price:       15000000,
        priceLabel:  '15.000.000 ₫',
        tagline:     'Full-day — không giới hạn',
        enTagline:   'Full-day — no limits',
        duration:    'Cả ngày (8 giờ)', enDuration: 'Full day (8 hours)',
        photos:      '100+ ảnh',        enPhotos:   '100+ photos',
        edits:       '100+ ảnh chỉnh màu',
        locations:   'Không giới hạn',
        delivery:    'Giao trong 5 ngày', enDelivery: 'Delivered in 5 days',
        extras:      ['Album bìa cứng cao cấp', 'Same-day edit tại sự kiện'],
        enExtras:    ['Premium hardcover album', 'Same-day edit at the event'],
        features: [
          'Cả ngày chụp — không giới hạn địa điểm',
          '100+ ảnh đã chỉnh sửa hoàn chỉnh',
          'Album bìa cứng cao cấp (20 trang)',
          'Same-day edit: nhận ảnh ngay tại sự kiện',
          'Tư vấn trọn gói từ A–Z',
          'Giao ảnh trong 5 ngày làm việc',
          'Hỗ trợ sau chụp 6 tháng'
        ],
        enFeatures: [
          'Full-day shoot — unlimited locations',
          '100+ fully edited photos',
          'Premium hardcover album (20 pages)',
          'Same-day edit: receive photos at the event',
          'Full A–Z consultation',
          'Delivery in 5 business days',
          '6-month post-shoot support'
        ],
        highlighted: false,
        cta:         'Đặt gói Premium', enCta: 'Book Premium'
      }
    ];
  }

  static getById(id) {
    return this.getAll().find(p => p.id === id) || null;
  }

  static getSessionTypes() {
    return ['Wedding', 'Pre-wedding', 'Chân dung', 'Thời trang', 'Sản phẩm', 'Commercial', 'Gia đình', 'Sự kiện'];
  }
}

module.exports = PackagesModel;
