import React, { Component } from 'react';
import Drawer from '../../../component/Drawer/Drawer'
import Header from '../../../component/Header/HeaderAdmin'
import DayPicker from 'react-day-picker';
import { Scrollbars } from 'react-custom-scrollbars';
import './calendar.styles.css';

const modifiers = {
  'Parents Meeting': new Date(2020, 7, 7),
  'Exam': new Date(2020, 7, 11),
  'Outling at the park': new Date(2020, 7, 6)

};

const modifiersStyles = {
  'Parents Meeting': {
    background: 'linear-gradient(#F4E55E 0%, #F1EFD5 100%)'

  },
  'Exam': {
    background: 'linear-gradient(0deg, #E81515 0%, #F47575 100%)',
  },
  'Outling at the park': {
    background: 'linear-gradient(0deg, #B5B7B8 0%, #D8D8D8 100%)',
  },
  outside: {
    backgroundColor: '#6EC1DB',
    opacity: 0
  },
};
const sections = [
  { roles: 'Students', image: 'Student.png', number: '400000' },
  { roles: 'Teachers', image: 'Teacher.png', number: '400000' },
  { roles: 'Staff', image: 'Staff.png', number: '400000' },
];

const ticket = [
  { date: 'June 28, 2020', personincharge: 'Ms.Clark', reason: 'Transaction Failed. Ask for a techincal support', type: 'Fee', status: 'Denied', clicked: false, key: '1' },
  { date: 'June 20, 2020', personincharge: 'Mr.Robinson', reason: 'Transaction Failed. Ask for a techincal support', type: 'Salary', status: 'Denied', clicked: false, key: '2' },
  { date: 'June 17, 2020', personincharge: 'Mr.Robinson', reason: 'Transaction Failed. Ask for a techincal support', type: 'Parking', status: 'Approved', clicked: true, key: '3' },
  { date: 'June 15, 2020', personincharge: 'Mr.Robinson', reason: 'Transaction Failed. Ask for a techincal support', type: 'Syllabus', status: 'Pending', clicked: false, key: '4' },
  { date: 'June 14, 2020', personincharge: 'Mr.Robinson', reason: 'Transaction Failed. Ask for a techincal support', type: 'Sallary', status: 'Denied', clicked: false, key: '5' },
];


class Homescreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      trigger: false,
    }
  }

  handleClick(e, condition, index, array) {
    e.preventDefault();
    if (!condition) {
      array.map((item) => item.clicked = false);
      array[index]['clicked'] = true;
      this.setState({ trigger: !this.state.trigger });
    }
  }

  changetextstatus = (status, type) => {
    if (status === 'Pending')
      return (
        <div className='ticketstatusbox' style={{ backgroundColor: '#F4E55E' }}>
          <p className='textforstatusstyle'>{type}</p>
        </div>
      )
    else if (status === 'Approved')
      return (
        <div className='ticketstatusbox' style={{ backgroundColor: '#27AE60' }}>
          <p className='textforstatusstyle'>{type}</p>
        </div>
      )
    return (
      <div className='ticketstatusbox' style={{ backgroundColor: '#FF6260' }}>
        <p className='textforstatusstyle'>{type}</p>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (

      <div className='dashboard'>
        <div className='flexrow'>
          <Drawer />
          <div className='flexcolumn'>
            <Header {...this.props} />
            <div className='flexrow' style={{ marginTop: '2%' }}>
              {sections && sections.map(item =>
                <div className='totalbox' key={item.roles}>
                  <div style={{ textAlign: 'center', marginTop: '2%', fontSize: '1.3vw' }}>Total NO of {item.roles}:</div>
                  <div className='flexrow' >
                    <div className='smalltotalbox'>
                      <img src={require('../../../assets/' + item.image)} alt={item.imagedescription} style={{ width: '1.5vw', height: '1.5vw', position: 'absolute' }} />
                    </div>
                    <p className='numberoffortotalbox'>{item.number}</p>
                  </div>
                </div>
              )}
            </div>
            <div className='flexrow' style={{ marginTop: '3vh' }}>
              <div className='calendararea'>
                <div style={{ marginLeft: '0.2vw' }}>
                  <DayPicker
                    month={new Date(2020, 7)}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                  />
                  <div style={{ marginLeft: '1vw', height: '18vh' }}>
                    <Scrollbars>

                      {Object.keys(modifiers).map((key) =>
                        <div className='flexcolumn' key={key}>
                          <p style={{ color: '#A2ABBF', fontSize: '1vw', marginBottom: '0.5vh' }}>Events</p>
                          <div className='flexrow' style={{ marginBottom: '1vh' }}>
                            <div style={{ width: '2vw', height: '2vw', borderRadius: '1.2vw', background: modifiersStyles[key]['background'] }}></div>
                            <div className='flexrow' style={{ marginTop: '3px', width: '100%' }}>
                              <p style={{ color: '#A2ABBF', fontSize: '0.8vw', marginLeft: '1vw' }}>{key}</p>
                              <p style={{ color: '#A2ABBF', fontSize: '0.8vw', marginLeft: 'auto', marginRight: '2vw' }}>{modifiers[key].toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Scrollbars>
                  </div>

                </div>
              </div>
              <div className='ticketarea'>
                <Scrollbars>
                  {ticket && ticket.map((item, index) =>
                    (item.clicked) ? (
                      <div key={item.key} className='ticketrow' onClick={(e) => this.handleClick(e, item.clicked, index, ticket)} style={{ backgroundColor: '#04044E', marginLeft: '5vw', paddingTop: '1vh' }}>
                        <p style={{ color: '#FFFFFF', marginLeft: '1vw', margintop: '2vh', fontSize: '2.5vw' }}>{index + 1}</p>
                        <div className='flexcolumn' style={{ marginLeft: '1vw', marginTop: '1.8vh' }}>
                          <h1 style={{ fontSize: '0.7vw', color: '#FFFFFF' }}>{item.date}</h1>
                          <h1 style={{ fontSize: '0.7vw', color: '#FFFFFF', marginTop: '2.5vh', position: 'absolute' }}> {item.personincharge}</h1>
                        </div>
                        <div style={{ width: '15vw', marginLeft: '1vw', paddingTop: '1.5vh' }}>
                          <p style={{ fontSize: '0.8vw', color: '#FFFFFF' }}> {item.reason}</p>
                        </div>
                        {this.changetextstatus(item.status, item.type)}
                      </div>
                    ) : (
                        <div key={item.key} className='ticketrow' onClick={(e) => this.handleClick(e, item.clicked, index, ticket)} style={{ backgroundColor: '#FFFFFF', marginLeft: '3.5vw', paddingTop: '1vh' }}>
                          <p style={{ color: '#8C96AB', marginLeft: '0.5vw', margintop: '1.5vh', fontSize: '2.5vw' }}>{index + 1}</p>
                          <div className='flexcolumn' style={{ marginLeft: '1vw', marginTop: '1.8vh' }}>
                            <p style={{ fontSize: '0.7vw', color: '#6B7897' }}>{item.date}</p>
                            <p style={{ fontSize: '0.7vw', color: '#8C96AB', marginTop: '2.5vh', position: 'absolute' }}> {item.personincharge}</p>
                          </div>
                          <div style={{ width: '15vw', marginLeft: '1vw', paddingTop: '1.5vh' }}>
                            <p style={{ fontSize: '0.8vw', color: '#8C96AB' }}> {item.reason}</p>
                          </div>
                          {this.changetextstatus(item.status, item.type)}
                        </div>
                      )
                  )}
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Homescreen;

