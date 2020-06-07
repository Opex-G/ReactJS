import React from 'react'

function Search ({handleInput, search }) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for your movie or tv show here..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={search}
            />
        </section>
    )
}

export default Search