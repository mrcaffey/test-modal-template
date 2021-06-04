import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import { Header, Button, Image, Modal, Icon, Container, Dropdown, Input} from 'semantic-ui-react';
import leftSideModalImg from './assets/UniversityImage.jpg';
import BYUBannerImg from './assets/BYUmarriott.png';

const Modal1 = () => {
    const [open, setOpen] = useState(true);
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [confirmationPage, setConfirmationPage] = useState(false);
    const [gmatScore, setGMATScore] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [gpaScore, setGPAScore] = useState('');

    const [gmatGrade, setGMATGrade] = useState(0)
    const [yrsExpGrade, setYrsExpGrade] = useState(0)
    const [gpaScoreGrade, setGPAScoreGrade] = useState(0)
    const [overallGrade, setOverallGrade] = useState(0)

    const [moodFaceIcon, setMoodFaceIcon] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [confirmationModalSizing, setConfirmationModalSizing] = useState(false);

    const easeOpen = () => {
        setOpen(true);
    }

    const setBackSection = () => {
      if (page2 === true){
        setPage2(false)
        setPage1(true)
      } else if (page3 === true){
        setPage3(false)
        setPage2(true)
      } else if (confirmationPage === true){
        setConfirmationPage(false)
        setPage3(true)
      }
    }

    const setNextSection = () => {
      if (page1 === true){
        setPage1(false)
        setPage2(true)
        setOverallGrade(gmatGrade + yrsExpGrade + gpaScoreGrade)
        console.log('WHAT IS OVERALL GRADE', overallGrade)
      } else if (page2 === true){
        setPage2(false)
        setPage3(true)
      } else if (page3 === true){
        setPage3(false)
        setConfirmationModalSizing(true)
        setConfirmationPage(true)
      }
    }

    // Set final acceptance score of LOW, MEDIUM, HIGH based on choices
    // Highest Score + 2, Median + 1, Lowest No Change or + 0

    const gmatGradeTest = 0;

    const handleGMATScore = (event, data) => {

      setGMATScore(data.value)
      if (gmatScore === '700 - 800') {
        console.log('its 700 - 800')
        // 2 * 0.5 Weighted grade = 1
        setGMATGrade(gmatGrade + 1)
      } else if (gmatScore === gmatScore === '650 - 699'){
        console.log('its 650 - 699')
        // 1 * 0.5 Weighted grade = 0.5
        setGMATGrade(gmatGrade + 0.5)
      } else {
        return;
      }
      // Multiply to get weighted GMAT grade
      console.log('what is my gmat grade', gmatGrade)
    }

    const handleYrsExperience = (event, data) => {
      setWorkExperience(data.value)
      if (workExperience === '5 - 7 Years' || workExperience === '7 - 9 Years' || '10+ Years'){
        setYrsExpGrade(yrsExpGrade + 2)
      } else if (workExperience === '2 - 4 Years'){
        setYrsExpGrade(yrsExpGrade + 1)
      } else {
        return;
      }
      // Multiply to get weighted Years Exp. Grade
      setYrsExpGrade(yrsExpGrade * .25)

    }

    const handleGPAScore = (event, data) => {
      setGPAScore(data.value)
      if (gpaScore === '3.5 - 3.74' || gpaScore === '3.75 - 4.0'){
        setGPAScoreGrade(gpaScoreGrade + 2)
      } else if (gpaScore === '3.2 - 3.49'){
        setGPAScoreGrade(gpaScoreGrade + 1)
      } else {
        return;
      }
      // Multiply to get weighted GPA Score Grade
      setGPAScoreGrade(gpaScoreGrade * .25)
    }

    useEffect(() => {
      console.log('GMAT GRADE', gmatGrade)
    })

    const semesterOptions = [
      {
        key: 'Fall 2021',
        text: 'Fall 2021',
        value: 'Fall 2021',
      },
      {
        key: 'Fall 2022',
        text: 'Fall 2022',
        value: 'Fall 2022',
      },
      {
        key: 'Fall 2023',
        text: 'Fall 2023',
        value: 'Fall 2023',
      },
      {
        key: 'Fall 2024',
        text: 'Fall 2024',
        value: 'Fall 2024',
      },
      {
        key: 'Later',
        text: 'Later',
        value: 'Later',
      },
    ]

    const workExpOptions = [
      {
        key: '0 - 1 Years',
        text: '0 - 1 Years',
        value: '0 - 1 Years',
      },
      {
        key: '2 - 4 Years',
        text: '2 - 4 Years',
        value: '2 - 4 Years',
      },
      {
        key: '5 - 7 Years',
        text: '5 - 7 Years',
        value: '5 - 7 Years',
      },
      {
        key: '7 - 9 Years',
        text: '7 - 9 Years',
        value: '7 - 9 Years',
      },
      {
        key: '10+ Years',
        text: '10+ Years',
        value: '10+ Years',
      },
    ]

    const gmatScoreOptions = [
      {
        key: 'Haven\'t Taken It Yet',
        text: 'Haven\'t Taken It Yet',
        value: 'Haven\'t Taken It Yet',
      },
      {
        key: 'Less than 550',
        text: 'Less than 550',
        value: 'Less than 550',
      },
      {
        key: '550 - 599',
        text: '550 - 599',
        value: '550 - 599',
      },
      {
        key: '600 - 649',
        text: '600 - 649',
        value: '600 - 649',
      },
      {
        key: '650 - 699',
        text: '650 - 699',
        value: '650 - 699',
      },
      {
        key: '700 - 800',
        text: '700 - 800',
        value: '700 - 800',
      },  
    ]

    const gpaOptions = [
      {
        key: 'Below 3.0',
        text: 'Below 3.0',
        value: 'Below 3.0'
      },
      {
        key: '3.2 - 3.49',
        text: '3.2 - 3.49',
        value: '3.2 - 3.49'
      },
      {
        key: '3.5 - 3.74',
        text: '3.5 - 3.74',
        value: '3.5 - 3.74'
      },
      {
        key: '3.75 - 4.0',
        text: '3.75 - 4.0',
        value: '3.75 - 4.0'
      },

    ]

    const mbaOptions = [
      {
        key: 'Full-time MBA',
        text: 'Full-time MBA',
        value: 'Full-time MBA'
      },
      {
        key: 'Executive MBA',
        text: 'Executive MBA',
        value: 'Executive MBA'
      },
      {
        key: 'Not sure',
        text: 'Not sure',
        value: 'Not sure'
      },
    ]

    const genderOptions = [
      {
        key: 'Male',
        text: 'Male',
        value: 'Male'
      },
      {
        key: 'Female',
        text: 'Female',
        value: 'Female'
      },
      {
        key: 'Other',
        text: 'Other',
        value: 'Other'
      },
    ]

    const originOptions = [
      {
        key: 'Non-Hispanic White or Euro-American',
        text: 'Non-Hispanic White or Euro-American',
        value: 'Non-Hispanic White or Euro-American'
      },
      {
        key: 'Black, Afro-Caribbean, or African American',
        text: 'Black, Afro-Caribbean, or African American',
        value: 'Black, Afro-Caribbean, or African American'
      },
      {
        key: 'Latino or Hispanic American',
        text: 'Latino or Hispanic American',
        value: 'Latino or Hispanic American'
      },
      {
        key: 'East Asian or Asian American',
        text: 'East Asian or Asian American',
        value: 'East Asian or Asian American'
      },
      {
        key: 'South Asian or Indian American',
        text: 'South Asian or Indian American',
        value: 'South Asian or Indian American'
      },
      {
        key: 'Middle Eastern or Arab American',
        text: 'Middle Eastern or Arab American',
        value: 'Middle Eastern or Arab American'
      },
      {
        key: 'Native American or Alaskan Native',
        text: 'Native American or Alaskan Native',
        value: 'Native American or Alaskan Native'
      },

    ]

    const countryOptions = [
      {
        key: 'US Citizen',
        text: 'US Citizen',
        value: 'US Citizen'
      },
      {
        key: 'International Applicant',
        text: 'International Applicant',
        value: 'International Applicant'
      },
      {
        key: 'Other',
        text: 'Other',
        value: 'Other'
      },
    ]

    const closeModal = () => {
      console.log('hit close modal')
      setOpen(false)
    }

    return (
    <Modal
      dimmer={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      //trigger={<Button>Show Modal</Button>}
      style={{ width: "730px", height: confirmationModalSizing ? "700px" : "500px" }}
    >
        <Container id="content_container" style={{ width: 'inherit', height: 'inherit', display: 'flex', backgroundColor: '#01254B'}}>
        <Icon 
          name='delete'
          size='large'
          className='close-button'
          style={{ position: 'absolute', right: 0, margin: 'none', cursor: 'pointer', color: 'white'}} 
          onClick={closeModal}
        />
          {
            confirmationPage === true ? 
                // CONFIRMATION CONTAINER ------------------------- //
                <Container id="confirmation_container" style={{ margin: 'none', backgroundColor: 'white' }}>
                <div style={{ backgroundColor: '#012E5D', width: '100%', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>BYU MBA</span>
                </div>
                  <h1 style={{ textAlign: 'center'}}>{firstName}, your chances of getting accepted are:</h1>
                  <h1 style={{ fontSize: '40px', fontWeight: 'bold'}}></h1>
                  <div style={{ textAlign: 'left', color: 'black', fontWeight: 'bold', marginLeft: '150px', marginRight: '150px'}}>
                    <p style={{ fontSize: '20px'}}>GMAT Score: {gmatScore}</p>
                    <p style={{ fontSize: '20px'}}>Work Experience: {workExperience}</p>
                    <p style={{ fontSize: '20px'}}>GPA: {gpaScore}</p>
                  </div>
                  <div style={{ textAlign: 'center'}}>
                    <h2>Next steps to increase your chances:</h2>
                      <li>Get at least 2 years of work experience</li>
                      <li>Retake the GMAT for a higher score</li>
                      <li>Apply to the MBA</li>
                  </div>
                  <h2 style={{ textAlign: 'center'}}>Here's a $100 off code for a GMAT prep course:</h2>
                  <div style={{ backgroundColor: 'lightgray', height: '40px', textAlign: 'center', marginLeft: '50px', marginRight: '50px' }}>
                    <span style={{ fontStyle: 'italic', fontSize: '28px', verticalAlign: 'center', display: 'block'}}>ONLINEPROMO</span>
                    <button name="submit-offer" className="submit-offer-button" style={{ marginTop: '30px', marginBottom: '30px', width: '100%', height: '50px', borderRadius: '30px', backgroundColor: '#0377C8'}}>
                      <span style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer'}}>Claim $100 Offer</span>
                    </button>
                    <span>*This is not an official admissions decision. Results are only meant to offer guidance based on general admission criteria.</span>
                  </div>
                </Container>
              :
            <>
            {/* THE LEFT SIDE IMAGE SECTION OF THE MODAL */}
            <Modal.Content id="image_section" style={{ backgroundColor: '#012E5D', width: '50%', height: 'inherit'}}>
              <img src={BYUBannerImg} style={{ width: '300px'}} />
              <img src={leftSideModalImg} style={{ width: '100%', marginTop: '100px'}}/>
              <span style={{ fontSize: '34px', lineHeight: '40px', color: 'white'}}>See your chance of admission in</span>
              <span style={{ fontSize: '34px', lineHeight: '40px', color: '#3378C4'}}> 30 seconds or less</span>
            </Modal.Content>
              <Modal.Content id="content_section" style={{ margin: 'auto', width: '250px', color: 'white'}}>
                {
                  page1 === true ? 
                  <>
                  <p>Starting Semester? *</p>
                  <Dropdown
                    name="starting-semester"
                    style={{ marginBottom: '20px'}}
                    placeholder='Select Semester'
                    fluid
                    selection
                    required
                    options={semesterOptions}
                    className="dropdown-1"
                  />
                  <p>Work Experience *</p>
                  <Dropdown
                    name="work-experience"
                    style={{ marginBottom: '20px'}}
                    placeholder='How Many Years'
                    fluid
                    selection
                    options={workExpOptions}
                    onChange={handleYrsExperience}
                    className="dropdown-1"
                  />
                  <p>What is your GMAT score? *</p>
                  <Dropdown
                    name="gmat-score"
                    style={{ marginBottom: '20px'}}
                    placeholder='Current GMAT Score'
                    fluid
                    selection
                    options={gmatScoreOptions}
                    onChange={handleGMATScore}
                    className="dropdown-1"
                  />
                  <p>What is your current GPA? *</p>
                  <Dropdown
                    name="current-gpa"
                    style={{ marginBottom: '20px'}}
                    placeholder='Select GPA'
                    fluid
                    selection
                    options={gpaOptions}
                    onChange={handleGPAScore}
                    className="dropdown-1"
                  />
                  </>
                  : 
                  null
              }
              {
                page2 === true ? 
                  <>
                  <p>Which program are you interested in? *</p>
                  <Dropdown
                    style={{ marginBottom: '20px'}}
                    placeholder='Full-time MBA'
                    fluid
                    selection
                    options={mbaOptions}
                  />
                  <p>What is your Gender *</p>
                  <Dropdown
                    style={{ marginBottom: '20px'}}
                    placeholder='Select Gender'
                    fluid
                    selection
                    options={genderOptions}
                  />
                  <p>How do you Identify?</p>
                  <Dropdown
                    style={{ marginBottom: '20px'}}
                    placeholder='Select an Origin'
                    fluid
                    selection
                    options={originOptions}
                  />
                  </>
                  : 
                  null
              }
              {
                page3 === true ? 
                <>
                <p>How would you be applying?</p>
                <Dropdown
                  name="how-applying"
                  style={{ marginBottom: '20px'}}
                  placeholder='Full-time MBA'
                  fluid
                  selection
                  options={countryOptions}
                  className="dropdown-2"
                />
                <Input name="first-name" className="input-1" placeholder='First Name' style={{ marginBottom: '10px', width: '250px' }} onChange={(e) => {setFirstName(e.target.value)}}/>
                <Input name="last-name" className="input-1" placeholder='Last Name' style={{ marginBottom: '10px', width: '250px'}} onChange={(e) => {setLastName(e.target.value)}}/>
                <Input name="email" className="input-1" placeholder='Email' style={{ marginBottom: '10px', width: '250px' }}/>
                <Input name="phone" className="input-1" placeholder='Phone Number' style={{ marginBottom: '10px', width: '250px' }}/>
                </>
                : 
                null
              }
              <div id="button_container" style={{ position: 'absolute', bottom: '10%'}}>
                <Button color='navy' onClick={() => setBackSection()}>Back</Button>
                <Button color='blue' onClick={() => setNextSection()}>Next</Button>
              <span style={{ color: 'white' }}>Powered by Halda ©</span>
              </div>
            </Modal.Content>
         </>
        }
        </Container>
    </Modal>
    )
}

export default Modal1;