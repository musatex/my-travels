import React from 'react';
import Travel from './Travel.js';

const travels = [
    {
        destination:"Amérique Latine.",
        country: "Mexique",
        distance: "9 184 Km",
        photo:
        "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/67/61/p067619b.jpg"
    },
    {
        destination:"Amérique Latine.",
        country: "Guatemala",
        distance: "8 926 Km",
        photo:
        "https://media.mv.urlaubspiraten.de/images/2016/12/585d816ddcce31436047603cq1iru4.jpg"
    },
    {
        destination:"Amérique Latine.",
        country: "Argentine",
        distance: "9 184 Km",
        photo:
        "http://www.voyage-argentine.org/wp-content/uploads/2015/12/slider.jpg"
    },
    {
        destination:"Amérique Latine.",
        country: "Colombie",
        distance: "9 184 Km",
        photo:
        "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2018/02/01154318/colombia-cannabis-company-1280x800.jpg"
    }
  ];
  
  const Travels = () => (
    <div>
      {travels.map(travel => (
    <Travel destination={travel.destination} country={travel.country} distance={travel.distance} photo={travel.photo} />
  )
  )}
    </div>
  );
  
  export default Travels;

