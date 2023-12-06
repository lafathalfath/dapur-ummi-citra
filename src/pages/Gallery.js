import './Gallery.css';
import Sedekah1 from '../assets/menu_gallery/sedekah jumat 1.jpg';
import Sedekah2 from '../assets/menu_gallery/sedekah jumat 2.jpg';
import Sedekah3 from '../assets/menu_gallery/sedekah jumat 3.jpg';
import Sedekah4 from '../assets/menu_gallery/sedekah jumat 4.jpg';
import Sedekah5 from '../assets/menu_gallery/sedekah jumat 5.jpg';
import Sedekah6 from '../assets/menu_gallery/sedekah jumat 6.jpg';
import Sedekah7 from '../assets/menu_gallery/sedekah jumat 7.jpg';
import Sedekah8 from '../assets/menu_gallery/sedekah jumat 8.jpg';
import PaketBox from '../assets/menu_gallery/paket nasi box a (ayam bakar).jpg';
import PaketHemat1 from '../assets/menu_gallery/paket hemat 1 (ayam bakar).jpg';
import PaketHemat2 from '../assets/menu_gallery/paket hemat 1 (nasi urap).jpg';
import Tumpeng1 from '../assets/menu_gallery/nasi tumpeng 1.jpg';
import Tumpeng2 from '../assets/menu_gallery/nasi tumpeng 2.jpg';
import NasBakar from '../assets/menu_gallery/nasi bakar.jpg';
import Catering1 from '../assets/menu_gallery/menu catering sekolah 1.jpg';
import Catering2 from '../assets/menu_gallery/menu catering sekolah 2.jpg';
import Catering3 from '../assets/menu_gallery/menu catering sekolah 3.jpg';
import Catering4 from '../assets/menu_gallery/menu catering sekolah 4.jpg';
import Catering5 from '../assets/menu_gallery/menu catering sekolah 5.jpg';
import Kuker1 from '../assets/menu_gallery/kue kering 1.jpg';
import Kuker2 from '../assets/menu_gallery/kue kering 2.jpg';
import Kuker3 from '../assets/menu_gallery/kue kering 3.jpg';

const Gallery=()=>{
    return(
        <section className='gallery-page'>
            <h1>GALLERY UMMI CITRA</h1>

            <div className='gallery-container'>
                <img src={Sedekah1} alt=''/>
                <img src={Sedekah2} alt=''/>
                <img src={Sedekah3} alt=''/>
                <img src={Sedekah4} alt=''/>
                <img src={Sedekah5} alt=''/>
                <img src={Sedekah6} alt=''/>
                <img src={Sedekah7} alt=''/>
                <img src={Sedekah8} alt=''/>
                <img src={PaketBox} alt=''/>
                <img src={PaketHemat1} alt=''/>
                <img src={PaketHemat2} alt=''/>
                <img src={Tumpeng1} alt=''/>
                <img src={Tumpeng2} alt=''/>
                <img src={NasBakar} alt=''/>
                <img src={Catering1} alt=''/>
                <img src={Catering2} alt=''/>
                <img src={Catering3} alt=''/>
                <img src={Catering4} alt=''/>
                <img src={Catering5} alt=''/>
                <img src={Kuker1} alt=''/>
                <img src={Kuker2} alt=''/>
                <img src={Kuker3} alt=''/>
            </div>
        </section>
    )
}

export default Gallery;