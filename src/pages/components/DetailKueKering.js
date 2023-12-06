import './MenuDetails.css';
import BannerDatailKueKering from '../../assets/Banner/details-kueKering.png';
import ImageKueKering1 from '../../assets/menu_gallery/kue kering 1.jpg';
import ImageKueKering2 from '../../assets/menu_gallery/kue kering 2.jpg';
import ImageKueKering3 from '../../assets/menu_gallery/kue kering 3.jpg';

const DetailKueKering = ()=>{
    return(
        <>
            <img src={BannerDatailKueKering} alt='' className='menu-details-image'/>
            <div className='detail-content'>
                <div className='details-gallery'>
                    <img src={ImageKueKering1} alt=''/>
                    <img src={ImageKueKering2} alt=''/>
                    <img src={ImageKueKering3} alt=''/>
                </div>
                <div className='detail-menu'>
                    <h1>Kue Kering</h1>
                    <h2 style={{color: '#DADA15'}}>Variant</h2>
                    <ul>
                        <li>Castangle</li>
                        <li>Nastar</li>
                        <li>Putri Salju</li>
                        <li>Kue Kacang</li>
                        <li>Kue Kacang Almond</li>
                        <li>Kacang Bawang</li>
                        <li>Sagu Keju</li>
                        <li>Kue Cokelat Chocochips</li>
                        <li>dll</li> 
                    </ul>
                    <h2 style={{color: '#DADA15'}}>Harga</h2>
                    <p>Harga satuan: Start From Rp. 50.000,-<br/>
                    Harga Paket: Rp. 250.000,- (isi 3)</p>
                    <div className='menu-details-order'>
                        <a href='https://wa.me/6282210318900/' target='_blank' rel='noreferrer noopener'>Pesan Sekarang &#10140;</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailKueKering;