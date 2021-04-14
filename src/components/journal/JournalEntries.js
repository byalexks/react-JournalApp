import React from 'react'
import { JorunalEntry } from './JorunalEntry'

export const JournalEntries = () => {
    const entries = [1,2,3,4,5,]
    return (
        <div className="jorunal_entries">
            {
                entries.map(value => (
                    <JorunalEntry key={value} />
                ))
            }
        </div>
    )
}
