import * as Axios from "axios";


// const xgetAppi = async () => {
//   await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data);
// };

const getApiData = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl).then((response) =>
      response.json()
    );
    return response;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// const getAppi = async () => {
//   return (await fetch(url)).json();
// };

// const wgetAppi = () =>{
//     Axios.get(url).then(
//         (response) => {
//             console.log(response);
//         }
//     );
// };

export default getApiData;
