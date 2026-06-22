'use strict';

class StudioModel {
  static getInfo() {
    return {
      name:    'Lệch Studio',
      tagline: 'Nhiếp ảnh không theo khuôn',
      founded: 2018,
      email:   'hello@lechstudio.vn',
      phone:   '+84 90 123 4567',
      address: '18/2 Đường 35, Cát Lái, Thủ Đức, TP. Hồ Chí Minh',
      social: {
        instagram: '#',
        facebook:  '#',
        behance:   '#'
      }
    };
  }

  static getStats() {
    return [
      { value: '230+', label: 'buổi chụp',        enLabel: 'sessions' },
      { value: '86+',  label: 'đám cưới',          enLabel: 'weddings' },
      { value: '8',    label: 'năm hoạt động',     enLabel: 'years active' },
      { value: 'f/1.2',label: 'khẩu độ yêu thích',enLabel: 'fav. aperture' }
    ];
  }

  static getCategories() {
    return [
      { id: 'cuoi',        label: 'Cưới',        enLabel: 'Wedding',   sub: 'Wedding & Pre-wedding', num: 'FRAME 011', photo: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1600&h=1000&fit=crop&auto=format&q=80', ar: '16/10', big: true  },
      { id: 'thoitrang',   label: 'Thời trang',  enLabel: 'Fashion',   sub: 'Editorial',             num: '012',       photo: 'https://images.unsplash.com/photo-1662111456136-166d3ab54673?w=400&h=500&fit=crop&auto=format&q=80', ar: '4/5',   big: false },
      { id: 'doanhnghiep', label: 'Doanh nghiệp',enLabel: 'Brand',     sub: 'Brand & Portrait',     num: '013',       photo: 'https://images.unsplash.com/photo-1664439709257-7d4dde51b775?w=400&h=500&fit=crop&auto=format&q=80', ar: '4/5',   big: false },
      { id: 'doithuong',   label: 'Đời thường',  enLabel: 'Lifestyle', sub: 'Street & Lifestyle',    num: '014',       photo: 'https://images.unsplash.com/photo-1690812063433-36b580074b8b?w=400&h=500&fit=crop&auto=format&q=80', ar: '4/5',   big: false }
    ];
  }

  static getQuote() {
    return {
      text:    '"Không ai bảo em cười đi cả —<br>vậy mà ảnh đẹp nhất đời."',
      author:  'Minh Anh',
      role:    'Cô dâu',
      context: 'Bộ ảnh cưới · 03/2026'
    };
  }

  // Set youtubeId or vimeoId to embed; both null = animated gradient fallback
  static getShowreel() {
    return {
      youtubeId: null,   // e.g. 'dQw4w9WgXcQ'
      vimeoId:   null,   // e.g. '76979871'
      title:     'CHÚNG TÔI<br>CHỤP.<br><span style="color:var(--volt);">BẠN CẢM.</span>',
      sub:       'Đặt lịch ngay — Sài Gòn, Hà Nội, Đà Nẵng.<br>Chúng tôi di chuyển, không bạn.'
    };
  }
}

module.exports = StudioModel;
