import React from 'react'
import { Nav, Card } from 'react-bootstrap'


function Reviews() {
  return (
    <div className="container-fluid" id="review-div">
      
      <div className="row title-row col-lg-12 col-sm-12" >
        <h2 className="serviceTitle col-sm-12">Service Reviews</h2>
      </div>

      

        <div className="row v-100 reviews-row">
         
          {/* <div className="review-card col-md-3">
            <div className="card-body">
              <h5 className="card-title">Very Helpful</h5>
              <h6 className="card-subtitle mb-2 text-muted">Carl from Vernonia</h6>
              <p className="card-text">I was having a hard time finding my internet icon and getting connected to my Wifi, but Cathy was able to help me out. I'm pretty sure it's working now.  </p>

              <Nav.Link href="/reviews"><p className="card-link">More Info</p></Nav.Link>
            </div>
          </div> */}

          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><strong>Carl</strong> › Vernonia</Card.Header>
            <Card.Body>
              <Card.Title>Very Helpful</Card.Title>
              <Card.Text>
                I was having a hard time finding my internet icon and getting connected to my Wifi, but Cathy was able to help me out. I'm pretty sure it's working now.
              </Card.Text>
              <Card.Link href="/reviews">More Info</Card.Link>
            </Card.Body>
          </Card>
          <br />

          {/* <div className="review-card col-md-3">
            <div className="card-body">
              <h5 className="card-title">Got My Phone Back</h5>
              <h6 className="card-subtitle mb-2 text-muted">Chaz from Newberg</h6>
              <p className="card-text">Ellen helped me get my apps on my phone fixed and now it's working just fine.  </p>

              <Nav.Link href="/reviews"><p className="card-link">More Info</p></Nav.Link>
            </div>
          </div> */}

          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><strong>Chaz</strong> › Newberg</Card.Header>
            <Card.Body>
              <Card.Title>Got My Phone Back</Card.Title>
              <Card.Text>
                Ellen helped me get my apps on my phone fixed and now it's working just fine.
              </Card.Text>
              <Card.Link href="/reviews">More Info</Card.Link>
            </Card.Body>
          </Card>

          {/* <div className="review-card col-md-3">
            <div className="card-body">
              <h5 className="card-title">Bingo!</h5>
              <h6 className="card-subtitle mb-2 text-muted">Gwen from Vancouver</h6>
              <p className="card-text">It finally works! My grandson came over and fixed my printer, but screwed up my tablet. I reached out to Igor Johnson and now I'm back playing Words with Friends. Thank you so much! </p>

              <Nav.Link href="/reviews"><p className="card-link">More Info</p></Nav.Link>
            </div>
          </div> */}

          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><strong>Gwen</strong> › Vancouver</Card.Header>
            <Card.Body>
              <Card.Title>Bingo!</Card.Title>
              <Card.Text>
                It finally works! My grandson came over and fixed my printer, but screwed up my tablet. I reached out to Igor Johnson and now I'm back playing Words with Friends. Thank you so much!
              </Card.Text>
              <Card.Link href="/reviews">More Info</Card.Link>
            </Card.Body>
          </Card>

          {/* <div className="review-card col-md-3">
            <div className="card-body">
              <h5 className="card-title">Upgraded and Smokin' Fast</h5>
              <h6 className="card-subtitle mb-2 text-muted">Brett from Woodstock</h6>
              <p className="card-text">I was unsure about upgrading my PC so I used your services and found Estelle. Her certification gave me the peace of mind I needed to call her and get the support I needed.   </p>

              <Nav.Link href="/reviews"><p className="card-link">More Info</p></Nav.Link>
            </div>
          </div> */}

          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header><strong>Brett</strong> › Woodstock</Card.Header>
            <Card.Body>
              <Card.Title>Upgraded and Smokin' Fast</Card.Title>
              <Card.Text>
              I was unsure about upgrading my PC so I used your services and found Estelle. Her certification gave me the peace of mind I needed to call her and get the support I needed.
              </Card.Text>
              <Card.Link href="/reviews">More Info</Card.Link>
            </Card.Body>
          </Card>

          <div className="review-end"></div>


        </div>

      </div>



  )
}

export default Reviews
