import React,{useState} from 'react'

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={()=>setCount(count+1)}>
            clicked {count}
        </button>
    )
}

export default Counter
