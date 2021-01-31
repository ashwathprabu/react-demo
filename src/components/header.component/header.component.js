import React from 'react'

const getYear = () => {
    return new Date().getFullYear()
}

const user = {
    userFirstName: 'ashwath',
    userLastName: 'Prabhu'
}

const Header = () => {
    return (
        <div>
            {/* <div>User of the year { getYear() }</div>
            <div>{user.userFirstName} { user.userLastName}</div> */}
        </div>
    )
}

export default Header