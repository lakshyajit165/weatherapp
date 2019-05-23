import React, {Component} from "react";

class Form extends Component{
	render(){
		return(
			
			<form onSubmit = {this.props.getWeather}>
				<div className="form-inline justify-content-center pl-3 pr-3">
								
                        <input type="text" name="city" className="form-control mr-3 mb-3" placeholder="City.."/>
                                                
						<input type="text" name="country" className="form-control mr-3 mb-3" placeholder="Country.."/>
				</div>
				<div className="row justify-content-center">
						<button type="submit" className="btn btn-info mb-3">Get Weather <i className="fas fa-arrow-alt-circle-right ml-1"></i></button>		
				</div>	
					
			</form>
			
		);
	}
};

export default Form;