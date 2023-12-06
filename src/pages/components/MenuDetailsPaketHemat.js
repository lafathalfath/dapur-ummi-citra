import './MenuDetails.css';
import BannerImagePaketHemat from '../../assets/Banner/details-paketHemat.png';

const MenuDetailsPaketHemat = ()=>{
    return(
        <section className='page-pakethemat'>
            <img src={BannerImagePaketHemat} alt="" className='menu-details-image'/>
            <h1 style={{textAlign: 'center'}}>Daftar Menu</h1>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>     
                <div className='daftar-paket'>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box 1</span><br/>
                            Rp. 20.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Aayam/Telor/Ikan*</li>
                                <li>Sayur*</li>
                                <li>Sambal</li>
                                <li>Buah</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box 2</span><br/>
                            Rp. 22.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Aayam/Telor/Ikan*</li>
                                <li>Sayur*</li>
                                <li>Sambal</li>
                                <li>Buah</li> 
                                <li>Kerupuk</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='paket-details'>
                        <div className='header-paket'>
                            <span>Box 3</span><br/>
                            Rp. 25.000,-/Box
                        </div>
                        <div className='paket-list-details'>
                            <ul>
                                <li>Nasi Putih</li>
                                <li>Aayam/Telor/Ikan*</li>
                                <li>Sayur*</li>
                                <li>Sambal</li>
                                <li>Buah</li> 
                                <li>Kerupuk</li>
                                <li>Air Mineral GLS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='menu-details-order'>
                <a href='https://wa.me/6282210318900/' target='_blank' rel='noreferrer noopener'>Pesan Sekarang &#10140;</a>
            </div>
        </section>
    )
}

export default MenuDetailsPaketHemat;