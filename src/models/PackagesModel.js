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
        duration:    '2 giờ',
        photos:      '25 ảnh',
        edits:       '25 ảnh chỉnh màu',
        locations:   '1 địa điểm',
        delivery:    'Giao trong 10 ngày',
        extras:      [],
        features: [
          '2 giờ chụp tại địa điểm bạn chọn',
          '25 ảnh đã chỉnh sửa hoàn chỉnh',
          'File digital độ phân giải cao',
          'Tư vấn trang phục trước buổi chụp',
          'Giao ảnh qua Google Drive'
        ],
        highlighted: false,
        cta:         'Đặt gói Standard'
      },
      {
        id:          'signature',
        name:        'SIGNATURE',
        price:       8000000,
        priceLabel:  '8.000.000 ₫',
        tagline:     'Lệch Studio đề xuất',
        duration:    '4 giờ',
        photos:      '50 ảnh',
        edits:       '50 ảnh chỉnh màu',
        locations:   '2 địa điểm',
        delivery:    'Giao trong 7 ngày',
        extras:      ['In ảnh 20×30 cm (2 tấm)'],
        features: [
          '4 giờ chụp — 2 địa điểm',
          '50 ảnh đã chỉnh sửa hoàn chỉnh',
          'File digital + in ảnh 20×30 (2 tấm)',
          'Tư vấn concept & trang phục',
          'Giao ảnh trong 7 ngày',
          'Chỉnh sửa thêm không giới hạn (1 lần)'
        ],
        highlighted: true,
        cta:         'Đặt gói Signature'
      },
      {
        id:          'premium',
        name:        'PREMIUM',
        price:       15000000,
        priceLabel:  '15.000.000 ₫',
        tagline:     'Full-day — không giới hạn',
        duration:    'Cả ngày (8 giờ)',
        photos:      '100+ ảnh',
        edits:       '100+ ảnh chỉnh màu',
        locations:   'Không giới hạn',
        delivery:    'Giao trong 5 ngày',
        extras:      ['Album bìa cứng cao cấp', 'Same-day edit tại sự kiện'],
        features: [
          'Cả ngày chụp — không giới hạn địa điểm',
          '100+ ảnh đã chỉnh sửa hoàn chỉnh',
          'Album bìa cứng cao cấp (20 trang)',
          'Same-day edit: nhận ảnh ngay tại sự kiện',
          'Tư vấn trọn gói từ A–Z',
          'Giao ảnh trong 5 ngày làm việc',
          'Hỗ trợ sau chụp 6 tháng'
        ],
        highlighted: false,
        cta:         'Đặt gói Premium'
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
