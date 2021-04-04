import React from 'react'

export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4 mt-5">
        {props.userName} Task App ({props.taskItems.filter(t => !t.done).length} task to do)
    </h4>
)