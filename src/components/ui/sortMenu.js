import React from 'react'
import PropTypes from 'prop-types'

const options = {
    date: "SORT_BY_DATE",
    title: "SORT_BY_TITLE",
    rating: "SORT_BY_RATING"
}

const SortMenu = ({sort="SORT_BY_DATE",onSelect=f=>f}) =>
    <nav className="menu">
        <h1>Sort Colors</h1>
        {
            Object.keys(options).map((item,i)=>
                <a
                    key={i}
                    href="#"
                    className={(sort===options[item])?"sortby selected":"sortby"}
                    onClick={
                        e=> {
                            e.preventDefault()
                            onSelect(options[item])
                        }
                    }
                >{item}</a>
            )
        }
    </nav>

SortMenu.protoTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
}

export default SortMenu