import classes from './AdjustTime.module.css'
import { Button } from 'react-bootstrap'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function AdjustTime({setValue}) {
    // underscore mean Time Length
    const [_minute, _setMinute] = useState('00')
    const [_second, _setSecond] = useState('00')
    
    const handleMinute = (type) => {
        let minute = 0
        if(type === 'INCREATEMENT') {
            minute = parseInt(_minute) + 1
        }
        if(type === 'DECREATEMENT' && 0 < _minute) {
            minute = parseInt(_minute) - 1
        }
        minute = (minute > 9 ? minute : '0' + minute)
        _setMinute(minute)
        setValue(`${minute}:${_second}`)
    }

    const handleSecond = (type) => {
        let second = 0
        if(type === 'INCREATEMENT') {
            second = parseInt(_second) + 1
        }
        if(type === 'DECREATEMENT' && 0 < _second) {
            second = parseInt(_second) - 1
        }

        second = (second > 9 ? second : '0' + second)
        _setSecond(second)
        setValue(`${_minute}:${second}`)
    }

    return (
        <>
            <div className={classes.time_length_wrap}>
                <div className={classes.time_length}>
                    <Button onClick={() => handleMinute('INCREATEMENT')} className={classes.time_length_btn}>
                        <ChevronUpIcon  className={classes.time_adjust_icon} />
                    </Button>
                    {_minute}
                    <Button onClick={() => handleMinute('DECREATEMENT')} className={classes.time_length_btn} >
                        <ChevronDownIcon className={classes.time_adjust_icon} />
                    </Button>
                </div>
                <div className={classes.time_length}>
                    :
                </div>
                <div className={classes.time_length}>
                    <Button onClick={() => handleSecond('INCREATEMENT')} className={classes.time_length_btn} >
                        <ChevronUpIcon className={classes.time_adjust_icon} />
                    </Button>
                    {_second}
                    <Button onClick={() => handleSecond('DECREATEMENT')} className={classes.time_length_btn} >
                        <ChevronDownIcon className={classes.time_adjust_icon} />
                    </Button>
                </div>
            </div>
        </>
    )
}