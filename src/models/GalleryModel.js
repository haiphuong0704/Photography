'use strict';

class GalleryModel {
  static getAll() {
    return [
      // Wedding
      { id:  1, category: 'wedding', label: 'Cưới',        caption: 'Linh & Khoa — Lễ rước dâu',  num: '101', photo: '/images/ph-4x5.svg', ar: '4/5'  },
      { id:  5, category: 'wedding', label: 'Pre-wedding', caption: 'Thảo & Nam — Đà Lạt',         num: '105', photo: '/images/ph-1x1.svg', ar: '1/1'  },
      { id:  9, category: 'wedding', label: 'Tiệc cưới',  caption: 'Pháo giấy & nụ cười',          num: '109', photo: '/images/ph-5x4.svg', ar: '5/4'  },
      { id: 13, category: 'wedding', label: 'Cưới',        caption: 'Hà & Minh — Đà Nẵng',         num: '113', photo: '/images/ph-3x4.svg', ar: '3/4'  },
      // Portrait
      { id:  3, category: 'portrait', label: 'CEO',         caption: 'Chân dung lãnh đạo',          num: '103', photo: '/images/ph-1x1.svg', ar: '1/1'  },
      { id:  7, category: 'portrait', label: 'Family',      caption: 'Gia đình anh Tuấn',           num: '107', photo: '/images/ph-1x1.svg', ar: '1/1'  },
      { id: 11, category: 'portrait', label: 'Cá nhân',    caption: 'Sài Gòn — Q.1 lúc 23h',       num: '111', photo: '/images/ph-4x5.svg', ar: '4/5'  },
      { id: 14, category: 'portrait', label: 'Chân dung',  caption: 'Bộ ảnh nghệ sĩ Hà Nội',       num: '114', photo: '/images/ph-4x5.svg', ar: '4/5'  },
      // Product
      { id: 15, category: 'product',  label: 'F&B',         caption: 'Menu Nhà hàng Vy',            num: '115', photo: '/images/ph-1x1.svg', ar: '1/1'  },
      { id: 16, category: 'product',  label: 'Skincare',    caption: 'Bộ sản phẩm dưỡng da',        num: '116', photo: '/images/ph-4x5.svg', ar: '4/5'  },
      { id: 17, category: 'product',  label: 'Thời trang',  caption: 'Bộ sưu tập SS26',             num: '117', photo: '/images/ph-5x4.svg', ar: '5/4'  },
      { id: 18, category: 'product',  label: 'Interior',    caption: 'Không gian văn phòng Q.2',    num: '118', photo: '/images/ph-1x1.svg', ar: '1/1'  },
      // Commercial
      { id:  2, category: 'commercial', label: 'Editorial',  caption: 'BST Thu Đông — Look 03',     num: '102', photo: '/images/ph-3x4.svg', ar: '3/4'  },
      { id:  6, category: 'commercial', label: 'Lookbook',   caption: 'Local brand — SS26',          num: '106', photo: '/images/ph-4x5.svg', ar: '4/5'  },
      { id:  8, category: 'commercial', label: 'Đội ngũ',   caption: 'Văn phòng startup Q.2',       num: '108', photo: '/images/ph-3x4.svg', ar: '3/4'  },
      { id: 12, category: 'commercial', label: 'Sự kiện',   caption: 'Hội nghị thường niên',         num: '112', photo: '/images/ph-1x1.svg', ar: '1/1'  }
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
