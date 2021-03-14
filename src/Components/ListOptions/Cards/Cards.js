import React from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Card = ({details}) => {

    return(
        <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron className='w-25'>
                
                  <h2 className="h1 display-3">{details.name}</h2>
                
                  <h3>Address</h3>
                    <p>
                      {details.address}
                    </p>
                  <hr className="my-2" />

                  <p>
                    It uses utility classes for typgraphy and spacing to space content out
                    within the larger container.
                  </p>
                  
                  <p className="lead">
                    <MDBBtn color="success">Learn More</MDBBtn>
                  </p>
                
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default Card;