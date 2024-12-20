import React from 'react'

function AlertMgs(props) {
    const capatalize=(word)=>{
        const lower= word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1) 
    }
    return (
        


        props.alert &&
        <div className='App'>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                <strong>{capatalize(props.alert.type)} : {props.alert.msg}</strong>
            </div>
        </div>
    )
}

export default AlertMgs