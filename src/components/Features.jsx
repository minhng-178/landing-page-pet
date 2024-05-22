/* eslint-disable react/prop-types */
import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) => (
    <div className={styles.featureCard}>
        <img src={iconUrl} alt="icon" className={styles.featureImg} />
        <p className={styles.featureText}>{iconText}</p>
    </div>
)

const Features = () => {
    return (
        <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Tính năng</h1>
                    <p className={`${styles.pText} ${styles.whiteText}`}>Furever-friends cung cấp cho người dùng những tính năng cần thiết như lữu trữ thông tin, đặt lịch hẹn và nhắc lịch hẹn cho bé cưng của bạn</p>
                </div>

                <div className={styles.flexWrap}>
                    <FeatureCard iconUrl={assets.pet} iconText="Lưu trữ thông tin" />
                    <FeatureCard iconUrl={assets.scheudle} iconText="Đặt lịch hẹn" />
                    <FeatureCard iconUrl={assets.notify} iconText="Nhắc lịch hẹn" />
                </div>
            </div>
        </div>
    )
}

export default Features