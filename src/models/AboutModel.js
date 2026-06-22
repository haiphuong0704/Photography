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
      { name: 'ĐỨC ANH',  role: 'Founder & Lead Photographer', tag: 'Founder',  num: 'T1', photo: 'https://picsum.photos/seed/team1/400/400' },
      { name: 'HẢI YẾN',  role: 'Wedding Photographer',        tag: 'Wedding',  num: 'T2', photo: 'https://picsum.photos/seed/team2/400/400' },
      { name: 'QUỐC BẢO', role: 'Fashion Photographer',        tag: 'Editorial',num: 'T3', photo: 'https://picsum.photos/seed/team3/400/400' },
      { name: 'MAI CHI',  role: 'Retoucher & Studio Manager',  tag: 'Hậu kỳ',  num: 'T4', photo: 'https://picsum.photos/seed/team4/400/400' }
    ];
  }

  static getStoryPhoto() {
    return {
      photo:   'https://picsum.photos/seed/ab201/400/500',
      ar:      '4/5',
      tag:     'Studio<br>2026',
      caption: 'Góc làm việc — Q.1',
      num:     '201'
    };
  }
}

module.exports = AboutModel;
