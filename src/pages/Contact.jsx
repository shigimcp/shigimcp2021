//#region ==================== IMPORTS ====================

import React from 'react';

// import { FullPage } from '../components/FullPage';
// import { BodyContainer } from '../components/BodyContainer';

import '../stylesheets/Contact.scss';
// import scssVars from '../stylesheets/Global.scss';

//#endregion ==================== IMPORTS ====================



// console.log('');
// console.log('=========================  Contact.jsx  =========================');



//#region ==================== CONSTANTS ====================

// const remoteLoc = 'https://www.shigimcp.com/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020/img/';
// const remoteLoc = 'https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/';

//#endregion ==================== CONSTANTS ====================



// export const Contact = ({ name }) => {

//     return (

//         <FullPage title='Contact'>
//             {/* <img className='contactImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/kawaii08_06_POSE_SingleLadies02.jpg' alt='SquirrelBit_Single_Ladies' /> */}
//             <img className='contactImgHolder' src='https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/hilites/pet_projects/SquirrelBit_3D.jpg' alt='SquirrelBit_3D' />
//             <h1>Contact Page</h1>
//             <h1>Hello, {name}</h1>
//         </FullPage>
//     )
// }


// export class Contact extends React.Component {
export const Contact = ({ locID }) => {
// export const Contact = ({ locID, loadStatus }) => {

    localStorage.setItem('navLoc', locID);
    // localStorage.setItem('loadStatus', loadStatus);

    // constructor(props) {

    //     super(props);

    //     // this.state = { value: '' };

    //     // this.state = {
    //     //     // value: ''
    //     //     // value: 'Please write an essay about your favorite DOM element.'
    //     //     // value: 'coconut'
    //     //     // value: ['grapefruit', 'coconut']
    //     //     value: []
    //     // };

    //     // this.handleChange = this.handleChange.bind(this);
    //     // this.handleSubmit = this.handleSubmit.bind(this);



    //     // this.state = {
    //     //     isGoing: true,
    //     //     numberOfGuests: 2
    //     // }

    //     // this.handleInputChange = this.handleInputChange.bind(this);



    //     this.state = {
    //         name: '',
    //         email: '',
    //         message: ''
    //     }

    //     this.onNameChange = this.onNameChange.bind(this);
    //     this.onEmailChange = this.onEmailChange.bind(this);
    //     this.onMessageChange = this.onMessageChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);



    // }


    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }

    // handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.value);
    //     // console.log('A name was submitted: ' + this.state.value);
    //     // console.log('An essay was submitted: ' + this.state.value);
    //     console.log('Your favorite flavor is: ' + this.state.value);
    //     event.preventDefault();
    // }


    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }



    // onNameChange(event) {
    //     this.setState({ name: event.target.value })
    // }

    // onEmailChange(event) {
    //     this.setState({ email: event.target.value })
    // }

    // onMessageChange(event) {
    //     this.setState({ message: event.target.value })
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state);
    // }






    // render() {
        return (

            // <FullPage title='Contact' className='contactContainer'>

                // <form onSubmit={this.handleSubmit}>

                    // <label>
                    //     Name:
                    //     <input type='text' value={this.state.value} onChange={this.handleChange} />
                    // </label>

                    // <label>
                    //     Essay:
                    //     <textarea value={this.state.value} onChange={this.handleChange} />
                    // </label>

                    // <label>
                    //     Pick your favorite flavor:

                    //     <select value={this.state.value} onChange={this.handleChange}>
                    //     <select multiple={true} value={['grapefruit', 'coconut']} onChange={this.handleChange}>
                    //     <select multiple={true} onChange={this.handleChange}>

                    //         <option value='grapefruit'>Grapefruit</option>
                    //         <option value='lime'>Lime</option>
                    //         <option value='coconut'>Coconut</option>
                    //         <option value='mango'>Mango</option>

                    //     </select>

                    // </label>

                    // <input type='submit' value='Submit' />

                // </form>

                // <form>

                    // <label>
                    //     Is going:
                    //     <input
                    //         name='isGoing'
                    //         type='checkbox'
                    //         checked={this.state.isGoing}
                    //         onChange={this.handleInputChange}
                    //     />
                    // </label>

                    // <br />

                    // <label>
                    //     Number of guests:
                    //     <input
                    //         name='numberOfGuests'
                    //         type='number'
                    //         value={this.state.numberOfGuests}
                    //         onChange={this.handleInputChange}
                    //     />
                    // </label>

                // </form>




            <div className='formContainer' id='formContainerID'>

                    {/* <h1>Hello, {name}</h1> */}
                    <h1>Hello, locID = {locID}</h1>
{/* 
                    <form className='contactForm' id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label><br />
                            <input type='text' className='form-control' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail1'>Email address</label><br />
                            <input type='email' className='form-control' aria-describedby='emailHelp' value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label><br />
                            <textarea className='form-control' rows='15' value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
 */}
                </div>



            // {/* </FullPage> */}
        );
    // }
}
