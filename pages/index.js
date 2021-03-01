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
import {Address} from "../site-components/Address";

import {Moment} from "../components/Moment";
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
	
	
	
	
	    renderPreviousContractInformation = (previousContract) => {
        return (
            <table className="list-table">
                <tbody>
                    <tr>
                        <td>Contract address:</td>
                        <td><a target="_blank"
                            href={`${settings.etherscanUrl}/address/${previousContract.address}`
                            }><Address address={previousContract.address}/></a></td>
                    </tr>
                    <tr>
                        <td>Winning Number:</td>
                        <td>{previousContract.winningNumber}</td>
                    </tr>
                    <tr>
                        <td>Last Guess Address:</td>
                        <td><Address address={previousContract.lastGuessAddress}/></td>
                    </tr>
                    <tr>
                        <td>Game End Time:</td>
                        <td><Moment unixTime={previousContract.gameEndTime}/></td>
                    </tr>
                </tbody>
            </table>
        );
    };
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

    render () {
        const {factoryContract, templateContract, metamaskAccount} = this.props;
        const isLoggedIntoMetamask = Object.keys(metamaskAccount).length > 0;
		const {previousContract} = this.props;

        return (
            <Page header={<Space danger={this.props.dangerMode}/>} sidebar={<AdSidebar/>}>
                <div className="glass container bg-color-white br-5">
                    <h2 className="display-6">
                        <a href={`${settings.etherscanUrl}/address/${templateContract.address}`}
                            target="_blank">
                            Game Number {factoryContract.count}
                        </a>
                    </h2>
                    {(this.gameIsOver()) ? (
                        <StartNewGame
                            isWaitingForRandomNumber={this.state.isWaitingForRandomNumber}
                            oraclizeError={!this.props.templateContract.randomNumberRetrieved}
                            startingGame={this.state.isHandlingTransaction}
                            metamaskAddress={metamaskAccount.address}
                            gameWinner={templateContract.lastGuessAddress}
                            onClick={this.handleStartNewGame}
                        />
                    ) : (
                        <Fragment>
                            <GameDetails
                                {...templateContract}
                                metamaskAddress={metamaskAccount.address}
                                counterIsStopped={this.timerIsStopped()}
                                onCounterStop={this.handleGameOver}
                                hasNotified={this.props.dangerMode || this.timerIsStopped()}
                                notifyAt={this.dangerModeStartTime}
                                notify={() => this.props.dispatch(turnOnDangerMode())}
                            />
                            {(!isLoggedIntoMetamask) ? (
                                <div className="wrapper-4">
                                    <LoginMessage/>
                                </div>
                            ) : (
                                <GuessForm
                                    defaultGuess = {this.calcDefaultGuess()}
                                    onGuess={(guess) => this.handleGuess(guess)}
                                    {...templateContract}
                                />
                            )}
                        </Fragment>
                    )}
                    {(this.state.isHandlingTransaction && !this.state.isWaitingForRandomNumber) && (
                        <TransactionMessage/>
                    )}
                
								<div className="glass container bg-color-white br-5">
                    <h1 className="normal display-6">Previous Game</h1>
                    {(Object.keys(previousContract).length === 0)
                        ? <p>No previous game exists</p>
                        : this.renderPreviousContractInformation(previousContract)}
						
						<br />
						<br />
						<br />
				<p>HPB17 Master Contract can be verified here: 
				<a href="https://hpbscan.org/tx/0x2732023fbb28bcf347d9bdaf5d6b3cadef9da577" target="_blank">
				<h2><b>0x2732023fbb28bcf347d9bdaf5d6b3cadef9da577</b></h2></a></p>
                         
				
				<p>HPB17 Factory Contract can be verified here: 
				<a href="https://hpbscan.org/tx/0x68edf077c01edc233e519105a85bc29ef7ba8734" target="_blank">
				<h2><b>0x68edf077c01edc233e519105a85bc29ef7ba8734</b></h2></a></p>
				<br />
                </div>
				
				</div>
				

				
				
				
				<div className="glass container bg-color-white br-5">
                    <h1 className="normal display-6">Game Details</h1>


				
				
				
				<div align="left">

				<p>HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000</p>

                <p>If you guess the hidden number, you win the entire pot of HPB stored in the game!</p>

		<p>But don't worry if you guess incorrectly. As soon as you make a guess, a countdown timer starts. It begins counting down from 17 hours, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins 17 HPB!</p>

                <p>But what happens if someone else makes a guess? Well that person immediately becomes the "last player to guess" and the countdown timer resets to 17 hours - Once again, if the timer reaches zero then that "last player to guess" wins 17 HPB!</p>

                <p>After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the "guessing range" shrinks after each subsequent guess.</p>

                <p>The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases.</p>

                <br />

                <br />

                <p>If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!</p>

                <br />
					
									
                </div>
				</div>
				
				
				
			                <div className="glass container bg-color-white br-5">
                    <h1 className="normal display-6">FAQ</h1>
                                
                <br />
                <br />

                <p>The chances of actually guessing the correct number obviously improves after each guess. 
		Now because it gets easier to guess the number, the cost of the guess also increases. The first guess costs
		1.01 HPB, the second guess costs 1.02 HPB, the third guess costs 1.03 HPB, etc, all the way up to the final (17th) 
		guess, which costs 1.17 HPB</p>

		
				
<br />
<br />
                <br />

                <p>If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, 
the amount of HPB in the contract that is up for grabs gets bigger and bigger!</p>

                <br />

<h3></h3>

<dl class="faq">
  <dt>
    <button aria-expanded="false" aria-controls="faq1_desc">
      How is the number to guess generated?
    </button>
  </dt>
  <dd>
    <p id="faq1_desc" class="desc">
We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game.
- Please see <b><a href="https://www.hpb.io/post-423" target="_blank">HPB RNG Q&A</a></b> for more information.

    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq2_desc">
      What do I need to be able to play?
    </button>
  </dt>
  <dd>
    <p id="faq2_desc" class="desc">
               <p>All that is required is a <b><a href="https://www.hpb.io/wallet" target="_blank">HPB Wallet</a></b>, 
                some <b><a href="https://www.gate.io/trade/HPB_USDT" target="_blank">HPB Coin</a></b>
                and <b><a href="https://metamask.io/" target="_blank">Metamask</a></b></p>
    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq3_desc">
      What if I make a guess at the same time as someone else?
    </button>
  </dt>
  <dd>
    <p id="faq3_desc" class="desc">
All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other
                    guess will be rejected. Please check your transaction hash or click on the game number header
                    on the home page, which will show you the game transactions. If you were unsuccessful, you will 
                    see the transaction will have been reverted. 
    </p>
  </dd>

    <dt>
    <button aria-expanded="false" aria-controls="faq5_desc">
      How do I setup Metamask to work with the HPB blockchain?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
When you open Metamask, you'll need to switch from the default "Ethereum Main-net" network option, to the "Custom RPC" option. At this point, you'll need to supply the
following information: "Network Name" = HPB Network | "New RPC URL" = https://node.hpb.io | "Chain ID" = 269 | "Currency Symbol" = HPB | "Block Explorer URL" = https://hpbscan.org/
             
    </p>
<img src="/static/images/ads/metamask.png" alt="Metamask" width="900" height="600"/> 
   <br />
	<br />
	
  </dd>
    <dt>
    <button aria-expanded="false" aria-controls="faq6_desc">
I'm receiving a Metamask error?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend
                    completely cancelling/rejecting the transaction in Metamask, and try guessing again.
    </p>
  </dd>
     <dt>
    <button aria-expanded="false" aria-controls="faq8_desc">
Can I interact with the smart contract game directly?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
YES! And that is the beauty of HPB and the decentralized blockchain! So for example, you could launch  
<b><a href="https://remix.hpb.io.io/" target="_blank">REMIX</a></b> and then copying the source code of the 
contract into the code window, then switch to the "Run" tab, and pasting in
the current game contract address into the "At Address" field, then clicking on the blue button, which will launch all of 
the public function calls for the contract. You can retrieve the source code from our gitHub repository, and the current 
game contract can be retrieved from HPBScan, by clicking on the "current" game heading on the main game page.
    </p>
  </dd>
      <dt>
    <button aria-expanded="false" aria-controls="faq9_desc">
Can I play the game from my mobile phone?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Sure! Simply install the Metamask app, then setup your network in settings to point to the HPB network using the following 
information - following information: "Network Name" = HPB Network | "New RPC URL" = https://node.hpb.io | "Chain ID" = 0x10D | "Currency Symbol" = HPB | "Block Explorer URL" = https://explorer.myhpbwallet.com/
 
 Once you have done this you can switch to browser mode in the app and navigate to the website.
    </p>
  </dd>
        <dt>
    <button aria-expanded="false" aria-controls="faq10_desc">
Can I use the Edge Browser on my PC?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Yes, althought you will still need to setup Metamask. You can install it by going into "Extensions" and then allowing other third party extensions.
    </p>
  </dd>
          <dt>
    <button aria-expanded="false" aria-controls="faq11_desc">
Do you have real-time support?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Visit the community on the <b><a href=" https://t.me/HPBglobal" target="_blank">HPB Global Telegram Chat</a></b> and stay in touch with a great community!
               
    </p>
  </dd>
	 
<dt>
    <button aria-expanded="false" aria-controls="faq11_desc">
How do I play from the telegram bot??
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
Visit the HPB17 bot at: <b><a href=" https://t.me/PlayHPB17bot" target="_blank">HPB17 Telegram bot</a></b> and type in /help for more details.
               
    </p>
  </dd>
  
  
  
</dl>


                </div>			
				
				
				
				<div align="left">
				<br />
				<br />
				<br />
                <p>HPB17 Was developed by jeffpUK (jeff@hpb17.com) and jayden (jayden@hpb17.com)- </p>

                <br />

                <p>You can also find us both on Telegram (@jeffpUK | @jxyden) usually frequenting the HPB_Global Telegram group</p>

                <br />

                </div>	
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
            </Page>
        )
    }
}

export default compose(
    withMetamaskAccount,
    withContracts,
    connect(Index.mapStateToProps)
)(Index);
