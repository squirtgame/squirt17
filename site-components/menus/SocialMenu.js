import React from 'react';
import {joinClassNames} from "../../services/className";
import {Github, Medium, Reddit, Telegram, Twitter} from "../../components/icons";

export const SocialMenu = ({className = '', ...props}) => {
    return (
        <nav className={joinClassNames("social-menu round", className)} {...props}>
            <a target="_blank" href="https://t.me/hpb17bot"><Telegram/></a>
            <a target="_blank" href="https://github.com/hpb17/hpb17/"><Github/></a>
            <a target="_blank" href="https://twitter.com/HPB_Global"><Twitter/></a>
            <a target="_blank" href="https://www.reddit.com/r/hpb17/"><Reddit/></a>
            <a target="_blank" href="https://waxlyrical.medium.com/hpb17-the-hottest-new-fomo-game-for-blockchain-8d4298d04736"><Medium/></a>
        </nav>
    );
};

