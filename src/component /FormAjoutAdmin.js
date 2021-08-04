import { Button, Form,Modal } from "react-bootstrap";
import React  from 'react';
import { useState } from "react";
import { AddProduitAdmin} from "./action/produit";
import { useSelector,useDispatch } from 'react-redux';

function FormAjoutAdmin(){

  //dispatch function
   const dispatch = useDispatch()

// récupération val input

const [Input,setInput] = useState(
  {
    titre : "", 
    desc : "", 
    prix :"",
    image : ""
  }
)
const handelChange=(e)=>{
  const {name,value}= e.target 
  setInput({
    ...Input,
    [name]: value
  });
  }
// *************** add to db

  const handelSubmit=(e)=>{
   e.preventDefault()
    dispatch( AddProduitAdmin(Input.titre,Input.desc,Input.prix,Input.image))
   
    console.log('val input', Input)
  }

  
//*************add to file json */
// const handleSubmit=(e)=>{
// e.preventDefault()
// console.log('input',input)

// axios.post('https://movies-762da-default-rtdb.firebaseio.com/posts.json', input)
// .then((response)=> console.log(response))
// .then(response=> window.location.reload())
// .catch((error)=> console.log('error'))


// }
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
{/* ********************modal********************* */}

    <div>
      <Button variant="primary" onClick={handleShow}>
      Ajouter un nouveau produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vous pouvez Ajouter un nouveau produit
              
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* ************************************* */}
<div>

<Form onSubmit={handelSubmit}  className="">

<Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Titre de votre film</Form.Label> */}
    <Form.Control     onChange={handelChange}  name="titre"  type="text" placeholder="Entrez le titre de votre produit" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    {/* <Form.Label>Langue de votre film</Form.Label> */}
    <Form.Control onChange={handelChange}  name="desc" type="text" placeholder="Entrez une description  de votre produit" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Acteur  de votre film</Form.Label> */}
    <Form.Control name="prix" onChange={handelChange}  type="text" placeholder="Entrez le  prix de votre produit" />
  </Form.Group>

  <Form.Group controlId="formGroupPassword">
    {/* <Form.Label>Image</Form.Label> */}
    <Form.Control   name="image" onChange={handelChange} value={Input.image}  type="text" placeholder="Entrez l'URL de l'image" />
  </Form.Group>
  <Button type="submit">  Valider</Button>
</Form>


</div>
{/* ********************************* */}
        </Modal.Body>
       
      </Modal>
    </div>
 


{/* ******************** END modal********************* */}


    </div>
   )

 }

export default FormAjoutAdmin