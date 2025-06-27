"use client"
import React from 'react'
import Section1 from '../../components/room/section1/page';
import SingleRoom from '../../components/room/singleRoom/page';
import DoubleRoom from '../../components/room/doubleRoom/page';
import TripleRoom from '../../components/room/tripleRoom/page';
import QuadRoom from '../../components/room/quadRoom/page';
import QueenRoom from '../../components/room/queenRoom/page';

const page = () => {
  return (
    <div>
      <Section1 />
      
      <div className="flex flex-col md:flex-row md:gap-6">
        <SingleRoom />
        <DoubleRoom />
      </div>

      <div className="flex flex-col md:flex-row md:gap-6">
        <TripleRoom />
        <QuadRoom />
      </div>

      <div>
        <QueenRoom />
      </div>
    </div>
  )
}

export default page;
