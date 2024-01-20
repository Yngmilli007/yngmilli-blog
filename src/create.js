import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [author, setAuthor] = useState('Mario');
  const[number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isPending, setIsPending]= useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState();

    const PutFile = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[2]));
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author, number, address, file, occupation};

    setIsPending(true);

   fetch('http://localhost:9000/blogs/', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(blog)  
  }).then(() => {
    console.log('new blog added');
    setIsPending(false);
    navigate('/');
  });

}
  return (
    <div className="create">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
         type="text"
         required
         value={title}
         onChange={(e) => setTitle(e.target.value)}
        />
        <label>Mobile Number</label>
        <input 
        type="number"
        required
        onChange={(e) => setNumber(e.target.value)}

        />

        <label>Address</label>
        <input
         type="text"
         required
         onChange={(e) => setAddress(e.target.value)}
        />

        <label>Occupation</label>
        <input
         type="text"
         required
         onChange={(e) => setOccupation(e.target.value)}
        />

        <label>Write your Blog</label>
         <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
         ></textarea>
         <label>Blog-Author</label>
         <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
         >
          <option value="Mario">Mario Winston</option>
          <option value="allen">Allen Johnson</option>
         </select>
         <input type="file" handleChange={()=>PutFile} />
          <img src={file} />
         {!isPending && <button>Add Blog</button>}
         {isPending && <button disabled>Adding Blog...</button>}

         
      
      </form>
    </div>
  );
}
 
export default Create;