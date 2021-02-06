import React, {Component} from "react";
import MainMenu from "../menus/MainMenu";
import {Logo} from "../images/Logo";

class Header extends Component {
    render(){
        const {
            children,
            ...props
        } = this.props;

        return (
            <header {...props}>
                <Logo/>
				
				<a target="_blank" href="https://t.me/hpb17bot"><img src="/static/images/favicon/telegram_bot.png" alt="Metamask" width="480" height="60"/>      </a>
                {children}
                <MainMenu/>
            </header>
        );
    }
}

export default Header;