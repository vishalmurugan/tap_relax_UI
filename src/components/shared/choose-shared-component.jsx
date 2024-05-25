import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import AppNavBar from '../layout/app-navbar/app-navbar';
import pvcCard1 from "../../assets/pvc_card_001.svg";
import pvcCard2 from "../../assets/pvc_card_002.svg";
import pvcCard3 from "../../assets/pvc_card_003.svg";
import pvcCard4 from "../../assets/pvc_card_004.svg";
import standeeImage from "../../assets/Standee-card.svg";
import ApiService from '../../services/ApiService';
import futureImage from "../../assets/tap-future-pattern.svg";
import "../shared/choose-info.css";

const ChooseSharedComponent = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [pvcCard, setPvcCard] = useState({});
    const [standeeCard, setStandeeCard] = useState({});
    const [data,setData]=useState([]);
    var images =[pvcCard1,pvcCard2,pvcCard3,pvcCard4];
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const masterResponse = await ApiService.getAllMasterRecords();
                if(masterResponse.status===200){
                  setData(masterResponse.data.products);
                  setPvcCard(masterResponse.data.products[0]);
                  setStandeeCard(masterResponse.data.products[1]);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);


    const navigateForm=(id,type)=>{
        sessionStorage.setItem('card',JSON.stringify({id,type}));
        navigate("/user/info-steps");
    }
    const initialContent = (
        <div>
            <div className="row">
                <div className="col choose-product-text-container">
                    <h2 className="ms-5" style={{ fontSize: "35px" }}>Choose your product</h2>
                    <p className="ms-5" style={{ fontSize: "17px" }}>
                        Our NFC are always reprogrammable so you can constantly change the
                        contents of the chip to your liking
                    </p>
                    <p className="ms-5" style={{ fontSize: "18px" }}>
                        This is the only business essentials you’ll ever need
                    </p>
                    <div className="row choose-your-product-card-container" style={{ marginTop: '5%' }}>
                        <div className="col-6">
                            <div className="pvc-card" style={{ width: '30rem' }}>
                                <div className="card-body">
                                    <h3 className="text-center mt-5">PVC CARD</h3>
                                    <ul className="mt-5 ms-5" style={{ fontSize: "14px" }}>
                                        {Object.keys(pvcCard).length !==0 && pvcCard.descriptions.map((description, index) => (
                                            <li key={index}>{description}</li>
                                        ))}
                                    </ul>
                                    <p className="text-center" style={{ fontSize: "18px", marginTop: '15%' }}>Rs. <span>599</span> /- Only</p>
                                    <div className="text-center">
                                        <button type="button" className="GetButton" onClick={() => setSelectedCard('PVC')}>Get this</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="standee-card" style={{ width: '30rem' }}>
                                <div className="card-body">
                                    <h3 className="text-center mt-5">STANDEE</h3>
                                    <ul className="mt-5 ms-5" style={{ fontSize: "14px" }}>
                                        {Object.keys(standeeCard).length !==0 && standeeCard.descriptions.map((description, index) => (
                                            <li key={index}>{description}</li>
                                        ))}
                                    </ul>
                                    <p className="text-center" style={{ fontSize: "18px", marginTop: '15%' }}>Rs. <span>899</span> /- Only</p>
                                    <div className="text-center">
                                        <button type="button" className="GetButton" onClick={() => setSelectedCard('Standee')}>Get this</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <img src={futureImage} alt="Design-review" className="futureImage" />
                </div>
            </div>
        </div>
    );

    const pvcCardContent = (
        <div>
            <div className="row">
                <div className="col choose-design-text-container mt-5">
                    <h2 className="ms-5 mt-5" style={{ fontSize: "35px" }}>Choose your design</h2>
                    <p className="ms-5" style={{ fontSize: "17px" }}>The chosen design will be your physical card</p>
                </div>
                <div className="col-auto">
                    <img src={futureImage} alt="Design-review" className="group-image" />
                </div>
            </div>

            <div className="row choose-design-cards-container" style={{ marginTop: '-10%' }}>
                {Object.keys(pvcCard).length!==0 && pvcCard.cards.map((item,idx)=>(
                   <div className="col-md-2" key={idx}>
                   <img src={images[idx]} alt="pvcCard1" />
                   <p className="text-center mt-5"><Link to="/user/info-steps" onClick={()=>navigateForm(item.id,'pvc')} style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>Choose this</Link></p>
               </div>
                ))}
            </div>
        </div>
    );

    const standeeCardContent = (
        <div>
            <div className="row">
                <div className="col choose-design-text-container">
                    <h2 className="ms-5" style={{ fontSize: "35px" }}>
                        Standee
                    </h2>
                    <p className="ms-5" style={{ fontSize: "17px" }}>
                        Interactive marketing display equipped with NFC technology, enabling
                        seamless engagement
                    </p>
                    <p className="ms-5" style={{ fontSize: "17px" }}>
                        and information sharing with a simple tap.
                    </p>
                    <div className="nfc-standee-card-container">
                        <div className="nfc-standee-card p-5 ms-5" style={{ marginTop: '5%' }}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <img src={standeeImage} alt="standeeImage" />
                                    </div>
                                    <div className="col">
                                        <h2 className="text-center">STANDEE</h2>
                                        <ul className="mt-3" style={{ lineHeight: "25px", fontSize: "14px", marginLeft: '20%' }}>
                                            {Object.keys(standeeCard).length !==0 && standeeCard.descriptions.map((description, index) => (
                                                <li key={index}>{description}</li>
                                            ))}
                                        </ul>
                                        <p className="text-center mt-5" style={{ fontSize: '18px' }}>Rs.  899/- Only</p>
                                        <div className="text-center">
                                            {Object.keys(standeeCard).length !== 0 && (
                                                <button onClick={() => navigateForm(standeeCard.cards[0].id, 'standee')} className="standee-getButton">Get This</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <img
                        src={futureImage}
                        alt="Design preview"
                        className="futureImage"
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ overflowX: 'hidden' }}>
            <AppNavBar />
            {selectedCard === null && initialContent}
            {selectedCard === 'PVC' && pvcCardContent}
            {selectedCard === 'Standee' && standeeCardContent}
        </div>
    );
};

export default ChooseSharedComponent;
