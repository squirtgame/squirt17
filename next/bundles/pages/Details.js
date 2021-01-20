import React, {Component} from "react";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import {Space} from "../components/Space";

class Details extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
        return (
        <Page header={<Space danger={this.props.dangerMode}/>} contentClass="full-width">
                                
                <br />
                <br />

                <p>HPB17 Smart Contract can be verified here: (URL to be updated for final release) <a href="https://hpbscan.org/tx/0x4aac7dbd444a84c485a531e0f30742791c832cd343bd7bbb45a6bc7d05dab910" target="_blank"><b>0x9accc0b9a45cd25d0c40559e60a8b6d410e07f1c</b></a></p>
            
                <div align="left">
                <p>HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000</p>

                <p>Ok we know, guessing a number in such a wide range may seem impossible, but don't worry, the first guess of every game is FREE, and better still, if you guess incorrectly, then providing nobody else makes a guess after you, then you will win all the HPB stored in the contract anyway!</p>

                <p>Yep, you heard us right. Get it wrong, and you can still win all the HPB!</p>

                <p>So what actually happens? Well as soon as you make a guess, a countdown timer starts. It begins counting down from 59m 59s, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins all the HPB in the contract!</p>

                <p>But what happens if someone else makes a guess? Well that person immediately becomes the "last player to guess" and the countdown timer resets to 59m 59s - Once again, if the timer reaches zero then that "last player to guess" wins all the HPB!</p>

                <p>After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the "guessing range" shrinks after each subsequent guess.</p>

                <p>The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases.</p>

                <br />
<ul>
<li>                <p>Guess 1 - FREE!</p>														</li>
<li>                <p>Guess 2 - 0.25 HPB</p>													</li>
<li>                <p>Guess 3 - 0.50 HPB</p>													</li>
<li>                <p>Guess 4 - 0.60 HPB</p>													</li>
<li>                <p>Guess 5 - 0.70 HPB</p>													</li>
<li>                <p>Guess 6 - 0.80 HPB</p>													</li>
<li>                <p>Guess 7 - 0.90 HPB</p>													</li>
<li>                <p>Guess 8 - 1.00 HPB</p>													</li>
<li>                <p>Guess 9 - 2.00 HPB</p>													</li>
<li>                <p>Guess 10 - 3.00 HPB</p>													</li>
<li>                <p>Guess 11 - 4.00 HPB</p>													</li>
<li>                <p>Guess 12 - 5.00 HPB</p>													</li>
<li>                <p>Guess 13 - 6.00 HPB</p>													</li>
<li>                <p>Guess 14 - 7.00 HPB</p>													</li>
<li>                <p>Guess 15 - 8.00 HPB</p>													</li>
<li>                <p>Guess 16 - 9.00 HPB</p>													</li>
<li>                <p>Guess 17 - 10.00 HPB - Automatically refunded if you don't win!</p>		</li>
</ul>


<dl class="faq">
  <dt>
    <button aria-expanded="false" aria-controls="faq1_desc">
      What do I do if I have a permit for an assigned lot, but can't find a space there?
    </button>
  </dt>
  <dd>
    <p id="faq1_desc" class="desc">
      Park at the nearest available parking meter without paying the meter
      and call 999-999-9999 to report the problem. We will note and approve your alternate
      location and will investigate the cause of the shortage in your assigned facility.
    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq2_desc">
      What do I do if I lose my permit or if my permit is stolen?
    </button>
  </dt>
  <dd>
    <p id="faq2_desc" class="desc">
      You should come to the Parking office and report the
      loss. There is a fee to replace your lost permit. However, if your permit was stolen, a
      copy of a police report needs to be submitted along with a stolen parking permit form for
      a fee replacement exemption.
    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq3_desc">
      Is there free parking on holidays?
    </button>
  </dt>
  <dd>
    <p id="faq3_desc" class="desc">
      All facilities are restricted from 2:00 am - 6:00 am on all days. No
      exceptions are made for any holiday or recess except those officially listed as a
      <q>
        Holidays
      </q>
      in the calendar. Please note: 24-hour rental spaces, 24-hour rental lots, and
      disabled parking is enforced at all times.
    </p>
  </dd>
  <dt>
    <button aria-expanded="false" aria-controls="faq4_desc">
      Do all parking facilities have the same enforcement rules?
    </button>
  </dt>
  <dd>
    <p id="faq4_desc" class="desc">
      Some parking facility restrictions differ from others. Be sure to
      take note of the signs at each lot entrance.
    </p>
  </dd>
</dl>















                <br />

                <p>If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!</p>

                <br />

                <h3>FAQ</h3>
                <p><b>How is the number to guess generated?</b></p>
                <p>We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game.  - Please see <b><a href="https://www.hpb.io/post-423" target="_blank">HPB RNG Q&A</a></b> for more information</p>

                <p><b>What do I need to be able to play?</b></p>
                <p>All that is required is a <b><a href="https://www.hpb.io/wallet" target="_blank">HPB Wallet</a></b>, 
                some <b><a href="https://www.gate.io/trade/HPB_USDT" target="_blank">HPB Coin</a></b>
                and <b><a href="https://metamask.io/" target="_blank">Metamask</a></b></p>

                <p><b>What if I make a guess at the same time as someone else?</b></p>
                <p>All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other
                    guess will be rejected. Please check your transaction hash or click on the game number header
                    on the home page, which will show you the game transactions. If you were unsuccessful, the will 
                    see the transaction will have been reverted. 
                </p>

                <p><b>You said the first guess is free?</b></p>
                <p>The first guess of every new game is free, however this involves sending your guess to the 
                    smart contract on the blockchain, which costs a very small amount of gas (0.02). This is less than $0.01 in value. 
                </p>
                
                 <p><b>How do I setup Metamask to work with the HPB blockchain?</b></p>
                <p>When you open Metamask, you'll need to switch from the default "Ethereum Main-net" option, to the "Custom RPC" option. At this point, you'll need to supply the
                following information: "Network Name" = HPB Network | "New RPC URL" = https://node.hpb.io | "Chain ID" = 0x10D | "Currency Symbol" = HPB | "Block Explorer URL" = https://explorer.myhpbwallet.com/
                </p>
                

                <p><b>I'm receiving a Metamask error?</b></p>
                <p>Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend
                    completely cancelling/rejecting the transaction in Metamask, and try guessing again.
                </p>

                <p><b>Can I alter the gas to make a saving?</b></p>
                <p>Of course! We have injected a default fee of 0.02, however you can increase or decrease this value
                    to your choosing. Increasing the value will cost more, however it will usually speed up the
                    time taken to write your guess to the smart contract.
                </p>

                <p><b>Can I interact with the smart contract game directly?</b></p>
                <p>YES! And that is the beauty of HPB and the decentralized blockchain!
                </p>
                
                <p><b>Do you have real-time support?</b></p>
                <p>Visit the community on the <b><a href=" https://t.me/HPBglobal" target="_blank">HPB Global Telegram Chat</a></b> and stay in touch with a great community!
                </p>



                </div>
            </Page>
        )
    }
}

export default connect(Details.mapStateToProps)(Details);
