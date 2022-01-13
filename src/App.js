import React, { Component } from "react";

import { UserContextConsumer } from "./userContext";
import Header from "./Header";

class App extends Component {
    state = {
        newUsername: "",
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <Header />
                <UserContextConsumer>
                    {({ username, changeUsername }) => (
                        <main>
                            <p className="main">
                                No new notifications, {username}! 🎉
                            </p>

                            <input
                                type="text"
                                name="newUsername"
                                placeholder="New username"
                                value={this.state.newUsername}
                                onChange={this.handleChange}
                            />
                            <button
                                onClick={() =>
                                    changeUsername(this.state.newUsername)
                                }
                            >
                                Change Username
                            </button>
                        </main>
                    )}
                </UserContextConsumer>
            </div>
        );
    }
}

export default App;
