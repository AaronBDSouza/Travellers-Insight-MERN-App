import React,{ useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const [ showMap, setShowMap ] = useState(false);
    const [showConfirmModal, setShowConfirmModal ] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () =>setShowMap(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };    

    const confirmDeleteHandler = () => {
        console.log('DELETING...');
        setShowConfirmModal(false);
    }

    return (
        <React.Fragment>
            <Modal show={showMap} onCancel={closeMapHandler} 
            header={props.address} 
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    {/* <h2>THE MAP!</h2> */}
                    <Map center={props.coordinates} zoom={16}/>
                    {/* Alternate for Maps not working or Free Use
                    <iframe title="myFrame" className="map-iframe-container" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.470159428245!2d-73.9856644!3d40.7484405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1638897516220!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>*/}
                </div>
            </Modal>
            <Modal 
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?" 
                footerClass="place-item__modal-actions" 
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>                    
                    </React.Fragment>
                 }
            > 
                <p>
                    Do you want to proceed and delete this place? Please note that it can't be undone thereafter.
                </p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3> 
                        <p>{props.description}</p>
                    </div> 
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button> 
                        {auth.isLoggedIn &&    
                            <Button to={`/places/${props.id}`}>EDIT</Button>
                        }
                        {auth.isLoggedIn &&                            
                            <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>
                        }
                    </div>  
                </Card>     
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;