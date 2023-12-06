import './Contact.css';
import WaIcon from '../assets/wa icon.png';
import MailIcon from '../assets/mail icon.png';
import MapsIcon from '../assets/maps icon.png';
import ContactBanner from '../assets/Banner/ContactBanner.png';


const Contact=()=>{
    return(
        <section className='contact-page'>
            <img src={ContactBanner} alt='' className='contact-banner'/>
            <div className='contact-details'>
                <h1>HUBUNGI KAMI DI :</h1>
                <div className='contact-container'>
                    <div className='contact-component-clock'>Senin - Sabtu : 08.30 - 17.00</div>
                    <div className='contact-component'>
                        <a href='https://wa.me/6282210318900/' target='_blank' rel="noopener noreferrer"><img src={WaIcon} alt='' className='direct'/></a>
                        <a href='https://wa.me/6282210318900/' target='_blank' rel="noopener noreferrer">+62 822-1031-8900</a>
                    </div>
                    <div className='contact-component'>
                        <a href='mailto:dapurummicitra1@gmail.com' target='_blank' rel="noopener noreferrer"><img src={MailIcon} alt='' className='direct'/></a>
                        <a href='mailto:dapurummicitra1@gmail.com'>dapurummicitra1@gmail.com</a>
                    </div>
                    <div className='contact-component'>
                        <a href='https://goo.gl/maps/JoZwHhrPrS9q7Wnb7' target='_blank' rel="noopener noreferrer"><img src={MapsIcon} alt='' className='direct'/></a>
                        <a href='https://goo.gl/maps/JoZwHhrPrS9q7Wnb7' target='_blank' rel="noopener noreferrer">Cluster royal 3, Jatisari, Jatiasih, Kota Bekasi, Jawa Barat.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;