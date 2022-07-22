import React, {useEffect, useState} from 'react';

const UnmountTest = ()=>{
    useEffect(()=>{
        console.log("Mount");

        return()=>{
            // unmount 시점에 실행되게 됨
            console.log("Unmount!")
        }
    },[])
    return <div>Unmount Testing Component</div>
}

const Lifecycle = ()=>{
    const [isVisible, setVisible] = useState(false);
    const toggle = ()=>{ setVisible(!isVisible); };

    
    return(
        <div style={{padding: 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    ); 
}

export default Lifecycle;