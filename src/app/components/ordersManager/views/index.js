import React, {Component} from 'react'
const apiKey = process.env.REACT_APP_URL_API_FOOD
class orderManager extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <pre>echo</pre>
                <pre>{apiKey}</pre>
                <p>echo</p>
            </div>
        );
    }
}
 
export default orderManager;