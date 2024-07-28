import React from 'react'
import Row from './Row'

const Table = ({ displayList }) => {
    return (
        <div className='table-container'>
            <table>
                <tbody>
                    {displayList.map((item) => (
                        <Row key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table