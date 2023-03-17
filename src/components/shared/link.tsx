import type { Component } from 'solid-js';
import '@/scss/components/shared/link.scss';
import PlayOutlineIcon from '@/icons/play-outline';
import GithubIcon from '@/icons/github';
import ArrowUpRightIcon from '@/icons/arrow-up-right';
import LinkedIn from '@/icons/linkedin';
import HomeOutline from '@/icons/home-outline';
import InfoCircleOutline from '@/icons/info-circle-outline';
import MailOutline from '@/icons/mail-outline';
import ViewGridOutline from '@/icons/view-grid-outline';

const icons = {
  play: <PlayOutlineIcon />,
  github: <GithubIcon />,
  'arrow-up-right': <ArrowUpRightIcon />,
  chat: <PlayOutlineIcon />,
  linkedin: <LinkedIn />,
  home: <HomeOutline />,
  'info-circle': <InfoCircleOutline />,
  mail: <MailOutline />,
  'view-grid': <ViewGridOutline />,
};

interface LinkProps {
  href: string;
  text: string;
  icon?: keyof typeof icons;
  textIcon?: keyof typeof icons;
  onClick?: () => void;
  target?: string;
  isActive?: boolean;
}

const Link: Component<LinkProps> = (props) => {
  return (
    <>
      <li>
        <a
          class={['link', props.isActive ? 'link__active' : ''].join(' ')}
          href={props.href}
          target={props.target}
        >
          <span class="link__content">
            <span>{props.textIcon ? icons[props.textIcon] : null} </span>
            <span class="link__text">{props.text}</span>
          </span>
          <span>{props.icon ? icons[props.icon] : undefined}</span>
        </a>
      </li>
    </>
  );
};

export default Link;
