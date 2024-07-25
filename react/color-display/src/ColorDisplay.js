import React from 'react'

const ColorDisplay = ({ colorName = "Empty Color Value", hexValue, isDarkText }) => {
    return (
        <section
            className="colorDisplay"
            style={{
                backgroundColor: colorName,
                color: isDarkText ? "black" : "white"
            }}
        >
            <p>{colorName ? colorName : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

export default ColorDisplay