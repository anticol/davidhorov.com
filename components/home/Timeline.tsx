import { timelineItems } from '@/data/content/home';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from '../global/SectionTitle';
import EducationIcon from './EducationIcon';
import WorkIcon from './WorkIcon';
import styled from 'styled-components'
import Image from 'next/image';

const Education = () => {
  return (

    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="My working & university experience" />
      </div>
      <VerticalTimeline>

        {timelineItems.map((it) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={
                it?.education ? {
                  background: '#cfcd1e', color: 'rgb(25 11 11)', borderRadius: '27px'
                } : {
                  background: 'rgb(96 178 243)', color: '#2a1515', borderRadius: '27px'

                }
              }
              contentArrowStyle={
                it?.education ? {
                  borderRight: '7px solid #cfcd1e'
                } : {
                  borderRight: '7px solid  rgb(33, 150, 243)'
                }
              }
              iconStyle={
                it?.education ? {
                  background: 'rgb(207, 205, 30)', color: 'rgb(25 11 11)'
                } : {
                  background: 'rgb(96 178 243)', color: '#2a1515'
                }
              }
              dateStyle={{
                color: 'white',
              }}

              date={<Date>{it.date}</Date>}
              icon={it?.education ? <EducationIcon /> : <WorkIcon />}
            >
              <Heading className="vertical-timeline-element-title">
                {it?.image && <Image src={it.image} width="50" height="50" />}
                {it.heading}
              </Heading>
              <Position className="vertical-timeline-element-subtitle">{it.position}</Position>
              <Description>
                {it.description}

                {it.lor?.length > 0 && (
                  <LettersOfRecomendation>

                    {it?.lor.map((lorItem) => {
                      return (
                        <div className='lorItem'>
                          <a target="_blank" href={lorItem.path}>  {lorItem.title}</a>
                        </div>
                      )

                    })}
                  </LettersOfRecomendation>

                )}

              </Description>
            </VerticalTimelineElement>
          )
        })}

      </VerticalTimeline>
    </div >


  )
}

export default Education;

const Heading = styled.h3`
  font-size: 22px;
  font-weight: 600;
  position:relative;
  display: flex;
    align-items: center;
    width: 100%;

    span{
      margin-right:12px !important;
    }
  img{
    z-index: 9999;
    max-width:50px !important;
    max-height:50px !important;
    border-radius:20px !important;
    object-fit:contain;
  }
`;

const Position = styled.h4`
  font-size: 18px;
  font-weight: 600;
  font-style:italic;
  margin-top:16px;
`;


const Description = styled.p`
  font-size: 13px;
  font-weight: 300;
`;



const Date = styled.p`
  color: white;
`;



const LettersOfRecomendation = styled.div`
  margin-top:16px;

.lorItem{
  font-size:14px;
  text-decoration:underline;

}
`