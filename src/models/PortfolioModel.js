'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class PortfolioModel {
  static getSections() {
    return [
      {
        id:          'cuoi',
        frameNum:    '01 / 04',
        title:       'CƯỚI',        enTitle:       'WEDDING',
        description: 'Không tạo dáng gượng gạo. Lệch theo cô dâu chú rể cả ngày để bắt những khoảnh khắc không lặp lại lần hai — từ lúc trang điểm đến khi pháo giấy bay.',
        enDescription:'No stiff posing. We shadow the couple all day to capture moments that only happen once — from makeup to the final confetti burst.',
        services:    ['Phóng sự cưới trọn gói', 'Pre-wedding ngoại cảnh', 'Ảnh nhanh trong tiệc (same-day edit)'],
        enServices:  ['Full wedding coverage', 'Outdoor pre-wedding', 'Same-day edit (reception)'],
        cta:         { label: 'Đặt lịch chụp cưới →', href: '/booking' },
        enCta:       { label: 'Book a wedding shoot →' },
        photos: [
          { photo: U('1604017011826-d3b4c23f8914',400,500), ar: '4/5', tag: 'Cưới',    caption: 'Linh & Khoa', num: '021', cls: 'pm-a' },
          { photo: U('1533091090875-1ff4acc497dd',400,400), ar: '1/1', tag: null,      caption: 'Chi tiết nhẫn', num: '022', cls: 'pm-b' },
          { photo: U('1573676048035-9c2a72b6a12a',400,400), ar: '1/1', tag: null,     caption: 'Pháo giấy',  num: '023', cls: 'pm-c' }
        ],
        alt: false
      },
      {
        id:          'thoitrang',
        frameNum:    '02 / 04',
        title:       'THỜI TRANG',  enTitle:       'FASHION',
        description: 'Ánh sáng cứng, bố cục lệch trục, màu tương phản mạnh. Làm việc trực tiếp với stylist và thương hiệu để mỗi bộ ảnh có một thái độ riêng — không công thức lookbook an toàn.',
        enDescription:'Hard light, off-axis compositions, strong color contrasts. Working directly with stylists and brands so each set has its own attitude — no safe lookbook formulas.',
        services:    ['Lookbook & catalogue', 'Editorial tạp chí', 'Campaign thương hiệu'],
        enServices:  ['Lookbook & catalogue', 'Magazine editorial', 'Brand campaign'],
        cta:         { label: 'Hợp tác chụp editorial →', href: '/booking' },
        enCta:       { label: 'Collaborate on an editorial →' },
        photos: [
          { photo: U('1654512697681-8434b50096dd',400,533), ar: '3/4', tag: 'Editorial', caption: 'BST Thu Đông', num: '031', cls: 'pm-a' },
          { photo: U('1646337426572-3021b16d2df9',400,400), ar: '1/1', tag: null,        caption: 'Lookbook',    num: '032', cls: 'pm-b' },
          { photo: U('1613506240218-738319838405',400,400), ar: '1/1', tag: null,        caption: 'Studio test', num: '033', cls: 'pm-c' }
        ],
        alt: true
      },
      {
        id:          'doanhnghiep',
        frameNum:    '03 / 04',
        title:       'DOANH NGHIỆP', enTitle:      'BRAND',
        description: 'Chân dung lãnh đạo, ảnh đội ngũ, không gian văn phòng — giữ đúng chất thương hiệu nhưng vẫn có cảm xúc thật, không cứng nhắc kiểu ảnh thẻ.',
        enDescription:'Executive portraits, team photos, office spaces — true to your brand identity but with real emotion, not stiff ID-photo energy.',
        services:    ['Chân dung lãnh đạo & nhân sự', 'Ảnh sự kiện & hội nghị', 'Bộ ảnh thương hiệu (brand shoot)'],
        enServices:  ['Executive & staff portraits', 'Event & conference photography', 'Brand shoot'],
        cta:         { label: 'Yêu cầu báo giá doanh nghiệp →', href: '/contact' },
        enCta:       { label: 'Request a brand quote →' },
        photos: [
          { photo: U('1560250097-0b93528c311a',400,500), ar: '4/5', tag: 'CEO', caption: 'Chân dung CEO', num: '041', cls: 'pm-a' },
          { photo: U('1584016235603-290a5f94af4a',400,400), ar: '1/1', tag: null,  caption: 'Đội ngũ',      num: '042', cls: 'pm-b' },
          { photo: U('1573496359142-b8d87734a5a2',400,400), ar: '1/1', tag: null,  caption: 'Văn phòng',    num: '043', cls: 'pm-c' }
        ],
        alt: false
      },
      {
        id:          'doithuong',
        frameNum:    '04 / 04',
        title:       'ĐỜI THƯỜNG',  enTitle:       'LIFESTYLE',
        description: 'Đi lang thang cùng máy ảnh, không kịch bản. Phù hợp cho gia đình, bạn bè, hoặc bất kỳ ai muốn một bộ ảnh không giống ảnh studio.',
        enDescription:'Wandering with a camera, no script. Perfect for families, friends, or anyone who wants photos that feel nothing like a studio session.',
        services:    ['Street photography', 'Ảnh gia đình tự nhiên', 'Theo chân một ngày (documentary)'],
        enServices:  ['Street photography', 'Natural family portraits', 'Documentary day-in-the-life'],
        cta:         { label: 'Đặt buổi chụp đời thường →', href: '/booking' },
        enCta:       { label: 'Book a lifestyle shoot →' },
        photos: [
          { photo: U('1690812063097-d57c5b7c21f1',400,533), ar: '3/4', tag: 'Street', caption: 'Sài Gòn về đêm', num: '051', cls: 'pm-a' },
          { photo: U('1618375601660-3e6842f5b791',400,400), ar: '1/1', tag: null,     caption: 'Chợ sáng',      num: '052', cls: 'pm-b' },
          { photo: U('1525284890203-9ee752d3f44f',400,400), ar: '1/1', tag: null,     caption: 'Gia đình',      num: '053', cls: 'pm-c' }
        ],
        alt: true
      }
    ];
  }
}

module.exports = PortfolioModel;



