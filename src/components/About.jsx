import React from 'react'
import vetor from "../img/vetor.png"

const About = () => {
  return (
    <div className='container-about container-fluid p-4 col-11 border-start border-danger-subtle border-3' id='About'>
      <h1 className="text-start mb-5">Olá!</h1>
      <p className=''>Atualmente, sou estagiária na Secretaria do Verde e Meio Ambiente (SVMA) e atuo como <span className='bg-danger-subtle p-1'>Desenvolvedora Front end</span>.
        Estou cursando Ciência da Computação, com ênfase em algoritmos, estruturas de dados e novas tendências tecnológicas.
        Apaixonada por desing responsivo e performance web, busco constantemente aprimorar minhas habilidades para melhor atender ao usuário,
        resolver problemas reais e junto, desenvolver-me pessoalmente.
        <br /><br />
        Iniciei meus estudos no ano de 2022, onde optei pelo curso de Análise e Desenvolvimento de Sistemas, e concluí em 2024. Sou uma profissional 
        que estagia desenvolvendo aplicações web, realizando manutenção de código, criando designs dinâmicos e responsivos e etc. Estou sempre dedicada aos estudos
        e busco aprender na prática sobre as tecologias que compõem o front-end.
        <br /><br />
        Possuo conhecimento em outras linguagens de programação como Phyton e PHP, e diante disso, estou sempre disposta a colocar em prática todo
        conhecimento adquirido e futuramente tornar-me uma desenvolvedora fullstack. Com isso, buscar a evolução profissional e pessoal torna-se meu objetivo,
        fazendo com que o usuário obtenha a melhor experiência possível.
        <img src={vetor} alt="vetor" className='col-3'/>
      </p>
    </div>
  )
}

export default About