/**
* In this file use to contains all API calls
**/
import axios from 'axios';

/*Declare the API BaseUrl*/
const BaseUrl=process.env.REACT_APP_SERVERURL+'api';

    /** 
	* To handle api request
	**/
	axios.interceptors.request.use(
	  config => {
		const token = localStorage.getItem('token');
		if (token) {
		  config.headers['Authorization'] = 'Bearer ' + token
		}
		return config
	  },
	  error => {
		Promise.reject(error)
	  }
	);
	
	/** 
	* To handle api response
	**/
	axios.interceptors.response.use(
	  response => {
		return response
	  },
	  error => {
		   if (error.response.status === 401) {
			   localStorage.clear();
                window.location.href = "/";
            }
		  return Promise.reject(error)
	  }
	);

	/** Login API */
    const login= (data)=>{
		return axios.post(`${BaseUrl}/account/login`, data)
		  .then(function (response) {
			 if(response.data?.token){
			    localStorage.setItem("token", response.data.token);
			    localStorage.setItem("userId", response.data.userId);
			 }
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
	}; 

	/** Register API */
    const register= (data)=>{
		return axios.post(`${BaseUrl}/account/signup`, data)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
	}; 

	/** otpVerification API */
    const otpVerification= (data)=>{
		return axios.post(`${BaseUrl}/account/otp-verification`, data)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
	}; 

	/** Fogot Password API */
    const forgotPassword= (data)=>{
		return axios.put(`${BaseUrl}/account/forgot-password`, data)
		  .then(function (response) {
			return response;
		  })
		  .catch(function (error) {
			return error.response;
		  });
	}; 

	/** create contact API */
	const createContact = (data) => {
    return axios
      .post(`${BaseUrl}/contact/create`, data)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error.response;
      });
 	};

	/** update contact API */
    const updateContact = (data)=>{
		return axios.put(`${BaseUrl}/contact/update`, data)
		  .then(function (response) {
			return response;
		})
		  .catch(function (error) {
			return error.response;
		});
	};

	/** get Profile API */
	const getProfile = (data)=>{
		return axios.get(`${BaseUrl}/account/profile`, data)
		  .then(function (response) {
			return response;
		})
		  .catch(function (error) {
			return error.response;
		});
	};

	/** get Master API */
	const getAllMasterRecords = (data)=>{
		return axios.get(`${BaseUrl}/master/records`, data)
		  .then(function (response) {
			return response;
		})
		  .catch(function (error) {
			return error.response;
		});
	};

	/** place order API */
	const placeOrder = (data)=>{
		return axios.post(`${BaseUrl}/customer/place-order`, data)
		  .then(function (response) {
			return response;
		})
		  .catch(function (error) {
			return error.response;
		});
	};

	const getAllCardsListForDashboard = (data) => {
		return axios.get(`${BaseUrl}/customer/cards/list`,{params:data})
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
	};

	/** get contact list API */
	const getContactList = (data)=>{
		return axios.get(`${BaseUrl}/contact/list`, {params:data})
		  .then(function (response) {
			return response;
		})
		  .catch(function (error) {
			return error.response;
		});
	};

	/** contact view API */
	const getContactById = (id)=>{
		return axios.get(`${BaseUrl}/contact/view/${id}`)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

	/**  view card API */
	const viewCardById = (id)=>{
		return axios.get(`${BaseUrl}/customer/cards/${id}`)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

	/**  share contact to get receiver share Id */
	const shareConatct = (data)=>{
		return axios.post(`${BaseUrl}/customer/share-contact`,data)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

	/**  Image Upload API */
	const photoUpload = (data)=>{
		return axios.post(`${BaseUrl}/account/photo/upload`,data)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
            return error.response;
        });
	}		

	/**  view user card details API */
	const viewUserCardDetails = (shareId)=>{
		return axios.get(`${BaseUrl}/account/user-card/${shareId}`)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

	/**  exchange contact API */
	const exchangeContact = (data)=>{
		return axios.post(`${BaseUrl}/contact/exchange-contact`,data)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

	/**  update Profile API */
	const updateProfile = (data)=>{
		return axios.put(`${BaseUrl}/customer/profile/update`,data)
			.then(function (response) {
			return response;
		})
			.catch(function (error) {
			return error.response;
		});
	};

    const ApiService={ login,register,otpVerification,shareConatct,forgotPassword, createContact, updateContact, getProfile, getAllMasterRecords, placeOrder, getContactList, getContactById, getAllCardsListForDashboard,viewCardById, viewUserCardDetails, exchangeContact, photoUpload,updateProfile };

export default ApiService;