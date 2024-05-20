import React, { useEffect } from "react";
import HomeNavBar from "./home-navbar/home-navbar";
import ApiService from "../../services/ApiService";

const Home = () => {
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const masterResponse = await ApiService.getAllMasterRecords();
        //         localStorage.setItem('productsData', JSON.stringify(masterResponse.data.products));
        //     } catch (error) {
        //         console.error("Error:", error);
        //     }
        // };

        // fetchData();
    }, []);

    return (
        <div>
            <HomeNavBar />
        </div>
    );
}

export default Home;
