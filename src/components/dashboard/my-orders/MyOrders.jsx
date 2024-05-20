import React from "react";
import "../dashboard.css";
import OrderImage from "../../../assets/order-image.jpeg";
import { Link } from "react-router-dom";
import TargetIcon from "../../../assets/target-icon.svg"

const MyOrders = () => {
  // Dummy JSON data
  const orders = [
    {
      id: 1,
      image: OrderImage,
      price: 125,
      status: "Shipped",
      trackingId: "ABC123",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 2,
      image: OrderImage,
      price: 125,
      status: "Delivered",
      trackingId: "XYZ789",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 1,
      image: OrderImage,
      price: 125,
      status: "Shipped",
      trackingId: "ABC123",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 2,
      image: OrderImage,
      price: 125,
      status: "Delivered",
      trackingId: "XYZ789",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 1,
      image: OrderImage,
      price: 125,
      status: "Shipped",
      trackingId: "ABC123",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 2,
      image: OrderImage,
      price: 125,
      status: "Delivered",
      trackingId: "XYZ789",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 1,
      image: OrderImage,
      price: 125,
      status: "Shipped",
      trackingId: "ABC123",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 2,
      image: OrderImage,
      price: 125,
      status: "Delivered",
      trackingId: "XYZ789",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 1,
      image: OrderImage,
      price: 125,
      status: "Shipped",
      trackingId: "ABC123",
      expectedDelivery: "20 December 2024",
    },
    {
      id: 2,
      image: OrderImage,
      price: 125,
      status: "Delivered",
      trackingId: "XYZ789",
      expectedDelivery: "20 December 2024",
    },
  ];

  return (
    <div>
      <h2 className="dashboard-title-text">My orders</h2>
      <div className="my-orders-card-container">
      <div className="myorders-outer-layout mt-5 p-5">
        <div className="row" style={{ fontSize: '16px' }}>
          <div className="col">
            <p>
              ORDER
              <span style={{ color: 'gray', marginLeft: '5%' }}>Tr#25</span>
            </p>
          </div>
          <div className="col-8">
            <p className="text-secondary">Order Placed on 24-04-2024</p>
          </div>
          <div className="col-2">
            <button to="/account" className="track-order-button">
            <img src={TargetIcon} alt="userIcon" style={{ height: '20px', backgroundColor:'#1DDA63' }} />
              Track Order
            </button>
          </div>
        </div>
        <div class="table-responsive my-order-table mt-5">
          <table class="table table-borderless">
            <tbody>
              {orders.map((order, index) => (
                <React.Fragment key={order.id}>
                  <tr>
                    <td>
                        <img src={order.image} alt="Order" style={{ height: '78px', width: '120px' }} />
                    </td>
                    <td>
                        <span style={{ fontSize: '16px' }}>STATUS</span>
                        <p style={{ color: '#1DDA63', fontSize: '16px' }}>{order.status}</p>
                    </td>
                    <td>
                        <p style={{ fontSize: '16px' }}>Expected Delivery</p>
                        <span style={{ marginTop: '5px', fontSize: '16px' }} >{order.expectedDelivery}</span>
                    </td>
                  </tr>
                  {index !== orders.length - 1 && (
                    <tr>
                      <td colSpan="3">
                        <hr style={{ border: '1px solid gray' }} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="mt-5" />
        <div className="button-container mt-5">
          <Link style={{ color: 'white', fontSize: '16px' }}>Cancel order</Link>
          <span style={{ fontSize: '26px' }}>Total: ₹325</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyOrders;