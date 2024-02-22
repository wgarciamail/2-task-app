import Link from "next/link";

const loadTasks = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
};

async function Home() {
  const tasks = await loadTasks();

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mt-4 text-center">Lista de Tareas</h1>

      <div className="container mx-auto  flex flex-row flex-wrap gap-4  items-center justify-center min-h-screen py-2">
        {tasks.map(
          (task: {
            userId: number;
            id: number;
            title: string;
            completed: boolean;
          }) => (
            <Link href={`/Task/${task.id}`}  className="bg-gray-700 mt-2 w-full md:w-1/2 lg:w-1/3 p-4 rounded shadow"
            key={task.id}>
           
                <h1 className="text-xl font-bold">
                  {task.id} - {task.title}
                </h1>
                <p>
                  <span className="text-cyan-600 font-bold">UserId: </span>
                  {task.userId}
                </p>
                <p>
                  <span className="text-cyan-600 font-bold">Completed: </span>
                  {task.completed ? "✅" : "❌"}
                </p>
              </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
