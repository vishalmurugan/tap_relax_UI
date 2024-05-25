import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../dashboard.css';
import ApiService from "../../../services/ApiService";
import Dropdown from 'react-bootstrap/Dropdown';

const MyContact = () => {
    const navigate = useNavigate();
    const [type,setType]=useState(0);
    const [data, setData] = useState([]);
    const [contactId, setContactId] = useState();

    const newContact = () => {
        navigate("/user/new-contact");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                var request={};
                request.page=0;
                request.limit=1000;
                request.status=type
                const masterResponse = await ApiService.getContactList(request);
                if (masterResponse.status === 200) {
                    setData(masterResponse.data.items);
                    setContactId(masterResponse.data.items);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, [type]);

    const viewContact = async (id) => {
        const contactById = await ApiService.getContactById(id).then(
            response => {
                if (response.status === 200) {
                    sessionStorage.setItem('contact', JSON.stringify(response.data.item));
                    navigate("/user/view-contact");
                } else {
                    console.error('Validation Error');
                }
            }
        )
    }

    return (
        <div>
            <h2 className="dashboard-title-text">Contacts</h2>
            <div className="my-contact-cards p-5 mt-5">
                <div className="row" style={{ fontSize: '16px' }}>
                    <div className="col">
                        <p>Saved contact: {data.length}</p>
                    </div>
                    <div className="col">
                        <p>Exchanged contact: {data.filter(item => item.is_exchange === 1).length}</p>
                    </div>
                    <div className="col-3">
                        <button className="create-contact-btn" onClick={newContact}>Create Contact</button>
                    </div>
                    <div className="col-1">
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" toggle={false}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1DDA63" className="bi bi-three-dots bg-transparent" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark" style={{ padding: '5px' }}>
                                <Dropdown.Item className="text-white text-decoration-none fs-4" onClick={()=>setType(1)}>
                                    Exchanged Contact
                                    <input class="form-check-input ms-2" checked={type===1} type="radio" name="contact" id="contactDefault" />
                                </Dropdown.Item>
                                <hr style={{ border: '1px solid gray' }} />
                                <Dropdown.Item className="text-white text-decoration-none fs-4" onClick={()=>setType(0)}>
                                    Contact feeded
                                    <input class="form-check-input ms-5" checked={type===0} type="radio" name="contact" id="contactDefault" />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="table table-bordered my-contact-table" style={{ border: '1px solid gray' }}>
                        <thead>
                            <tr>
                                <th scope="col">St no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date added</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody> 
                            {data.map((item, index) => (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>{item.is_exchange === 1 ? 'Exchanged' : ''}</td>
                                    {type ===0 && <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic" toggle={false}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1DDA63" className="bi bi-three-dots bg-transparent" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                            </svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu variant="dark" style={{ padding: '5px' }}>
                                            <Dropdown.Item href="#/action-1" className="text-decoration-none fs-4">
                                            <p className="bg-transparent"><Link style={{ color:'white', textDecoration: 'none', backgroundColor: 'transparent' }} to={'/user/view-contact/'+item.id}>View contact</Link></p>
                                            </Dropdown.Item>
                                            {/* <hr style={{ border: '1px solid gray' }} />
                                            <Dropdown.Item href="#/action-2" className="text-decoration-none fs-4">
                                                <p className="bg-transparent">Delete Contact</p>
                                            </Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyContact;
