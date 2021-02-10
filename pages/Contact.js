import React, {Component} from "react";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import withMetamaskAccount from "../components/hocs/withMetamaskAccount";
import withContracts from "../site-components/hocs/withContracts";
import {compose} from "redux";
import settings from "../settings";
import {Address} from "../site-components/Address";
import {Moment} from "../components/Moment";
import {Space} from "../components/Space";











// import React, {Component} from "react";
// import {connect} from "react-redux";
// import Page from "../site-components/page/Page";
// import {Space} from "../components/Space";

class Contact extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
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
