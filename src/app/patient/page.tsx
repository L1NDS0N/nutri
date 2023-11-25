"use client";

export default function Patient() {
  return (
    <form className="max-w-xl mx-auto mt-8 p-6 h-screen bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Paciente</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-600"
          >
            Gênero
          </label>
          <select
            id="gender"
            name="gender"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="">Selecione</option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="birthDate"
            className="block text-sm font-medium text-gray-600"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
