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


                <p>HPB17 Master Contract can be verified here: 
				<a href="https://hpbscan.org/tx/0x5d611d78F36130a301DCd872aF01FeBe6b5AB58F" target="_blank"><h2><b>0x5d611d78F36130a301DCd872aF01FeBe6b5AB58F</b></h2></a></p>
                         
				<br />
				<br />
		<p>HPB17 Factory Contract can be verified here: 
				<a href="https://hpbscan.org/tx/0xE53e02f666d240A63833542232396272cBBEaa63" target="_blank"><h2><b>0xE53e02f666d240A63833542232396272cBBEaa63</b></h2></a></p>
				<br />

			   <div align="left">
                <p>HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000</p>

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
