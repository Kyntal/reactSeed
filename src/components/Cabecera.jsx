import React, { Component } from "react";
import logo from '../logo.svg';
import H1 from "./H1";

const styles = {
    header: ({ backgroundColor }) => ({
        backgroundColor,
        height: '150px',
        padding: '20px',
        color: 'white',
    })
}

export default class Cabecera extends Component {
    state = {
        backgroundColor: '#222',
    }

    cambiaColorHeader = () => {
        this.setState({cambiaColorHeade: '#FF0000'})
    }

    manejaClick = () => {
        const { manejaClick, miau } = this.props
        manejaClick(miau)
    }

    render() {
        const { miau, manejaClick } = this.props
        const { backgroundColor } = this.state

        return (
            <header onClick={this.cambiaColorHeader} style={styles.header({ backgroundColor })}>
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                <H1>{miau}</H1>
            </header>
        )
    }
}