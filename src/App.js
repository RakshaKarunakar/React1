import image from './raksha.jpg'
import nimage from './off.jpeg'
import './color.css'
import Demo from './components/Demo'
import Button from './components/Button'
//import DeleteIcon from './components/Button'
//import AccountCircleIcon from './components/Button'
import Textfield from './components/Textfield'
import Card from './components/Card'
import Productcard from './components/Productcard'
import Registrationform from './components/Registrationform'
import Form from './components/Form'
import Bootstrap from './components/Bootstrap'
import Mdb from './components/Mdb'
import Arrowfunction from './components/Arrowfunction'
import Cardmodel from './components/Profilemodel'
import Variable from './components/Variable'
import Array from './components/Arraymethod'
import Dummi from './components/Dummi'


function App() {
  let myStyle = {
    backgroundColor:'green',
    color:'white'
  }

  let divStyles = {
    width:'500px',
    height:'150px',
    backgroundImage:`url(${nimage})`,
    backgroundColor:'gray'
  }

  return (
    <>
      <div style={divStyles}></div>
      <img src={image} alt=""/>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Hello World</h1>
      <h1 style={myStyle}>Hello</h1>
      <h3 className="cal">hello world</h3>

      <div>
        <center>
          <div className="upc">
          <h1>Profile</h1>
            <div className="gradiant"></div>
            <div className="profile-down">
              <img src={image} alt="" />
              <div className="text">
                <h5>Name : Raksha</h5>
                <h5>Email : raksha123@gmail.com</h5>
                <h5>Phone : 123456789</h5>
                <h5>Address : Udupi</h5>
                <h5>Qualification : BE</h5>
                <h5>Branch : ECE</h5>
              </div>
            </div>
          </div>
        </center>
      </div>

      <Demo />
      <Button />
      <Textfield />
      <Card />
      <Productcard />
      <Registrationform />
      <Form />
      <Bootstrap />
      <Mdb />
      <Arrowfunction />
      <Variable/>
      <Array/>
      <Cardmodel />
      <Dummi />
    </>
  )
}

export default App;
