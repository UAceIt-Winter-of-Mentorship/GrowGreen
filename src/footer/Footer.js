// import React, { Component } from 'react'




// className Footer extends Component {
//     render() {
//         return
//          (
//             <footer classNameName="bg-white">
//             <div classNameName="container py-5">
//                 <div classNameName="row py-3">
//                     <div classNameName="col-lg-2 col-md-6 mb-4 mb-lg-0">
//                         <h6 classNameName="text-uppercase font-weight-bold mb-4">About</h6>
//                         <ul classNameName="list-unstyled mb-0">
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Contact Us</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">About Us</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Stories</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Press</a></li>
//                         </ul>
//                     </div>
//                     <div classNameName="col-lg-2 col-md-6 mb-4 mb-lg-0">
//                         <h6 classNameName="text-uppercase font-weight-bold mb-4">Help</h6>
//                         <ul classNameName="list-unstyled mb-0">
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Payments</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Shipping</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Cancellation</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Returns</a></li>
//                         </ul>
//                     </div>
//                     <div classNameName="col-lg-2 col-md-6 mb-4 mb-lg-0">
//                         <h6 classNameName="text-uppercase font-weight-bold mb-4">Policy</h6>
//                         <ul classNameName="list-unstyled mb-0">
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Return Policy</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Terms Of Use</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Security</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Privacy</a></li>
//                         </ul>
//                     </div>
//                     <div classNameName="col-lg-2 col-md-6 mb-4 mb-lg-0">
//                         <h6 classNameName="text-uppercase font-weight-bold mb-4">Company</h6>
//                         <ul classNameName="list-unstyled mb-0">
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Login</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Register</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Sitemap</a></li>
//                             <li classNameName="mb-2"><a href="#" classNameName="text-muted">Our Products</a></li>
//                         </ul>
//                     </div>
//                     <div classNameName="col-lg-4 col-md-6 mb-lg-0">
//                         <h6 classNameName="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
//                         <p classNameName="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
//                         <ul classNameName="list-inline mt-4">
//                             <li classNameName="list-inline-item"><a href="#" target="_blank" title="twitter"><i classNameName="fab fa-2x fa-twitter"></i></a></li>
//                             <li classNameName="list-inline-item"><a href="#" target="_blank" title="facebook"><i classNameName="fab fa-2x fa-facebook-f"></i></a></li>
//                             <li classNameName="list-inline-item"><a href="#" target="_blank" title="instagram"><i classNameName="fab fa-2x fa-instagram"></i></a></li>
//                             <li classNameName="list-inline-item"><a href="#" target="_blank" title="pinterest"><i classNameName="fab fa-2x fa-youtube"></i></a></li>
//                             <li classNameName="list-inline-item"><a href="#" target="_blank" title="vimeo"><i classNameName="fab fa-2x fa-google"></i></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <hr classNameName="p-0 m-0 b-0"/>
//             <div classNameName="bg-light py-2">
//                 <div classNameName="container text-center">
//                     <p classNameName="text-muted mb-0 py-2">© 2019 BBBootstrap All risghts reserved.</p>
//                 </div>
//             </div>
//         </footer>
//         )
//     }
// }

// export default Footer
import React, { Component } from 'react'
import './footerstyle.css'


 class Footer extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid flex-grow-1 ">
     <div className="row py-5">
         <div className="col-lg-12 text-white text-center">
             <h1 className="display-3 ">Bootstrap footer</h1>
             <p className="lead mb-0">This footer is created by using Bootstrap.</p>
             <p className="lead py-3">Snippet by BBBootstrap.</p>
         </div>
     </div>
 </div>
 <footer className="bg-white">
     <div className="container py-5">
         <div className="row py-3">
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a href="#" className="text-muted">Contact Us</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">About Us</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Stories</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Press</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a href="#" className="text-muted">Payments</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Shipping</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Cancellation</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Returns</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Policy</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a href="#" className="text-muted">Return Policy</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Terms Of Use</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Security</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Privacy</a></li>
                 </ul>
             </div>
             <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                 <ul className="list-unstyled mb-0">
                     <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Sitemap</a></li>
                     <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
                 </ul>
             </div>
             <div className="col-lg-4 col-md-6 mb-lg-0">
                 <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                 <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                 <ul className="list-inline mt-4">
                     <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fab fa-2x fa-twitter"></i></a></li>
                     <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                     <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                     <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                     <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
                 </ul>
             </div>
         </div>
     </div>
     <hr className="p-0 m-0 b-0"/>
     <div className="bg-light py-2">
         <div className="container text-center">
             <p className="text-muted mb-0 py-2">© 2019 BBBootstrap All risghts reserved.</p>
         </div>
     </div>
 </footer>
 </div>
        )
    }
}

export default Footer

