import React from 'react'
import Footer1 from './Footer1'
import Header1 from './Header1'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    return (
        <div>
        <Header1 />

<section className="pt-3 pb-3 mb-2 card-grid">
	<div className="container">
		<div className="row">
			<div className="col-12">
      <Carousel>
						
						<div className="card bg-dark-overlay-3 h-400 h-sm-500 h-md-600 rounded-0" style={{backgroundImage: 'url(assets/images/blog/16by9/05.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
							
		          <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5"> 
		            <div className="w-100 my-auto">
			            <div className="col-md-10 col-lg-7 mx-auto text-center">
			            	
			            	<a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a>
			            	
			              <h2 className="text-white display-5"><a href="post-single-2.html" className="btn-link text-reset fw-normal">Never underestimate the influence of social media</a></h2>
			              <p className="text-white">For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.</p>
			              
										<ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
										  <li className="nav-item">
										    <div className="nav-link">
											    <div className="d-flex align-items-center text-white position-relative">
											      <div className="avatar avatar-sm">
															<img className="avatar-img rounded-circle" src="assets/images/avatar/14.jpg" alt="avatar" />
														</div>
														<span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Carolyn</a></span>
													</div>
												</div>
										  </li>
										  <li className="nav-item">Jan 26, 2021</li>
										  <li className="nav-item"><a href="#" className="btn-link"><i className="far fa-comment-alt me-1"></i> 5 Comments</a></li>
										</ul>
			            </div>
		            </div>
		          </div>
						</div>
						
						<div className="card bg-dark-overlay-3 h-400 h-sm-500 h-md-600 rounded-0" style={{backgroundImage: "url(assets/images/blog/16by9/02.jpg)", backgroundPosition: 'center left', backgroundSize: 'cover'}}>
							
		          <div className="card-img-overlay d-flex align-items-center p-3 p-sm-5"> 
		            <div className="w-100 my-auto">
			            <div className="col-md-10 col-lg-7 mx-auto text-center">
			            	
			            	<a href="#" className="badge bg-danger mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Lifestyle</a>
			            	
			              <h2 className="text-white display-5"><a href="post-single-2.html" className="btn-link text-reset fw-normal">This is why this year will be the year of startups</a></h2>
			              <p className="text-white">Particular way thoroughly unaffected projection favorable Mrs can be projecting own. </p>
			              
										<ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
										  <li className="nav-item">
										    <div className="nav-link">
											    <div className="d-flex align-items-center text-white position-relative">
											      <div className="avatar avatar-sm">
															<img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
														</div>
														<span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Louis</a></span>
													</div>
												</div>
										  </li>
										  <li className="nav-item">Nov 15, 2021</li>
										  <li className="nav-item"><a href="#" className="btn-link"><i className="far fa-comment-alt me-1"></i> 3 Comments</a></li>
										</ul>
			            </div>
		            </div>
		          </div>
						</div>


            </Carousel>
				</div>
			</div>
		</div>
</section>



<section className="p-0">
	<div className="container">
    <div className="row g-4">
     
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-img-scale overflow-hidden">
          
					<span className="card-featured" title="Featured post"><i className="fas fa-star"></i></span>
          
          <img src="assets/images/blog/3by4/01.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4"> 
            <div>
              
              <a href="#" className="badge bg-warning"><i className="fas fa-circle me-2 small fw-bold"></i>Technology</a>
            </div>
            <div className="w-100 mt-auto">
              
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">Best Pinterest boards for learning about business</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a>
                  </div>
                </li>
                <li className="nav-item">Aug 18, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-image-scale">
          
          <img src="assets/images/blog/3by4/02.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4"> 
            <div>
              
              <a href="#" className="badge bg-success mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a>
            </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">5 intermediate guide to business</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Joan</a>
                  </div>
                </li>
                <li className="nav-item">Jun 03, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-12 col-lg-4">
        <div className="card card-overlay-bottom bg-parallax h-400 h-lg-100" data-jarallax-video="https://youtu.be/WS-MfCjzztg" data-speed="1.2">
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
              <div>
                
                <a href="#" className="badge bg-dark fs-6 mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
              </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">5 investment doubts you should clarify</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Dennis</a>
                  </div>
                </li>
                <li className="nav-item">Jan 28, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-image-scale">
          
          <img src="assets/images/blog/3by4/04.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
            <div>
              
              <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a>
            </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">7 common mistakes everyone makes while traveling</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a>
                  </div>
                </li>
                <li className="nav-item">May 26, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6 col-lg-4">
        <div className="card bg-primary h-400 h-sm-100">
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
            <div>
              
              <a href="#" className="badge bg-dark fs-6 mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Travel</a>
              
              <blockquote className="blockquote blockquote-icon-bg mt-3">
								<p className="mb-0 text-white">Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking</p>
								<footer className="blockquote-footer text-white">Steve Jobs @ <cite title="Source Title">Apple Inc</cite></footer>
							</blockquote>
            </div>
            <div className="w-100 mt-auto">
             
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="d-flex align-items-center position-relative">
                    <div className="avatar avatar-xs">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                    </div>
                    <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Samuel</a></span>
                  </div>
                </li>
                <li className="nav-item">May 26, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-image-scale">
          
          <img src="assets/images/blog/3by4/05.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4"> 
            <div>
              
              <a href="#" className="badge bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Covid-19</a>
            </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">Bad habits that people in the industry need to quit</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Billy</a>
                  </div>
                </li>
                <li className="nav-item">Feb 22, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6 col-lg-4">
        <div className="card bg-light border h-500 h-sm-100">
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
            <div>
              
              <a href="#" className="badge bg-warning mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Covid-19</a>
              
              <h3><a href="#" className="btn-link text-reset">The pros and cons of business agency</a></h3>
              <p className="card-text d-none d-md-block">Interested has all Devonshire difficulty gay assistance joy.</p>
              <div className="mt-3 rounded overflow-hidden">
								<div className="ratio ratio-16x9">
									<iframe width="560" height="315" src="https://www.youtube.com/embed/tXHviS-4ygo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
							</div>
            </div>
            <div className="w-100 mt-auto">
              
              <ul className="nav nav-divider align-items-center small">
                <li className="nav-item position-relative">
                  <div className="d-flex align-items-center position-relative">
                    <div className="avatar avatar-xs">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                    </div>
                    <span className="ms-3">by <a href="#" className="stretched-link text-reset btn-link">Joan</a></span>
                  </div>
                </li>
                <li className="nav-item">Aug 28, 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-image-scale">
          
          <img src="assets/images/blog/3by4/06.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4">
            <div>
              
              <a href="#" className="badge bg-primary mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Business</a>
            </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">7 common mistakes everyone makes while traveling</a></h4>
              
              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Bryan</a>
                  </div>
                </li>
                <li className="nav-item">May 26, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     
      
      
      <div className="col-sm-6 col-lg-4">
        <div className="card card-overlay-bottom card-image-scale">
          
          <img src="assets/images/blog/3by4/07.jpg" alt="" />
          
          <div className="card-img-overlay d-flex flex-column p-3 p-md-4"> 
            <div>
              
              <a href="#" className="badge bg-info mb-2"><i className="fas fa-circle me-2 small fw-bold"></i>Covid-19</a>
            </div>
            <div className="w-100 mt-auto">
              
              <h4 className="text-white"><a href="post-single-5.html" className="btn-link text-reset stretched-link">Ten questions you should answer truthfully.</a></h4>

              <ul className="nav nav-divider text-white-force align-items-center small">
                <li className="nav-item position-relative">
                  <div className="nav-link">by <a href="#" className="stretched-link text-reset btn-link">Billy</a>
                  </div>
                </li>
                <li className="nav-item">Feb 22, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
	</div>
</section>



<section className="py-3 my-2">
	<div className="container">
		<div className="row">
			<div className="col">
				<a href="#" className="d-block card-img-flash  rounded-3 overflow-hidden">
					<img src="assets/images/adv-3.png" alt="" />
				</a>
			</div>
		</div>
	</div>
</section>


<section className="p-0">
	<div className="container">
		<div className="row">
			<div className="col">
				
				<div className="tiny-slider arrow-hover arrow-dark arrow-round">
					<div className="tiny-slider-inner"
					dataAutoplay="false"
					dataHoverpause="true"
					dataGutter="24"
					dataArrow="true"
					dataDots="false"
					dataItems-xl="5" 
					dataItems-lg="4" 
					dataItems-md="3" 
					dataItems-sm="2" 
					dataItems-xs="2"
					>
						
						<div>
							<div className="card card-overlay-bottom card-img-scale">
								<img className="card-img" src="assets/images/blog/1by1/thumb/01.jpg" alt="card image" />
								<div className="card-img-overlay d-flex px-3 px-sm-5">
									<h5 className="mt-auto mx-auto">
										<a href="#" className="stretched-link btn-link fw-bold text-white">Travel</a>
									</h5>
								</div>
							</div>
						</div>
						
						<div>
							<div className="card card-overlay-bottom card-img-scale">
								<img className="card-img" src="assets/images/blog/1by1/thumb/02.jpg" alt="card image" />
								<div className="card-img-overlay d-flex px-3 px-sm-5">
									<h5 className="mt-auto mx-auto">
										<a href="#" className="stretched-link btn-link fw-bold text-white">Business</a>
									</h5>
								</div>
							</div>
						</div>
						
						<div>
							<div className="card card-overlay-bottom card-img-scale">
								<img className="card-img" src="assets/images/blog/1by1/thumb/03.jpg" alt="card image" />
								<div className="card-img-overlay d-flex px-3 px-sm-5">
									<h5 className="mt-auto mx-auto">
										<a href="#" className="stretched-link btn-link fw-bold text-white">Marketing</a>
									</h5>
								</div>
							</div>
						</div>
						
						<div>
							<div className="card card-overlay-bottom card-img-scale">
								<img className="card-img" src="assets/images/blog/1by1/thumb/04.jpg" alt="card image" />
								<div className="card-img-overlay d-flex px-3 px-sm-5">
									<h5 className="mt-auto mx-auto">
										<a href="#" className="stretched-link btn-link fw-bold text-white">Photography</a>
									</h5>
								</div>
							</div>
						</div>
						
						<div>
							<div className="card card-overlay-bottom card-img-scale">
								<img className="card-img" src="assets/images/blog/1by1/thumb/05.jpg" alt="card image" />
								<div className="card-img-overlay d-flex px-3 px-sm-5">
									<h5 className="mt-auto mx-auto">
									<a href="#" className="stretched-link btn-link fw-bold text-white">Sports</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</div>
	</div>
</section>



<section className="pb-0 pt-3 mt-1">
	<div className="container">
		<div className="row">
			<div className="col">
				<div className="bg-dark p-3 p-sm-4 rounded-3 position-relative overflow-hidden">
					<div className="row">
						<div className="col-md-8 col-lg-6 mx-auto text-center py-5 position-relative">
							
							<h2 className="display-6 text-white">Never miss a story!</h2>
							<p className="text-white">Get the freshest headlines and updates sent uninterrupted to your inbox.</p>
			
							<form className="row row-cols-sm-auto g-2 align-items-center justify-content-center mt-3">
								<div className="col-12">
							    <input type="email" className="form-control" placeholder="Enter your email address" />
							  </div>
							  <div className="col-12">
							    <button type="submit" className="btn btn-primary m-0">Subscribe</button>
							  </div>
							  <div className="form-text text-white opacity-6 mt-2">By subscribing you agree to our 
							  	<a href="#" className="text-decoration-underline text-reset">Privacy Policy</a>
							  </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


        <Footer1 />
        </div>
    )
}
