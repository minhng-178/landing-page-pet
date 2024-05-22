
import { Features, SectionWrapper } from './components';
import assets from './assets';

function App() {
  return (
    <>
      <SectionWrapper
        title="Nền tảng chăm sóc thú cưng của riêng bạn. Bắt đầu quản lý & phát triển"
        description="Quản lý, lưu trữ thông tin thú cưng, đặt lịch & kiếm điểm thưởng. Hãy tham gia cùng 25+ triệu người dùng sử dụng nền tảng chăm sóc thú cưng."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Giao diện người dùng thông minh"
        description="Trải nghiệm giao diện người dùng mượt mà của nền tảng chăm sóc thú cưng. Màu sắc nhẹ nhàng, liên tục của thiết kế giao diện người dùng trôi chảy."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />
    </>
  )
}

export default App
