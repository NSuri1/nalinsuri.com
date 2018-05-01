import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import blackberryLogo from '../../assets/images/experience/blackberry-logo.jpg'
import ciaraLogo from '../../assets/images/experience/ciara-logo.jpg'
import ultimateLogo from '../../assets/images/experience/ultimate-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            colour='#FFFFFF'
            title='Ultimate Software'
            position='Software Engineering Intern'
            logo={ultimateLogo}
            link='#'
            timeperiod='Jan 2018 - Apr 2018'
            subtitle='Worked on the Product Research and Innovation 
                      Strategy team to prototype an Ionic application
                      with a NodeJS backend for a customer conference 
                      thrown by the company. Also developed a template 
                      of the company product to give the team a starting
                      point from which to begin other projects. 
                      '
          />
          <ExperienceUnit
            colour='#FFFFFF'
            title='CIARA at FIU'
            position='NSF Software Defined Networking Fellow'
            logo={ciaraLogo}
            link='#'
            timeperiod='June 2017 - Dec 2017'
            subtitle='Worked to implement infrastruture and scripts 
                      to store and analyze network traffic metadata 
                      from public institutions in South America.
                      This information was used to build out 
                      reports and visualizations for the NSF. 
                      The tools and languages I used were 
                      Elasticsearch, Logstash, Kibana, Grafana, and Python.'
          />
          <ExperienceUnit
            colour='#000000'
            title='BlackBerry Limited'
            position='Automation Test Developer Intern'
            logo={blackberryLogo}
            link='#'
            timeperiod='Jan 2017 - May 2017'
            subtitle='Learned about testing through writing, running, maintaining,
                      and triaging tests using various tools and languages 
                      such as JIRA, Squish, Python, Java, and Bash.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
