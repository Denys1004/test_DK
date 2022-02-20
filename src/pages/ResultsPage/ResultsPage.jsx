import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from "../../appServices/usersService";
import Controls from "../../components/controls/Controls";

// Images
import images from '../../constans/images';

// Styles
import './ResultsPage.scss'; 

const ResultsPage = () => {
	let storageItems = usersService.getDataFromLocalStorage();

	const fizzBuzz = (num) => {
		if(num === "") 
			return ""; 
		if(num % 3 === 0 && num % 5 === 0)
			return "FizzBuzz";
		else if(num % 3 === 0)
			return "Fizz";
		else if(num % 5 === 0)
			return "Buzz";
		else    
			return "";
	}

	const formatDate = (strDate) => {
        if(strDate)
            return strDate.substring(0, 10);
        return null;
    }


	return (
        <div className='page'>
            <div className="page__inside-page results_page">

				<div className="results_page__header">
					<Link to="/">
						<Controls.Button
                            type="button"
                            text="Add More"
                        />
					</Link>
					<h2>Users List</h2>
				</div>

				<div className="results_page__content">
					{ 
						storageItems.map(
							item => 
								<div key={item.id} className="results_page__content-item">
									<h3>{item.name}</h3>
									<p>{item.gender}</p>
									<p>{item.maritalStatus}</p>
									<p>{ formatDate(item.dateOfBirth) }</p>
									<p className='fizzBuzz'>{fizzBuzz(item.number)}</p>
									<img src={images.logo} alt="logo"  className='results_page__content-item_img'/>
								</div>
						)
					}
				</div>

			</div>
		</div>
	)
}

export default ResultsPage