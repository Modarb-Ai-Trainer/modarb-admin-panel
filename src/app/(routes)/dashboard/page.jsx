import React from 'react'
import styles from './Page.module.css'
import DownloadsChart from '../../../components/large/charts/DownloadsChart/DownloadsChart'
import Widgets from '../../../components/small/widgets/Widgets'
import GoalChart from '../../../components/large/charts/GoalChart/GoalChart'
import UserChart from '../../../components/large/charts/UserChart/UserChart'
import PopularChart from '../../../components/large/charts/PopularChart/PopularChart'
import AdminTable from '../../../components/large/AdminTable/AdminTable'
import Feedback from '../../../components/small/FeedbackWidget/FeedbackWidget'


function Dashboard() {

    return (
        <div className={styles.dashboard}>
             <div className={styles.dashboard_container}>
            <div className={styles.dashboard_container_top} >

                <div className={styles.dashboard_container_top_left}>
                    <div className={styles.dashboard_container_top_left_dashWidgets}>
                        <Widgets />

                    </div>
                    <div className={styles.dashboard_container_top_left_dashChart}>
                        <UserChart />
                    </div>
                    <div className={styles.dashboard_container_top_left_dashSubChart}>
                        <div className={styles.leftSubChart}>
                            <GoalChart />
                        </div>
                        <div className={styles.leftSubChart}>
                            <PopularChart />
                        </div>
                    </div>
                </div>

                <div className={styles.dashboard_container_top_dashRight}>
                    <div className={styles.dashboard_container_top_dashRight_feedback}>
                        <Feedback />
                    </div>
                    <div className={styles.dashboard_container_top_dashRight_downloads}>
                        <DownloadsChart />
                    </div>
                </div>
            </div>

            <div className={styles.dashboard_container_dashAdminTable}>
                <AdminTable />
            </div>

        </div>


        </div>
       
    )
}

export default Dashboard