import React, {Fragment} from "react";
import AlertOptionPane from "../components/Alert/AlertOptionPane";
import settings from "../settings";

const TransactionHash = ({transaction}) => {
    return (
        <Fragment>
            <p className="mb-0">Transaction Hash:</p>
            <p className="lighter"><a
                target="_blank"
                style={{wordBreak: "break-all"}}
                href={`${settings.etherscanUrl}/tx/${transaction.transactionHash}`
                }>{transaction.transactionHash}</a></p>
        </Fragment>
    );
};

class Alerts {
    static showOraclizeError(transaction){
        return AlertOptionPane.showErrorAlert({
            title: "Oraclize Error",
            titleIcon: null,
            htmlMessage: (
                <div>
                    <p>
                        Unfortunately, we were unable to retrieve a random number from the HPB HRNG
                        to start a new game.
                    </p>
                    <TransactionHash transaction={transaction}/>
                </div>
            )
        });
    }

    static showNewGameCreated(transaction){
        return AlertOptionPane.showSuccessAlert({
            title: "You have started a new game!",
            titleIcon: null,
            htmlMessage: (
                <div>
                    <p>A new game has now been started</p>
                    <TransactionHash transaction={transaction}/>
                </div>
            )
        });
    }

    static showGuessResults(transaction, templateContract){
        // if(templateContract.correctNumber === guess){
        //     return AlertOptionPane.showSuccessAlert({
        //         title: "You guessed correctly!",
        //         titleIcon: null,
        //         htmlMessage: (
        //             <div>
        //                 <p>
        //                     Congratulations! You guessed correctly! Please click on the "Start New Game" button
        //                     which will initiate the transfer of Eth from the smart contract to your wallet.
        //                 </p>
        //                 <TransactionHash transaction={transaction}/>
        //             </div>
        //         )
        //     });
        // }

        return AlertOptionPane.showSuccessAlert({
            title: "Transaction Completed",
            titleIcon: null,
            htmlMessage: (
                <div>
                    {(templateContract.nextGuess < 18)
                        ? (
                            <Fragment>
                                {/* <p>Unlucky! It looks like you didn’t guess the number correctly.</p> */}
                                <p>
                                    If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the timer will reset and the game will be available for another guess, but don’t sweat it... Remember that if the countdown timer reaches 00:00 and nobody else makes a guess, you’ll win all the HPB in the contract anyway!
                                </p>
                            </Fragment>
                        ) : (
                            <Fragment>
                                {/* <p>Unlucky! It looks like you didn’t guess the number correctly.</p> */}
                                <p>
                                    If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the game will have ended without a winner. If you would be so kind to click on the "Start New Game" button and generate a new HPB17 game contract, we will automatically refund you your HPB! We hope you enjoyed playing, and hope you’ll join us for the next game. Remember the first guess of every game is free!
                                </p>
                            </Fragment>
                        )}
                    <TransactionHash transaction={transaction}/>
                </div>
            )
        })
    }
}

export default Alerts;