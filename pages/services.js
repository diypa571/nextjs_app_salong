import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS


export default function Services() {
return (

<>  
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Poppins:wght@600;700&display=swap"
rel="stylesheet"
/>
<link
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
rel="stylesheet"
/>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
rel="stylesheet"
/>
<link href="lib/animate/animate.min.css" rel="stylesheet" />
<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

<link href="css/style.css" rel="stylesheet" />
<link href="css/ftn.css" rel="stylesheet" />

<Head>
  <title>Salong</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
</Head>

<Top />
  <Navbar />

<main className={styles.main}> 
 
{/* Service  */}
<div className="container-xxl py-5">
<div className="container">
  <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
    <h1 className="display-6 mb-5 ftn">
      {" "}
      We Provide professional Salong Services
    </h1>
  </div>
  <div className="row g-4 justify-content-center">
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Life Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Health Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Home Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Vehicle Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Business Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 Up">
      <div className="service rounded h-100 p-5">
        <div className="d-flex align-items-center ms-n5 mb-4">
          <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
            <i className="bi bi-stars ftn40 fwhite" />
          </div>
          <h4 className="mb-0">Property Salong</h4>
        </div>
        <p className="mb-4">
          Aliqu diam amet eos erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>
        <a className="btn btn-light px-3" href="">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>
</div>
{/* Service */}
{/* booking   */}
<div className="container-fluid booking my-5 py-5">
<div className="container py-5">
  <div className="row g-5">
    <div className="col-lg-6">
      <h1 className="display-6 fwhite mb-5 ftn">
        {" "}
        We are Award Winning Salong Company
      </h1>
      <p className="ftn fwhite mb-5">
        Aliqu diam amet elitr rebum at clita. Diam dolor diam ipsum sit.
        Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
        stet lorem sit clita duo justo magn diam et eos. Clita erat ipsum et
        lorem et sit, sed stet lorem sit clita duo justo magna dolore erat
        amet. Tempor erat
      </p>
    </div>
    <div className="col-lg-6">
      <div className="bg-white rounded p-5">
        <form>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
                <label htmlFor="gname">Your Name</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="gmail"
                  placeholder="Gurdian Email"
                />
                <label htmlFor="gmail">Your Email</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="cname"
                  placeholder="Child Name"
                />
                <label htmlFor="cname">Your Mobile</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="cage"
                  placeholder="Child Age"
                />
                <label htmlFor="cage">Service Type</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  style={{ height: 80 }}
                  defaultValue={""}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary py-3 px-5" type="submit">
                BOKA TID
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
{/* //booking */}
 
{/* // Contact  */}
<div className="container-xxl py-5" id="contact">
<div className="container">
  <div className="row g-5">
    <div className="col-lg-12">
      <h1 className="display-6 mb-5 ftn">Please Contact Us</h1>
      <p className="mb-4">Details for contacting the company...</p>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                style={{ height: 100 }}
                defaultValue={""}
              />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary py-3 px-5" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
{/* // Contact  */}



</main>


          <Footer />

<script src="https://code.jquery.com/jquery-3.4.1.min.js" async></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" async></script>
<script src="js/owlcarousel/owl.carousel.min.js" async></script>
<script src="js/script.js" async></script>
</>


)
}