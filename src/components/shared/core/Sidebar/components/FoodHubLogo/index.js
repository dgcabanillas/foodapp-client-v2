import React, { useContext } from 'react';
import { classNames } from 'src/components/utils/classNames';
import AppContext from 'src/components/context/app/app.context';
import FoodLogo from 'src/components/shared/icons/FoodLogo';
import styles from './styles.module.scss';

const FoodHubLogo = () => {
  const { sidebarIsOpen, openSidebar } = useContext(AppContext);

  return (
    <div 
      onClick={openSidebar}
      className={classNames({
        [styles['FoodHubLogo']]: true,
        [styles['FoodHubLogo--open']]: sidebarIsOpen
      })}
    >
      <div className={styles['FoodHubLogo__logo']}>
        <FoodLogo width={42} height={42} strokeWidth={2}/>
      </div>
      <span className={styles['FoodHubLogo__title']}>FOODHUB</span>
    </div>
  )
}

export default FoodHubLogo;