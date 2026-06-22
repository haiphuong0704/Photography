'use strict';

class ClientModel {
  static getAll() {
    return [
      {
        id:      'client-linhkhoa',
        name:    'Linh & Khoa',
        code:    'LINHKHOA26',
        session: 'Wedding',
        date:    '15/03/2026',
        package: 'Signature',
        note:    'Bộ ảnh cưới trọn ngày — Nhà thờ Đức Bà + Villa Q.2',
        coverPhoto: '/images/ph-wide.svg',
        photos: [
          { num: '001', caption: 'Trang điểm sáng sớm',        photo: '/images/ph-4x5.svg', ar: '4/5'  },
          { num: '002', caption: 'Lễ rước dâu',                photo: '/images/ph-1x1.svg', ar: '1/1'  },
          { num: '003', caption: 'Nụ hôn đầu tại lễ đường',    photo: '/images/ph-wide.svg', ar: '3/2'  },
          { num: '004', caption: 'Ký giấy đăng ký kết hôn',    photo: '/images/ph-4x5.svg', ar: '4/5'  },
          { num: '005', caption: 'Chân dung đôi — vườn villa',  photo: '/images/ph-1x1.svg', ar: '1/1'  },
          { num: '006', caption: 'Tiệc cưới — pháo giấy',       photo: '/images/ph-wide.svg', ar: '3/2'  },
          { num: '007', caption: 'First dance',                  photo: '/images/ph-4x5.svg', ar: '4/5'  },
          { num: '008', caption: 'Cả gia đình',                  photo: '/images/ph-5x4.svg', ar: '5/4'  },
          { num: '009', caption: 'Chi tiết nhẫn cưới',           photo: '/images/ph-1x1.svg', ar: '1/1'  },
          { num: '010', caption: 'Kết thúc ngày',                photo: '/images/ph-4x5.svg', ar: '4/5'  }
        ]
      },
      {
        id:      'client-thaonam',
        name:    'Thảo & Nam',
        code:    'THAONAM26',
        session: 'Pre-wedding',
        date:    '08/04/2026',
        package: 'Standard',
        note:    'Pre-wedding Đà Lạt 2 ngày',
        coverPhoto: '/images/ph-wide.svg',
        photos: [
          { num: '001', caption: 'Đồi thông Đà Lạt — buổi sáng', photo: '/images/ph-4x5.svg', ar: '4/5'  },
          { num: '002', caption: 'Vườn hoa mimosa',               photo: '/images/ph-wide.svg', ar: '3/2'  },
          { num: '003', caption: 'Cafe view thung lũng',          photo: '/images/ph-1x1.svg', ar: '1/1'  },
          { num: '004', caption: 'Hoàng hôn — đồi chè',          photo: '/images/ph-wide.svg', ar: '3/2'  },
          { num: '005', caption: 'Phố đêm Đà Lạt',               photo: '/images/ph-4x5.svg', ar: '4/5'  },
          { num: '006', caption: 'Sương sớm ngày 2',              photo: '/images/ph-1x1.svg', ar: '1/1'  }
        ]
      }
    ];
  }

  static findByCode(code) {
    return this.getAll().find(c => c.code === code.trim().toUpperCase()) || null;
  }

  static findById(id) {
    return this.getAll().find(c => c.id === id) || null;
  }
}

module.exports = ClientModel;
