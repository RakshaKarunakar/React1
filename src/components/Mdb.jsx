import React from 'react'
import image1 from './Sujani.jpg'
import image2 from './Seema.jpg'
import image3 from './Rashmi.jpg'

export default function mdb() {
  return (
    <div><div className="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" className="btn btn-primary">Button</a>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" className="card-img-top" alt="Skyscrapers" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" className="card-img-top" alt="Los Angeles Skyscrapers" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="card-img-top" alt="Palm Springs Road" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>

      <table className="table">
        <thead>
          <tr className="table-success">
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">DoB</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-info">
            <th scope="row">Sujani</th>
            <td>9955441225</td>
            <td>sujani@gmail.com</td>
            <td>Udupi</td>
            <td>10/07/2001</td>
            <td >
              <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#ViewModal1">VIEW</button>
              <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#EditModalToggle">EDIT</button>
              <button class="btn btn-danger  m-2" data-bs-target="#DeleteModalToggle" data-bs-toggle="modal">DELETE</button>
            </td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Seema</th>
            <td>9148542075</td>
            <td>Seema123@gmail.com</td>
            <td>Udupi</td>
            <td>28/09/2001</td>
            <td >
              <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#ViewModal2">VIEW</button>
              <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#EditModalToggle">EDIT</button>
              <button class="btn btn-danger  m-2" data-bs-target="#DeleteModalToggle" data-bs-toggle="modal">DELETE</button>
            </td>
          </tr>
          <tr className="table-warning">
            <th scope="row">Rashmi</th>
            <td>9321654987</td>
            <td>rashmi@gmail.com</td>
            <td>Manipal</td>
            <td > 29/11/1999</td>
            <td>
              <button type="button" className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#ViewModal3">VIEW</button>
              <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#EditModalToggle">EDIT</button>
              <button class="btn btn-danger m-2" data-bs-target="#DeleteModalToggle" data-bs-toggle="modal">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>


      <div className="modal fade" id="ViewModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ViewModalLabel">PROFILE</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={image1} alt="" width="100px" height="100px"/>
              <p ><b>Name</b> : Sujani</p>
              <p ><b>Phone</b> : 9955441225</p>
              <p ><b>Email</b>  :sujani@gmail.com</p>
              <p ><b>Address</b> : Udupi</p>
              <p ><b>DOB </b>: 13/09/2001</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success m-2" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="ViewModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ViewModalLabel">PROFILE</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={image2} alt="" width="100px" height="100px"/>
              <p ><b>Name</b> : Seema</p>
              <p ><b>Phone</b> : 9148542075</p>
              <p ><b>Email</b>  : seema123@gmail.com</p>
              <p ><b>Address</b> : Udupi</p>
              <p ><b>DOB </b>: 28/09/2001</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success m-2" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="ViewModal3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="ViewModalLabel">PROFILE</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <img src={image3} alt="" width="100px" height="100px"/>
              <p ><b>Name</b> : Rashmi</p>
              <p ><b>Phone</b> : 9321654987</p>
              <p ><b>Email</b>  : rashmi@gmail.com</p>
              <p ><b>Address</b> : Udupi</p>
              <p ><b>DOB </b>: 27/11/1999</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success m-2" data-bs-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EditModalLabel">PROFILE</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Email:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Phone:</label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Address:</label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">DOB:</label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary m-2" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary m-2" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
      


      <div class="modal fade" id="DeleteModalToggle" aria-hidden="true" aria-labelledby="DeleteModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="DeleteModalToggleLabel">Delete</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this profile!
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary m-2" data-bs-target="#DeleteModalToggle2" data-bs-toggle="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="DeleteModalToggle2" aria-hidden="true" aria-labelledby="DeleteModalToggleLabel2" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="DeleteModalToggleLabel2">Deleted!..</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              This Profile is Deleted!
            </div>
          </div>
        </div>
    </div>
    </div>

  )
}
