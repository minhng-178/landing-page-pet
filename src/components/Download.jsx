import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
                </div>
                <button onClick={() => { window.open("https://github.com/rahulkarda/nft-marketplace-showcase", "_blank") }} className={styles.btnPrimary} type="button">Source Code</button>
                <div className={styles.flexCenter}>
                    <img
                        src={assets.scene}
                        alt="download_png"
                        className={styles.fullImg}
                    />
                </div>
            </div>
        </div>
    )
}

export default Download