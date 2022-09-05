import './styles.css';
import ModalDetails from '../../components/ModalDetails';
import book from '../../assets/livro04.webp';
import bookTwo from '../../assets/livro02.webp';
import bookThree from '../../assets/livro03.webp';

import * as React from 'react';

export default function Card(props) {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div className="card">
                <div className="card__body">
                    
                    <img className='img__book' src={book} alt='Livro' />
                    <h5 className="card__title">Algoritmos com Javascript</h5>
                    <h4 className="card__subtitle">Tecnologia da Informação</h4><br></br>
                    <h3 className="description">Descrição</h3>
                    <p className="card__description">Os conteúdos abordados em Lógica de Programação e Algoritmos são fundamentais a todos aqueles que desejam ingressar no universo da Programação de Computadores. Esses conteúdos, no geral, impõem algumas dificuldades aos iniciantes. Neste livro, o autor utiliza sua experiência de mais de 15 anos em lecionar a disciplina de Algoritmos em cursos de graduação, para trabalhar o assunto passo a passo. Cada capítulo foi cuidadosamente planejado a fim de evitar a sobrecarga de informações ao leitor, com exemplos e exercícios de fixação para cada assunto.
                    <br />
                    <br />
                    Livro em ótimo estado.

                    </p><br></br>
                    <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba Mais</button>
                </div>
            {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
            </div>

            <div className="card">
                <div className="card__body">
                    
                    <img className='img__book' src={bookTwo} alt='Livro' />
                    <h5 className="card__title">Desenvolvimento Front-end</h5>
                    <h4 className="card__subtitle">Tecnologia da Informação</h4><br></br>
                    <h3 className="description">Descrição</h3>
                    <p className="card__description">erá que existe um verdadeiro caminho das pedras que devemos percorrer para nos tornarmos bons e verdadeiros desenvolvedores front-end? O que estudar? Qual blog ler? Que fóruns acompanhar? Como participar da comunidade? Será que estou no caminho certo? Se você é desenvolvedor front-end, quer entrar na área ou busca se tornar um grande profissional, essas dúvidas já devem ter passado por sua cabeça. Neste livro, Diego Eis nos guia sobre o mundo de desenvolvimento web por meio de uma análise franca e objetiva de diversas tecnologias adotadas profissional.
                    <br />
                    <br />
                    Livro em ótimo estado.

                    </p><br></br>
                    <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba Mais</button>
                </div>
            {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
            </div>

            <div className="card">
                <div className="card__body">
                    
                    <img className='img__book' src={bookThree} alt='Livro' />
                    <h5 className="card__title">Node e Expess</h5>
                    <h4 className="card__subtitle">Tecnologia da Informação</h4><br></br>
                    <h3 className="description">Descrição</h3>
                    <p className="card__description">Construa aplicações web dinâmicas com o Express, um componente-chave da stack de desenvolvimento Node/JavaScript. Nesta edição atualizada, o autor Ethan Brown ensina os fundamentos do Express 5 percorrendo o desenvolvimento de uma aplicação. 

                    O Express conseguiu chegar a um equilíbrio entre um framework robusto e a ausência de framework, permitindo-nos fazer escolhas livres para nossa arquitetura. Engenheiros front-end e back-end familiarizados com JavaScript para a construção de aplicações web de várias páginas e híbridos com o Express.
                    <br />
                    <br />
                    Livro em ótimo estado.

                    </p><br></br>
                    <button href="#" className="card__btn" onClick={() => setShowModal(true)}>Saiba Mais</button>
                </div>
            {showModal && <ModalDetails user={props.user} setShowModal={setShowModal} />}
            </div>
        </>
    )
}