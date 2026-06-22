'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

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
        coverPhoto: U('1532712938310-34cb3982ef74',800,500),
        photos: [
          { num: '001', caption: 'Trang điểm sáng sớm',        photo: U('1622277430358-f4d134452e2e',600,750), ar: '4/5'  },
          { num: '002', caption: 'Lễ rước dâu',                photo: U('1573676048035-9c2a72b6a12a',600,600), ar: '1/1'  },
          { num: '003', caption: 'Nụ hôn đầu tại lễ đường',    photo: U('1604017011826-d3b4c23f8914',750,500), ar: '3/2'  },
          { num: '004', caption: 'Ký giấy đăng ký kết hôn',    photo: U('1520854221256-17451cc331bf',600,750), ar: '4/5'  },
          { num: '005', caption: 'Chân dung đôi — vườn villa',  photo: U('1612883833766-7930d960e16f',600,600), ar: '1/1'  },
          { num: '006', caption: 'Tiệc cưới — pháo giấy',       photo: U('1537633552985-df8429e8048b',750,500), ar: '3/2'  },
          { num: '007', caption: 'First dance',                  photo: U('1519741196428-6a2175fa2557',600,750), ar: '4/5'  },
          { num: '008', caption: 'Cả gia đình',                  photo: U('1533091090875-1ff4acc497dd',750,600), ar: '5/4'  },
          { num: '009', caption: 'Chi tiết nhẫn cưới',           photo: U('1527529482837-4698179dc6ce',600,600), ar: '1/1'  },
          { num: '010', caption: 'Kết thúc ngày',                photo: U('1522071820081-009f0129c71c',600,750), ar: '4/5'  }
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
        coverPhoto: U('1690812063097-d57c5b7c21f1',800,500),
        photos: [
          { num: '001', caption: 'Đồi thông Đà Lạt — buổi sáng', photo: U('1690812063433-36b580074b8b',600,750), ar: '4/5'  },
          { num: '002', caption: 'Vườn hoa mimosa',               photo: U('1690812067725-b3b395d6cc67',750,500), ar: '3/2'  },
          { num: '003', caption: 'Cafe view thung lũng',          photo: U('1690812065385-72ca7f6ea957',600,600), ar: '1/1'  },
          { num: '004', caption: 'Hoàng hôn — đồi chè',          photo: U('1654984809168-2f6c51bfb25c',750,500), ar: '3/2'  },
          { num: '005', caption: 'Phố đêm Đà Lạt',               photo: U('1631330612137-07b3a03f7cf1',600,750), ar: '4/5'  },
          { num: '006', caption: 'Sương sớm ngày 2',              photo: U('1618375601660-3e6842f5b791',600,600), ar: '1/1'  }
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

