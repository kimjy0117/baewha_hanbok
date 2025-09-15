import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import topLogo from '../../assets/figma/top-logo_15-66_1f5e58.png'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="https://www.baewha.ac.kr/submain.do?menuId=3045" target="_blank" className={styles.brand}>
          <img src={topLogo} alt="배화여자대학교 로고" />
          <span className={styles.brandText}>배화여자대학교 한복문화컨텐츠학과</span>
        </a>
      </div>
    </header>
  )
}
export default Header