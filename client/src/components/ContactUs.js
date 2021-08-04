import React from 'react'
import Footer2 from './Footer2'
import Header2 from './Header2'

export default function ContactUs() {
    return (
        <div>
        <Header2 />

<section>
	<div class="container">
		<div class="row">
      <div class="col-md-9 mx-auto text-center">
        <h1 class="display-4">Contact us</h1>
        
        <nav class="d-flex justify-content-center" aria-label="breadcrumb">
          <ol class="breadcrumb breadcrumb-dots mb-0">
            <li class="breadcrumb-item"><a href="index.html"><i class="bi bi-house me-1"></i> Home</a></li>
            <li class="breadcrumb-item active">Contact us</li>
          </ol>
        </nav>      
      </div>
    </div>
	</div>
</section>

<section class="pt-4">
	<div class="container">
		<div class="row">
      <div class="col-xl-9 mx-auto">
        <iframe class="w-100 h-300 grayscale" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" height="500" style={{border: '0' }} aria-hidden="false" tabindex="0"></iframe>	
        
        
        <div class="row mt-5">
          <div class="col-sm-6 mb-5 mb-sm-0">
            <h3>Advertise / Sponsorships</h3>
            <p>Contact us directly related Advertisement</p>
            <address>2492 Centennial NW, Acworth, GA, 30102</address>
            <p>Call: <a href="#" class="text-reset"><u>(678) 324-1251 (Toll-free)</u></a></p>
            <p>Email: <a href="#" class="text-reset"><u>advertise@example.com</u></a></p>
            <p>Support time: Monday to Saturday 
              <br />
              9:30 am to 6:00 pm
            </p>
          </div>
          <div class="col-sm-6">
            <h3>Contact Information </h3>
            <p>Get in touch with us to see how we can help you with your query</p>
            <address>750 Sing Sing Rd, Horseheads, NY, 14845</address>
            <p>Call: <a href="#" class="text-reset"><u>469-537-2410 (Toll-free)</u></a></p>
            <p>Email: <a href="#" class="text-reset"><u>contact@example.com</u></a></p>
            <p>Support time: Monday to Saturday 
              <br />
              9:00 am to 5:30 pm
            </p>
          </div>
        </div>
        
        <hr class="my-5" />
        
        <div class="row">
          <div class="col-12">
          <h2>Contact us</h2>
          <p>Please fill in the form below and we will contact you very soon. Your email address will not be published.</p>
         
          <form class="contact-form" id="contact-form" name="contactform" method="POST">
            
            <div class="row">
              <div class="col-md-6">
                
                <div class="mb-3">
                  <input required id="con-name" name="name" type="text" class="form-control" placeholder="Name" />
                </div>
              </div>
              <div class="col-md-6">
                
                <div class="mb-3">
                  <input required id="con-email" name="email" type="email" class="form-control" placeholder="E-mail" />
                </div>
              </div>
              <div class="col-md-12">
                
                <div class="mb-3">
                  <input required id="con-subject" name="subject" type="text" class="form-control" placeholder="Subject" />
                </div>
              </div>
              <div class="col-md-12">
                
                <div class="mb-3">
                  <textarea required id="con-message" name="message" cols="40" rows="6" class="form-control" placeholder="Message"></textarea>
                </div>
              </div>
              
              <div class="col-md-12 text-start"><button class="btn btn-primary w-100" type="submit">Send Message</button></div>
            </div>
          </form>
			  	
          </div>
        </div>
      </div>  
     </div>
  </div>
</section>

        <Footer2 />
        </div>
    )
}
