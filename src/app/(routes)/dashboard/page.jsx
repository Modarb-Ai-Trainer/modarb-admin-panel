import React from 'react'
import styles from './dashboard.module.css'
import DownloadsChart from '@/components/large/charts/DownloadsChart/DownloadsChart'
import Widgets from '@/components/small/Widgets/Widgets.jsx'
import GoalChart from '@/components/large/charts/goalChart/GoalChart'
import UserChart from '@/components/large/charts/userChart/UserChart'
import Feedback from '@/components/small/FeedbackWidget/Feedback'
import PopularChart from '@/components/large/charts/popularChart/PopularChart'
import AdminTable from '@/components/large/AdminTable/AdminTable'


function Dashboard() {
  
    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashTop} >

            <div className={styles.dashLeft}>
                <div className={styles.dashWidgets}>
                    <Widgets />
                    
                </div>
                <div className={styles.dashChart}>
                    <UserChart/>
                </div>
                <div className={styles.dashSubCharts}>
                      <div className={styles.leftSubChart}>
                      <GoalChart/>
                      </div>
                      <div className={styles.leftSubChart}>
                      <PopularChart/>
                      </div>
                </div>


               
            </div>
            <div className={styles.dashRight}>
                <div className={styles.feedback}>
                        <Feedback/>
                </div>
                <div className={styles.downloads}>
                    <DownloadsChart/>
                </div>
            </div>
            </div>
        
            <div className={styles.dashAdminTable}>
        <AdminTable/>
            </div>
            
        </div>

    )
}

export default Dashboard