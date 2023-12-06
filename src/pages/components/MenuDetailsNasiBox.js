import './MenuDetails.css';
import BannerImageNasibox from '../../assets/Banner/details-paketNasiBox.png';

const MenuDetailsNasiBox=()=>{
    return(
        <>
            {/* dynamic image */}
            <img src={BannerImageNasibox} alt="" className='menu-details-image'/>

            <h1 style={{textAlign: 'center'}}>Daftar Menu</h1>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>     
                <div className='daftar-paket'>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box A</span><br/>
                            Rp. 28.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Telor Pindang</li>
                                <li>
                                    Ayam (Pilihan)<br/>
                                    <ol>
                                        <li>Ayam Bumbu Kecap</li>
                                        <li>Ayam Bumbu Bali</li>
                                        <li>Ayam Rica-rica</li>
                                    </ol>
                                </li>
                                <li>
                                    Sayuran (Pilihan)<br/>
                                    <ol>
                                        <li>Capcay</li>
                                        <li>Oseng Buncis</li>
                                        <li>Bihun Goreng</li>
                                        <li>Mie Goreng</li>
                                    </ol>
                                </li>
                                <li>Buah</li>
                                <li>Air Mineral</li>
                            </ul>
                        </div>
                    </div>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box B</span><br/>
                            Rp. 33.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Telor Pindang</li>
                                <li>
                                    Ayam (Pilihan)<br/>
                                    <ol>
                                        <li>Ayam Goreng Mentega</li>
                                        <li>Ayam Bali</li>
                                        <li>Ayam Rica-rica</li>
                                        <li>Ayam Panggang Kecap</li>
                                    </ol>
                                </li>
                                <li>
                                    Daging (Pilihan)<br/>
                                    <ol>
                                        <li>Daging Teriyaki</li>
                                        <li>Daging Rolade</li>
                                        <li>Daging Lada Hitam</li>
                                        <li>Daging Rica-rica</li>
                                    </ol>
                                </li>
                                <li>
                                    Sayuran (Pilihan)<br/>
                                    <ol>
                                        <li>Capcay</li>
                                        <li>Oseng Buncis</li>
                                        <li>Bihun Goreng</li>
                                        <li>Mie Goreng</li>
                                    </ol>
                                </li>
                                <li>Kerupuk</li>
                                <li>Buah</li>
                                <li>Air Mineral</li>
                            </ul>
                        </div>
                    </div>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box C</span><br/>
                            Rp. 38.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Telor Pindang</li>
                                <li>
                                    Ayam (Pilihan)<br/>
                                    <ol>
                                        <li>Ayam Goreng Mentega</li>
                                        <li>Ayam Bali</li>
                                        <li>Ayam Rica-rica</li>
                                        <li>Ayam Balado</li>
                                    </ol>
                                </li>
                                <li>Sambal Goreng Hati Sapi</li> 
                                <li>
                                    Sayuran (Pilihan)<br/>
                                    <ol>
                                        <li>Capcay</li>
                                        <li>Oseng Buncis</li>
                                        <li>Bihun Goreng</li>
                                        <li>Mie Goreng</li>
                                    </ol>
                                </li>
                                <li>
                                    Telor (Pilihan)<br/>
                                    <ol>
                                        <li>Telor Pindang</li>
                                        <li>Telor Balado</li>
                                        <li>Telor Bumbu Bali</li> 
                                    </ol>
                                </li>
                                <li>Kerupuk</li>
                                <li>Buah</li>
                                <li>Air Mineral</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu-details-order'>
                <a href='https://wa.me/6282210318900/' target='_blank' rel='noreferrer noopener'>Pesan Sekarang &#10140;</a>
            </div>
        </>
    )
}

export default MenuDetailsNasiBox;