import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) =>
{
   

    return (
        <>
        <div className="bg-white w-full h-full">       
            <Header />
           
            <div className='h-full w-full mt-6'>                
                {children}
            </div>      
               
        </div>        
        
        </>
        );
}

export default Layout