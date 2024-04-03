//array com os dados dos participantes
let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 01, 19, 23),
    dataCheckIn: new Date(2024, 2, 01, 20, 20),
  },
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 1, 02, 19, 23),
    dataCheckIn: new Date(2024, 1, 05, 20, 20),
  },
  {
    nome: "Ana Souza",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 0, 12, 14, 30),
    dataCheckIn: new Date(2024, 0, 13, 16, 45),
  },
  {
    nome: "Luiz Oliveira",
    email: "luiz@gmail.com",
    dataInscricao: new Date(2023, 11, 25, 10, 15),
    dataCheckIn: new Date(2024, 0, 02, 12, 10),
  },
  {
    nome: "Carla Silva",
    email: "carla@gmail.com",
    dataInscricao: new Date(2023, 10, 05, 09, 45),
    dataCheckIn: new Date(2023, 10, 08, 14, 20),
  },
  {
    nome: "João Santos",
    email: "joao@gmail.com",
    dataInscricao: new Date(2023, 8, 21, 18, 10),
    dataCheckIn: new Date(2023, 8, 22, 20, 30),
  },
  {
    nome: "Mariana Costa",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2023, 7, 15, 21, 40),
    dataCheckIn: new Date(2023, 7, 16, 22, 15),
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 5, 30, 16, 55),
    dataCheckIn: new Date(2023, 6, 02, 18, 30),
  },
  {
    nome: "Beatriz Lima",
    email: "beatriz@gmail.com",
    dataInscricao: new Date(2023, 4, 10, 08, 20),
    dataCheckIn: new Date(2023, 4, 13, 10, 45),
  },
  {
    nome: "Rafaela Santos",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2023, 3, 05, 12, 30),
    dataCheckIn: new Date(2023, 3, 08, 15, 20),
  },
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  // ${} faz uma troca
  return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br />
        <small>
          ${participante.email}
        </small>
      </td>
      <td>
        ${dataInscricao}
      </td>
      <td>
        ${dataCheckIn}
      </td>
    </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetiçao
  for (let participante of participantes) {
    //pega uma pessoa da lista
    output = output + criarNovoParticipante(participante)
    // adiciona ela na lista e repete até acabar
  }

  // substituir a informação do HTML
  document.querySelector("tbody").innerHTML = output
}

atualizarLista(participantes)
