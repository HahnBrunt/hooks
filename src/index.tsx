import React from "react"
import { render } from "react-dom"
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql,
// } from "@apollo/client"
import Example from "./hooks"

// interface IisString {
//   //   [key: any]: any
//   onDogSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void
// }

// const GET_DOGS = gql`
//   query GetDogs {
//     dogs {
//       id
//       breed
//     }
//   }
// `

// const client = new ApolloClient({
//   uri: "https://71z1g.sse.codesandbox.io/",
//   cache: new InMemoryCache(),
// })

// function Dogs({ onDogSelected }: IisString): JSX.Element {
//   const { loading, error, data } = useQuery(GET_DOGS, {
//     pollInterval: 500,
//   })

//   if (loading) return <span>Loading...</span>
//   if (error) return <span>`Error! ${error.message}`</span>

//   return (
//     <select name="dog" onChange={onDogSelected}>
//       {data.dogs.map((dog: any) => (
//         <option key={dog.id} value={dog.breed}>
//           {dog.breed}
//         </option>
//       ))}
//     </select>
//   )
// }
// const onDogSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   console.log(e)
// }
function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      {/* <Dogs onDogSelected={onDogSelected} /> */}
      <Example />
    </div>
  )
}

render(
  // <ApolloProvider client={client}>
  <App />,
  // </ApolloProvider>,
  document.getElementById("root")
)
