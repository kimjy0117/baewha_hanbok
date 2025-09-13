import React from 'react'
import styles from './GalleryBox.module.css'

function GalleryBox({ 
  title, 
  description, 
  grade, 
  imageUrl, 
  onClick, 
  className = '' 
}) {
  return (
    <div 
      className={`${styles.galleryBox} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
      aria-label={`${title} 작품 갤러리 보기`}
    >
      <div className={styles.galleryImage}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`${title} 작품 미리보기`}
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderText}>
              {grade} 작품 갤러리
            </span>
          </div>
        )}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <span className={styles.viewText}>작품 보기</span>
            <span className={styles.arrow}>→</span>
          </div>
        </div>
      </div>
      
      <div className={styles.galleryInfo}>
        <div className={styles.gradeBadge}>
          {grade}
        </div>
        <h3 className={styles.galleryTitle}>
          {title}
        </h3>
        <p className={styles.galleryDescription}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default GalleryBox
