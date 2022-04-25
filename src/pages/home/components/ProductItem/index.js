import React from 'react'
import styles from './styles.module.scss';

const ProductItem = ({ name, image }) => {
  
  return (
    <div className={styles['card']}>
      <div className={styles['container']}>
        <div className={styles['image']}>
          <img src={image} alt={name}  />
        </div>
        <div>{name}</div>
      </div>
      <button className={styles['buttonDetail']}>Go To Detail</button>
    </div>
  )
}

export default ProductItem;