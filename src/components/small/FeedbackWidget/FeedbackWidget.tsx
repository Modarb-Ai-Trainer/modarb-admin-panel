import React from 'react'
import styles from './FeedbackWidget.module.css'
const FeedbackWidget = () => {
  return (
    <div className={styles.feedback}>
       <div className={styles.feedback_title}>
                <span>Feedbacks</span>
              </div>
        <div className={styles.feedback_feedbackcontainer}>
              <div className={styles.feedback_feedbackcontainer_bottom}>
                <div className={styles.feedback_feedbackcontainer_bottom_icon}>
                  <img className={styles.sidelogo} src="/images/icon.svg"></img>
                </div>

                <div className={styles.feedback_feedbackcontainer_bottom_rating}>
                 
                  <div className={styles.feedback_feedbackcontainer_bottom_rating_scale}>
                    <span>0%</span>
                    <span>100%</span>
                  </div>

                  <div className={styles.feedback_feedbackcontainer_bottom_rating_appRating}>
                    <span>95%</span>
                    <span>Based on app rating</span>
                  </div>

                </div>
              </div>


            </div>
    </div>
    
  )
}

export default FeedbackWidget