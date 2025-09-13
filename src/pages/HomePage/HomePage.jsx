import React, { useState } from 'react'
import styles from './HomePage.module.css'
import heroVideo from '../../assets/figma/videos/array_video.mp4'
import heroPoster from '../../assets/figma/hero-bg_15-49_7cb596.png'
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
    // 갤러리 페이지로 이동하는 로직
    console.log(`${grade} 갤러리 페이지로 이동`)
    // 추후 라우터를 사용하여 페이지 이동 구현
    // navigate(`/gallery/${grade}`)
  }

  return (
    <div className={styles.page}>
      <Header onMobileMenuToggle={toggleMobileMenu} />
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
            aria-label="전시 히어로 영상 배경"
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
              전통 한복을 현대적 감각으로 재해석한<br />
              창의적 작품들을 만나보세요
            </p>
          </div>

          {/* 전시 정보 */}
          <div className={styles.exhibitionInfo}>
            <div className={styles.infoItem}>전시기간: 2025.10.21 ~ 2025.10.26</div>
            <div className={styles.infoItem}>장소: 배화여자대학교 갤러리</div>
          </div>

          {/* CTA 버튼 */}
          <div className={styles.ctaButton}>
            <a href="#about" className="btn btn-outline">
              전시회 더 알아보기
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>전시회 소개</h2>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutText}>
                <p className={styles.aboutDescription}>
                  배화여자대학교 한복문화컨텐츠학과 2025년 졸업생들의 작품을 소개합니다. 
                  전통 한복의 아름다움을 현대적 감각으로 재해석한 창의적인 작품들을 통해 
                  한국 전통문화의 가치와 미래를 조명합니다.
                </p>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>🎨</div>
                    <h3>창의적 디자인</h3>
                    <p>전통과 현대의 조화로운 만남</p>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>👘</div>
                    <h3>한복 문화</h3>
                    <p>우리나라 전통 의상의 아름다움</p>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>🌟</div>
                    <h3>혁신적 접근</h3>
                    <p>새로운 관점의 문화 콘텐츠</p>
                  </div>
                </div>
              </div>
              <div className={styles.aboutImage}>
                <div className={styles.imagePlaceholder}>
                  <span>전시 작품 이미지</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Preview Section */}
      <section id="works" className={styles.worksSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>작품 미리보기</h2>
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
          <h2 className={styles.sectionTitle}>연락처 및 문의</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3>전시 장소</h3>
                  <p>배화여자대학교 갤러리<br />서울특별시 종로구 배화여자대학교</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3>문의 전화</h3>
                  <p>02-1234-5678</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <h3>이메일</h3>
                  <p>exhibition@baewha.ac.kr</p>
                </div>
              </div>
            </div>
            <div className={styles.contactMap}>
              <div className={styles.mapPlaceholder}>
                <span>지도 영역</span>
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


