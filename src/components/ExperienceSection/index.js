import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'
import experiences from './experiences'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          {experiences.map(experience => {
            const {color, title, position, logo, link, start, end, subtitle} = experience
            return <ExperienceUnit
              colour={color}
              title={title}
              position={position}
              logo={logo}
              link={link}
              timeperiod={`${start} - ${end}`}
              subtitle={subtitle}
            />
          })}
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
