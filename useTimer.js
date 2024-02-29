import { useState, useEffect } from "react"
export function useTimer() {
    const [seconds, setSeconds] = useState(0)
    const [minuts, setMinuts] = useState(0)
    const [hours, setHours] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [isStopped, setIsStopped] = useState(false)
    const [isReset, setIsReset] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
        setIsPaused(!isPaused)
    }
    useEffect(() => {
        let interval = null
        interval = setInterval(() => {
            setSeconds(prev => 
                prev + 1
            )
            console.log(seconds)
            if (seconds === 59) {
                setMinuts(prev => prev + 1)
                setSeconds(0)
            }
        }, 1000)
        return () => clearInterval(interval)
    })
    return { seconds, minuts, hours, isActive, isPaused, isStopped, isReset, toggle }
}