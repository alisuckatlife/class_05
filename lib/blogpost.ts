import { ok } from "assert";

 
 type FetchedDataTypes = {
    id:string;
    slug:string;
    avatar:string;
    body:string;
    createdAt:string;
    name:string;
    title:string;
 }
 
 
 export const FetchedData =async () => {
    const res = await fetch('https://657c2c31853beeefdb98d23c.mockapi.io/blog');

    if(!res.ok){
        console.log("Failed to fetch data")
    }

    const blogs : FetchedDataTypes[] = await res.json();

    return blogs;
    
}