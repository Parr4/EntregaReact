import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Footer() {
    return (
        <footer>
            <div className="linea">
                <div className="NavBarBot row">
                    <div className="col-12 col-md-6">
                        <h3>CONTACTO</h3>
                        <p>-CORREO: contacto@shamanmanga.cl</p>
                        <p>-HORARIO DE ATENCION: Lunes a viernes, desde las 10:00 am hasta las 18:00 hrs.</p>
                    </div>
                    <div className="col col-md-6">
                        <h3 className="rrss">REDES SOCIALES</h3>
                        <ul className="rrss row">
                            <li className='col'><a href="https://www.Instagram.com"><img className="logo" src="img/ig-logo.png" alt="Instagram"/></a></li>
                            <li className='col'><a href="https://facebook.com"><img className="logo" src="../img/fb-logo.png" alt="Facebook"/></a></li>
                            <li className='col'><a href="https://facebook.com"><img className="logo" src="../img/wsp-logo.png" alt="Whatsapp"/></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}