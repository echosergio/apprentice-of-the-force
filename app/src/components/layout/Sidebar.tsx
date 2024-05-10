import classNames from 'classnames';
import { FiSidebar } from 'react-icons/fi';
import { IoLogoGithub, IoLogoGitlab, IoLogoLinkedin } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Chat, useChats } from '../../../state/chatStore';
import { useTheme } from '../../context/ThemeContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import ChatCard from '../../shared/chat-card/ChatCard';
import { useSidebar, useSidebarActions } from '../../state/sidebarStore';
import { BaseComponentProps } from '../../types/base-component.types';
import { Button } from '../ui/button';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarToggle,
} from '../ui/sidebar';
import { ThemeToggleButton } from '../ui/theme-toggle-button';
import styles from './Sidebar.module.scss';

function Sidebar({ className }: BaseComponentProps) {
  const windowSize = useWindowSize();
  const navigate = useNavigate();

  const chats = useChats();

  const { theme, setTheme } = useTheme();
  const { toggled } = useSidebar();
  const { setToggled } = useSidebarActions();

  return (
    <>
      <SidebarComponent
        className={classNames(styles['sidebar'], className)}
        collapsed={windowSize.width < 992}
        toggled={toggled}
        onToggle={setToggled}
      >
        <SidebarHeader className={styles['sidebar-header']}>
          <Button
            className={styles['new-chat']}
            variant="outline-primary"
            onClick={() => {
              navigate(`/chat/${uuidv4()}`);
              setToggled(false);
            }}
          >
            + New chat
          </Button>
          <Button
            className={styles['home']}
            variant="outline-primary"
            onClick={() => {
              navigate('/');
              setToggled(false);
            }}
          >
            <RiHomeLine />
          </Button>
        </SidebarHeader>
        <SidebarContent>
          {chats.length > 0 &&
            chats
              .sort(function (a, b) {
                return b.updatedAt.getTime() - a.updatedAt.getTime();
              })
              .map((chat: Chat) => (
                <ChatCard
                  key={chat.id}
                  title={
                    chat.messages.length > 0
                      ? chat.messages[chat.messages.length - 1].text
                      : ''
                  }
                  caption={chat.updatedAt.toLocaleTimeString()}
                  onClick={() => {
                    navigate(`/chat/${chat.id}`);
                    setToggled(false);
                  }}
                />
              ))}
        </SidebarContent>
        <SidebarFooter>
          <div className={styles['options']}>
            <div className={styles['options__social']}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/echosergio"
              >
                <IoLogoGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gitlab.com/echosergio"
              >
                <IoLogoGitlab />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/echosergio"
              >
                <IoLogoLinkedin />
              </a>
            </div>
            <ThemeToggleButton
              checked={theme === 'dark'}
              onToggle={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            />
          </div>
        </SidebarFooter>
      </SidebarComponent>
      {windowSize.width < 992 && (
        <SidebarToggle
          onClick={() => {
            setToggled(!toggled);
          }}
        >
          <FiSidebar />
        </SidebarToggle>
      )}
    </>
  );
}

export default Sidebar;
