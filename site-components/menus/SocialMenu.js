import React from 'react';
import {joinClassNames} from "../../services/className";
import {Github, Medium, Reddit, Telegram, Twitter} from "../../components/icons";

export const SocialMenu = ({className = '', ...props}) => {
    return (
        <nav className={joinClassNames("social-menu round", className)} {...props}>
            <a target="_blank" href="https://github.com/hpb17"><Github/></a>
            <a target="_blank" href="https://twitter.com/hpb17"><Twitter/></a>
            <a target="_blank" href="https://reddit.com/user/hpb17"><Reddit/></a>
        </nav>
    );
};