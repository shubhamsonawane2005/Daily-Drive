import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

function Refresh({setAuthenticat}) {
    const location = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            setAuthenticat(true)
            if(location.pathname=== '/' || 
                location.pathname === '/login'||
                location.pathname === '/register' ){
                Navigate('/' , {replace:false}) 
            }
        }
    }, [location , Navigate ,setAuthenticat])
  return (
    null
  )
}

export default Refresh; 