import { Link } from "react-router-dom";
import "./Home.css"; 
import { useState } from "react";

import Maskot from '../assets/Maskot.png';
import BannerCatering from '../assets/Banner/Banner Catering.png';
import BannerSedekah from '../assets/Banner/Banner Sedekah Jumat.png';
import BannerKolaseNasiBox from '../assets/Banner/Kolase Nasi Box.png';
import BannerKueKering from '../assets/Banner/Kolase Kue Kering.png';
import MenuHighlight from "./components/MenuHighlight"; 
import MenuDetailsNasiBox from "./components/MenuDetailsNasiBox";
import MenuDetailsPaketHemat from "./components/MenuDetailsPaketHemat";
import DetailNasiTumpeng from "./components/DetailsNasiTumpeng";
import DetailKueKering from "./components/DetailKueKering"; 

const Home=({onNasiboxClicked, onPakethematClicked, onTumpengClicked, onKuekeringClicked})=>{

    const [showOutlet, setShowOutlet] = useState(true); 
    const [showDetailNasiBox, setShowDetailNasiBox] = useState(false);
    const [showDetailPaketHemat, setShowDetailPaketHemat] = useState(false);
    const [showDetailNasiTumpeng, setShowDetailNasiTumpeng] = useState(false);
    const [showDetailKueKering, setShowDetailKueKering] = useState(false);
    // const detailNasiBox = ()=>{
    //     setShowOutlet(false); 
    //     setShowDetailNasiBox(true);
    //     setShowDetailPaketHemat(false);
    //     setShowDetailNasiTumpeng(false);
    //     setShowDetailKueKering(false);
    // } 
    // const detailPaketHemat = ()=>{
    //     setShowOutlet(false);
    //     setShowDetailNasiBox(false);
    //     setShowDetailPaketHemat(true);
    //     setShowDetailNasiTumpeng(false);
    //     setShowDetailKueKering(false);
    // }
    // const detailNasiTumpeng = ()=>{
    //     setShowOutlet(false);
    //     setShowDetailNasiBox(false);
    //     setShowDetailPaketHemat(false);
    //     setShowDetailNasiTumpeng(true);
    //     setShowDetailKueKering(false);
    // }
    // const detailKueKering = ()=>{
    //     setShowOutlet(false);
    //     setShowDetailNasiBox(false);
    //     setShowDetailPaketHemat(false);
    //     setShowDetailNasiTumpeng(false);
    //     setShowDetailKueKering(true);
    // }
    const handleShowOutlet = ()=>{
        setShowOutlet(true);
        setShowDetailNasiBox(false);
        setShowDetailPaketHemat(false);
        setShowDetailNasiTumpeng(false);
        setShowDetailKueKering(false);
    } 


    return(
        <>
            {/*  ${showOutlet?'':'hide'} */}
            <section className={`jumbotron`}>
                <div className="slide1">
                    <img src={BannerCatering} alt='' className="banner-catering"/>
                    <div className="jumbotron-card">
                        <h1>Terima Pesanan Nasi Box & Catering Anak Sekolah</h1>
                        <p>
                            "Butuh Catering sesuai budget? Hubungi kami sekarang! Harga Terjangkau, tanpa mengorbankan kualitas."
                        </p>
                        <Link to='/menus' className="order-now" onClick={handleShowOutlet}>Pesan<span>_</span>Sekarang</Link>
                    </div>
                </div>
                <div className="slide1">
                    <img src={BannerSedekah} alt='' className="banner-catering"/>
                </div> 
                <div className="slide1">
                    <img src={BannerKolaseNasiBox} alt='' className="banner-catering"/>
                </div> 
                <div className="slide1">
                    <img src={BannerKueKering} alt='' className="banner-catering"/>
                </div>
            </section>
            
            {/*  ${showOutlet?'':'hide'} */}
            <section className={`home-desc`}>
                <div className="home-desc-card">
                    <div>
                        <img src={Maskot} alt="" style={{maxWidth: 25 + 'vw'}}/>
                    </div>
                    <div className="home-desc-txt">
                        <h1>kami Hadir Untuk Anda: Ummi Citra - Penyedia Jasa Nasi Box dan Snack Terpercaya!</h1><br/>
                        <p>
                            Dalam 3 tahun pengalaman kami, Ummi Citra telah menjadi pilihan utama dalam menyediakan jasa nasi box dan snack berkualitas di wilayah Jabodetabek. Dengan komitmen memberikan pelayanan baik dan menjunjung tinggi prinsip halal, kami hadir untuk memenuhi kebutuhan makanan Anda dengan paket menarik yang kami tawarkan.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* <div className={`menu-detail-nasibox ${showDetailNasiBox?'show':''}`}>
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
            </div> */}

            
            <h1 style={{textAlign: 'center', fontSize: '25px'}}>MENU UMMI CITRA</h1>  
            {/* <MenuHighlight/> */}

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
                <MenuHighlight onNasiboxClicked={onNasiboxClicked} onPakethematClicked={onPakethematClicked} onTumpengClicked={onTumpengClicked} onKuekeringClicked={onKuekeringClicked}/>
            </section>
        </>
    )
}

export default Home;