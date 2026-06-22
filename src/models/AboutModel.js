'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class AboutModel {
  static getValues() {
    return [
      { num: '01', title: 'THẬT HƠN ĐẸP',  enTitle: 'REAL OVER PERFECT',    body: 'Một khoảnh khắc thật luôn được chọn trước một bố cục đẹp nhưng giả tạo.',              enBody: 'A genuine moment always wins over a beautiful but staged composition.' },
      { num: '02', title: 'ÍT CHỈ ĐẠO',    enTitle: 'MINIMAL DIRECTING',    body: 'Chúng tôi gợi ý, không ép dáng. Người được chụp luôn được là chính mình.',           enBody: 'We suggest, never pose. The subject is always free to be themselves.' },
      { num: '03', title: 'GIAO ĐÚNG HẸN',  enTitle: 'ON-TIME DELIVERY',     body: 'Ảnh chỉnh sửa hoàn chỉnh giao trong 10 ngày — không trễ, không viện cớ.',            enBody: 'Fully edited photos delivered within 10 days — no delays, no excuses.' }
    ];
  }

  static getTeam() {
    return [
      { name: 'ĐỨC ANH',  role: 'Founder & Lead Photographer', tag: 'Founder',  num: 'T1', photo: U('1487528001669-63c47a53fd39',400,533) },
      { name: 'HẢI YẾN',  role: 'Wedding Photographer',        tag: 'Wedding',  num: 'T2', photo: U('1573496359142-b8d87734a5a2',400,533) },
      { name: 'QUỐC BẢO', role: 'Fashion Photographer',        tag: 'Editorial',num: 'T3', photo: U('1646337426572-3021b16d2df9',400,533) },
      { name: 'MAI CHI',  role: 'Retoucher & Studio Manager',  tag: 'Hậu kỳ', enTag: 'Post-prod', num: 'T4', photo: U('1584016235603-290a5f94af4a',400,533) }
    ];
  }

  static getStoryPhoto() {
    return {
      photo:   U('1612883833766-7930d960e16f',400,500),
      ar:      '4/5',
      tag:     'Studio<br>2026',
      caption: 'Góc làm việc — Q.1',
      num:     '201'
    };
  }
}

module.exports = AboutModel;


