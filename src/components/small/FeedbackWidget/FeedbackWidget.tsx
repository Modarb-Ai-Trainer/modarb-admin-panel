import React from 'react'
import styles from './feedbackWidget.module.css'
const FeedbackWidget = () => {
  return (
    <div className={styles.Feedbackcontainer}>
      <div className={styles.title}>
        <span>Feedbacks</span>
      </div>

      <div className={styles.bottom}>
        <div className={styles.icon}>
          {/* <img className={styles.sidelogo} src="/images/icon.svg"></img> */}
        </div>
        <div className={styles.rating}>
          <div className={styles.scale}>
            <span>0%</span>
            <span>100%</span>
          </div>
          <div className={styles.appRating}>
            <span>95%</span>
            <span>Based on app rating</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default FeedbackWidget