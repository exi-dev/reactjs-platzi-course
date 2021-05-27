import React, { Component } from 'react'
import md5 from 'md5'

const Gravatar = (props) => {
    const email = props.email
    const hash = md5(email)

    return (
        <img className={props.className} src={`https://gravatar.com/avatar/${hash}?d=identicon`} alt="avatar"/>
    )
}

export default Gravatar



