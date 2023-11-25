export default function Dashboard() {
  const fakeData = [
    { title: "Pacientes Ativos", value: 120 },
    { title: "Consultas Hoje", value: 15 },
    { title: "Receita Mensal", value: "$10,000" },
    { title: "Objetivos Concluídos", value: 85 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {fakeData.map((item, index) => (
        <div
          key={index}
          className="bg-green-200 p-4 rounded-md shadow-md mb-4 sm:mb-0"
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-2xl">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
