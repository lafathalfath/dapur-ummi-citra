import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from '../assets/Logo.png'; 
import { useState } from "react";
import "./Layout.css";
import MenuDetailsNasiBox from "./components/MenuDetailsNasiBox";
import MenuDetailsPaketHemat from "./components/MenuDetailsPaketHemat";
import DetailNasiTumpeng from "./components/DetailsNasiTumpeng";
import DetailKueKering from "./components/DetailKueKering";
// import MenuHighlight from "./components/MenuHighlight";
  
const Layout=()=>{
    const [navOpen, setNavOpen] = useState(false);

    const navToggle = ()=>{
        setNavOpen(!navOpen);
    };

    const [showOutlet, setShowOutlet] = useState(true); 
    const [showDetailNasiBox, setShowDetailNasiBox] = useState(false);
    const [showDetailPaketHemat, setShowDetailPaketHemat] = useState(false);
    const [showDetailNasiTumpeng, setShowDetailNasiTumpeng] = useState(false);
    const [showDetailKueKering, setShowDetailKueKering] = useState(false);
    const detailNasiBox = ()=>{
        setShowOutlet(false); 
        setShowDetailNasiBox(true);
        setShowDetailPaketHemat(false);
        setShowDetailNasiTumpeng(false);
        setShowDetailKueKering(false);
    } 
    const detailPaketHemat = ()=>{
        setShowOutlet(false);
        setShowDetailNasiBox(false);
        setShowDetailPaketHemat(true);
        setShowDetailNasiTumpeng(false);
        setShowDetailKueKering(false);
    }
    const detailNasiTumpeng = ()=>{
        setShowOutlet(false);
        setShowDetailNasiBox(false);
        setShowDetailPaketHemat(false);
        setShowDetailNasiTumpeng(true);
        setShowDetailKueKering(false);
    }
    const detailKueKering = ()=>{
        setShowOutlet(false);
        setShowDetailNasiBox(false);
        setShowDetailPaketHemat(false);
        setShowDetailNasiTumpeng(false);
        setShowDetailKueKering(true);
    }
    const handleShowOutlet = ()=>{
        setShowOutlet(true);
        setShowDetailNasiBox(false);
        setShowDetailPaketHemat(false);
        setShowDetailNasiTumpeng(false);
        setShowDetailKueKering(false);
    }  
    
    return(
        <>
            <header>
                {/* <div className="header-head">
                    <Link to="/" className="logo-brand" onClick={handleShowOutlet}>
                        <img src={Logo} alt=""/>
                    </Link>
                    <div className="search-box">
                        <input type="text" placeholder="Sedang cari apa?" className="search-input"/>
                        <button className="search-button"></button>
                    </div>
                    <button className="toggle-nav" onClick={navToggle}>&#9776;</button>
                </div> */}


                <div className="nav-container">
                    <Link to="/" className="logo-brand" onClick={handleShowOutlet}>
                        <img src={Logo} alt=""/>
                    </Link>

                    <nav className={`navbar ${navOpen?'open':''}`}>
                        <NavLink exact='true' to='/' id="beranda" className='navigator' activeclassname='active' onClick={handleShowOutlet}>Home</NavLink>
                        <div className="dropdown">
                            <NavLink to='/menus' className='nav-drop' activeclassname='active' onClick={handleShowOutlet}>Daftar Menu &#9662;</NavLink>
                            <div className="dropdown-content">  
                                <Link to='/menus' className="dropdown-item">
                                    <div onClick={detailNasiBox}>Paket Nasi Box</div>
                                </Link>
                                <Link to='/menus' className="dropdown-item" onClick={detailPaketHemat}>Paket Hemat</Link>
                                <Link to='/menus' className="dropdown-item" onClick={detailNasiTumpeng}>Paket Nasi Tumpeng</Link>
                                <Link to='/menus' className="dropdown-item" onClick={detailKueKering}>Kue Kering</Link>
                            </div>
                        </div>
                        <NavLink to='/gallery' className='navigator' activeclassname='active close-details' onClick={handleShowOutlet}>Gallery</NavLink>
                        <NavLink to='/contact' className='navigator' activeclassname='active close-details' onClick={handleShowOutlet}>Kontak</NavLink>
                    </nav>
                    
                    <button className="toggle-nav" onClick={navToggle}>&#9776;</button>
                </div>
            </header>

            {showOutlet && <Outlet/>}

            <div className={`menu-detail-nasibox ${showDetailNasiBox?'show':''}`}>
                <MenuDetailsNasiBox/>
            </div>
            <div className={`menu-detail-pakethemat ${showDetailPaketHemat?'show':''}`}>
                <MenuDetailsPaketHemat/>
            </div>
            <div className={`menu-detail-nasi-tumpeng ${showDetailNasiTumpeng?'show':''}`}>
                <DetailNasiTumpeng/>
            </div>
            <div className={`menu-detail-kuekering ${showDetailKueKering?'show':''}`}>
                <DetailKueKering/>
            </div> 

            {/* <section className={`${showOutlet?'':'hide'} `}>
                <MenuHighlight onNasiboxClicked={detailNasiBox} onPakethematClicked={detailPaketHemat} onTumpengClicked={detailNasiTumpeng} onKuekeringClicked={detailKueKering}/>
            </section> */}
        </>
    )
}

export default Layout;