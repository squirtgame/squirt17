import React, {Component} from "react";
import {connect} from "react-redux";
import Page from "../site-components/page/Page";
import {Space} from "../components/Space";

class Details extends Component {
    static mapStateToProps = ({dangerMode}) => ({dangerMode});

    render () {
        return (
            <Page header={<Space danger={this.props.dangerMode}/>} contentClass="full-width">
                <div className="glass container bg-color-white br-5">
                    <h1 className="normal display-6">Contact Us</h1>
                </div>
            </Page>
        )
    }
}

export default connect(Details.mapStateToProps)(Contact);
