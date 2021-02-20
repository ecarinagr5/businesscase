import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props);
    

    }

    render() {
        let { title , subtitle } = this.props;
        return (
            <>
                <blockquote className="blockquote text-center mt-3">
                    <p className="mb-0">{ title }</p>
                    <footer className="blockquote-footer">{ subtitle }</footer>
                </blockquote>
            </>
        );
      }
    }

export default Title
