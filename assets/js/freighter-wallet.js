const checkConnection = () => {
    if (window.freighterApi.isConnected()) {
        alert("User has Freighter!");
    }
};

const retrievePublicKey = async () => {
    let publicKey = "";
    let error = "";
  
    try {
      publicKey = await window.freighterApi.getPublicKey();
    } catch (e) {
      error = e;
    }
  
    if (error) {
      return error;
    }
  
    return publicKey;
};