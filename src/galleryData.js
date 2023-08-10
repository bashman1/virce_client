//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const galleryData = () => {
  return [
    {
      galleryHeader:[
          {
            imgSrc:athlete,
            imgDesc:"Gallery Photos Speak It All",
            subheading:"This is the Best Way To React Us",
            heading:"Our Beloved Gallery",  
            
          }
        ],  
        
      ourLastest:[
        {
          heading:"Latest Shots",
          images:[
            {
              imgSrc:athlete,
              imgDesc:"Gallery Photos Speak It All",
            },
            
            {
              imgSrc:goodtimes,
              imgDesc:"Gallery Photos Speak It All",
            },
            {
              imgSrc:athlete,
              imgDesc:"Gallery Photos Speak It All",
            },
            {
              imgSrc:goodtimes2,
              imgDesc:"Gallery Photos Speak It All",
            }
            ]
        }
      ],
        
      bestMoments:[{
        heading:"Best Shots",
        subheading:"This is the Best Way To React Us",

        images:[
          
          {
            imgSrc:theracer2,
            imgDesc:"Gallery Photos Speak It All",
          },
          {
            imgSrc:athlete2,
            imgDesc:"Gallery Photos Speak It All",
          },
          {
            imgSrc:athlete2,
            imgDesc:"Gallery Photos Speak It All",
          },
          {
            imgSrc:theracer,
            imgDesc:"Gallery Photos Speak It All",
          }
          ]
      }],
    }
    ];
};
