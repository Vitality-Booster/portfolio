// import { executeQuery } from "@/app/utils/db"

// // const query1 = '-- Create the 'projects' table to store individual projects
// // CREATE TABLE projects (
// //     id SERIAL PRIMARY KEY,
// //     name VARCHAR(100) UNIQUE NOT NULL
// // );

// // -- Create the 'skills' table with a foreign key referencing the 'projects' table
// // CREATE TABLE skills (
// //     id SERIAL PRIMARY KEY,
// //     name VARCHAR(100) UNIQUE NOT NULL,
// //     experience INT NOT NULL,
// //     image VARCHAR(255) NOT NULL,
// //     tags TEXT[] NOT NULL,
// //     projects INT[] REFERENCES projects(id)
// // );'

// export async function GET() {
//     const result = await executeQuery({
//         query: 'CREATE TABLE skills ('
//             +'id SERIAL PRIMARY KEY,'
//             +'name VARCHAR(100) UNIQUE NOT NULL,'
//             +'experience INT NOT NULL,'
//             +'image VARCHAR(255) NOT NULL,'
//             +'tags TEXT[] NOT NULL'
//             +');',
//         values: [],
//       });

//       return Response.json(result)
// }
