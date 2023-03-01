import React, {useState, useEffect} from 'react'

const Header = () => {
   
  const [bg, setBg] = useState(false);

  useEffect(() => {
     window.addEventListener('scroll', () => {
    return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  }, [bg])
  
  if (bg)console.log('okay');
  return (
    <header style={{
      position: (bg) ? 'fixed' : 'relative'
    }}>
           <h1>Grocery List</h1>    
      </header>
  )
}

export default Header