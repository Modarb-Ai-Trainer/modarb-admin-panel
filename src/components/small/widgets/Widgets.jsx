import React from 'react';
import styles from './Widgets.module.css';
import { IoTrendingUp } from "react-icons/io5";
import { WidgetsData } from './widgetsData';

const Widgets = () => {
  return (
    <div  className={styles.widgets}>
      {
        WidgetsData.map((data, index) => {
          return (
            <div key={index} className={styles.widgetContainer}>
              <div className={styles.widgetTitle}>
                <span>{data.title}</span>
              </div>
              <div className={styles.widgetNumbers}>
                <div className={styles.totalNumber}>
                  <span>{data.value}</span>
                </div>

                {data.isStatistics ? (
                  <div className={styles.widgetIcon}>
                    <span>{data.percentage}%</span>
                    <IoTrendingUp />
                  </div>
                ) : null}

              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Widgets;
