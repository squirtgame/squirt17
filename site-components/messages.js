import React from "react";
import {Message} from "../components/containers/Message";
import settings from "../settings";

export const LoginMessage = () => {
    return (
        <Message
            className="message-secondary"
            heading="We were unable to detect your Metamask account or similar web3 browser"
        >
            <p>Please login to Metamask/Cipher/Trust or similar in order to play.</p>
        </Message>
    );
};

export const RandomNumberWaitMessage = () => (
    <div className="wrapper-4">
        <Message
            className="message-info text-left mb-15"
            heading="Waiting for contract to update."
            list={[`This could take up to ${settings.randomNumberWaitTime.seconds} seconds`]}
        />
    </div>
);

export const OraclizeErrorMessage = () => {
    return (
        <div className="wrapper-4">
            <Message
                className="message-danger text-left mb-15"
                heading="HPB Error"
                list={[
                    "Unfortunately, we were unable to retrieve a random number from HPB " +
                    "to start a new game.",
                    "Please click on Start New Game to generate a new game and try again."
                ]}
            />
        </div>
    );
};

export const TransactionMessage = (props) => {
    return (
        <div className="wrapper-4">
            <Message
                className="mt-15 message-info text-left"
                heading="Waiting for transaction confirmation"
                list={[
                    "Please allow up to 60 seconds for the transaction to " +
                    "be processed and written to the HPB blockchain."
                ]}
                {...props}
            />
        </div>
    );
};