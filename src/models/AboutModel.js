'use strict';

class AboutModel {
  static getValues() {
    return [
      { num: '01', title: 'THẬT HƠN ĐẸP',   body: 'Một khoảnh khắc thật luôn được chọn trước một bố cục đẹp nhưng giả tạo.' },
      { num: '02', title: 'ÍT CHỈ ĐẠO',     body: 'Chúng tôi gợi ý, không ép dáng. Người được chụp luôn được là chính mình.' },
      { num: '03', title: 'GIAO ĐÚNG HẸN',   body: 'Ảnh chỉnh sửa hoàn chỉnh giao trong 10 ngày — không trễ, không viện cớ.' }
    ];
  }

  static getTeam() {
    return [
      { name: 'ĐỨC ANH',  role: 'Founder & Lead Photographer', tag: 'Founder',  num: 'T1', photo: '/images/ph-3x4.svg' },
      { name: 'HẢI YẾN',  role: 'Wedding Photographer',        tag: 'Wedding',  num: 'T2', photo: '/images/ph-3x4.svg' },
      { name: 'QUỐC BẢO', role: 'Fashion Photographer',        tag: 'Editorial',num: 'T3', photo: '/images/ph-3x4.svg' },
      { name: 'MAI CHI',  role: 'Retoucher & Studio Manager',  tag: 'Hậu kỳ',  num: 'T4', photo: '/images/ph-3x4.svg' }
    ];
  }

  static getStoryPhoto() {
    return {
      photo:   '/images/ph-4x5.svg',
      ar:      '4/5',
      tag:     'Studio<br>2026',
      caption: 'Góc làm việc — Q.1',
      num:     '201'
    };
  }
}

module.exports = AboutModel;
