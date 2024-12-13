import React, { useState } from 'react'
import { TextStatics } from '../Resources/TextStatics.js';
import { SectionTitle } from './SectionTitle.js';
import SectionBody from './SectionBody.js';

export default function SuggestionsBicho() {
  const title = TextStatics.suggestions
  const [titleSecion, setTitleSection] = useState(title);
  console.log('----'+titleSecion);
    return (
    <>
      <SectionTitle titleSecion={titleSecion}/>
      <SectionBody/>
    </>
  )
}
