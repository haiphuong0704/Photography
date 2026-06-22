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
        coverPhoto: 'https://picsum.photos/seed/cl01/800/500',
        photos: [
          { num: '001', caption: 'Trang điểm sáng sớm',        photo: 'https://picsum.photos/seed/lk001/600/750', ar: '4/5'  },
          { num: '002', caption: 'Lễ rước dâu',                photo: 'https://picsum.photos/seed/lk002/600/600', ar: '1/1'  },
          { num: '003', caption: 'Nụ hôn đầu tại lễ đường',    photo: 'https://picsum.photos/seed/lk003/750/500', ar: '3/2'  },
          { num: '004', caption: 'Ký giấy đăng ký kết hôn',    photo: 'https://picsum.photos/seed/lk004/600/750', ar: '4/5'  },
          { num: '005', caption: 'Chân dung đôi — vườn villa',  photo: 'https://picsum.photos/seed/lk005/600/600', ar: '1/1'  },
          { num: '006', caption: 'Tiệc cưới — pháo giấy',       photo: 'https://picsum.photos/seed/lk006/750/500', ar: '3/2'  },
          { num: '007', caption: 'First dance',                  photo: 'https://picsum.photos/seed/lk007/600/750', ar: '4/5'  },
          { num: '008', caption: 'Cả gia đình',                  photo: 'https://picsum.photos/seed/lk008/750/600', ar: '5/4'  },
          { num: '009', caption: 'Chi tiết nhẫn cưới',           photo: 'https://picsum.photos/seed/lk009/600/600', ar: '1/1'  },
          { num: '010', caption: 'Kết thúc ngày',                photo: 'https://picsum.photos/seed/lk010/600/750', ar: '4/5'  }
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
        coverPhoto: 'https://picsum.photos/seed/cl02/800/500',
        photos: [
          { num: '001', caption: 'Đồi thông Đà Lạt — buổi sáng', photo: 'https://picsum.photos/seed/tn001/600/750', ar: '4/5'  },
          { num: '002', caption: 'Vườn hoa mimosa',               photo: 'https://picsum.photos/seed/tn002/750/500', ar: '3/2'  },
          { num: '003', caption: 'Cafe view thung lũng',          photo: 'https://picsum.photos/seed/tn003/600/600', ar: '1/1'  },
          { num: '004', caption: 'Hoàng hôn — đồi chè',          photo: 'https://picsum.photos/seed/tn004/750/500', ar: '3/2'  },
          { num: '005', caption: 'Phố đêm Đà Lạt',               photo: 'https://picsum.photos/seed/tn005/600/750', ar: '4/5'  },
          { num: '006', caption: 'Sương sớm ngày 2',              photo: 'https://picsum.photos/seed/tn006/600/600', ar: '1/1'  }
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
