import React, { useState } from 'react'

const  = () => {
    const [value, seValue] = useState(0);
    const [name, changer] = useState('Silas');
    const [bg, changeBgColor] = useState("bg-blue-500");
    
    const newpage = () => {
        let fValue = value;
        if (fValue <= 10) {
            fValue = fValue + 1
            setValue(fValue)
        }
        if (fValue === 4) {
            changeBgColor()
        }
    };

  

    
  return (
    <>
    
      </>
  )
}

export default 