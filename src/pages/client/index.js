import "./index.css";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from "react";

const Client = ({isAuthenticated, user}) => {

    console.log("isAuthenticated-", isAuthenticated);
    
    return (
        <>
            <header aria-label="Header" className="bx--header">
                <a aria-current="page" className="bx--header__name" href="/client">
                    <img src="/image/icons/shopping_catalog.svg" />
                    <span className="mx-2">Client Portal</span>
                </a>
                <div className="bx--header__global">
                    <div className="bx--header__global ">
                        <span className="mt-2">{isAuthenticated && JSON.parse(user).username}</span>
                        <div className="dropdown">
                            <button aria-label="Switch" className="bx--header__action dropbtn" type="button">
                                <img src="/image/icons/user.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main className="" id="main-content">
                <div className="bx--grid">
                    <div className="bx--row">
                        <div className="bx--col-lg-12">
                            <h1 className="content">Products Directory</h1>
                            <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                        </div>
                        <div className="bx--col-lg-12 price_button">
                            <button className="bx--btn bx--btn--primary bx--btn--field price" type="button">
                                Total
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M10 13H22V15H10zM10 18H22V20H10z"></path>
                                    <path
                                        d="M30,6.4141,28.5859,5l-3.35,3.35A12.0812,12.0812,0,0,0,23.65,6.7637L27,3.4141,25.5859,2,21.9766,5.6094A11.9792,11.9792,0,0,0,5.6094,21.9766L2,25.5859,3.4141,27l3.35-3.35A12.0812,12.0812,0,0,0,8.35,25.2363L5,28.5859,6.4141,30l3.6093-3.6094A11.9792,11.9792,0,0,0,26.3906,10.0234ZM16,26A10,10,0,1,1,26,16,10.0114,10.0114,0,0,1,16,26Z">
                                    </path>
                                    <title>Cost total</title>
                                </svg>
                            </button>
            
                            <button className="bx--btn bx--btn--tertiary bx--btn--field eth-price" type="button">
                                ETH Price
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M21.4023,15.6426A4.9727,4.9727,0,0,0,23,12V11a5.0059,5.0059,0,0,0-5-5H17V3H15V6H10V26h5v3h2V26h2a5.0059,5.0059,0,0,0,5-5V20A4.9834,4.9834,0,0,0,21.4023,15.6426ZM12,8h6a3.0033,3.0033,0,0,1,3,3v1a3.0033,3.0033,0,0,1-3,3H12ZM22,21a3.0033,3.0033,0,0,1-3,3H12V17h7a3.0033,3.0033,0,0,1,3,3Z"></path><title>Currency baht</title></svg>
                            </button>
                            <table className="bx--data-table ">
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="bx--table-header-label">S.No</span>
                                        </th>
                                        <th>
                                            <span className="bx--table-header-label">Product</span>
                                        </th>
                                        <th>
                                            <span className="bx--table-header-label">Buy/Sell/Hold</span>
                                        </th>
                                        <th>
                                            <span className="bx--table-header-label">P/L</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            XYZ
                                        </td>
                                        <td>
                                            Hold
                                        </td>
                                        <td>
                                            10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2
                                        </td>
                                        <td>
                                            ABC
                                        </td>
                                        <td>
                                            Sell
                                        </td>
                                        <td>
                                            20
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bx--col-lg-12 button-grp">
                            <button className="bx--btn bx--btn--secondary bx--btn--field mx-1" type="button">
                                Support
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><circle cx="16" cy="23.5" r="1.5"></circle><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"></path><title>Help</title></svg>
                            </button>
                            <button className="bx--btn bx--btn--secondary bx--btn--field mx-1" type="button">
                                Trading View
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="22" cy="24" r="2"></circle><path d="M29.7769,23.4785A8.64,8.64,0,0,0,22,18a8.64,8.64,0,0,0-7.7769,5.4785L14,24l.2231.5215A8.64,8.64,0,0,0,22,30a8.64,8.64,0,0,0,7.7769-5.4785L30,24ZM22,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,22,28Z"></path><circle cx="8" cy="8" r="1"></circle><circle cx="8" cy="16" r="1"></circle><circle cx="8" cy="24" r="1"></circle><path d="M5,21h7V19H5V13H21v3h2V5a2,2,0,0,0-2-2H5A2,2,0,0,0,3,5V27a2,2,0,0,0,2,2h7V27H5ZM5,5H21v6H5Z"></path><title>Data view</title></svg>
                            </button>
                            <button className="bx--btn bx--btn--secondary bx--btn--field mx-1" type="button">
                                Set Up
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zM21 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S22.7 12 21 12zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2V24zM11 20c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S9.3 20 11 20z"></path><title>Settings adjust</title></svg>
                            </button>
                            <button className="bx--btn bx--btn--secondary bx--btn--field mx-1" type="button">
                                Close
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" className="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path><title>Close</title></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps)(Client);