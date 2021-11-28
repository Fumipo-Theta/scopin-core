import React from "react"
import styles from "./index.module.css"

const repoUrl = "https://github.com/Fumipo-Theta/scopin-core"

const CopyRight: React.FC = () => {
    return <div className={styles.container}>
        <p className={styles.message}>This app is powered by <a href={repoUrl}>SCOPin Core</a></p>
    </div>
}

export default CopyRight
