import Layout from '../client/components/Layout';

export default function Home() {
    return (
        <Layout pageTitle="Página Inicial - Sistema de Gestão CMMS">
            <h1>Bem-vindo ao Sistema de Gestão CMMS!</h1>
            <p>Este é o sistema central para gerenciar manutenções e inventários.</p>
            <div>
                <p>Explore as funcionalidades através das abas para gerenciar ativos, ordens de serviço, planejamentos, categorias e responsáveis de forma eficaz.</p>
            </div>
        </Layout>
    );
}
