import React, { useContext,useEffect } from "react";
import { Outlet } from "react-router-dom";
import ApiService from "../services/ApiService";
import GlobalStore from "../Store";

const Templete = () => {
const { setMedia,setProfile }= useContext(GlobalStore);

    useEffect(()=>{
       (async function(){
        var response= await ApiService.getAllMasterRecords();
        var profile= await ApiService.getProfile();
        if(response.status===200){
          setMedia(response?.data?.social_media)
        }
        if(profile.status===200){
          setProfile(profile.data.profile)
        }
       })()
    },[setMedia,setProfile])

  return (
    <>
    {<Outlet />}
    </>
  );
};

export default Templete;