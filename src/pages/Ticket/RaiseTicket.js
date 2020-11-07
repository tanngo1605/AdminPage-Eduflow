import React, { useEffect } from "react";
import { Formik,Form,Field} from "formik";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { connect } from "react-redux";
import {getCurrentUser} from "../../redux/Stores/AccountReducer";
import Drawer from "../../component/Drawer/Drawer";
import Header from "../../component/Header/HeaderAdmin";
import {createTicketStuTeaSchema} from "../../userData/ValidationSchema/TicketSchema";
import {intialTicketStuTea} from "../../userData/InitialData/Ticket";
import {marginBottom20vh} from "../../styles/marginStyles";

const RaiseTicket =(props)=> {
  
  const getUserInfo = () =>{
    props.dispatch(getCurrentUser())
  }
  useEffect(getUserInfo,[])

  const handleSubmit = (event) => {
    try {
      //const userData = props.account.userData.userdata.data.data;
      //this.props.dispatch(addTicket({ value: this.state.ticket }));
      props.history.push("/ticket/ticketlist");
    }
    catch(error) {
      console.log(error)
      
    }
  };

  return (
      <div className="dashboard">
        <div className="flexrow">
          <Drawer />
          <div className="flexcolumn">
            <Header />
            <div className="form">
              <h1 className="titleform">Raise a ticket</h1>
              <Formik
                initialValues={intialTicketStuTea}
                validationSchema={createTicketStuTeaSchema}
                onSubmit={(values, actions) => {
                  handleSubmit(values);
                  actions.resetForm()
                }}
              >
                {(propsForm)=>(
                  <Form>
                    <div className="flexrow" style={marginBottom20vh}>
                      <label htmlFor="serialno" className="section">Serial No</label>
                      <Field type="text" id="serialno" className="longbox" placeholder="Type here" />
                    </div>

                    <div className="flexrow" style={marginBottom20vh}>
                      <label htmlFor="date" className="section">Date</label>
                      <DayPickerInput  className="shortbox" name="dateto" onDayChange={(day)=>propsForm.setFieldValue("date",day)} dayPickerProps={{disabledDays:{before: new Date()}}} placeholder="- select -"/>
                    </div>

                    <div className="flexrow" style={marginBottom20vh}>
                      <label htmlFor="subject" className="section">Subject</label>
                      <Field type="text" id="subject" className="shortbox" placeholder="Type here" />
                    </div>

                    <div className="flexrow" style={marginBottom20vh} >
                      <label className="section">Topic</label>
                      <Field type="text" name="topic" className="longbox" placeholder="Type here"/>
                    </div>

                    <div className="flexrow" style={marginBottom20vh} >
                      <label className="section">Name</label>
                      <Field type="text" name="name" className="longbox" placeholder="Type here"/>
                    </div>

                    <div className="flexrow" style={marginBottom20vh} >
                      <label className="section">Problem</label>
                      <Field component="textarea" name="problem" className="longbox" placeholder="Type here"/>
                    </div>

                    <div className="flexrow" style={marginBottom20vh} >
                      <label className="section">Status</label>
                      <Field type="text" name="status" className="longbox" placeholder="Type here"/>
                    </div>
                    <div className="flexrow" style={{ marginLeft: "8vw" }}>
                      <input type="submit" value="Save" className="button" />
                      <input type="reset" value="Reset" className="button" />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );

}

const mapStateToProps = (state) => ({
  account:state.account,
});

export default connect(mapStateToProps)(RaiseTicket);
