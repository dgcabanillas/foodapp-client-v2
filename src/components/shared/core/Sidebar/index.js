import { useContext } from 'react';
import AppContext from 'src/components/context/app/app.context';
import { classNames } from 'src/components/utils/classNames';
import BookmarkIcon from '../../icons/BookmarkIcon';
import DocumentIcon from '../../icons/DocumentIcon';
import FeedIcon from '../../icons/FeedIcon';
import HomeIcon from '../../icons/HomeIcon';
import MailIcon from '../../icons/MailIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import CloseSidebarButton from './components/CloseSidebarButton';
import FoodHubLogo from './components/FoodHubLogo';
import SidebarItem from './components/SidebarItem';
import AuthButton from './components/AuthButton';
import styles from './styles.module.scss';
import { useRouter } from 'src/components/hooks/useRouter';

const Sidebar = () => {
  const { sidebarIsOpen } = useContext(AppContext);
  const { gotoHome } = useRouter();

  return (
    <div className={classNames({
      [styles['Sidebar']]: true,
      [styles['Sidebar--open']]: sidebarIsOpen
    })}>
      { sidebarIsOpen && <CloseSidebarButton /> }
      <div className={styles['Sidebar__content']}>
        <FoodHubLogo />
        <ul className={styles['Sidebar__list']}>
          <SidebarItem
            text="Inicio"
            Icon={<HomeIcon />}
            index="home"
            handleClick={() => gotoHome()}
          />
          <SidebarItem
            text="Explorar"
            Icon={<FeedIcon />}
            index="explore"
          />
          <SidebarItem
            text="Favoritos"
            Icon={<BookmarkIcon />}
            index="favourites"
          />
          <SidebarItem
            text="Ordenes"
            Icon={<DocumentIcon />}
            index="orders"
          />
          <SidebarItem
            counter={0}
            text="Mensajes"
            Icon={<MailIcon />}
            index="messages"
          />
          <SidebarItem
            text="Configuración"
            Icon={<SettingsIcon />}
            index="settings"
          />
        </ul>
        <AuthButton />
      </div>
    </div>
  )
}

export default Sidebar;