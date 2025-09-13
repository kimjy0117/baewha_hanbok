import { useState, useEffect } from 'react'
import styles from './MobileMenu.module.css'

function MobileMenu({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  const handleMenuClick = (section) => {
    onClose()
    // 스크롤 애니메이션
    setTimeout(() => {
      const element = document.querySelector(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuContainer}>
        {/* 닫기 버튼 */}
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="메뉴 닫기"
        >
          ✕
        </button>

        {/* 메뉴 항목들 */}
        <nav className={styles.menuNav}>
          <button 
            className={styles.menuItem}
            onClick={() => handleMenuClick('#home')}
          >
            HOME
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => handleMenuClick('#works')}
          >
            WORKS
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => handleMenuClick('#about')}
          >
            CONGRATS
          </button>
          <button 
            className={styles.menuItem}
            onClick={() => handleMenuClick('#contact')}
          >
            THE STAFF
          </button>
        </nav>

        {/* 소셜 미디어 정보 */}
        <div className={styles.socialInfo}>
          <div className={styles.socialIcon}>
            <span>📱</span>
          </div>
          <div className={styles.socialText}>
            @baewha_hanbok
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
