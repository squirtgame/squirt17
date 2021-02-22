import React, {Component, Fragment} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import withContracts from "../site-components/hocs/withContracts";
import withMetamaskAccount from "../components/hocs/withMetamaskAccount";
import {turnOffDangerMode, turnOnDangerMode, updateTemplateContract} from "../redux/actions";
import {parseErrorString} from "../services/utils";
import AlertOptionPane from "../components/Alert/AlertOptionPane";
import Alerts from "../site-components/Alerts";
import Dispatcher from "../services/Dispatcher";
import GuessForm from "../site-components/containers/GuessForm";
import {GameDetails} from "../site-components/containers/GameDetails";
import {AdSidebar} from "../site-components/images/AdSidebar";
import {
    LoginMessage,
    TransactionMessage
} from "../site-components/messages";
import settings from "../settings";
import {StartNewGame} from "../site-components/containers/StartNewGame";
import {Space} from "../components/Space";

class Index extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    constructor(props){
        super();

        this.state = {
            isHandlingTransaction: false,
            isWaitingForRandomNumber: false
        };

        this.defaultGuess = (props.templateContract.lowValue + (
            props.templateContract.highValue - props.templateContract.lowValue - 1
        ) / 2).toFixed(0);

        this.dangerModeStartTime = settings.dangerModeStartTime.minutes * 60000 +
            settings.dangerModeStartTime.seconds * 1000;
    }

    componentWillMount(){
        this.props.addContractUpdateTimer();
    }

    componentWillUnmount(){
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    timerIsStopped = () => {
        return Date.now() > this.props.templateContract.gameEndTime;
    };

    handleGuess = async (guess) => {
        return this.props.templateContractRequest.makeGuess({
            guessedNumber: guess,
            walletAddress: this.props.metamaskAccount.address
        }).then((transaction) => this.handleTransaction(transaction, parseInt(guess, 10)))
            .then(() => this.props.dispatch(turnOffDangerMode()))
            .catch(this.handleTransactionError);
    };

    handleTransactionError = (err) => {
        console.error(err);

        AlertOptionPane.showErrorAlert({
            title: "Transaction Error",
            message: parseErrorString(err)
        });
    };

    handleTransaction = async (transaction, guess) => {
        return this.props.templateContractRequest.fetch()
            .then(templateContract => {
                this.props.dispatch(updateTemplateContract(templateContract));

                Alerts.showGuessResults(transaction, this.props.templateContract, guess);

                if(this.gameIsOver()){
                    return this.handleGameOver();
                }
            });
    };

    handleGameOver = async () => {
        return Dispatcher.updateContracts(this.props.dispatch);
    };

    gameIsOver = () => {
        const {templateContract} = this.props;

        return (
            templateContract.nextGuess > 1 &&
            templateContract.gameEndTime > 0 &&
            Date.now() > templateContract.gameEndTime
        ) || templateContract.guessedCorrectly || !templateContract.randomNumberRetrieved ||
            this.state.isWaitingForRandomNumber;
    };

    calcDefaultGuess = () => {
        return (this.props.templateContract.lowValue + (
            this.props.templateContract.highValue - this.props.templateContract.lowValue - 1
        ) / 2).toFixed(0);
    };

    waitForRandomNumber = async () => new Promise(resolve => {
        let tries = 0;
        let maxTries = settings.randomNumberWaitTime.seconds;
        this.timer = setInterval(() => {
            tries++;
            Dispatcher.updateContracts(this.props.dispatch);

            if(this.props.templateContract.randomNumberRetrieved || tries >= maxTries){
                this.setState({isWaitingForRandomNumber: false});
                resolve(clearInterval(this.timer));
            }
        }, 1000);
    });


    handleStartNewGame = () => {
        this.props.dispatch(turnOffDangerMode());
        this.setState({isHandlingTransaction: true}, () => {
            const startNewGameMethod = (!this.props.templateContract.randomNumberRetrieved)
                ? this.props.templateContractRequest.startNewGameError
                : this.props.templateContractRequest.startNewGame;

            return startNewGameMethod(this.props.metamaskAccount.address)
                .then(transaction => {
                    this.setState({isWaitingForRandomNumber: true});
                    return Dispatcher.updateContracts(this.props.dispatch).then(() => transaction);
                }).then(transaction => this.waitForRandomNumber().then(() => transaction))
                .then(transaction => (this.props.templateContract.randomNumberRetrieved)
                    ? Alerts.showNewGameCreated(transaction)
                    : Alerts.showOraclizeError(transaction))
                .catch(this.handleTransactionError)
                .finally(() => this.setState({isHandlingTransaction: false}));
        });
    };

    render () {
        const {factoryContract, templateContract, metamaskAccount} = this.props;
        const isLoggedIntoMetamask = Object.keys(metamaskAccount).length > 0;
        return (
        <Page header={<Space danger={this.props.dangerMode}/>} contentClass="full-width">
                                
                <br />
                <br />



			   <div align="left">
                <p>HPB17 Was developed by jeffpUK (jeff@hpb17.com) and jayden (jayden@hpb17.com)- </p>

                <br />
                <br />

                <p>You can also find us both on Telegram (@jeffpUK | @jxyden) usually frequenting the HPB_Global Telegram group</p>

                <br />
























                </div>
            </Page>
        )
    }
}

// export default connect(Contact.mapStateToProps)(Contact);

export default compose(
    withMetamaskAccount,
    withContracts,
    connect(Contact.mapStateToProps)
)(Contact);
