import React, {Component} from "react";

class Form extends Component{
	render(){
		return(
			<form onSubmit = {this.props.getWeather} className="form-inline text-center">
				<div className="form-group mx-auto">
								
                        <input type="text" name="city" className="form-control mr-3 mb-3" placeholder="City.."/>
                                                
						<input type="text" name="country" className="form-control mr-3 mb-3" placeholder="Country.."/>
						<button type="submit" className="btn btn-info mb-3">Get Weather </button>		
					
				</div>	
			</form>

		);
	}
};

export default Form;