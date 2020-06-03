import React from 'react';


class Display extends React.Component{
    render(){
        
        let userData = this.props.userData;
        return(
    < div >
        <img src={userData.avatar_url} alt='pic'></img>
       

    </div>
        );
    }
};

export default Display;