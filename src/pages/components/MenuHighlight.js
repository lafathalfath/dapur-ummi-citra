import { Link } from 'react-router-dom';
import './MenuHighlight.css';
import Nasibox from '../../assets/menu_category/paket nasi box.jpg';
import Hemat from '../../assets/menu_category/paket hemat.jpg';
import Tumpeng from '../../assets/menu_category/nasi tumpeng.jpg';
import Kuker from '../../assets/menu_category/kue kering.jpg';

const MenuHighlight = ({onNasiboxClicked, onPakethematClicked, onTumpengClicked, onKuekeringClicked})=>{ 
    return(
        <div className='highlight-detail'>
            <section className={`menu-highlight `}>
                <div className="menu-gallery">
                    <div className="menu-card">
                        <img src={Nasibox} alt="" className="menu-card-img"/>
                        <div className="menu-card-bck">
                            <div className="menu-card-txt">Paket Nasi Box</div>
                        </div>
                        <div className="menu-card-overlay">
                            <div className="menu-card-overlay-inner"> 
                                <h2>Paket Nasi Box</h2>
                                <ul>
                                    <li>Varian menu beragam dan lezat, cocok untuk acara pribadi/kantor.</li>
                                    <li>Harga terjangkau dengan porsi yang memuaskan.</li>
                                    <li>Pilihan menu dapat disesuaikan dengan preferensi Anda.</li>
                                    <li>Cocok untuk acara skala besar.</li>
                                </ul>
                            </div> 
                            <Link to="/menus" onClick={onNasiboxClicked}>Detail Menu &#10140;</Link>
                        </div>
                    </div>
                    <div className="menu-card">
                        <img src={Hemat} alt="" className="menu-card-img"/>
                        <div className="menu-card-bck">
                            <div className="menu-card-txt">Paket Hemat</div>
                        </div>
                        <div className="menu-card-overlay">
                            <div className="menu-card-overlay-inner"> 
                                <h2>Paket Hemat</h2>
                                <ul>
                                    <li>Solusi hemat dengan tetap menjaga kualitas makanan.</li>
                                    <li>Pilihan menu lengkap dengan harga bersahabat.</li>
                                </ul>
                            </div>
                            <Link to="/menus" onClick={onPakethematClicked}>Detail Menu &#10140;</Link>
                        </div>
                    </div>
                    <div className="menu-card">
                        <img src={Tumpeng} alt="" className="menu-card-img"/>
                        <div className="menu-card-bck">
                            <div className="menu-card-txt">Paket Nasi Tumpeng</div>
                        </div>
                        <div className="menu-card-overlay">
                            <div className="menu-card-overlay-inner"> 
                                <h2>Paket Nasi Tumpeng</h2>
                                <ul>
                                    <li>Untuk 7 - 20 orang.</li>
                                    <li>Bisa Ruqest dengan harga relevan.</li>
                                </ul>
                            </div> 
                            <Link to="/menus" onClick={onTumpengClicked}>Detail Menu &#10140;</Link>
                        </div>
                    </div>
                    <div className="menu-card">
                        <img src={Kuker} alt="" className="menu-card-img"/>
                        <div className="menu-card-bck">
                            <div className="menu-card-txt">Kue Kering</div>
                        </div>
                        <div className="menu-card-overlay">
                            <div className="menu-card-overlay-inner">
                                <h2>Kue Kering</h2>
                                <ul>
                                    <li>Cocok untuk acara pengajian, catering sekolah, dan sejenisnya.</li> 
                                </ul>
                            </div>
                            <Link to="/menus" onClick={onKuekeringClicked}>Detail Menu &#10140;</Link>
                        </div>
                    </div>
                </div>
            </section>

            
 
        </div>
    )
}

export default MenuHighlight;