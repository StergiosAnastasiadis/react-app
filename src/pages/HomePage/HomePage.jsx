import React from 'react'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../app/authSlice'

function HomePage() {
    const dispatch = useDispatch()

    const lalala = () => {
        dispatch(setUserInfo({ username: 'Stergios' }))

    }

    return (
        <div>
            <h3>HomePage</h3>
            <button onClick={lalala}>Alert</button>
        </div>
    )
}

export default HomePage