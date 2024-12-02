import React, { useState } from 'react'
import { TextStatics } from '../Resources/TextStatics.js';
import { SectionTitle } from './SectionTitle.js';

export default function TransferData() {
  const title = TextStatics.transferData
  const [titleSecion, setTitleSection] = useState(title);
  return (
    <>
    <SectionTitle titleSecion={titleSecion}/>
    </>
  )
}
