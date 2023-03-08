import SectionOne from './home-page/Section-1';
import SectionTwo from './home-page/Section-2';
import SectionThree from './home-page/Section-3';
import SectionFour from './home-page/Section-4';

export default function Container(){
  return(
    <>
      {/* <h1>Hey</h1> */}
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </>
  )
}