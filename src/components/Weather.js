import React from "react";

class Weather extends React.Component{
	render(){
		return(
			<div className="container col-lg-8 mx-auto">

				<table className="table">
  
				  <tbody>
				    {this.props.city && this.props.country &&

				    <tr>
				      
				      <td className="text-right"><b>Location:</b></td>
				      <td className="text-left">{ this.props.city}, { this.props.country}</td>
				      
				    </tr>
				    }
				    
				    { this.props.temperature && 						
				    <tr>
				      
				      <td className="text-right"><b>Temperature:</b></td>
				      <td className="text-left">{ this.props.temperature}&#8451;</td>
				      
				    </tr>
				    }

				    { this.props.humidity && 						
				    <tr>
				      
				      <td className="text-right"><b>Humidity:</b></td>
				      <td className="text-left">{ this.props.humidity} %</td>
				      
				    </tr>
				    }	

				    { this.props.description && 						
				    <tr>
				      
				      <td className="text-right"><b>Conditions:</b></td>
				      <td className="text-left">{ this.props.description}</td>
				      
				    </tr>
				    }	

				    { this.props.error && 						
				    <tr>
				      
				      
				      <td className="text-center">{ this.props.error}</td>
				      
				    </tr>
				    }		

						
				    
				  </tbody>
				</table>

			</div>
		);
	}
};

export default Weather;