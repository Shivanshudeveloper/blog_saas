import React from 'react'

export default function Header1() {
    return (
        <div>
            
<header className="navbar-light navbar-sticky header-static">
	<nav className="navbar navbar-expand-lg">
		<div className="container">
			<a className="navbar-brand" href="index.html">
				<h3>Company Logo</h3>
			</a>
		

			<button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="text-body h6 d-none d-sm-inline-block">Menu</span>
			  <span className="navbar-toggler-icon"></span>
		  </button>

			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav navbar-nav-scroll mx-auto">
					
					<li className="nav-item">
						<a className="nav-link active" href="#">Home</a>
					</li>

					<li className="nav-item"><a className="nav-link" href="/aboutus">About Us</a></li>

					<li className="nav-item"><a className="nav-link" href="/contactus">Contact Us</a></li>

					<li className="nav-item"><a className="nav-link" href="/helpandsupport">Help & Support</a></li>
				</ul>
			</div>

			<div className="nav ms-sm-3 flex-nowrap align-items-center">
				<div className="nav-item">
					<div className="modeswitch" id="darkModeSwitch">
						<div className="switch"></div>
					</div>
				</div>
				<div className="nav-item d-none d-md-block">
					<a href="#" className="btn btn-sm btn-danger mb-0 mx-2">Subscribe!</a>
				</div>
				<div className="nav-item dropdown nav-search dropdown-toggle-icon-none">
					<a className="nav-link pe-0 dropdown-toggle" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="bi bi-search fs-4"> </i>
					</a>
					<div className="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
					  <form className="input-group">
					    <input className="form-control border-success" type="search" placeholder="Search" aria-label="Search" />
					    <button className="btn btn-success m-0" type="submit">Search</button>
					  </form>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>

        </div>
    )
}
