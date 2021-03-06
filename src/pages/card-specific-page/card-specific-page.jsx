import React from 'react';
import CardSpecificComponent from './../../components/CardSpecific/Card-Specific-Component';
import NavBar from './../../components/Navigation/Navigation-Component';

export default class CardSpecificPage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cardObj:[],
			cardId: this.props.match.params.id
		}
	}
	
	componentDidMount(){
		const app = this;
		
		if(app.loggedinValidation()){
			app.getData();
		}else{
			app.props.history.push("/");
		}
	}
	
	loggedinValidation(){
		if (sessionStorage.getItem("AuthToken") === "sa6d456sd4a4ad6s"){
			return true;
		}else{
			return false;
		}
	}
	
	getData(){
		const app = this;
		fetch('https://api.magicthegathering.io/v1/cards/'+app.state.cardId)
		.then(response =>{
			return response.json()
		})
		.then(result =>{
			app.setState({
				cardObj: result.card
			})
		});
	}
	
	
	render(){
		const app = this;
		
		return(
			<div>
				<NavBar home="[ navbar__link--active ]"></NavBar>
				
				<CardSpecificComponent 
					image={app.state.cardObj.imageUrl}
					name={app.state.cardObj.name}
					about={app.state.cardObj.originalText}
					rarity={app.state.cardObj.rarity}		
					color={app.state.cardObj.colors}		
				>
				</CardSpecificComponent>
			</div>
		);
	}
}