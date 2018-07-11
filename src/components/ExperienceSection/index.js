import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import blackberryLogo from '../../assets/images/experience/blackberry-logo.jpg'
import ciaraLogo from '../../assets/images/experience/ciara-logo.jpg'
import ultimateLogo from '../../assets/images/experience/ultimate-logo.png'
import jpmorganLogo from '../../assets/images/experience/jpmorgan-logo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
              colour='#FFFFFF'
              title='JPMorgan Chase'
              position='Software Engineering Intern'
              logo={jpmorganLogo}
              link='https://www.jpmorganchase.com/'
              timeperiod='June 2018 - Aug 2018'
              subtitle='Worked under the Asset and Wealth Management 
                        Line of Business to implement features and 
                        bug fixes using React and Spring Boot to a 
                        trading application utilized by 
                        financial advisors to execute, edit, 
                        and view orders across various asset classes. 
                        '
          />
          <ExperienceUnit
            colour='#FFFFFF'
            title='Ultimate Software'
            position='Software Engineering Intern'
            logo={ultimateLogo}
            link='https://www.ultimatesoftware.com/'
            timeperiod='Jan 2018 - Apr 2018'
            subtitle='Worked on the Product Research and Innovation 
                      Strategy team to prototype an Ionic application
                      with a NodeJS backend for a customer conference 
                      and developed a template of the company 
                      product to give the team a starting
                      point from which to begin other projects. 
                      '
          />
          <ExperienceUnit
            colour='#FFFFFF'
            title='CIARA at FIU'
            position='NSF Software Defined Networking Fellow'
            logo={ciaraLogo}
            link='http://www.ciara.fiu.edu/'
            timeperiod='June 2017 - Dec 2017'
            subtitle='Developed scripts and installed infrastruture
                      to store and analyze network traffic metadata 
                      from public institutions in South America.
                      This information was used to build out 
                      reports and visualizations for the NSF. 
                      The tools and languages used were 
                      Elasticsearch, Logstash, Kibana, Grafana, and Python.'
          />
          <ExperienceUnit
            colour='#000000'
            title='BlackBerry Limited'
            position='Automation Test Developer Intern'
            logo={blackberryLogo}
            link='https://blackberry.com/'
            timeperiod='Jan 2017 - May 2017'
            subtitle='Contributed to the development of the 
                      in-house test framework and test suite 
                      using various tools and languages 
                      such as JIRA, Squish, Python, Java, and Bash.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
