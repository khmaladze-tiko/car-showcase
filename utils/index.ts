
// export async function fetchCars() {
//     const headers = {
//         headers: {
//             'X-RapidAPI-Key': 'eee4e6c30dmsh737184d0d36dc58p16c2dbjsnb90d308d2aca',
//             'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//         }
//     }

//     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
//         headers: headers,
//     });

//     const result = await response.json();

//     return result;
// }

export async function fetchCars() {
    
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
        'X-RapidAPI-Key': 'eee4e6c30dmsh737184d0d36dc58p16c2dbjsnb90d308d2aca',
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }
  