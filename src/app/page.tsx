const loadTasks = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
};

async function Home() {
  const tasks = await loadTasks();

  return (
    <div>
      {tasks.map((task: { id: number, title: string }) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}

export default Home;
