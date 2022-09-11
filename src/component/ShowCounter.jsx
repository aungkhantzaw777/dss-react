import { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import classes from './ShowCounter.module.css'


export default function ShowCounter({ minutes, seconds, progress }) {

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
        setShowMFirstDigit(true)
        setTimeout(() => {
            setShowMFirstDigit(false)
        }, 500);
    }, [mFirstDigit])
    useEffect(() => {
        setShowMSecondDigit(true)
        setTimeout(() => {
            setShowMSecondDigit(false)
        }, 500);
    }, [mSecondDigit])

    // Second Class Transition
    useEffect(() => {

        setShowSFirstDigit(true)
        setTimeout(() => {
            setShowSFirstDigit(false)
        }, 500);
    }, [sFirstDigit])
    useEffect(() => {
        setShowSSecondDigit(true)
        setTimeout(() => {
            setShowSSecondDigit(false)
        }, 500)
    }, [sSecondDigit])


    return (
        <>
            <div className="d-flex justify-content-center">

                <CSSTransition
                    in={showMFirstDigit}
                    timeout={500}
                    classNames="fadingCount">
                    <div>
                        <h1 >
                            {mFirstDigit}
                        </h1>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={showMSecondDigit}
                    timeout={500}
                    classNames="fadingCount">
                    <div>
                        <h1 >
                            {mSecondDigit}
                        </h1>
                    </div>
                </CSSTransition>
                <div>
                    <h1>
                        :
                    </h1>
                </div>
                <CSSTransition
                    in={showSFirstDigit}
                    timeout={500}
                    classNames="fadingCount"
                >
                    <div>
                        <h1>
                            {sFirstDigit}
                        </h1>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={showSSecondDigit}
                    timeout={500}
                    classNames="fadingCount" >
                    <div>
                        <h1>
                            {sSecondDigit}
                        </h1>
                    </div>
                </CSSTransition>

            </div>
            <div
                style={{
                    width: `${progress}%`
                }}
                className={`mt-4 ${classes.customProgressBar}`} >


            </div>


        </>
    )
}