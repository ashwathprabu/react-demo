import React, { Component } from 'react'
import '../../css/style.css'

class HeaderRight extends Component {
    inputChangedHandler(event) {
        console.log( event.target.value)
    }

    render() {
        const styles = {
            header: {
                background: '#03a9f4'
            },
            logo: {
                color: '#fff',
                textAlign: 'center'
            }
        }
        return (

            <header style={ styles.header } >
                <div>
                    <div style={ styles.logo } className="anton">  Ashwath</div>
                    <input type="text" name="userName" onChange={this.inputChangedHandler }></input>
                </div>
            </header>
        )
    }
}

export default HeaderRight