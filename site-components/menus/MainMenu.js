import React, {Component} from "react";
import {joinClassNames} from "../../services/className";
import Link from "next/link";
import {withRouter} from "next/router";

class MainMenu extends Component {
    static defaultProps = {
        className: ""
    };

    getActiveClass = (page) => {
        return (this.props.router.route === page) ? "active" : "";
    };

    render(){
        const {
            className,
            router,
            ...props
        } = this.props;

        return (
            <nav className={joinClassNames("menu", className)} {...props}>

            </nav>
        );
    }
}

export default withRouter(MainMenu);
