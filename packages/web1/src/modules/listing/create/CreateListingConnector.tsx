import * as React from 'react';
import {RouteComponentProps } from 'react-router-dom';
import { FormikActions } from "formik";
import {createListingController,NewPropsCreateListing} from '@airbnb/controller';
// import ImageFile from "react-dropzone";
import {ListingFormValues,ListingForm} from '../shared/ListingForm';

class C extends React.PureComponent<RouteComponentProps<{}> & NewPropsCreateListing>{

	submit=async(values:ListingFormValues, {setSubmitting}:FormikActions<ListingFormValues>)=>{
		await this.props.createListing(values);
		setSubmitting(false);
	};

	render(){
		return (
			<ListingForm submit={this.submit} />
		);
	}
}

export const CreateListingConnector=createListingController(C);