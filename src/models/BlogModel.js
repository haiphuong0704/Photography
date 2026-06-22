'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class BlogModel {
  static getAll() {
    return [
      {
        id:       1,
        slug:     'behind-the-scenes-dam-cuoi-linh-khoa',
        title:    'Behind the Scenes: Đám cưới Linh & Khoa',
        excerpt:  'Từ 5 giờ sáng theo chân cô dâu trang điểm đến lúc pháo giấy bay lúc nửa đêm — một ngày dài nhất trong năm của Lệch Studio.',
        category: 'Behind the Scenes',
        catId:    'bts',
        date:     '2026-05-20',
        readTime: 6,
        photo:    U('1532712938310-34cb3982ef74',1200,750),
        content: `
          <p>5 giờ sáng. Điện thoại rung. Đó là tín hiệu bắt đầu một trong những ngày dài nhất của chúng tôi trong năm — theo chân Linh và Khoa từ khoảnh khắc cô dâu bắt đầu trang điểm cho đến khi đôi bạn trẻ bước vào căn phòng riêng của họ lúc gần nửa đêm.</p>
          <h2>Phần 1: Trang điểm — khoảnh khắc yên tĩnh nhất</h2>
          <p>Căn phòng khách sạn còn chưa đủ sáng. Ánh đèn trang điểm chiếu vào gương tạo ra một vùng sáng ấm áp, đủ để chụp mà không cần thêm flash. Chúng tôi luôn ưu tiên ánh sáng tự nhiên hoặc môi trường có sẵn trong những khoảnh khắc thân mật như thế này.</p>
          <p>Linh ngồi im, mắt nhìn vào gương nhưng tư tưởng rõ ràng đang ở chỗ khác — có lẽ đang nghĩ đến lúc bước ra sảnh tiệc, hay đơn giản là đang tận hưởng khoảnh khắc hiếm hoi được yên tĩnh trước một ngày ồn ào sắp tới.</p>
          <h2>Phần 2: Lễ rước dâu — nhanh, nhiều, không ngủ được</h2>
          <p>Đây là phần thử thách nhất. Không gian hẹp, ánh sáng không kiểm soát được, 50 người chen chúc trong một căn nhà phố. Chúng tôi dùng ống kính 35mm f/1.4, ISO 3200, và rất nhiều sự kiên nhẫn.</p>
          <p>Bí quyết là không đứng yên một chỗ chờ. Di chuyển liên tục, đón trước góc độ, và đừng bao giờ nhìn vào màn hình LCD sau mỗi tấm — bạn sẽ bỏ lỡ khoảnh khắc tiếp theo.</p>
          <h2>Gear được dùng trong ngày</h2>
          <ul>
            <li>Sony A7IV + 35mm f/1.4 GM — buổi sáng trong nhà</li>
            <li>Sony A7IV + 85mm f/1.4 GM — lễ đường và chân dung</li>
            <li>Sony A7IV + 24-70mm f/2.8 GM — tiệc cưới</li>
            <li>Godox V1 (×2) — bounce flash tại tiệc</li>
          </ul>
          <p>Kết thúc ngày, 1.847 tấm RAW. Chọn lại còn 312. Edit ra 87 ảnh giao cho khách. Đó là tỷ lệ chọn lọc nghiêm khắc của Lệch Studio — thà ít mà chất hơn nhiều mà loãng.</p>
        `
      },
      {
        id:       2,
        slug:     'chon-trang-phuc-chup-chan-dung',
        title:    'Cách chọn trang phục cho buổi chụp chân dung',
        excerpt:  'Màu sắc, chất liệu, và độ vừa vặn — ba yếu tố quyết định bộ ảnh của bạn trông chuyên nghiệp hay trông như selfie.',
        category: 'Tips & Tricks',
        catId:    'tips',
        date:     '2026-04-12',
        readTime: 4,
        photo:    U('1606221982782-407853fb4627',1200,750),
        content: `
          <p>Trang phục chiếm 40% quyết định bộ ảnh trông như thế nào. Đây không phải số liệu khoa học — đây là kinh nghiệm sau hàng trăm buổi chụp chân dung của Lệch Studio.</p>
          <h2>Màu sắc: tránh xa pattern rậm rịt</h2>
          <p>Kẻ sọc nhỏ, ca-rô nhỏ, hoa văn dày — tất cả đều gây hiệu ứng moiré khi in hoặc hiển thị trên màn hình. Ưu tiên màu đồng, tông trung tính (be, xám, trắng kem), hoặc màu đậm như navy, đen, rừng sâu.</p>
          <p>Nếu bạn muốn màu sặc sỡ, giới hạn ở một tông chủ đạo và để phụ kiện là điểm nhấn nhỏ.</p>
          <h2>Chất liệu: vải tốt thì ảnh đẹp</h2>
          <p>Vải lụa mỏng nhìn đẹp nhưng rất nhăn. Vải dày như denim, len, kaki nhìn có chiều sâu hơn trên ảnh. Tránh vải bóng loáng (polyester sáng) vì sẽ bắt sáng không đẹp.</p>
          <h2>Độ vừa vặn: quan trọng hơn thương hiệu</h2>
          <p>Một chiếc áo Zara vừa vặn trông đẹp hơn áo hiệu mà rộng thùng thình. Trước buổi chụp, hãy mặc thử và ngồi xuống — nếu vai áo bị xô lệch hoặc cổ áo bị bai, hãy đổi ngay.</p>
        `
      },
      {
        id:       3,
        slug:     '5-dia-diem-chup-anh-sai-gon',
        title:    '5 địa điểm chụp ảnh đẹp nhất Sài Gòn 2026',
        excerpt:  'Không phải Bưu điện Trung tâm, không phải Nhà thờ Đức Bà — đây là những góc Sài Gòn ít ai biết nhưng cho ra ảnh cực kỳ chất.',
        category: 'Locations',
        catId:    'location',
        date:     '2026-03-08',
        readTime: 5,
        photo:    U('1690812063433-36b580074b8b',1200,750),
        content: `
          <p>Sài Gòn có hàng nghìn góc đẹp — vấn đề là phần lớn trong số đó đã bị chụp quá nhiều đến mức nhàm. Đây là 5 địa điểm chúng tôi đang dùng nhiều nhất trong 2026.</p>
          <h2>1. Hẻm gạch Bình Thạnh</h2>
          <p>Một con hẻm nhỏ ở Bình Thạnh với tường gạch đỏ và ánh sáng chiều rọi qua khe hở mái tôn. Vào khoảng 3–5 giờ chiều, ánh sáng ở đây là vàng tự nhiên, đủ mềm và đủ ấm.</p>
          <h2>2. Khu công nghiệp cũ Tân Bình</h2>
          <p>Những nhà máy bỏ hoang với kết cấu thép gỉ và cửa sổ vỡ tạo ra bối cảnh industrial cực kỳ đẹp cho editorial. Cần xin phép trước và đến sáng sớm trước 7 giờ.</p>
          <h2>3. Mái nhà khách sạn Q.1</h2>
          <p>Không nói tên cụ thể vì sẽ bị overcrowded ngay, nhưng nếu bạn đặt lịch với Lệch Studio, chúng tôi sẽ đưa bạn đến đây. View toàn cảnh Q.1 vào giờ vàng là không thể chê.</p>
          <h2>4. Chợ Bình Tây lúc 5 giờ sáng</h2>
          <p>Documentary và street photography thuần túy. Ánh đèn huỳnh quang vàng, bóng người qua lại, mùi trái cây và bụi chợ. Đây là Sài Gòn thật.</p>
          <h2>5. Studio Lệch — 12 Lê Thánh Tôn</h2>
          <p>Đương nhiên là studio của chúng tôi. Kiểm soát hoàn toàn ánh sáng, nền cyclorama trắng và đen, và một góc brick wall cho editorial shot. Phù hợp mọi thể loại.</p>
        `
      },
      {
        id:       4,
        slug:     'editorial-fw26-tu-concept-den-hinh',
        title:    'Editorial FW26 — Từ concept đến hình thật',
        excerpt:  'Bộ editorial Thu Đông 2026 cho local brand K— mất 3 tuần chuẩn bị, 1 ngày chụp, và 4 ngày hậu kỳ. Đây là toàn bộ quá trình.',
        category: 'Behind the Scenes',
        catId:    'bts',
        date:     '2026-02-18',
        readTime: 7,
        photo:    U('1662111456136-166d3ab54673',1200,750),
        content: `
          <p>Khi brand K— liên hệ với Lệch Studio vào tháng 11/2025, yêu cầu của họ rất đơn giản: "Chúng tôi muốn lookbook trông như tạp chí, không phải catalogue". Đó là bắt đầu của 3 tuần làm việc cùng nhau.</p>
          <h2>Tuần 1: Concept và mood board</h2>
          <p>Brief ban đầu là "tối giản, đô thị, lạnh". Chúng tôi phát triển thành moodboard với tông màu xám lạnh, bê tông, và ánh sáng cứng một nguồn. Tham khảo: Juergen Teller, Alasdair McLellan, và một số editorial Nhật Bản từ những năm 90.</p>
          <h2>Tuần 2: Cast và location scouting</h2>
          <p>Cast 2 model chính — một mang ngoại hình androgynous, một có đặc điểm rất Việt Nam. Sự tương phản này là ý tưởng cốt lõi của bộ editorial. Location là khu công nghiệp cũ Tân Bình và studio.</p>
          <h2>Ngày chụp: 6 giờ sáng – 8 giờ tối</h2>
          <p>14 giờ, 6 bộ trang phục, 2 địa điểm, 1.200 tấm RAW. Khó khăn nhất là ánh sáng lúc 2 giờ chiều tại khu công nghiệp — quá cứng và quá cao. Giải pháp: 2 tấm diffuser 2×2m và chờ đám mây che.</p>
          <h2>Hậu kỳ: màu sắc là tất cả</h2>
          <p>Grade màu trong Lightroom trước, export sang Photoshop cho frequency separation. Tổng thời gian: 4 ngày làm việc cho 40 ảnh final.</p>
        `
      }
    ];
  }

  static getBySlug(slug) {
    return this.getAll().find(p => p.slug === slug) || null;
  }

  static getRecent(limit = 3) {
    return this.getAll().slice(0, limit);
  }

  static getCategories() {
    return [
      { id: 'all',      label: 'Tất cả' },
      { id: 'bts',      label: 'Behind the Scenes' },
      { id: 'tips',     label: 'Tips & Tricks' },
      { id: 'location', label: 'Locations' }
    ];
  }
}

module.exports = BlogModel;
