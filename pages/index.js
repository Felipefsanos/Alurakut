import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommnns';
import { ProfileRelationsBoxWrapper, ProfileRelations } from '../src/components/ProfileRelations';

function ProfileSideBar(props) {
	return (
		<Box as="aside">
			<img src={`https://github.com/${props.usuarioGitHub}.png`} style={{ borderRadius: '8px' }} />
			<hr />
			<p>
				<a className="boxLink" href={`https://github.com/${props.usuarioGitHub}`}>
					@{props.usuarioGitHub}
				</a>
			</p>
			<hr />
			<AlurakutProfileSidebarMenuDefault />
		</Box>
	);
}

export default function Home() {
	const [comunidades, setComunidades] = React.useState([
		{
			id: new Date().toISOString(),
			name: 'Eu odeio acordar cedo',
			link: 'http://google.com',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkinXLb_2isvRIrck7DTYGPwMyvqEPMBJ6oRrd_JJHqSJQWvymGIju5NGwTDMXR6Xua1Q&usqp=CAU',
		},
	]);

	const usuarioGitHub = 'Felipefsanos';
	const pessoasComunidade = [
		{
			id: 5456445,
			name: 'RennoDev',
			link: 'https://github.com/RennoDev',
			image: 'https://github.com/RennoDev.png',
		},
		{
			id: 84512,
			name: 'Manfrinmm',
			link: 'https://github.com/Manfrinmm',
			image: 'https://github.com/Manfrinmm.png',
		},
		{
			id: 32123156,
			name: 'Fabricio-soares',
			link: 'https://github.com/Fabricio-soares',
			image: 'https://github.com/Fabricio-soares.png',
		},
		{
			id: 342355,
			name: 'vinnymoura',
			link: 'https://github.com/vinnymoura',
			image: 'https://github.com/vinnymoura.png',
		},
		{
			id: 64563,
			name: 'jadsonluciano',
			link: 'https://github.com/jadsonluciano',
			image: 'https://github.com/jadsonluciano.png',
		},
		{
			id: 34532,
			name: 'marcosvbras',
			link: 'https://github.com/marcosvbras',
			image: 'https://github.com/marcosvbras.png',
		},
		{
			id: 345345,
			name: 'omariosouto',
			link: 'https://github.com/omariosouto',
			image: 'https://github.com/omariosouto',
		},
	];
	// const pessoasComunidade = ['RennoDev', 'Manfrinmm', 'Fabricio-soares', 'vinnymoura', 'jadsonluciano', 'marcosvbras'];

	return (
		<>
			<AlurakutMenu githubUser={usuarioGitHub} />
			<MainGrid>
				<div className="profileArea" style={{ gridArea: 'profileArea' }}>
					<ProfileSideBar usuarioGitHub={usuarioGitHub} />
				</div>
				<div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
					<Box>
						<h1 className="title">Bem Vindo(a)</h1>

						<OrkutNostalgicIconSet />
					</Box>

					<Box>
						<h2 className="subTitle">O que você deseja fazer?</h2>
						<form
							onSubmit={function handleCriaComunidade(event) {
								event.preventDefault();
								const dadosDoForm = new FormData(event.target);
								const comunidade = {
									id: new Date().toISOString(),
									title: dadosDoForm.get('title'),
									image: dadosDoForm.get('image'),
								};
								setComunidades([...comunidades, comunidade]);
							}}
						>
							<div>
								<input
									placeholder="Qual vai ser o nome da sua comunidade?"
									name="title"
									aria-label="Qual vai ser o nome da sua comunidade?"
									type="text"
								/>
							</div>
							<div>
								<input placeholder="Coloque a URL para a capa" name="image" aria-label="Coloque a URL para a capa" />
							</div>
							<button>Criar comunidade</button>
						</form>
					</Box>
				</div>
				<div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
					<ProfileRelationsBoxWrapper>
						<ProfileRelations title={'Comunidades'} content={comunidades} />
					</ProfileRelationsBoxWrapper>
					<ProfileRelationsBoxWrapper>
						<ProfileRelations title={'Pessoas da comunidade'} content={pessoasComunidade} />
					</ProfileRelationsBoxWrapper>
				</div>
			</MainGrid>
		</>
	);
}
