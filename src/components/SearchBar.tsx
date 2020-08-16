import React, { FC, useCallback } from 'react'
import cx from 'classnames'
import styles from './SearchBar.module.css'

export const SearchBar: FC<{
  value: string
  onChange: (newValue: string) => void
  placeholder?: string
  className?: string
}> = ({ value, onChange, placeholder, className }) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value)
    },
    [onChange]
  )
  const handleReset = useCallback(() => onChange(''), [onChange])

  return (
    <div className={cx(styles.Container, className)}>
      <input
        className={styles.Input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button className={styles.Button} onClick={handleReset}>
        RESET
      </button>
    </div>
  )
}

export default SearchBar
