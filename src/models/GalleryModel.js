'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class GalleryModel {
  static getAll() {
    return [
      // Wedding
      { id:  1, category: 'wedding',    label: 'Cưới',       enLabel: 'Wedding',    caption: 'Linh & Khoa — Lễ rước dâu',   enCaption: 'Linh & Khoa — Bridal procession', num: '101', photo: U('1520854221256-17451cc331bf',400,500), ar: '4/5' },
      { id:  5, category: 'wedding',    label: 'Pre-wedding', enLabel: 'Pre-wedding',caption: 'Thảo & Nam — Đà Lạt',          enCaption: 'Thảo & Nam — Đà Lạt',            num: '105', photo: U('1573676048035-9c2a72b6a12a',400,400), ar: '1/1' },
      { id:  9, category: 'wedding',    label: 'Tiệc cưới',  enLabel: 'Reception',  caption: 'Pháo giấy & nụ cười',           enCaption: 'Confetti & smiles',               num: '109', photo: U('1532712938310-34cb3982ef74',500,400), ar: '5/4' },
      { id: 13, category: 'wedding',    label: 'Cưới',       enLabel: 'Wedding',    caption: 'Hà & Minh — Đà Nẵng',          enCaption: 'Hà & Minh — Đà Nẵng',            num: '113', photo: U('1537633552985-df8429e8048b',400,533), ar: '3/4' },
      // Portrait
      { id:  3, category: 'portrait',   label: 'CEO',         enLabel: 'CEO',        caption: 'Chân dung lãnh đạo',           enCaption: 'Executive portrait',              num: '103', photo: U('1573496359142-b8d87734a5a2',400,400), ar: '1/1' },
      { id:  7, category: 'portrait',   label: 'Family',      enLabel: 'Family',     caption: 'Gia đình anh Tuấn',            enCaption: 'The Tuấn family',                 num: '107', photo: U('1552699611-e2c208d5d9cf',400,400),   ar: '1/1' },
      { id: 11, category: 'portrait',   label: 'Cá nhân',    enLabel: 'Personal',   caption: 'Sài Gòn — Q.1 lúc 23h',        enCaption: 'Saigon — District 1 at 11 PM',    num: '111', photo: U('1487528001669-63c47a53fd39',400,500), ar: '4/5' },
      { id: 14, category: 'portrait',   label: 'Chân dung',  enLabel: 'Portrait',   caption: 'Bộ ảnh nghệ sĩ Hà Nội',        enCaption: 'Hanoi artist portrait series',    num: '114', photo: U('1484515991647-c5760fcecfc7',400,500), ar: '4/5' },
      // Product
      { id: 15, category: 'product',    label: 'F&B',         enLabel: 'F&B',        caption: 'Menu Nhà hàng Vy',             enCaption: 'Vy Restaurant menu shoot',        num: '115', photo: U('1633614386903-27d7eb3e8b20',400,400), ar: '1/1' },
      { id: 16, category: 'product',    label: 'Skincare',    enLabel: 'Skincare',   caption: 'Bộ sản phẩm dưỡng da',         enCaption: 'Skincare product set',            num: '116', photo: U('1627117204847-ec306fe712bb',400,500), ar: '4/5' },
      { id: 17, category: 'product',    label: 'Thời trang',  enLabel: 'Fashion',   caption: 'Bộ sưu tập SS26',              enCaption: 'SS26 collection',                 num: '117', photo: U('1613506240218-738319838405',500,400), ar: '5/4' },
      { id: 18, category: 'product',    label: 'Interior',    enLabel: 'Interior',   caption: 'Không gian văn phòng Q.2',     enCaption: 'District 2 office space',         num: '118', photo: U('1631330612137-07b3a03f7cf1',400,400), ar: '1/1' },
      // Commercial
      { id:  2, category: 'commercial', label: 'Editorial',   enLabel: 'Editorial',  caption: 'BST Thu Đông — Look 03',       enCaption: 'FW Collection — Look 03',         num: '102', photo: U('1608497275992-b04e06353862',400,533), ar: '3/4' },
      { id:  6, category: 'commercial', label: 'Lookbook',    enLabel: 'Lookbook',   caption: 'Local brand — SS26',           enCaption: 'Local brand — SS26',              num: '106', photo: U('1552014785-a6e5f8bc9131',400,500), ar: '4/5' },
      { id:  8, category: 'commercial', label: 'Đội ngũ',    enLabel: 'Team',       caption: 'Văn phòng startup Q.2',        enCaption: 'District 2 startup office',       num: '108', photo: U('1522071820081-009f0129c71c',400,533), ar: '3/4' },
      { id: 12, category: 'commercial', label: 'Sự kiện',    enLabel: 'Event',      caption: 'Hội nghị thường niên',          enCaption: 'Annual conference',               num: '112', photo: U('1527529482837-4698179dc6ce',400,400), ar: '1/1' }
    ];
  }

  static getRecent(limit = 4) {
    return this.getAll().slice(0, limit);
  }

  static getFilters() {
    return [
      { id: 'all',        label: 'All' },
      { id: 'portrait',   label: 'Portrait' },
      { id: 'wedding',    label: 'Wedding' },
      { id: 'product',    label: 'Product' },
      { id: 'commercial', label: 'Commercial' }
    ];
  }
}

module.exports = GalleryModel;



