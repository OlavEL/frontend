import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Bedrift from './Pages/Bedrift';
import Hjem from "./Pages/Hjem";
import JobbPage from "./Pages/JobbPage";
import CustomerPage from './Pages/CustomerPage';
import InnloggCustomer from './Pages/InnloggCustomer';
import CustomerPageSecond from './Pages/CustomerPageSecond';
import { useEffect, useState } from 'react';


function App() {

  const [showLoginMenu, setShowLoginMenu] = useState(true);
  const [Customer, SetCustomer] = useState(false)
  const [Company, SetCompany] = useState(false)

  const HandleCustomerClick = () => {
    setShowLoginMenu(false);
   SetCustomer(true);
        
    console.log(Customer);
  
    
  }
  const HandleCompanyClick = () => {
    SetCompany(true);
    setShowLoginMenu(false);

    
  }

return (
 
  <Router>




 <div className='MainMenu'>
    {showLoginMenu ? (
      <div>
<button className="text-base color-white menu1" onClick={HandleCompanyClick}>  Logg Inn Bedrift </button>
<button className="text-base color-white menu1" onClick={HandleCustomerClick}>Logg Inn Kunde </button>


<Link to ="/Login"><button className="text-base color-white menu1"> Ledige Stillinger </button> </Link>
        <Link to ="/LoginBedrift"><button className="text-base color-white menu2"> Om Oss </button> </Link>
  </div>
    ) : null}

  
  
    <div>


{Company ? (
  <div className='Bedriftmeny'>
    <Link to ="/Hjem"><button className="text-base color-white menu2"> Min Profil </button> </Link>
  <Link to ="/AlleJobber"><button className="text-base color-white menu3"> Alle Jobber </button> </Link>
      <Link to ="/Stillinger"><button className="text-base color-white menu1"> Mine Stillinger </button> </Link>
        <Link to ="/Hjem"><button className="text-base color-white menu2"> Om Oss </button> </Link>
  <Link to ="/bedrift"><button className="text-base color-white menu3"> Legg Ut Stilling </button> </Link>

  </div>
): null}
{Customer ? (
  <div className='Kundemeny'>
    <Link to ="/Hjem"><button className="text-base color-white menu2"> Min Profil </button> </Link>
        <Link to ="/Hjem"><button className="text-base color-white menu2"> Om Oss </button> </Link>
  <Link to ="/AlleJobber"><button className="text-base color-white menu3"> Alle Jobber </button> </Link>
  </div>
):null}

</div>


   
</div>
   
    
    

    
    <Routes>
    <Route path="/customer" element={<CustomerPage />} />
        <Route path="/Stillinger" element={<JobbPage />} />
        <Route path="/Hjem" element={<Hjem />} />
        <Route path="/bedrift" element={<Bedrift />} />
        <Route path="/AlleJobber" element={<CustomerPageSecond />} />
    </Routes>
    
    </Router>
  

  )
}

export default App;
