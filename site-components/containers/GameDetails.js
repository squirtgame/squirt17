import React, {Fragment} from "react";
import {Address} from "../Address";
import HideFragment from "../../components/containers/HideFragment";
import Counter from "../../external-components/react-flip-counter/index";

export const GameDetails = ({
    nextGuess,
    lowValue,
    highValue,
    metamaskAddress,
    costOfNextGuess,
    lastGuessAddress,
    counterIsStopped,
    onCounterStop = () => {},
    gameEndTime,
    hasNotified,
    notify,
    notifyAt,
    balance
}) => {
    return (
        <Fragment>
            <h3>
                The correct number is between {lowValue} and {highValue}
            </h3>
            <h3>
                The next guess will be guess {nextGuess} <p>
                cost of next guess: {
                (costOfNextGuess === 0)
                    ? "FREE!"
                    : `${costOfNextGuess} HPB`
            }
            </p>
            </h3>
            <h3>
                The last HPB wallet address to make a guess was: <p>
                {(lastGuessAddress === "0x0000000000000000000000000000000000000000")
                    ? (
                        <span>Nobody has made a guess yet!</span>
                    ) : (metamaskAddress === lastGuessAddress) ? (
                        <span>YOU, my friend!</span>
                    ) : (
                        <Address address={lastGuessAddress}/>
                    )}
            </p>
            </h3>
            <div className="divider-2">
                <HideFragment>
                    <Counter
                        isStopped={counterIsStopped}
                        onStop={onCounterStop}
                        stop={new Date(gameEndTime)}
                        hasNotified={hasNotified}
                        notifyAt={notifyAt}
                        notify={notify}
                    />
                </HideFragment>
            </div>
            <h3>
                Amount of HPB currently stored in this contract: {balance}
            </h3>
            <h3>
                Remember, even if you guess incorrectly, you will still win the HPB if the
                countdown timer reaches zero!
            </h3>
        </Fragment>
    );
};