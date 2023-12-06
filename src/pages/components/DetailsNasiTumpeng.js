import './MenuDetails.css';
import BannerDatailNasiTumpeng from '../../assets/Banner/details-paketTumpeng.png';
import ImageTumpeng1 from '../../assets/menu_gallery/nasi tumpeng 1.jpg';
import ImageTumpeng2 from '../../assets/menu_gallery/nasi tumpeng 2.jpg';

const DetailNasiTumpeng = ()=>{
    return(
        <>
            <img src={BannerDatailNasiTumpeng} alt='' className='menu-details-image'/>
            <div className='detail-content'>
                <div className='details-gallery'>
                    <img src={ImageTumpeng1} alt=''/>
                    <img src={ImageTumpeng2} alt=''/>
                </div>
                <div className='detail-menu'>
                    <h1>Nasi Tumpeng</h1>
                    <h2 style={{color: '#DADA15'}}>Deskripsi</h2>
                    <ul>
                        <li>Untuk 7 - 20 orang</li>
                        <li>Telor Pindang</li>
                        <li>Kentang Mustofa</li>
                        <li>Ayam Bakar</li>
                        <li>Sambal Goreng Ati</li>
                        <li>Urap</li>
                        <li>Perkedel Kentang</li>
                    </ul>
                    <h2 style={{color: '#DADA15'}}>Harga</h2>
                    <p>Start From Rp. 500.000,-</p>
                    <div className='menu-details-order'>
                        <a href='https://wa.me/6282210318900/' target='_blank' rel='noreferrer noopener'>Pesan Sekarang &#10140;</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailNasiTumpeng;