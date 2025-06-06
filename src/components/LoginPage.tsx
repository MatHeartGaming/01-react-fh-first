import { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {

    const user = useAuthStore((state) => state.user);
    const authStatus = useAuthStore((state) => state.status);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);

    useEffect(() => {
        setTimeout(() => {
           logout(); 
        }, 1500);
    }, []);
    
    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

    return (
        <>  
            <h3>Login Page</h3>
            { 
                (authStatus === 'authenticated' )
                ? <div> 
                    Autenticado como: { JSON.stringify(user, null, 2) }
                </div>
                : <div>
                    No autenticado
                </div>
            }
            
            {
                (authStatus === 'authenticated' )
                ? <button onClick={ () => logout() }>Logout</button>
                : <button onClick={ () => login('mat@gmail.com', '123456') }>Login</button>
            }

        </>
    )
}
