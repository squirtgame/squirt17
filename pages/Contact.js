import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import withContracts from "../site-components/hocs/withContracts";
import {Space} from "../components/Space";


import withMetamaskAccount from "../components/hocs/withMetamaskAccount";
import {
    LoginMessage,
    TransactionMessage
} from "../site-components/messages";

class Contact extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
		const {metamaskAccount} = this.props;
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

export default compose(
    withMetamaskAccount,
	withContracts,
    connect(Contact.mapStateToProps)
)(Contact);
