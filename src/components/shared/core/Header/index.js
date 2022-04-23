import React from 'react'
import { Link } from "react-router-dom"; 
import styles from './styles.module.scss';





const Header = () => {

  const isLogged= false

  return (
    <header className={styles['gf-header']}>
      {
        isLogged
          ?     <Link   to='/auth/logout'>
          Logout
         </Link> 
         :<Link   to='/auth/login'>
         Login
        </Link> 

      }
    </header>
  )
}

export default Header;