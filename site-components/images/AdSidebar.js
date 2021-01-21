import React, {Fragment} from "react";
import {AdContainer} from "../containers/AdContainer";

export const AdSidebar = () => {
    return (
        <Fragment>
            <AdContainer>
                <a target="_blank" href="https://t.me/HPBglobal">
                    <img src="/static/images/ads/hpbtelegram.png"/>
                </a>
            </AdContainer>
			
			<AdContainer>
                <a target="_blank" href="https://hpbcentral.com">
                    <img src="/static/images/ads/HPBcentral.png"/>
                </a>
            </AdContainer>
			
			<AdContainer>
                <a target="_blank" href="https://waxlyrical.medium.com">
                    <img src="/static/images/ads/waxlyrical.png"/>
                </a>
            </AdContainer>
			
			<AdContainer>
                <a target="_blank" href="https://www.gate.io/en/coininfo/HPB">
                    <img src="/static/images/ads/gateio.png"/>
                </a>
            </AdContainer>
            <AdContainer>
                <a target="_blank" href="https://trade.kucoin.com/HPB-BTC">
                    <img src="/static/images/ads/kucoin.png"/>
                </a>
            </AdContainer>
            <AdContainer>
                <a target="_blank" href="https://mytrade.org/">
                    <img src="/static/images/ads/mytrade.png"/>
                </a>
            </AdContainer>
        </Fragment>
    );
};