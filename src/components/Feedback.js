import React from 'react'
import { UserFeedback } from './UserFeedback'
import { Form } from './Form'

export const Feedback = (props) => {
    return (
        <div>
            <Form props={props}/>
            <UserFeedback/>
        </div>
    )
}
