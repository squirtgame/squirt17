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


                <p>HPB17 Smart Contract can be verified here: (URL to be updated for final release) 
				<a href="https://hpbscan.org/tx/0x4aac7dbd444a84c485a531e0f30742791c832cd343bd7bbb45a6bc7d05dab910" target="_blank"><h2><b>0x9accc0b9a45cd25d0c40559e60a8b6d410e07f1c</b></h2></a></p>
            
               
				<br />
				<br />
				<br />

			   <div align="left">
                <p>HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000</p>

                <p>Ok we know, guessing a number in such a wide range may seem impossible, but don't worry, the first guess of every game is FREE, and better still, if you guess incorrectly, then providing nobody else makes a guess after you, then you will win all the HPB stored in the contract anyway!</p>

                <p>Yep, you heard us right. Get it wrong, and you can still win all the HPB!</p>

                <p>So what actually happens? Well as soon as you make a guess, a countdown timer starts. It begins counting down from 59m 59s, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins all the HPB in the contract!</p>

                <p>But what happens if someone else makes a guess? Well that person immediately becomes the "last player to guess" and the countdown timer resets to 59m 59s - Once again, if the timer reaches zero then that "last player to guess" wins all the HPB!</p>

                <p>After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the "guessing range" shrinks after each subsequent guess.</p>

                <p>The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases.</p>

                <br />

                <br />

                <p>If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!</p>

                <br />
























                </div>
            </Page>
        )
    }
}

export default connect(Details.mapStateToProps)(Details);
