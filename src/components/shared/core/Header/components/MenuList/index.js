import React from 'react'
import { classNames } from 'src/components/utils/classNames';
import MenuItemAddress from '../MenuItemAddress';
import styles from './styles.module.scss';

const MenuList = () => {
  return (
    <div className={classNames({
      [styles['MenuList']]: true
    })}>
      <div className={styles['MenuList__content']}>
        <MenuItemAddress />
      </div>
    </div>
  )
}

export default MenuList;