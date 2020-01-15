import React from 'react'
import styles from './styles.module.css'

export function Form(props) {
    const onChangeHandler = event => {
        props.onChange(event.target.value)
    }

    const onSubmitHandler = event => {
      event.preventDefault()
        props.onSubmit()
    }

    const onDelete = event => {
        props.onChange('')       

    }
    
    return <div  className={styles.container}>
        <form onSubmit={onSubmitHandler} className={styles.container}>
            <input value={props.inputValue} onChange={onChangeHandler} className={styles.input} />
            <button disabled={!props.dataIsEmpty} className={`${styles.button} ${props.dataIsEmpty ? '' : styles.disabled}`}>Add</button>
        </form>
        <button onClick={onDelete} className={styles.button}>clear</button>
    </div>
}

