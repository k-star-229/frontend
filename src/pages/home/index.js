import './index.css';
import { FaHome, FaUsers, FaHandshake, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <>
            <div id="tm-bg"></div>
            <div id="tm-wrap">
                <div className="tm-main-content">
                    <div className="container tm-site-header-container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-md-col-xl-6 mb-md-0 mb-sm-4 mb-4 tm-site-header-col">
                                <div className="tm-site-header">
                                    <h1 className="mb-4">Trading Dapp</h1>
                                    <img src="image/underline.png" className="img-fluid mb-4" alt="" />
                                    <p>A Master program execute trades in Delta.exchange platform and same trade signals are broadcast to multiple client as a blockchain transaction.</p>        
                                </div>                        
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div className="content">
                                    <div className="grid">
                                        <div className="grid__item" id="home-link">
                                            <div className="product">
                                                <div className="tm-nav-link">
                                                    <Link to="/admin/signin" className='text-white'>
                                                        <p className="tm-nav-icon">
                                                            <FaHome  />
                                                        </p>
                                                        <span className="tm-nav-text">Admin Portal</span>
                                                        <div className="product__bg"></div>
                                                    </Link>
                                                            
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid__item" id="team-link">
                                            <div className="product">
                                                <div className="tm-nav-link">
                                                    <Link to="/client/signin" className='text-white'>
                                                        <p className="tm-nav-icon">
                                                            <FaUsers  />
                                                        </p>
                                                        <span className="tm-nav-text">Client Portal</span>
                                                        <div className="product__bg"></div>   
                                                    </Link>         
                                                </div>  
                                            </div>
                                        </div>

                                        <div className="grid__item">
                                            <div className="product">
                                                <div className="tm-nav-link">
                                                    <Link to="/master/signin" className='text-white'>
                                                        <p className="tm-nav-icon">
                                                            <FaHandshake  />
                                                        </p>
                                                        <span className="tm-nav-text">Master Portal</span>
                                                        <div className="product__bg"></div>
                                                    </Link>
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="grid__item">
                                            <div className="product">
                                                <div className="tm-nav-link">
                                                    <p className="tm-nav-icon">
                                                        <FaComments  />
                                                    </p>
                                                    <span className="tm-nav-text">Contact</span>
                                                    <div className="product__bg"></div>             
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>                       
                            </div>
                        </div>                
                    </div>
                    <footer>
                        <p className="small tm-copyright-text">Copyright &copy; <span className="tm-current-year">2022</span> Trading Dapp </p>
                    </footer>
                </div>  
            </div>
        </>
    );
}

export default Home;