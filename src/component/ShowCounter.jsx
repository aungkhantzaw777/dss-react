import { useEffect } from "react"
import { useState } from "react"
import classes from './ShowCounter.module.css'
import { Transition } from "react-transition-group"

export default function ShowCounter({ minutes, seconds }) {

    const mFirstDigit = minutes.split('')[0]
    const mSecondDigit = minutes.split('')[1]
    const sFirstDigit = seconds.split('')[0]
    const sSecondDigit = seconds.split('')[1]



    const [showMFirstDigit, setShowMFirstDigit] = useState(true)
    const [showMSecondDigit, setShowMSecondDigit] = useState(true)

    const [showSFirstDigit, setShowSFirstDigit] = useState(true)
    const [showSSecondDigit, setShowSSecondDigit] = useState(true)

    // Minute Class Transition
    useEffect(() => {
        setShowMFirstDigit(false)
        setTimeout(() => {
            setShowMFirstDigit(true)
        }, 950);
    }, [mFirstDigit])
    useEffect(() => {
        setShowMSecondDigit(false)
        setTimeout(() => {
            setShowMSecondDigit(true)
        }, 950);
    }, [mSecondDigit])

    // Second Class Transition
    useEffect(() => {
        setShowSFirstDigit(false)
        setTimeout(() => {
            setShowSFirstDigit(true)
        }, 950);
    }, [sFirstDigit])
    useEffect(() => {

        setShowSSecondDigit(false)
        setTimeout(() => {
            setShowSSecondDigit(true)
        }, 950)
    }, [sSecondDigit])

    const animatingTiming = {
        enter: 500,
        exit:500,
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <Transition in={showMFirstDigit} timeout={animatingTiming}>
                    {
                        state => (
                            <div
                            className={state === 'exited' ? classes.fadingIn : classes.fading}
                            >
                                <h1 >
                                    {mFirstDigit}
                                </h1>
                            </div>
                        )
                    }
                </Transition>
                
                <Transition in={showMSecondDigit} timeout={animatingTiming}>
                    {
                        state => (
                            <div
                            className={state === 'exited' ? classes.fadingIn : classes.fading}
                            >
                                <h1 >
                                    {mSecondDigit}
                                </h1>
                            </div>
                        )
                    }

                </Transition>
                <div>
                    <h1>
                        :
                    </h1>
                </div>
                <Transition in={showSFirstDigit} timeout={animatingTiming}>
                    {
                        state => (
                            <div
                                className={state === 'exited' ? classes.fadingIn : classes.fading}
                            >
                                <h1>
                                    {sFirstDigit}
                                </h1>
                            </div>
                        )
                    }

                </Transition>
                <Transition in={showSSecondDigit} timeout={animatingTiming} >
                    {
                        state => (
                            <div
                                className={state === 'exited' ? classes.fadingIn : classes.fading}
                            >
                                <h1>
                                    {sSecondDigit}
                                </h1>
                            </div>
                        )
                    }

                </Transition>
            </div>


        </>
    )
}