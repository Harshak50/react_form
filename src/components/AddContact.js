import React from "react";

class AddContact extends React.Component { 
    state = {
        name:"",
        email:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("all feilds are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
    }
    
    render(){
  
return (
    <div className="ui main">
        <h2>AddContact</h2>
        <form className="ui form" onSubmit={this.add}>
            <div className="feild">
                <label>Name</label>
                <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={(e)=>this.setState({name: e.target.value})}/>
            </div>
            <div className="feild">
                <label>Email</label>
                <input type="email" value={this.state.email} name="email" placeholder="Email"  onChange={(e)=>this.setState({email: e.target.value})}/>
            </div>
            <button className="ui button blue" style={{margin:"5px"}}>Add</button>
        </form>
    </div>
);
}
}
export default AddContact;