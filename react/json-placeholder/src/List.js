import React from 'react'
import ListItem from './ListItem'

const List = ({ displayList }) => {
    return (
        <ul>
            {displayList.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default List