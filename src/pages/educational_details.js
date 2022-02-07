import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import '../App.css';
import '../css/mobile-view.css';

export const Educationaldetails = () => {
    const history = useHistory();
    const [collegename, setcollegename] = useState('');
    const [collegedate, setcollegedate] = useState('');
    const [collegecgpa, setcollegecgpa] = useState('');
    const [collegequalification, setcollegequalification] = useState('');
    const [collegedescription, setcollegedescription] = useState('');
    const [hscschoolname, sethscschoolname] = useState('');
    const [hscschooldate, sethscschooldate] = useState('');
    const [hscschoolpercentage, sethscschoolpercentage] = useState('');
    const [hscschoolqualification, sethscschoolqualification] = useState('');
    const [hscschooldescription, sethscschooldescription] = useState('');

    const [sslcschoolname, setsslcschoolname] = useState('');
    const [sslcschooldate, setsslcschooldate] = useState('');
    const [sslcschoolpercentage, setsslcschoolpercentage] = useState('');
    const [sslcschoolqualification, setsslcschoolqualification] = useState('');

    useEffect(() => {
        setcollegename(localStorage.getItem('collegename'));
        setcollegedate(localStorage.getItem('collegedate'));
        setcollegecgpa(localStorage.getItem('collegecgpa'));
        setcollegequalification(localStorage.getItem('collegequalification'));
        setcollegedescription(localStorage.getItem('collegedescription'));
        sethscschoolname(localStorage.getItem('hscschoolname'));
        sethscschooldate(localStorage.getItem('hscschooldate'));
        sethscschoolpercentage(localStorage.getItem('hscschoolpercentage'));
        sethscschoolqualification(localStorage.getItem('hscschoolqualification'));
        sethscschooldescription(localStorage.getItem('hscschooldescription'));
        setsslcschoolname(localStorage.getItem('sslcschoolname'));
        setsslcschooldate(localStorage.getItem('sslcschooldate'));
        setsslcschoolpercentage(localStorage.getItem('sslcschoolpercentage'));
        setsslcschoolqualification(localStorage.getItem('sslcschoolqualification'));
    }, []);



    const nextStep = () => {
        if (collegename === null || collegedate === null || collegecgpa === null ||
            collegequalification === null || collegedescription === null || hscschoolname === null || hscschooldate === null ||
            hscschoolpercentage === null || hscschoolqualification === null || hscschooldescription === null ||
            sslcschoolname === null || sslcschooldate === null || sslcschoolpercentage === null || sslcschoolqualification === null) {
            alert("please fill all mandatory fields");
        } else {
            history.push('/step3');
        }

    }
    const prevStep = () => {
        history.push('/step1');
    }
    return <div className='maincontainer'>
        <div className='output'>
            <h2>EDUCATION DETAILS</h2>
            <br />
            <form id='presonal-form'>
                <h5>COLLEGE DETAILS</h5>
                <br />
                <div className="row" id='row'>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="College/University *" value={collegename} onChange={(e) => { setcollegename(e.target.value); localStorage.setItem('collegename', e.target.value) }} />
                    </div>
                    <div className="col">
                        <select className="form-control" placeholder="Passed Out date" value={collegedate} onChange={(e) => { setcollegedate(e.target.value); localStorage.setItem('collegedate', e.target.value) }} >
                            <option value="" disabled={true}>Passed Out Date *</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <select className="form-control" placeholder="Qualification *" value={collegequalification} onChange={(e) => { setcollegequalification(e.target.value); localStorage.setItem('collegequalification', e.target.value) }}>
                            <option value="" disabled={true}>Qualification *</option>
                            <option value="B.E">Bachelor Of Engineering</option>
                            <option value="B.Tech">Bachelor of Technology</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" placeholder="Branch *" value={collegedescription} onChange={(e) => { setcollegedescription(e.target.value); localStorage.setItem('collegedescription', e.target.value) }} >
                            <option value="" disabled={true}>Branch *</option>
                            <option value="Computer Science And Engineering">Computer Science And Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Electrical and Electronics Engineering ">Electrical and Electronics Engineering </option>
                            <option value="Electronics and Communications Engineering"> Electronics and Communications Engineering</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="col" className="cgpa">
                    <input type="text" className="form-control" placeholder="cgpa *" value={collegecgpa} onChange={(e) => { setcollegecgpa(e.target.value); localStorage.setItem('collegecgpa', e.target.value) }} />
                </div>

                <br /><br />
                <h5>HSC DETAILS</h5>
                <br />
                <div className="row" id='row'>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="school *" value={hscschoolname} onChange={(e) => { sethscschoolname(e.target.value); localStorage.setItem('hscschoolname', e.target.value) }} />
                    </div>
                    <div className="col">
                        <select className="form-control" placeholder="Passed Out date *" value={hscschooldate} onChange={(e) => { sethscschooldate(e.target.value); localStorage.setItem('hscschooldate', e.target.value) }} >
                            <option value="" disabled={true}>Passed Out Date *</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <select className="form-control" placeholder="Qualification *" value={hscschoolqualification} onChange={(e) => { sethscschoolqualification(e.target.value); localStorage.setItem('hscschoolqualification', e.target.value) }} >
                            <option value="" disabled={true}>Qualification *</option>
                            <option value="HSC">HSC</option>
                        </select>
                    </div>
                    <br />
                    <div className="col">
                        <select className="form-control" placeholder="Course *" value={hscschooldescription} onChange={(e) => { sethscschooldescription(e.target.value); localStorage.setItem('hscschooldescription', e.target.value) }} >
                            <option value="" disabled={true}>Course *</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Bio Maths">Bio Maths</option>
                        </select>
                    </div>

                </div>
                <br />
                <div className="col" className="cgpa">
                    <input type="text" className="form-control" placeholder="Percentage *" value={hscschoolpercentage} onChange={(e) => { sethscschoolpercentage(e.target.value); localStorage.setItem('hscschoolpercentage', e.target.value) }} />
                </div>
                <br />

                <br />
                <h5>SSLC DETAILS</h5>
                <br />
                <div className="row" id='row'>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="School *" value={sslcschoolname} onChange={(e) => { setsslcschoolname(e.target.value); localStorage.setItem('sslcschoolname', e.target.value) }} />
                    </div>
                    <div className="col">
                        <select className="form-control" placeholder="Passed Out date *" value={sslcschooldate} onChange={(e) => { setsslcschooldate(e.target.value); localStorage.setItem('sslcschooldate', e.target.value) }} >
                            <option value="" disabled={true}>Passed Out Date *</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <select className="form-control" placeholder="Qualification *" value={sslcschoolqualification} onChange={(e) => { setsslcschoolqualification(e.target.value); localStorage.setItem('sslcschoolqualification', e.target.value) }} >
                            <option value="" disabled={true}>Qualification *</option>
                            <option value="SSLC">SSLC</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="col" className="cgpa">
                    <input type="text" className="form-control" placeholder="Percentage *" value={sslcschoolpercentage} onChange={(e) => { setsslcschoolpercentage(e.target.value); localStorage.setItem('sslcschoolpercentage', e.target.value) }} />
                </div>
            </form>
            <br />
            <div className='btnContainer'>
                <Link onClick={prevStep}>Back</Link>
                <Link onClick={nextStep}>Next</Link>
            </div>
        </div>
    </div>;
};
