import React, { useState } from 'react'
import styles from './HomePage.module.css'
import heroImage from '../../assets/figma/array.png'
import Header from '../../components/Header/Header'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import GalleryBox from '../../components/GalleryBox/GalleryBox'
import seniorImage from '../../assets/figma/4grade.png'
import sophomoreImage from '../../assets/figma/2grade.png'

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleGalleryClick = (grade) => {
    console.log(`${grade} 갤러리 페이지로 이동`)
  }

  return (
    <div className={styles.page}>
      <Header onMobileMenuToggle={toggleMobileMenu} />
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <img
            src={heroImage}
            alt="전시 히어로 배경 이미지"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          {/* 메인 타이틀 */}
          <div className={styles.mainTitle}>
            <div className={styles.university}>배화여자대학교</div>
            <div className={`${styles.title} ${styles.koreanTitle}`}>2025 졸업전시회</div>
            <div className={styles.exhibition}>한복문화컨텐츠학과</div>
          </div>

          {/* 설명 */}
          <div className={styles.description}>
            <p>
              고구려 전통 의복을 현대적 감각으로 고증한<br />
              학생들의 작품들을 만나보세요
            </p>
          </div>

          {/* 전시 정보 */}
          <div className={styles.exhibitionInfo}>
            <div className={styles.infoItem}>전시기간: 2025.10.21 ~ 2025.10.26</div>
            <div className={styles.infoItem}>장소: 배화여자대학교</div>
          </div>
        </div>
      </div>

      {/* Works Preview Section */}
      <section id="works" className={styles.worksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>졸업 작품</h2>
          <div className={styles.galleryContainer}>
            <GalleryBox
              title="4학년 졸업작품"
              description="한복문화컨텐츠학과 4학년 학생들의 졸업작품을 만나보세요. 전통 한복의 아름다움을 현대적 감각으로 재해석한 창의적인 작품들을 선보입니다."
              grade="4학년"
              onClick={() => handleGalleryClick('4학년')}
              className={styles.seniorGallery}
              imageUrl={seniorImage}
            />
            <GalleryBox
              title="2학년 작품"
              description="한복문화컨텐츠학과 2학년 학생들의 작품을 만나보세요. 전통 한복의 기초를 바탕으로 한 창의적이고 실험적인 작품들을 감상하실 수 있습니다."
              grade="2학년"
              onClick={() => handleGalleryClick('2학년')}
              className={styles.sophomoreGallery}
              imageUrl={sophomoreImage}
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className={styles.scheduleSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>전시 일정</h2>
          <div className={styles.scheduleContent}>
            <div className={styles.scheduleCard}>
              <div className={styles.scheduleDate}>
                <span className={styles.day}>21</span>
                <span className={styles.month}>10월</span>
              </div>
              <div className={styles.scheduleInfo}>
                <h3>전시회 오픈</h3>
                <p>오전 10:00 - 오후 6:00</p>
                <p>개막식 및 작가와의 만남</p>
              </div>
            </div>
            <div className={styles.scheduleCard}>
              <div className={styles.scheduleDate}>
                <span className={styles.day}>26</span>
                <span className={styles.month}>10월</span>
              </div>
              <div className={styles.scheduleInfo}>
                <h3>전시회 마감</h3>
                <p>오전 10:00 - 오후 5:00</p>
                <p>폐막식 및 작품 해설</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3>전시 장소</h3>
                  <p>서울특별시 종로구 배화여자대학교</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3>문의 전화</h3>
                  <p>02-399-0700</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <h3>인스타</h3>
                  <a href="https://www.instagram.com/baewha_hanbok?igsh=Mmw5NDhodWlrdjB2" target="_blank">
                    <p>@baewha_hanbok</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 모바일 메뉴 */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </div>
  )
}

export default HomePage


