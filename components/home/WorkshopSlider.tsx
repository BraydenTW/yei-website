import React from 'react'

import Carousel from 'react-elastic-carousel'
import speakers from '../../data/content/workshops'

import SlideItem from './WorkshopSlideItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function WorkshopSlider() {
  const bp = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ]

  return (
    <Carousel breakPoints={bp} renderArrow={Arrow} pagination={false}>
      {speakers.slice(0, 10).map((speaker) => {
        let key = speaker.name.replace(/[\W_]+/g, '-').toLowerCase()
        return (
          <SlideItem
            key={key}
            name={speaker.name}
            date={speaker.date}
            imgSrc={`/img/flip/workshops/${key}.jpg`}
            vid={speaker.vids ? speaker.vids[0] : null}
          />
        )
      })}
    </Carousel>
  )
}

function Arrow({ type, onClick, isEdge }) {
  const pointer =
    type === 'PREV' ? (
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={`${
          isEdge
            ? 'text-gray-400 cursor-not-allowed'
            : 'cursor-pointer text-gray-600'
        } block h-8 w-8`}
      />
    ) : (
      <FontAwesomeIcon
        icon={faAngleRight}
        className={`${
          isEdge
            ? 'text-gray-400 cursor-not-allowed'
            : 'cursor-pointer text-gray-600'
        } block h-8 w-6`}
      />
    )
  return (
    <button onClick={onClick} disabled={isEdge}>
      {pointer}
    </button>
  )
}
