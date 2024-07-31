const prompt = require("prompt-sync")();
const curso = [];

const modelo = () => {
    const nome = prompt ("Digite o nome do curso: ");
    const duracao = prompt ("Digite a duração do curso: ");

    const professores = [];
    while(true){
        const professor = prompt ("Digite o nome do professor ou digite fim para encerrar: ");

        if(professor === "fim"){
            break;
        }
        professores.push(professor); 

    }
    const alunos = [];
    while(true){
        const aluno = prompt ("Digite o nome do aluno ou digite fim para encerrar: ");

        if(aluno === "fim"){
            break;
        }
        alunos.push(aluno);

    }

    const materias = [];
    while(true){
        const materia = prompt ("Digite o nome do materia ou digite fim para encerrar: ");

        if(materia === "fim"){
            break;
        }
     materias.push(aluno);

    }

    if(
        nome !== "" &&
        duracao > 0 &&
        professores.length > 0 &&
        alunos.length > 0 &&
        materias.length > 0
    ){
     return{
         nome,
         duracao,
         professores,
         alunos,
         materias
     };
    }
    console.log("dados invalidos");

};

const adicionar = () => {
    const novo = modelo();

    if(novo){
        curso.push(novo);
        console.log("curso criado com sucesso");
    }
};
    
const listar = () => {
    if(cursos.length == 0){
        console.log("nenhum curso foi criado ainda");
    }

    curso.forEach((elemento, indice) => {
        console.log(`${indice + 1}.
            nome: ${elemento.nome},
            duração: ${elemento.duracao},
            professores: ${elemento.professores},
            alunos: ${elemento.alunos},
            materias: ${elemento.materias}`);
    });
};

const atualizar = () => {
    listar();

    const indice = prompt("digite o indice do curso que deseja atualizar: ") - 1;

    const novo = modelo();

    if(novo && indice >= 0 && indice < curso.length){
        curso[indice] = novo;
        console.log("curso atualizado com sucesso");
        
    }else{
        console.log("indice invalido");
    }
};

const remover = () => {
    listar()

    const indice = prompt("digite o indice do curso que deseja remover: ") - 1;

    if(indice >= 0 && indice < curso.length){
        curso.splice(indice, 1);
        console.log("curso removido com sucesso");
    }else{
        console.log("indice invalido");
    }
}

module.exports = {
    adicionar,
    listar,
    atualizar,
    remover
};


