import React from 'react';
import { useState, useEffect } from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../css/mobile-view.css';
import '../css/final-resume.css';

export const Finalresume = () => {
    const [list1, setlist1] = useState(false);
    const [list2, setlist2] = useState(false);
    const [list3, setlist3] = useState(false);
    const [list4, setlist4] = useState(false);
    const [linkedin, setlinkedin] = useState(false);
    const [github, setgithub] = useState(false);
    const [twitter, settwitter] = useState(false);
    const [facebook, setfacebook] = useState(false);
    const [instagram, setinstagram] = useState(false);
    const [intrest1, setintrest1] = useState(false);
    const [intrest2, setintrest2] = useState(false);
    const [intrest3, setintrest3] = useState(false);
    const [intrest4, setintrest4] = useState(false);
    const [workshop2, setworkshop2] = useState(false);
    const [personalskill1, setpersonalskill1] = useState(false);
    const [personalskill2, setpersonalskill2] = useState(false);
    const [personalskill3, setpersonalskill3] = useState(false);
    const [personalskill4, setpersonalskill4] = useState(false);
    const [project2title, setproject2title] = useState(false);
    const [project2link, setproject2link] = useState(false);
    const [project2description, setproject2description] = useState(false);
    const pdfExportComponent = React.useRef(null);

    const history = useHistory();
    const prevStep = () => {
        history.push('/step5');
    }
    useEffect(() => {
        if (!localStorage.getItem('skill3')) {
            setlist1(true);
        }
        if (!localStorage.getItem('skill4')) {
            setlist2(true);
        }
        if (!localStorage.getItem('skill5')) {
            setlist3(true);
        }
        if (!localStorage.getItem('skill6')) {
            setlist4(true);
        }
        if (!localStorage.getItem('intrest3')) {
            setintrest1(true);
        }
        if (!localStorage.getItem('intrest4')) {
            setintrest2(true);
        }
        if (!localStorage.getItem('intrest5')) {
            setintrest3(true);
        }
        if (!localStorage.getItem('intrest6')) {
            setintrest4(true);
        }
        if (!localStorage.getItem('workshop2')) {
            setworkshop2(true);
        }
        if (!localStorage.getItem('personalskill3')) {
            setpersonalskill1(true);
        }
        if (!localStorage.getItem('personalskill4')) {
            setpersonalskill2(true);
        }
        if (!localStorage.getItem('personalskill5')) {
            setpersonalskill3(true);
        }
        if (!localStorage.getItem('personalskill6')) {
            setpersonalskill4(true);
        }
        if (!localStorage.getItem('project2title')) {
            setproject2title(true);
        }
        if (!localStorage.getItem('project2link')) {
            setproject2link(true);
        }
        if (!localStorage.getItem('project2description')) {
            setproject2description(true);
        }
        if (!localStorage.getItem('github')) {
            setgithub(true);
        }
        if (!localStorage.getItem('twitter')) {
            settwitter(true);
        }
        if (!localStorage.getItem('facebook')) {
            setfacebook(true);
        }
        if (!localStorage.getItem('instagram')) {
            setinstagram(true);
        }
        if (!localStorage.getItem('linkedin')) {
            setlinkedin(true);
        }

    }, []);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    return <div>
        <div><button class="btn btn-primary" id='btncontainer' onClick={() => {
            if (pdfExportComponent.current) {
                pdfExportComponent.current.save();
                localStorage.clear();
                history.push({ pathname: "/step1" })
            }
        }}><i class="fa fa-download"></i> | Download</button>

            <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
                <div className='maincontainer'>
                    <div className='output'>
                        <div className='container'>
                            <h1 className='first-name'>{localStorage.getItem('firstname') + '\n' + localStorage.getItem('lastname')}</h1>
                            <h1 className='college-qualification'>{localStorage.getItem('collegequalification') + '\n' + localStorage.getItem('collegedescription')}</h1>
                            <div className='container'><p className='address'>{localStorage.getItem('address')}
                            </p></div>
                            <div className='contact-div'><p className='contact-head'><b>Contact:</b></p><p className='contact-text'>&nbsp;{'\n' + '\n' + localStorage.getItem('phonenumber')}</p></div>
                            <div className='email-div'><p className='email-head'><b>Email:</b></p><p className='email-text'>&nbsp;{'\n' + '\n' + localStorage.getItem('email')}</p></div>
                            <div className='linkedin-div'>  <p style={linkedin ? { display: "none", marginLeft: "1%" } : {}}><b>Linked in:</b><Link>&ensp;{'\n' + '\n' + localStorage.getItem('linkedin')}</Link></p></div>
                            <div className='github-div'>  <p style={github ? { display: "none", marginLeft: "1%" } : {}}><b>Github:</b><Link>&ensp;{'\n' + '\n' + localStorage.getItem('github')}</Link></p></div>
                            <div className='facebook-div'>  <p style={facebook ? { display: "none", marginLeft: "1%" } : {}}><b>Facebook:</b>&ensp;{'\n' + '\n' + localStorage.getItem('facebook')}</p></div>
                            <div className='twitter-div'>  <p style={twitter ? { display: "none", marginLeft: "1%" } : {}}><b>Twitter:</b><Link>&ensp;{'\n' + '\n' + localStorage.getItem('twitter')}</Link></p></div>
                            <div className='instagram-div'>  <p style={instagram ? { display: "none", marginLeft: "1%" } : {}}><b>Instagram:</b>&ensp;{'\n' + '\n' + localStorage.getItem('instagram')}</p></div>
                            <br />
                            <h1 className='career-objective'>CAREER OBJECTIVE:</h1>
                            <div style={{ display: "inline-block" }}><div className='container' style={{ width: "100%" }}><p style={{ display: "inline-block", fontSize: "11px" }}>{localStorage.getItem('careerobjective')}</p></div></div>
                            <h1 className='acadamic-credentials'>BASIC ACADAMIC CREDENTIALS:</h1>
                            <br />
                            <br />
                            <table className='education'>
                                <tbody>
                                    <tr className='tr-font'>
                                        <th>Qualification</th>
                                        <th>Board/Institution</th>
                                        <th>Year</th>
                                        <th>Percentage</th>
                                    </tr>
                                    <tr className='tr-font'>
                                        <td>{localStorage.getItem('collegequalification') + '(' + localStorage.getItem('collegedescription') + ')'}
                                        </td>
                                        <td>{localStorage.getItem('collegename')}</td>
                                        <td>{localStorage.getItem('collegedate')}</td>
                                        <td>{localStorage.getItem('collegecgpa')}
                                        </td>
                                    </tr>
                                    <tr className='tr-font'>
                                        <td>{localStorage.getItem('hscschoolqualification')}</td>
                                        <td>{localStorage.getItem('hscschoolname')}</td>
                                        <td>{localStorage.getItem('hscschooldate')}</td>
                                        <td>{localStorage.getItem('hscschoolpercentage')}</td>
                                    </tr>
                                    <tr className='tr-font'>
                                        <td>{localStorage.getItem('sslcschoolqualification')}</td>
                                        <td>{localStorage.getItem('sslcschoolname')}</td>
                                        <td>{localStorage.getItem('sslcschooldate')}</td>
                                        <td>{localStorage.getItem('sslcschoolpercentage')}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <h1 className='project-done'>PROJECTS DONE:</h1>
                            <br />
                            <div className='container' id='project-1'>
                                <p style={{ marginLeft: "1%" }}><b>Title:</b>&ensp;{'\n' + '\n' + localStorage.getItem('project1title')}</p>
                                <p className='project' style={{ marginLeft: "1%" }}><b>Link:</b><Link>&ensp;{'\n' + '\n' + localStorage.getItem('project1link')}</Link></p>
                                <p className='project' style={{ marginLeft: "1%" }}><b>Description:</b>&ensp;{'\n' + '\n' + localStorage.getItem('project1description')}</p>
                            </div>
                            <div className='container' id='project-2'>
                                <p style={project2title ? { display: "none", marginLeft: "1%" } : {}}><b>Title:</b>&ensp;{'\n' + '\n' + localStorage.getItem('project2title')}</p>
                                <p className='project' style={project2link ? { display: "none", marginLeft: "1%" } : {}}><b>Link:</b><Link>&ensp;{'\n' + '\n' + localStorage.getItem('project2link')}</Link></p>
                                <p className='project' style={project2description ? { display: "none", marginLeft: "1%" } : {}}><b>Description:</b>&ensp;{'\n' + '\n' + localStorage.getItem('project2description')}</p>
                            </div>
                            <h1 className='technical-skill'>{localStorage.getItem('skill1') ? "TECHNICAL SKILLS:" : ""}</h1>
                            <br />
                            <div className='container' id='skill-container'>
                                <li>{localStorage.getItem('skill1')}</li>
                                <li>{localStorage.getItem('skill2')}</li>
                                <li style={list1 ? { display: "none" } : {}}>{localStorage.getItem('skill3')}</li>
                                <li style={list2 ? { display: "none" } : {}}>{localStorage.getItem('skill4')}</li>
                                <li style={list3 ? { display: "none" } : {}}>{localStorage.getItem('skill5')}</li>
                                <li style={list4 ? { display: "none" } : {}}>{localStorage.getItem('skill6')}</li>

                            </div>
                            <br />
                            <h1 className='area-of-intrest'>AREA OF INTREST:</h1>
                            <br />
                            <div className='container' id='intrest-container'>
                                <li>{localStorage.getItem('intrest1')}</li>
                                <li>{localStorage.getItem('intrest2')}</li>
                                <li style={intrest1 ? { display: "none" } : {}}>{localStorage.getItem('intrest3')}</li>
                                <li style={intrest2 ? { display: "none" } : {}}>{localStorage.getItem('intrest4')}</li>
                                <li style={intrest3 ? { display: "none" } : {}}>{localStorage.getItem('intrest5')}</li>
                                <li style={intrest4 ? { display: "none" } : {}}>{localStorage.getItem('intrest6')}</li>
                            </div>
                            <br />
                            <h1 className='workshop-attended'>WORKSHOP ATTENDED:</h1>
                            <br />
                            <div className='container' className="workshop-1"><li>{localStorage.getItem('workshop1')}</li></div>
                            <div className='container' style={workshop2 ? { width: "100%", marginLeft: "0%", display: "none" } : {}}><li style={{ fontSize: "11px", }}>{localStorage.getItem('workshop2')}</li></div>
                            <br />
                            <h1 className='personal-skill'>PERSONAL SKILLS:</h1>
                            <br />
                            <div className='container' id='personalskill-container'>
                                <li>{localStorage.getItem('personalskill1')}</li>
                                <li>{localStorage.getItem('personalskill2')}</li>
                                <li style={personalskill1 ? { display: "none" } : {}}>{localStorage.getItem('personalskill3')}</li>
                                <li style={personalskill2 ? { display: "none" } : {}}>{localStorage.getItem('personalskill4')}</li>
                                <li style={personalskill3 ? { display: "none" } : {}}>{localStorage.getItem('personalskill5')}</li>
                                <li style={personalskill4 ? { display: "none" } : {}}>{localStorage.getItem('personalskill6')}</li>
                            </div>
                            <br />
                            <h1 className='personal-details'>PERSONAL DETAILS:</h1>
                            <br />
                            <div className='container' style={{ marginLeft: "0%", fontSize: "11px" }}>
                                <p className='father-name'><b>Father Name:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('fathername')}</p>
                                <p className='detail'><b>Date of Birth:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('dateofbirth')}</p>
                                <p className='detail'><b>Gender:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('gender')}</p>
                                <p className='detail'><b>Marital Status:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('maritalstatus')}</p>
                                <p className='detail'><b>Nationality:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('nationality')}</p>
                                <p className='detail'><b>Language Proficiency:</b>&ensp;{'\n' + '\n' + '\n' + localStorage.getItem('languageproficiency')}</p></div>
                            <br />
                            <h1 className='declaration'>DECLARATION:</h1>
                            <p style={{ fontSize: "11px" }}>I hereby declare that the above given information is true to the best of my knowledge.</p>
                            <br />
                            <div className='dec-style'>
                                <p className='place'><b>Place:</b>{'\n' + localStorage.getItem('place') + '\n'}</p>
                                <p className='dec-name'><b>(&ensp;{'\n' + localStorage.getItem('firstname') + '\n' + localStorage.getItem('lastname') + '\n' + '\n'}&ensp; )</b></p>
                            </div>
                            <p className='date'><b>Date:</b> {'\n' + today + '\n'}</p>
                        </div>

                    </div>

                </div >
            </PDFExport>
        </div >
        <div className='btnContainer'>
            <Link onClick={prevStep}>Back</Link>
        </div>
    </div >
};
