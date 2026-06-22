'use strict';

const U = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

class BlogModel {
  static getAll() {
    return [
      {
        id:       1,
        slug:     'behind-the-scenes-dam-cuoi-linh-khoa',
        title:    'Behind the Scenes: Đám cưới Linh & Khoa',
        enTitle:  'Behind the Scenes: Linh & Khoa\'s Wedding',
        excerpt:  'Từ 5 giờ sáng theo chân cô dâu trang điểm đến lúc pháo giấy bay lúc nửa đêm — một ngày dài nhất trong năm của Lệch Studio.',
        enExcerpt:'From 5 a.m. bridal prep to midnight confetti — the longest day of the year for Lệch Studio.',
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
        `,
        enContent: `
          <p>5 a.m. The phone buzzes. That's the signal that one of our longest days of the year has begun — shadowing Linh and Khoa from the moment the bride sits down for hair and makeup to the moment the two of them close the door on their wedding night, just before midnight.</p>
          <h2>Part 1: Getting ready — the quietest moment</h2>
          <p>The hotel room is still dim. The makeup light reflecting off the mirror creates a warm pool of illumination — enough to shoot without adding flash. We always prioritise available light in intimate moments like this; a strobe would shatter the mood in an instant.</p>
          <p>Linh sits still, eyes on the mirror but clearly somewhere else — maybe already imagining the walk into the reception hall, or simply savoring the rare quiet before the noise of the day ahead.</p>
          <h2>Part 2: The bridal procession — fast, crowded, and relentless</h2>
          <p>This is the hardest part. Cramped space, uncontrollable light, fifty people packed into a narrow townhouse. We shoot with the 35mm f/1.4, ISO 3200, and a lot of patience.</p>
          <p>The trick is never to stand still and wait. Keep moving, anticipate the next angle, and never chimp the LCD after each frame — you'll miss the moment that follows.</p>
          <h2>Gear used on the day</h2>
          <ul>
            <li>Sony A7IV + 35mm f/1.4 GM — morning indoors</li>
            <li>Sony A7IV + 85mm f/1.4 GM — ceremony and portraits</li>
            <li>Sony A7IV + 24-70mm f/2.8 GM — reception</li>
            <li>Godox V1 (×2) — bounce flash at the banquet</li>
          </ul>
          <p>End of day: 1,847 RAW files. Culled to 312. Delivered 87 finished images to the couple. That's the strict selection ratio Lệch Studio holds to — fewer great shots always beats a flood of mediocre ones.</p>
        `
      },
      {
        id:       2,
        slug:     'chon-trang-phuc-chup-chan-dung',
        title:    'Cách chọn trang phục cho buổi chụp chân dung',
        enTitle:  'How to Choose Outfits for a Portrait Session',
        excerpt:  'Màu sắc, chất liệu, và độ vừa vặn — ba yếu tố quyết định bộ ảnh của bạn trông chuyên nghiệp hay trông như selfie.',
        enExcerpt:'Color, fabric, and fit — the three factors that decide whether your photos look professional or like a selfie.',
        category: 'Tips & Tricks',
        catId:    'tips',
        date:     '2026-04-12',
        readTime: 4,
        photo:    U('1552014785-a6e5f8bc9131',1200,750),
        content: `
          <p>Trang phục chiếm 40% quyết định bộ ảnh trông như thế nào. Đây không phải số liệu khoa học — đây là kinh nghiệm sau hàng trăm buổi chụp chân dung của Lệch Studio.</p>
          <h2>Màu sắc: tránh xa pattern rậm rịt</h2>
          <p>Kẻ sọc nhỏ, ca-rô nhỏ, hoa văn dày — tất cả đều gây hiệu ứng moiré khi in hoặc hiển thị trên màn hình. Ưu tiên màu đồng, tông trung tính (be, xám, trắng kem), hoặc màu đậm như navy, đen, rừng sâu.</p>
          <p>Nếu bạn muốn màu sặc sỡ, giới hạn ở một tông chủ đạo và để phụ kiện là điểm nhấn nhỏ.</p>
          <h2>Chất liệu: vải tốt thì ảnh đẹp</h2>
          <p>Vải lụa mỏng nhìn đẹp nhưng rất nhăn. Vải dày như denim, len, kaki nhìn có chiều sâu hơn trên ảnh. Tránh vải bóng loáng (polyester sáng) vì sẽ bắt sáng không đẹp.</p>
          <h2>Độ vừa vặn: quan trọng hơn thương hiệu</h2>
          <p>Một chiếc áo Zara vừa vặn trông đẹp hơn áo hiệu mà rộng thùng thình. Trước buổi chụp, hãy mặc thử và ngồi xuống — nếu vai áo bị xô lệch hoặc cổ áo bị bai, hãy đổi ngay.</p>
        `,
        enContent: `
          <p>Your outfit accounts for roughly 40% of how a portrait session looks. That's not a scientific figure — it's what years of shooting hundreds of portrait sessions at Lệch Studio has taught us.</p>
          <h2>Color: stay away from busy patterns</h2>
          <p>Fine stripes, small checks, dense prints — all of these create moiré interference when printed or viewed on screen. Opt for solid colors, neutral tones (beige, grey, off-white), or deep saturated tones like navy, black, or forest green.</p>
          <p>If you want a bold color, commit to one dominant tone and let your accessories be the small accent.</p>
          <h2>Fabric: good cloth makes great photos</h2>
          <p>Thin silk looks beautiful in person but wrinkles mercilessly on camera. Heavier fabrics like denim, wool, and khaki read with more depth and texture in photos. Avoid shiny synthetics (bright polyester) — they catch light badly and flatten the look.</p>
          <h2>Fit: more important than the brand</h2>
          <p>A well-fitted Zara shirt looks better than a designer piece that's two sizes too big. Before the session, put the outfit on and sit down — if the shoulders pull or the collar gaps, swap it out. The camera will notice before you do.</p>
        `
      },
      {
        id:       3,
        slug:     '5-dia-diem-chup-anh-sai-gon',
        title:    '5 địa điểm chụp ảnh đẹp nhất Sài Gòn 2026',
        enTitle:  'Top 5 Photography Spots in Saigon 2026',
        excerpt:  'Không phải Bưu điện Trung tâm, không phải Nhà thờ Đức Bà — đây là những góc Sài Gòn ít ai biết nhưng cho ra ảnh cực kỳ chất.',
        enExcerpt:'Not the Central Post Office, not the Notre-Dame Cathedral — these are Saigon\'s lesser-known corners that produce extraordinary shots.',
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
        `,
        enContent: `
          <p>Saigon has thousands of photogenic corners — the problem is most of them have been shot so many times they've become clichés. These are the five locations we're returning to most in 2026.</p>
          <h2>1. Bình Thạnh brick alley</h2>
          <p>A narrow lane in Bình Thạnh district lined with red brick walls and afternoon light filtering through gaps in the corrugated iron roofs. Between 3 and 5 p.m. the light here turns a natural gold — soft enough and warm enough to shoot without any fill.</p>
          <h2>2. Old Tân Bình industrial zone</h2>
          <p>Abandoned factories with rusted steel structures and broken windows produce a stunning industrial backdrop for editorials. Permissions must be arranged in advance and the best time to arrive is before 7 a.m.</p>
          <h2>3. District 1 hotel rooftop</h2>
          <p>We won't name it — it'd be overcrowded within a week — but book a session with Lệch Studio and we'll take you there. A full panoramic view of District 1 at golden hour is impossible to fault.</p>
          <h2>4. Bình Tây Market at 5 a.m.</h2>
          <p>Pure documentary and street photography. Yellow fluorescent light, moving silhouettes, the smell of fruit and market dust. This is the real Saigon.</p>
          <h2>5. Lệch Studio — 12 Lê Thánh Tôn</h2>
          <p>Our own studio, obviously. Full control over light, white and black cyclorama backdrops, and a brick wall corner for editorial shots. Suitable for every genre.</p>
        `
      },
      {
        id:       4,
        slug:     'editorial-fw26-tu-concept-den-hinh',
        title:    'Editorial FW26 — Từ concept đến hình thật',
        enTitle:  'Editorial FW26 — From Concept to Final Frames',
        excerpt:  'Bộ editorial Thu Đông 2026 cho local brand K— mất 3 tuần chuẩn bị, 1 ngày chụp, và 4 ngày hậu kỳ. Đây là toàn bộ quá trình.',
        enExcerpt:'The FW26 editorial for local brand K— took 3 weeks of prep, 1 shoot day, and 4 days of post. Here\'s the full process.',
        category: 'Behind the Scenes',
        catId:    'bts',
        date:     '2026-02-18',
        readTime: 7,
        photo:    U('1608497275992-b04e06353862',1200,750),
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
        `,
        enContent: `
          <p>When brand K— reached out to Lệch Studio in November 2025, their brief was simple: "We want a lookbook that looks like a magazine, not a catalogue." That was the beginning of three weeks working together.</p>
          <h2>Week 1: Concept and mood board</h2>
          <p>The initial brief was "minimal, urban, cold." We developed that into a moodboard built around cool greys, raw concrete, and hard single-source light. References: Juergen Teller, Alasdair McLellan, and a handful of Japanese editorials from the nineties.</p>
          <h2>Week 2: Casting and location scouting</h2>
          <p>We cast two lead models — one with an androgynous look, one with distinctly Vietnamese features. That contrast became the editorial's core idea. Locations chosen: the old Tân Bình industrial zone and our studio.</p>
          <h2>Shoot day: 6 a.m. to 8 p.m.</h2>
          <p>14 hours, 6 looks, 2 locations, 1,200 RAW files. The hardest moment was 2 p.m. light at the industrial site — too harsh, too overhead. Solution: two 2×2m diffusion panels and waiting for cloud cover to do its job.</p>
          <h2>Post-production: color is everything</h2>
          <p>We grade in Lightroom first, then export to Photoshop for frequency separation retouching. Total time: 4 working days for 40 final images.</p>
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
      { id: 'all',      label: 'Tất cả',           enLabel: 'All' },
      { id: 'bts',      label: 'Behind the Scenes', enLabel: 'Behind the Scenes' },
      { id: 'tips',     label: 'Tips & Tricks',     enLabel: 'Tips & Tricks' },
      { id: 'location', label: 'Locations',          enLabel: 'Locations' }
    ];
  }
}

module.exports = BlogModel;
