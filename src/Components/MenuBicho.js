import React, { useState } from 'react'
import { TextStatics } from '../Resources/TextStatics.js';
import { SectionTitle } from './SectionTitle.js';

export default function MenuBicho() {
  const title = TextStatics.menu
  const [titleSecion, setTitleSection] = useState(title);
  return (
    <>
      <SectionTitle titleSecion={titleSecion}/>
    </>
  )
}
