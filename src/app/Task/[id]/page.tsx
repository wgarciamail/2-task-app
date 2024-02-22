import Link from "next/link";

async function loadTask(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const task = async ({params}: {params: {id: string}}) => {
    const task = await loadTask(params.id);
    
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-4">
        <h1 className="text-xl font-bold mt-4 text-center">Tarea {params.id}</h1>
        <div className="bg-gray-700 mt-2 w-full lg:w-1/2 p-8 rounded shadow">
            <p className=""><span className="text-cyan-600 font-bold">Título: </span> {task.title}</p>
            <p><span className="text-cyan-600 font-bold">UserId: </span>{task.userId}</p>
            <p><span className="text-cyan-600 font-bold">Completed: </span>{task.completed ? "✅" : "❌"}</p>
            <div className="flex justify-end">
                <Link href='/' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Volver</Link>
            </div>
        </div>

    </div>

  )
}

export default task;
