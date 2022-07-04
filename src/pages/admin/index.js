import "./index.css";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from "react";

const Admin = ({isAuthenticated, user}) => {

    console.log("isAuthenticated-", isAuthenticated);
    
    return (
        <>
            <header aria-label="Header" className="bx--header">
                <a aria-current="page" className="bx--header__name" href="/admin">
                    <img src="/image/icons/shopping_catalog.svg" />
                    <span className="mx-2">Admin Portal</span>
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
            <main class="" id="main-content">
                <div class="bx--grid">
                    <div class="bx--row">
                        <div class="bx--col-lg-12">
                            <h1 class="content">Admin's View</h1>
                            <span class="desc">Lorem Ipsum is simply dummy text of the printing and typesetting</span>
                        </div>
                        <div class="bx--col-lg-12 price_button">
                            <button class="bx--btn bx--btn--primary bx--btn--field price" type="button">
                                Total
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    width="20" height="20" class="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M10 13H22V15H10zM10 18H22V20H10z"></path>
                                    <path
                                        d="M30,6.4141,28.5859,5l-3.35,3.35A12.0812,12.0812,0,0,0,23.65,6.7637L27,3.4141,25.5859,2,21.9766,5.6094A11.9792,11.9792,0,0,0,5.6094,21.9766L2,25.5859,3.4141,27l3.35-3.35A12.0812,12.0812,0,0,0,8.35,25.2363L5,28.5859,6.4141,30l3.6093-3.6094A11.9792,11.9792,0,0,0,26.3906,10.0234ZM16,26A10,10,0,1,1,26,16,10.0114,10.0114,0,0,1,16,26Z">
                                    </path>
                                    <title>Cost total</title>
                                </svg>
                            </button>
                            <button class="bx--btn bx--btn--tertiary bx--btn--field eth-price" type="button">
                                ETH Price
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" class="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M21.4023,15.6426A4.9727,4.9727,0,0,0,23,12V11a5.0059,5.0059,0,0,0-5-5H17V3H15V6H10V26h5v3h2V26h2a5.0059,5.0059,0,0,0,5-5V20A4.9834,4.9834,0,0,0,21.4023,15.6426ZM12,8h6a3.0033,3.0033,0,0,1,3,3v1a3.0033,3.0033,0,0,1-3,3H12ZM22,21a3.0033,3.0033,0,0,1-3,3H12V17h7a3.0033,3.0033,0,0,1,3,3Z"></path><title>Currency baht</title></svg>
                            </button>
                            <table class="bx--data-table ">
                                <thead>
                                    <tr>
                                        <th>
                                            <span class="bx--table-header-label">S.No</span>
                                        </th>
                                        <th>
                                            <span class="bx--table-header-label">Client ID</span>
                                        </th>
                                        <th>
                                            <span class="bx--table-header-label">Wallet Address</span>
                                        </th>
                                        <th>
                                            <span class="bx--table-header-label">% Commission</span>
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
                                            4
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
                                            5
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="bx--col-lg-12 button-grp">
                            <button class="bx--btn bx--btn--secondary bx--btn--field mx-1" type="button">
                                Trade History
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" class="bx--btn__icon"  viewBox="0 0 32 32" aria-hidden="true"><path d="M2 28H30V30H2zM27 11a1 1 0 001-1V7a1 1 0 00-.66-.94l-11-4a1 1 0 00-.68 0l-11 4A1 1 0 004 7v3a1 1 0 001 1H6V24H4v2H28V24H26V11zM6 7.7L16 4.06 26 7.7V9H6zM18 24H14V11h4zM8 11h4V24H8zM24 24H20V11h4z"></path><title>Finance</title></svg>
                            </button>
                            <button class="bx--btn bx--btn--secondary bx--btn--field" type="button">
                                Commission History
                                <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" class="bx--btn__icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M24,7V5H8V7h5.5a4.4906,4.4906,0,0,1,4.45,4H8v2h9.95A4.4906,4.4906,0,0,1,13.5,17H8v2.3452L17.6169,28l1.3379-1.4863L10.606,19H13.5a6.5041,6.5041,0,0,0,6.4746-6H24V11H19.9746A6.4719,6.4719,0,0,0,18.18,7Z"></path><title>Currency rupee</title></svg>
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

export default connect(mapStateToProps)(Admin);