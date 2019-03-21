import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
              />

            </div>
            <h2 style={{paddingTop: '2ems'}}>Hassen H.</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>ka;hdslkha;dsjkhfsdhfaskdjhflkjdsahksjdhkjsdlasdjhfsadkjhsd;hdslg
            s;dghsa;hsajkdhg;skdljfhsdkghjksdhf;lksdjg'sdjglksd;flsdkh;gkjsdhkjs
            dhgl;skdljfhsdkghjksdhfaksdhfkjsdhgkajsdhgksdjh;glsdh</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>323 445 4532</p>
            <h5>Email</h5>
            <p>someone@example.com</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2018}
              schoolName="Cal State"
              schoolDescription="ahfkasdhfkjasdhlgkjsdh;gsdhdlgsdlkhg
              kalsh;dgasdhksdhgkjsdhgsdkhg;lsdkhgl;asdkhglas
              dskjghas;dkgh;sdkhgsdlkhgsdklhg;lsdkhgdjshgjkh;kasdhf"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>
            <Experience
            startYear={2012}
            endYear={2018}
            jobName="First Job"
            jobDescription="ahfkasdhfkjasdhlgkjsdh;gsdhdlgsdlkhg
            kalsh;dgasdhksdhgkjsdhgsdkhg;lsdkhgl;asdkhglas
            dskjghas;dkgh;sdkhgsdlkhgsdklhg;lsdkhgdjshgjkh;kasdhf"
          />
          <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Skills</h2>
          <Skills
            skills="JavaScript"
            progress={70}
            />
            <Skills
            skills="Html/Css"
            progress={100}
              />
              <Skills
            skills="Reactjs"
            progress={40}
            />
            <Skills
          skills="Bootstrap"
          progress={60}
          />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
