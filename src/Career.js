import React, { Component} from 'react'

class Career extends Component {
    render() {
        return (
            <div>
                <h1>Join our team</h1>
                <form>
                    <label>Applicant Name:</label>
                    <input type="text" name="name"></input>
                    <label>Email Add:</label>
                    <input type="text" name="email"></input>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Career