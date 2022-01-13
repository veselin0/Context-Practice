import React, { createContext, Component } from "react";

const { Provider, Consumer } = createContext();

class UserContextProvider extends Component {
    state = {
        username: "whatever",
    };

    changeUsername = (username) => {
        this.setState({ username });
    };

    render() {
        const { username } = this.state;
        return (
            <Provider value={{ username, changeUsername: this.changeUsername }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { UserContextProvider, Consumer as UserContextConsumer };
