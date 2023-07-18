import { useState } from "react"


function Home() {

  const [userInput, setUserInput] = useState("");  
  console.log(userInput);

  //way of initialize object in typscript
  type todoInfo = {
    id: number;
    title: string;
  };
  const [todoList, setTodoList] = useState<todoInfo[]>([]);
  console.log(todoList);
  //way of initialize object in typscript

  const addToList = () => {
    const title = userInput
    if(title!==""){
      if(todoList.length == 0){
        const listid = 1
        setTodoList([
          ...todoList, //Spred and add new todo
          {id:listid, title:title} //add new todo
        ])

        setUserInput("") //Clear input box
        
      }else{
        const listLastId = todoList.length + 1 // Get last id of todo list item
        
        setTodoList([
          ...todoList, //Spred and add new todo
          {id:listLastId, title:title} //add new todo
        ])
        setUserInput("") //Clear input box
      }
    }
  }

  return (
        
    <div className="flex flex-col justify-center items-center w-3/5 m-auto font-sans mt-10">
    <h1 className="pb-1 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">My TODO List</h1>
    <p className="text-violet-950 text-center text-xl/[25px] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus, eos fuga perferendis voluptates impedit voluptatum, fugiat velit ab magni eum tempore ad maxime iusto labore corporis, at a quaerat.</p>

    <section className="user-input w-full pt-5">
        <div className="w-5/6 flex flex-col justify-center items-center m-auto md:flex-row gap-4 sm:justify-between">
        <input type="text" value={userInput} onChange={(e)=> setUserInput(e.target.value)} placeholder="Add new task" className="p-2 focus:outline-none text-violet-800 bg-green-50 rounded-lg border-4 border-violet-500 w-full focus:border-violet-700 "/>
        <button onClick={addToList} className="shadow-md px-4 py-1 rounded-md border-[3px] border-violet-900 text-lg font-semibold hover:bg-violet-500 hover:text-cyan-50 transition duration-150 ease-out min-w-fit">Add Todo</button> 
        </div>
    </section>

</div>
  )
}

export default Home
