import { FetchedData } from "@/lib/blogpost"
import { log } from "console";
import Image from "next/image";

const Blog = async () => {
    const blogs = await FetchedData();
    // console.log(bls);
    
    

    return (
       <main>
       {blogs.map((post) => ( 
             <div key={post.id} className ="flex gap-5">
              <h1>{post.title}</h1>
              <h2>{post.name}</h2>
              <Image src={post.avatar} width={50} height={50} alt={post.title}></Image>
            </div> 
          ))}
       </main>
      );
      
  
}

export default Blog;