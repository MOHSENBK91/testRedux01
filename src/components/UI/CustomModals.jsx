import {Modal,Button} from 'react-bootstrap'
import {useState} from 'react'
import Custominput from './input'
import { useDispatch, useSelector } from 'react-redux'
import {newAddMovie} from '../../redux/action'
export default function CustomModals() {
     const dispatch = useDispatch ();
     const data = useSelector(state=> state.Movie)
    // const addnewmovie = () =>{
       
         //data.push({id:data.length+1 ,title ,rating , image , description})
        // dispatch(newAddMovie(data))
     //}
      const addnewmovie = () =>{
       
         //data.push()
         dispatch(newAddMovie({id:data.length+1 ,name, phone ,adress , posterURL:image }))
         handleClose()
     }
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const [title, setTitle] = useState ('')
    //const [rating, setRating] = useState ('')
    const [image, setImage] = useState ('')
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [adress, setAdress] = useState ('')

    //const [description, setDescription] = useState ('')

    
    
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          AJOUTER PROFIL 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
              <Custominput onchange = {(e)=> setName(e.target.value)} type='texte' placeholder = 'name'/>  
             <Custominput onchange = {(e)=> setPhone(e.target.value)}  type='texte' placeholder = 'phone'/>    
           
              <Custominput onchange = {(e)=> setAdress(e.target.value)}  type='texte' placeholder = 'adress '/>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addnewmovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
