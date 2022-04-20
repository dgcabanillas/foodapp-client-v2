import React, { useContext, useEffect } from 'react';
import AppContext from 'src/components/context/app/app.context';
import { useWindowSize } from 'src/components/hooks/useWindowSize';
import ShoppingCartButton from './components/CartButton';
import CloseButton from './components/CloseButton';
import MenuButton from './components/MenuButton';
import MenuList from './components/MenuList';
import styles from './styles.module.scss';

const Header = () => {
  const { width } = useWindowSize();
  const { headerMenuIsOpen, closeHeaderMenu } = useContext(AppContext);

  useEffect(() => {
    if( width >= 992 ) {
      closeHeaderMenu();
    }
  }, [width])

  return (
    <header className={styles['Header']}>
      { 
        headerMenuIsOpen ? (
          <>
            <div className={styles['Header__menu']}>
              <CloseButton />
            </div>
            <MenuList />
          </>
        ) : (
          <>
            <div className={styles['Header__menu']}>
              <MenuButton />
              { width >= 992 && <MenuList /> }
            </div>
            <div className={styles['Header__apps']}>
              <ShoppingCartButton />
            </div>
          </>
        )
      }
    </header>
  );
}

export default Header;