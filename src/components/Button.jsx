/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Global';



const Button = ({ assetUrl, link }) => {
    const navigate = useNavigate()

    return (
        <div
            className={styles.btnWhite}
            onClick={() => navigate(link)}
        >
            <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
            <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnTextBlack} font-normal text-xs`}>Xem thêm tại</p>
                <p className={`${styles.btnTextBlack} font-bold text-sm`}>Cửa hàng Play</p>
            </div>
        </div>
    )
}

export default Button