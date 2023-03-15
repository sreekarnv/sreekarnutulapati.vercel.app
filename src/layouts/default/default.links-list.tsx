import { Component, For } from 'solid-js';
import Link from '../../components/link';

import ArrowUpRightIcon from '../../icons/arrow-up-right';
import HomeOutline from '../../icons/home-outline';
import InfoCircleOutline from '../../icons/info-circle-outline';
import MailOutline from '../../icons/mail-outline';
import ViewGridOutline from '../../icons/view-grid-outline';

interface DefaultLinksListProps {
	ulClass?: string;
	pathname?: string;
	disableTextIcon?: boolean;
}

const links = [
	{
		text: 'Home',
		href: '/',
		textIcon: <HomeOutline height={24} width={24} />,
	},
	{
		text: 'About Me',
		href: '/about',
		textIcon: <InfoCircleOutline height={24} width={24} />,
	},
	{
		text: 'Work',
		href: '/work',
		textIcon: <ViewGridOutline height={24} width={24} />,
	},
	{
		text: 'Contact',
		href: '/contact',
		textIcon: <MailOutline height={24} width={24} />,
	},
];

const DefaultLinksList: Component<DefaultLinksListProps> = (props) => {
	return (
		<>
			<ul class={props.ulClass}>
				<For each={links}>
					{(link) => (
						<Link
							icon={<ArrowUpRightIcon height={24} width={24} />}
							isActive={props.pathname === link.href}
							{...link}
							textIcon={props.disableTextIcon ? null : link.textIcon}
						/>
					)}
				</For>
			</ul>
		</>
	);
};

export default DefaultLinksList;
