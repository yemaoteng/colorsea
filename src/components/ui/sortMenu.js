import React from 'react'
import PropTypes from 'prop-types'
import C from '../../constants'

const options = {
    date: C.SORTED_BY_DATE,
    title: C.SORTED_BY_TITLE,
    rating: C.SORTED_BY_RATING
}

const SortMenu = ({sort=C.SORTED_BY_DATE,onSelect=f=>f}) =>
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