import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';


function FormC4C() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [location, setLocation] = useState('');
    const [amount, setAmount] = useState('');

    function onChangeUsername(e) {
        setUsername(e.target.value);
        console.log(username)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    function onChangePhonenumber(e) {
        setPhonenumber(e.target.value);
        console.log(e.target.value)
    }
    function onChangeLocation(e) {
        setLocation(e.target.value)
        console.log(location)
    }
    function onChangeAmount(e) {
        setAmount(e.target.value)
        console.log(amount)
    }

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phonenumber', phonenumber);
        localStorage.setItem('location', location);
        localStorage.setItem('amount', amount);
    }

    const config = {
        public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: amount,
        currency: location,
        payment_options: 'card,mobilemoney',
        customer: {
            email: email,
            phonenumber: phonenumber,
            name: username,
        },
        customizations: {
            title: 'CHFAK Donations',
            description: 'By donating to us, you provide shelter and education to our children.',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    // function getData() {
    //    // eslint-disable-next-line react-hooks/rules-of-hooks
    //    useEffect(() => {
    //     console.log(localStorage.getItem('username'));
    //     console.log(localStorage.getItem('email'));
    //     console.log(localStorage.getItem('phonenumber'));
    //     console.log(localStorage.getItem('location'));
    //     console.log(localStorage.getItem('amount'));
    // }, [])
    // }
    return (
        <>


            <div className="formbg-outer">
                <div className="formbg">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 spanner">Donate on our site</span>
                        <form onSubmit={onSubmit}>
                            <div className="field padding-bottom--24">
                                <label className="labelell" htmlFor="username">User name</label>
                                <input
                                    type="text"
                                    //name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    placeholder="user name"
                                    required
                                />
                            </div>
                            <div className="field padding-bottom--24">
                                <label className="labelell" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    //name="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div className="field padding-bottom--24">
                                <label className="labelell" htmlFor="phonenumber">Phone number</label>
                                <input
                                    type="text"
                                    // name="phonenumber"
                                    value={phonenumber}
                                    onChange={onChangePhonenumber}
                                    placeholder="phone number"
                                    required
                                />
                            </div>

                            <div className="field padding-bottom--24">
                                <div className="grid--50-50">
                                    <label className="labelell" htmlFor="location">location</label>
                                    {/* <label htmlFor="password">Password</label> */}
                                    {/* <div class="reset-pass">
                        <a href="#">Forgot your password?</a>
                        </div> */}
                                </div>
                                <select
                                    //name="location"
                                    value={location}
                                    onChange={onChangeLocation}
                                    style={{ color: '#fff' }}
                                    required
                                >
                                    <option className="form-control" style={{ color: '#fff' }} value="AFN">Afghanistan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ALL">Albania</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="DZD">Algeria</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Andora</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AOA">Angola</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XCD">Antihua & Barbuda</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ARS">Argentina</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AMD">Armenia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AUD">Australia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Austria</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BSD">Bahamas</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BHD">Bahrain</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BDT">Bangladesh</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BBD">Barbados</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BYN">Belarus</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Belgium</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BZD">Belize</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Benin</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BTN">Bhutan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BOB">Bolivia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BWP">Botswana</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BRL">Brazil</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BND">Brunei</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BGN">Bulgaria</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Burkina Faso</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="BIF">Burundi</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KHR">Cambodia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XAF">Cameroon</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CAD">Canada</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CVE">Cape Verde</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XAF">Central African Republic</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XAF">Chad</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CLP">Chile</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CNY">China</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="COP">Colombia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KMF">Comoros</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CRC">Costa Rica</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="HRK">Croatia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CUP">Cuba</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Cyprus</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CZK">Czech Republic</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CDF">D R Congo</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="DKK">Denmark</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="DJF">Djibouti</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XCD">Dominica</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="DOP">Dominican Republic</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">East Timor</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">Ecuador</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EGP">Egypt</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">El Salvador</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XAF">Equatorial Guniea</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ERN">Eritrea</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Estonia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SZL">Eswatini</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ETB">Ethiopia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="FJD">Fiji</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Finland</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">France</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XAF">Gabon</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GMD">Gambia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GEL">Georgia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Germany</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GHS">Ghana</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Greece</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XCD">Grenada</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GTQ">Guatemala</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GNF">Guinea</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Guniea Bissau</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GYD">Guyana</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="HTG">Haiti</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="HNL">Honduras</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="HUF">Hungary</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ISK">Iceland</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="INR">India</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="IDR">Indonesia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="IRR">Iran</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="IQD">Iraq</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Ireland</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ILS">Israel</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Italy</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Ivory Coast</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="JMD">Jamaica</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="JPY">Japan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="JOD">Jordan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KZT">Kazakhstan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KES">Kenya</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AUD">Kiribati</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KPW">Korea North</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KRW">Korea South</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Kosoyo</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="KWD">Kuwait</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="LBP">Lebanon</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="LSL">Lesotho</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="LRD">Liberia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="LYD">Libya</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MGA">Madagascar</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MWK">Malawi</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MYR">Malaysia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MVR">Maldives</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Mali</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Malta</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">Marshall Islands</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MRO">Mauritania</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MXN">Mexico</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">Micronesia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MDL">Moldova</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Monaco</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MNT">Mongolia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Montenegro</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MAD">Morocco</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MZN">Mozambique</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NAD">Namibia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AUD">Nauru</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NPR">Nepal</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Netherlands</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NZD">New Zealand</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NIO">Nicaragua</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Niger</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NGN">Nigeria</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="MKD">North Macedonia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="NOK">Norway</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="OMR">Oman</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PKR">Pakistan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">Palau</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ILS">Palestine</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PAB">Panama</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PGK">Papua New Guinea</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PYG">Paraguay</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PEN">Peru</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PHP">Phillipines</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="PLN">Poland</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Portugal</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="QAR">Qartar</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="RUB">Russia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="RWF">Rwanda</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SAR">Saudi Arabia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Senegal</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="RSD">Serbia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SCR">Seychelles</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SLL">Sierra Leone</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SGD">Singapore</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SOS">Somalia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ZAR">South Africa</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SSP">South Sudan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Spain</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="LKR">Sri Lanka</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SDG">Sudan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SRD">Suriname</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SEK">Sweden</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="CHF">Switzerland</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="SYP">Syria</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="TWD">Taiwan</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="TZS">Tanzania</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="THB">Thailand</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="XOF">Togo</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="TND">Tunisia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="TRY">Turkey</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="AUD">Tuvalu</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="UGX">Uganda</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="UAH">Ukraine</option>                                
                                    <option className="form-control" style={{ color: '#fff' }} value="AED">United Arab Emirates</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="GBP">United Kingdom</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">United States</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="UYU">Uruguay</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="VUV">Vanuatu</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="EUR">Vatican City</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="VEF">Venezuela</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="VND">Vietnam</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="YER">Yemen</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="ZMW">Zambia</option>
                                    <option className="form-control" style={{ color: '#fff' }} value="USD">Zimbabwe</option>
                                </select>

                                {/* <input type="password" name="password"/> */}
                            </div>
                            <div className="field padding-bottom--24">
                                <label className="labelell" htmlFor="amount"> Amount  ({location})</label>
                                <input
                                    type="text"
                                    //name="amount"
                                    value={amount}
                                    onChange={onChangeAmount}
                                    placeholder="amount"
                                    required
                                />
                            </div>
                            {/* <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <label for="checkbox">
                        <input type="checkbox" name="checkbox"/> Stay signed in for a week
                    </label>
                    </div> */}
                            <div className="field padding-bottom--24">
                                <button
                                    type="submit"
                                    style={{ color: '#fff' }}
                                    onClick={() => {
                                        handleFlutterPayment({
                                            callback: (response) => {
                                                console.log(response);

                                                closePaymentModal() // this will close the modal programmatically
                                            },
                                            onClose: () => { },
                                        });
                                    }}
                                >
                                    Donate
                                </button>
                                {/* <Link href="/prodonations">
                    
                    <button type="submit">Continue</button>
                    {/* <input type="submit" onClick={getData} value="Continue"/> */}
                                {/* </Link>  */}
                            </div>
                            {/* <div class="field">
                    <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                    </div> */}
                        </form>
                    </div>
                </div>
                {/* <div class="footer-link padding-top--24">
                <span>Don't have an account? <a href="">Sign up</a></span>
                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span><a href="#">© Stackfindover</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Privacy & terms</a></span>
                </div>
            </div> */}
            </div>


        </>
    );
};

export default FormC4C;