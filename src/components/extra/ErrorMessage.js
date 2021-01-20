import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = (props) => {
    const {header, text, show} = props;

    if (show) {
        return (
            <Message negative>
                <Message.Header>{header}</Message.Header>
                <p>{text}</p>
            </Message>
        );
    }
    return null;
}

export default ErrorMessage
