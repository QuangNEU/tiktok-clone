import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';

import Button from '../../../Buttons';
import Menu from '../../../Popper/Menu';


const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'VietNam'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard Shortcut'
    }
]
const currentUser = false;

const cx = classNames.bind(styles);

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/@'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/coin'
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        seperate: true
    }
]
function Header() {


    const handelMenuChange = (menuItem) => {
        console.log(menuItem)
    }
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img className={cx('logo-icon')} src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tns/article/static/build/_assets/logo-dark-d62c3812fbf2f687daa9.svg" alt="TikTok"></img>
                <img className={cx('logo-text')} src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tns/article/static/build/_assets/logo-text-dark-d795c282c11fef16f8fa.svg" alt="TikTok"></img>
            </div>
            <Search></Search>
            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content='Message' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                            </button>
                        </Tippy>

                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )
                }
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handelMenuChange}
                >
                    {currentUser ? (
                        <img
                            src='https://p16-common-sign-useastred.tiktokcdn-eu.com/tos-useast2a-avt-0068-giso/99b711049098106341cf5c17a541ece6~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d82ab588&x-expires=1756951200&x-signature=tQTgL9q9QN3CO6z9WNv2VsaTtCM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my'
                            className={cx('user-avatar')} alt='Nguyen van a'></img>
                    ) : (
                        <button className={cx("more-icon")}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}

                </Menu>
            </div>
        </div >
    </header >
}

export default Header; 