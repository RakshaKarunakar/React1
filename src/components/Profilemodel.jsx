import React from 'react';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import image1 from './Sujani.jpg';
import image2 from './Seema.jpg';
import image3 from './Rashmi.jpg';

export default function Profilemodel() {
  const Delete = (n,a) => {
    alert(`This Profile"${n}" has been "${a}"`);
  };
  const Update = (profileName) => {
    alert(`This Profile has been "${profileName}"`);
  };

  const tableData = [
    {
      Name: 'Sujani',
      Phone: '9955441225',
      Email: 'sujani@gmail.com',
      Address: 'Udupi',
      DoB: '10/07/2001'
    },
    {
      Name: 'Seema',
      Phone: '9148542075',
      Email: 'seema@gmail.com',
      Address: 'Udupi',
      DoB: '28/09/2001'
    },
    {
      Name: 'Rashmi',
      Phone: '9321654987',
      Email: 'rashmi@gmail.com',
      Address: 'Manipal',
      DoB: '29/11/1999'

    }
  ];

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="table-info">
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">DoB</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="table-secondary">
              <th scope="row">{data.Name}</th>
              <td>{data.Phone}</td>
              <td>{data.Email}</td>
              <td>{data.Address}</td>
              <td>{data.DoB}</td>
              <td>
                <Button class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target={`#ViewmapModal${index + 1}`} startIcon={<VisibilityIcon />}> </Button>
                <Button class="btn btn-info m-2" data-bs-toggle="modal" data-bs-target="#EditmapModal" startIcon={<EditIcon />}>  </Button>
                <Button class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={`#DeletemapModalToggle${index + 1}`} startIcon={<DeleteIcon />}>  </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div class="modal fade" id="ViewmapModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewmapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="ViewmapModalLabel">PROFILE</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              <img src={image1} alt="" width="100px" height="100px" />
              <p ><b>Name:</b> Sujani</p>
              <p ><b>Phone:</b> 9955441225</p>
              <p ><b>Email:</b> sujani@gmail.com</p>
              <p ><b>Address:</b> Udupi</p>
              <p ><b>DOB:</b> 13/09/2001</p>
            </div>

            <div class="modal-footer">
              <Button class="btn btn-secondary m-2" data-bs-dismiss="modal">Close</Button>
              <Button class="btn btn-success m-2" data-bs-dismiss="modal">OK</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="ViewmapModal2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewmapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="ViewmapModalLabel">PROFILE</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              <img src={image2} alt="" width="100px" height="100px" />
              <p ><b>Name:</b> Seema</p>
              <p ><b>Phone:</b> 9148542075</p>
              <p ><b>Email:</b> seema123@gmail.com</p>
              <p ><b>Address:</b> Udupi</p>
              <p ><b>DOB:</b> 28/09/2001</p>
            </div>

            <div class="modal-footer">
              <Button class="btn btn-secondary m-2" data-bs-dismiss="modal">Close</Button>
              <Button class="btn btn-success m-2" data-bs-dismiss="modal">OK</Button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal fade" id="ViewmapModal3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewmapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="ViewmapModalLabel">PROFILE</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              <img src={image3} alt="" width="100px" height="100px" />
              <p ><b>Name:</b> Rashmi</p>
              <p ><b>Phone:</b> 9321654987</p>
              <p ><b>Emai:l</b> rashmi@gmail.com</p>
              <p ><b>Address:</b> Udupi</p>
              <p ><b>DOB:</b> 27/11/1999</p>
            </div>

            <div class="modal-footer">
              <Button class="btn btn-secondary m-2" data-bs-dismiss="modal">Close</Button>
              <Button class="btn btn-success m-2" data-bs-dismiss="modal">OK</Button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal fade" id="EditmapModal" tabindex="-1" aria-labelledby="EditmapModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="EditmapModalLabel">PROFILE</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">

              <form>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Email:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Phone:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">Address:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
                <div class="mb-3">
                  <label for="recipient-" class="col-form-label">DOB:</label>
                  <input type="text" class="form-control" id="recipient-" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <Button class="btn btn-info m-2" data-bs-dismiss="modal" startIcon={<EditIcon />}>Edit</Button>
              <Button class="btn btn-primary m-2" data-bs-dismiss="modal" startIcon={<SendIcon />} onClick={() => Update("Updated")}>Save</Button>
            </div>
          </div>
        </div>
      </div>


      <div class="modal fade" id="DeletemapModalToggle1" aria-hidden="true" aria-labelledby="DeletemapModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="DeletemapModalToggleLabel" >Delete</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this Profile!
            </div>
            <div class="modal-footer">
              <Button class="btn btn-primary m-2" /*data-bs-target="#DeletemapModalToggle"*/ data-bs-dismiss="modal" startIcon={<CancelIcon />}>Cancel</Button>
              <Button class="btn btn-danger m-2" data-bs-dismiss="modal" onClick={() => Delete("Sujani","Deleted")} startIcon={<DeleteIcon />}> Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="DeletemapModalToggle2" aria-hidden="true" aria-labelledby="DeletemapModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="DeletemapModalToggleLabel" >Delete</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this Profile!
            </div>
            <div class="modal-footer">
              <Button class="btn btn-primary m-2" /*data-bs-target="#DeletemapModalToggle"*/ data-bs-dismiss="modal" startIcon={<CancelIcon />}>Cancel</Button>
              <Button class="btn btn-danger m-2" data-bs-dismiss="modal" onClick={() => Delete("Seema","Deleted")} startIcon={<DeleteIcon />}> Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="DeletemapModalToggle3" aria-hidden="true" aria-labelledby="DeletemapModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="DeletemapModalToggleLabel" >Delete</h1>
              <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
            </div>
            <div class="modal-body">
              Are you sure you want to Delete this Profile!
            </div>
            <div class="modal-footer">
              <Button class="btn btn-primary m-2" /*data-bs-target="#DeletemapModalToggle"*/ data-bs-dismiss="modal" startIcon={<CancelIcon />}>Cancel</Button>
              <Button class="btn btn-danger m-2" data-bs-dismiss="modal" onClick={() => Delete("Rashmi","Deleted")} startIcon={<DeleteIcon />}> Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





