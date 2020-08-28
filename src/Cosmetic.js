import React, { Component } from 'react'

class Cosmetic extends Component {
    render () {
        const cosmeticList = this.props.cosmetic.map((c,idx) =>{
        return <li key={idx}>{c}</li>
        })
        return (
            <div>
                <h1>Cosmetic</h1>
                {cosmeticList}
            </div>
        )
    }
}

export default Cosmetic