import React from 'react'
import colorNames from 'colornames'

const Input = ({ colorName, setColorName, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form className="colorForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="changeColor">Change Color</label>
            <input
                autoFocus
                id='changeColor'
                type='text'
                placeholder='Add Color Name'
                required
                value={colorName}
                onChange={(e) => {
                    setColorName(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default Input