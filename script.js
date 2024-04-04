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
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button 
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

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

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)

  const participante = {
    nome: formData.get("nome"),
    email: formData.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  }

  //verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => (p.email = participante.email)
  )

  if (participanteExiste) {
    alert("Email já cadastrado")
    return
  }

  // adiciona o novo participante e adiciona antes dos outros participantes
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se quer o check-in
  const mensagemConfirmacao = "Tem certeza que deseja fazer o check-in?"

  if (confirm(mensagemConfirmacao) == false) {
    return // a função para aqui
  }

  //encontrar o participante na lista
  const participante = participantes.find(
    //pega o participante que foi registrado a partir botao
    (p) => p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar ele na lista
  atualizarLista(participantes)
}
