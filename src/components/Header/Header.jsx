import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import topLogo from '../../assets/figma/top-logo_15-66_1f5e58.png'

function Header({ onMobileMenuToggle }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    onMobileMenuToggle()
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.brand}>
          <img src={topLogo} alt="배화여자대학교 로고" />
          <span className={styles.brandText}>배화여자대학교 한복문화컨텐츠학과</span>
        </a>
        
        <nav className={styles.navigation}>
          <a href="#home" className={styles.navLink}>홈</a>
          <a href="#about" className={styles.navLink}>전시소개</a>
          <a href="#works" className={styles.navLink}>작품</a>
          <a href="#schedule" className={styles.navLink}>일정</a>
          <a href="#contact" className={styles.navLink}>연락처</a>
        </nav>
        
        <button 
          className={styles.menuBtn} 
          aria-label="메뉴"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header


