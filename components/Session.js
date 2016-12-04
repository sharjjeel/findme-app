import React from 'react'
import { connect } from 'react-redux'
import { signIn, createUser, logout } from '../actions/user_session'
import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'


function Session({ username, signIn, createUser, logout}) {
    return (
        <div>
            <Form state={username} onChange={changes => username = changes.name}>
                <Field fieldName='name' label='Name' type={Text}/>
            </Form>
            <p>
                Welcome {username}
            </p>
        </div>
    )
}

export default connect(
    state => ({ user_session: {username: state.user_session.username }}),
    { signIn, createUser, logout}
)(Session)
