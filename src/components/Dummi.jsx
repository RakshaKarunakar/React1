import React from 'react';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Dummi() {
    const Delete = (a) => {
        alert(`This Profile "${a}" has been Deleted!! `);
    };

    const Array = [
        {
            Image:  "https://mui.com/static/images/avatar/3.jpg",
            Name: 'Sujani',
            Phone: '9955441225',
            Email: 'sujani@gmail.com',
            Address: 'Udupi',
            DoB: '10/07/2001'
        },
        {
            Image: "https://mui.com/static/images/avatar/4.jpg",
            Name: 'Seema',
            Phone: '9148542075',
            Email: 'seema@gmail.com',
            Address: 'Udupi',
            DoB: '28/09/2001'
        },
        
    ];

    return (
        <div>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>sl.no</th>
                        <th >Image</th>
                        <th >Name</th>
                        <th >Phone</th>
                        <th >Email</th>
                        <th >Address</th>
                        <th >DoB</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.map((i, index) => {
                        return (
                            <>
                                <tr key={index} className="table-success">
                                    <td >{index + 1}</td>
                                    <td><img
                                        src={i.Image}
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                        class="rounded-circle"
                                    /></td>
                                    <td>{i.Name}</td>
                                    <td>{i.Phone}</td>
                                    <td>{i.Email}</td>
                                    <td>{i.Address}</td>
                                    <td>{i.DoB}</td>
                                    <td>
                                        <Button class="btn btn-success m-2" data-bs-toggle="modal"  data-bs-target={`#View${index}`} startIcon={<VisibilityIcon />} >VIEW </Button>
                                        <Button class="btn btn-info m-2" data-bs-toggle="modal" data-bs-target={`#Edit${index}`} startIcon={<EditIcon />} >UPDATE  </Button>
                                        <Button class="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={`#Delete${index}`} startIcon={<DeleteIcon />} >DELETE  </Button>
                                    </td>
                                </tr>


                                <div class="modal fade" id={`View${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ViewlLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="ViewlLabel">PROFILE</h1>
                                                <Button type="Button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                            </div>
                                            <div class="modal-body">

                                            <img src={i.Image} alt={`Profile of ${i.Name}`} style={{ width: " 100px", height: "100px" }} class="rounded-circle" />
                                                <h4 >Name:{i.Name}</h4>
                                                <h4 >Phone:{i.Phone}</h4>
                                                <h4 >Email:{i.Email}</h4>
                                                <h4 >Address:{i.Address}</h4>
                                                <h4 >DoB:{i.DoB}</h4>
                                            </div>
                                            <div class="modal-footer">
                                                <Button type="Button" class="btn btn-secondary m-2" data-bs-dismiss="modal"> Close</Button>
                                                <Button type="Button" class="btn btn-primary m-2" data-bs-dismiss="modal"> Ok</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="modal fade" id={`Edit${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditLabel" aria-hidden="true">
                                    <div class="modal-dialog ">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="EditLabel">PROFILE</h1>
                                                <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                            </div>
                                            <div class="modal-body">
                                            <form>
                                                    <div class="mb-3">
                                                        <img src={i.Image} alt={`Profile of ${i.Name}`} style={{ width: " 100px", height: "100px" }} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="Name" class="col-form-label">Name:</label>
                                                        <input type="text" class="form-control" id="Name" value={i.Name} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="Email" class="col-form-label">Email:</label>
                                                        <textarea class="form-control" id="Email" value={i.Email}></textarea>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="Phone" class="col-form-label">Phone:</label>
                                                        <input type="text" class="form-control" id="Phone" value={i.Phone} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="Address" class="col-form-label">Address:</label>
                                                        <input type="text" class="form-control" id="Address" value={i.Address} />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="DoB" class="col-form-label">DoB</label>
                                                        <input type="text" class="form-control" id="DoB" value={i.DoB} />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <Button type="Button" class="btn btn-secondary m-2" data-bs-dismiss="modal"  > Close</Button>
                                                <Button type="Button" class="btn btn-primary m-2"  data-bs-dismiss="modal" startIcon={<SendIcon />} > Save changes</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="modal fade" id={`Delete${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="DeleteLabel" aria-hidden="true"  >
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="DeleteLabel" >Delete</h1>
                                                <Button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
                                            </div>
                                            <div class="modal-body">
                                                <p> Are you sure you want to Delete {i.Name}'s Profile!</p>
                                            </div>
                                            <div class="modal-footer">
                                                <Button type="Button" class="btn btn-secondary m-2" data-bs-dismiss="modal" startIcon={<CancelIcon />} > Cancel</Button>
                                                <Button type="Button" class="btn btn-primary m-2" data-bs-dismiss="modal" onClick={() => Delete (`${i.Name}`)} startIcon={<DeleteIcon />} > Delete</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}