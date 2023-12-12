// import { Text, About, Temp } from "../App";

// const ComC = () => {
//   return (
//     <>
//       <Text.Consumer>
//         {(data) => {
//           return (
//             <>
//               <About.Consumer>
//                 {(ele) => {
//                   return (
//                     <>
//                       <Temp.Consumer>
//                         {(so) => {
//                           return (
//                             <>
//                               <h1>{data}</h1>
//                               <h3>{ele}</h3>
//                               <p>{so}</p>
//                             </>
//                           );
//                         }}
//                       </Temp.Consumer>
//                     </>
//                   );
//                 }}
//               </About.Consumer>
//             </>
//           );
//         }}
//       </Text.Consumer>
//     </>
//   );
// };

// export default ComC;

// use COntext

import { useContext } from "react";
import { Text, About, Temp } from "../App";

const ComC = () => {
  const data = useContext(Text);
  const about = useContext(About);
  const ele = useContext(Temp);

  return (
    <>
      <h1>{data}</h1>
      <h3>{about}</h3>
      <p>{ele}</p>
    </>
  );
};

export default ComC;
