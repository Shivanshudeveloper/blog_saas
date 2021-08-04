import React from 'react'
import Footer2 from './Footer2'
import Header2 from './Header2'

export default function HelpSupport() {
    return (
        <div>
        <Header2 />

<section class="pt-4">
	<div class="container">
		<div class="row">
      <div class="col-12">
        <div class="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center" style={{backgroundImage: 'url(assets/images/blog/16by9/09.jpg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
          
          <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4"> 
            <div class="w-100 my-auto">
              <h1 class="text-white display-4">Help and Support</h1>
              
              <nav class="d-flex justify-content-center" aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                  <li class="breadcrumb-item"><a href="index.html"><i class="bi bi-house me-1"></i> Home</a></li>
                  <li class="breadcrumb-item active">Help and Support</li>
                </ol>
              </nav>
            </div>
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
