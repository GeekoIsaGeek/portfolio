import {
	SiReact as React,
	SiCss3 as Css,
	SiHtml5 as Html,
	SiFirebase as Firebase,
	SiSwiper as Swiper,
	SiStyledcomponents as StyledComponents,
	SiExpress as Express,
	SiMongodb as Mongo,
	SiRedux as Redux,
} from 'react-icons/si';
import { IoLogoJavascript as Js, IoLogoSass as Sass, IoLogoNodejs as Node } from 'react-icons/io';

const List = [
	{
		name: 'Real Estate',
		techs: [<Mongo />, <Express />, <React />, <Node />, <Sass />],
		demo: 'https://real-estate-drainer.vercel.app/',
		code: 'https://github.com/drainerr/real-estate-client',
		image: require('../../images/projects/Real-Estate.png'),
	},
	{
		name: 'Image Gallery',
		techs: [<React />, <Firebase />],
		demo: 'https://image-gallery-olive.vercel.app/',
		code: 'https://github.com/drainerr/Image-Gallery',
		image: require('../../images/projects/Image-gallery.webp'),
	},
	{
		name: 'Aloha - Online shop',
		techs: [<React />, <Firebase />, <Swiper />],
		demo: 'https://aloha-two.vercel.app/',
		code: 'https://github.com/drainerr/Aloha',
		image: require('../../images/projects/Aloha.webp'),
	},
	{
		name: 'Envo - Personal Dictionary',
		techs: [<React />, <Firebase />, <Redux />, <Sass />],
		demo: 'https://envo-zeta.vercel.app/',
		code: 'https://github.com/drainerr/Envo',
		image: require('../../images/projects/Envo.webp'),
	},
	{
		name: 'Virtual Keyboard',
		techs: [<Html />, <Css />, <Js />],
		demo: 'https://drainerr.github.io/Virtual-Keyboard/',
		code: 'https://github.com/drainerr/Virtual-Keyboard/',
		image: require('../../images/projects/virtual-keyboard.webp'),
	},
	{
		name: 'Country Quizz',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Country-Quizz/',
		code: 'https://github.com/drainerr/Country-Quizz/tree/main/src',
		image: require('../../images/projects/Country-Quizz.webp'),
	},
	{
		name: 'Pomodoro (25+5 Clock)',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/25-5-Clock/',
		code: 'https://github.com/drainerr/25-5-Clock/',
		image: require('../../images/projects/Pomodoro.webp'),
	},
];

export default List;
