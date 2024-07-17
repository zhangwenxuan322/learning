import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Oscar', 'Isaac', 'Javier', 'Luis', 'Carlos'];
        const int = Math.floor(Math.random() * names.length);
        return names[int];
    }

    const handleClick = () => {
        console.log('You clicked it')
    }

    const handleClick2 = (name) => {
        console.log(`${name} You clicked it`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('Oscar')}>Click It</button>
            <button onClick={(e) => handleClick3(e)}>Click It</button>
        </main>
    )
}

export default Content