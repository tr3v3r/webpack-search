import React from 'react'
import styles from './styles.module.css'

export function Box({ text }) {
    return <div className={styles.container}>
        {text}
    </div>
}

