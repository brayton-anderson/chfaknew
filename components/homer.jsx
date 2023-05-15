import Image from 'next/image';
import Link from 'next/link';
import Carousel from './Carousel';
import {tagline} from './data';

// import styles from "../styles/Home.module.css"

function Homer() {
    return (
        <>
            
            {/* HERO SECTION  */}
            <div className="homer">
                
            <div className="app">
                        <Carousel images={tagline} />
                    </div>
                    
                    

                
                {/* <!-- HERO SECTION 3 --> */}
                <section className="achievements">
                    <div className="col-left">
                        <div className="features"></div>
                    </div>
                    <div className="col-right">
                        <h3>ABOUT US</h3>
                        <p>Children&rsquo;s Home Founders Association of Kenya (CHFAK) is an organization registered under the Societies Act of Kenya under registration number 51857. The organization was founded in 2018 and officially registered in 2019.</p>
                            <p className="p_1"><br></br>The organization&rsquo;s current membership comprises of 53 Children Homes with a combined population of 5,000 children.</p>
                            <p className="p_2"><br></br>Our misssion is to unite Charitable Children Institutions (CCI&rsquo;s) founders to speak in one voice and work in harmony with all stakeholders to promote the welfare of both the children and vulnerable groups.</p>                                        
                            <Link href="/about">
                                    READ MORE
                                </Link>
                        
                    </div>

                </section>

                {/* <!-- HERO SECTION ADDITIONAL --> */}
                <section className="additional">
                    <h3>OUR WHY</h3>
                    <div className="container">
                        <div className="card">
                            <p>The Constitution of Kenya envisages a country where all citizens irrespective of their social status enjoy all rights espoused in the Bill of Rights. Street Children are amongst the most vulnerable members of the society and often endure
                                inherent vices such as diseases, drug abuse, sexual exploitation and unsustainable livelihoods.</p>
                            <p className="p_1"><br></br>Many factors push children to live and work on the streets. These factors include: poverty, death of parents, separation/ divorce of parents, abandonment, parents living on the streets, mistreatment by parents/ relatives, tribal
                                displacement, inadequacy of resources at home, influence by friends, insecurity, getting lost during travelling, being born on the streets, corporal punishments, domestice violence or in search of employment among many others.</p>
                            <p><br></br>CHFAK through its members rescues these children and offers care and protection whilst providing the necessary basic needs.</p>

                            
                        </div>
                    </div>
                </section>
                {/* <!-- HERO SECTION 2/1 --> */}
                <section className="services2 " id="services2">
                    <h3>C4C CAMPAIGN</h3>
                    <div className="container3">
                        <div className="card">
                            <p>The CHFAK (Children Homes Founders Association of Kenya) C4C (Care for Children Homes) Campaign is a call by the founders of children homes in Kenya to members of the public to support them in raising funds to feed and educate the over
                                5,000 children in their care.</p>
                                <p className="p_1"><br></br>Over the years, founders of children homes have used their personal resources and those of a few well wishers to do the noble job of giving a second chance and home to disadvantaged children in our society.
                                </p>
                                <p> <br></br>The COVID-19 pandemic has brought a lot of challenges and occasioned a sharp increase in the cost of living. It is thus becoming increasingly difficult for the children homes to continue supporting the children under their care
                                    without additional help.</p>
                            

                        </div>
                            <Link href="/c4c">
                                    LEARN MORE
                                </Link>
                    </div>
                </section>


                {/* <!-- HERO SECTION 4 --> */}
                <section className="success">
                    <h3>OUR MANDATE</h3>
                    <div className="Carousel Owl-Carousel">
                        <div className="card">
                            <div className="box">
                                <i className="fa fa-users"></i>
                                <h4>Unifying</h4>
                                <p>Bringing together Children Home Founders to speak in one voice as a strong body for the welfare of the children.
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                <i className='fa fa-tools'></i>
                                <h4>Capacity Building</h4>
                                <p>Building the capacity of Children Home Founders through training and awareness creation for quality service delivery.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className='fa-solid fa-people-arrows-left-right'></i>
                                <h4>Resource Mobilization</h4>
                                <p> Mobilizing resources as Founders of Children Homes in order to cater to the needs of the children in our care.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fa fa-users"></i>
                                <h4>Stake Holder Co-ordination</h4>
                                <p>Bringing harmony amongst stakeholders to ensure the proper and effective running of Children Homes.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fa fa-info-circle"></i>
                                <h4>Policy Advocacy</h4>
                                <p>Promoting rescue, rehabilitation, re-intergration, resocialization and prevention interventions for street families by lobbying government and other stakeholders to establish policies that counter the root causes that lead persons
                                    to live and work on the streets and to be able to guarantee them a respectful and dignified life.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
            

        </>
    );
}

export default Homer