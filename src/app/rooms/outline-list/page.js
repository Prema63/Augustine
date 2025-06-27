"use client";
import React from 'react';
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-12 my-10">
        <SingleRoom />
        <DoubleRoom />
        <TripleRoom />
        <QuadRoom />
        <QueenRoom />
      </div>
    </div>
  );
};

export default page;
