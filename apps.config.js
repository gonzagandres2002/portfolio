import { displayTerminal } from './components/apps/terminal';
import { displayChrome } from './components/apps/chrome';
import { displayGedit } from './components/apps/gedit';
import { displayAboutAndres } from './components/apps/andres';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayChrome,
    },
    {
        id: "about",
        title: "About Andres",
        icon: './themes/Yaru/system/user-home.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayAboutAndres,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

export default apps;