import './Menus.css';  
import MenuPageBanner from '../assets/Banner/menuPagebanner.png';
import { useState } from 'react';
import MenuHighlight from './components/MenuHighlight';
import DetailKueKering from './components/DetailKueKering';
import DetailNasiTumpeng from './components/DetailsNasiTumpeng';
import MenuDetailsPaketHemat from './components/MenuDetailsPaketHemat';
import MenuDetailsNasiBox from './components/MenuDetailsNasiBox';

const Menus=()=>{ 
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
    // const handleShowOutlet = ()=>{
    //     setShowOutlet(true);
    //     setShowDetailNasiBox(false);
    //     setShowDetailPaketHemat(false);
    //     setShowDetailNasiTumpeng(false);
    //     setShowDetailKueKering(false);
    // } 
    return( 
        <>
            {showOutlet &&  <section className='menu-page'>
                <img src={MenuPageBanner} alt='' className='menu-page-banner'/>
                <h1 style={{textAlign: "center"}}>CHOOSE MENU</h1> 
            </section>}

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
            

            <section className={`${showOutlet?'':'hide'} `}>
                <MenuHighlight onNasiboxClicked={detailNasiBox} onPakethematClicked={detailPaketHemat} onTumpengClicked={detailNasiTumpeng} onKuekeringClicked={detailKueKering}/>
            </section>
        </>
    )
}

export default Menus;