import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import HealthCard from './HealthCard';

// Registrando os componentes do Chart.js que vamos usar
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Dados de exemplo (viriam do seu back-end)
  const healthData = {
    heartRate: { value: 68, unit: 'BPM', status: 'bom' },
    bloodOxygen: { value: 98, unit: '%', status: 'bom' },
    sleep: { value: 7.5, unit: 'horas', status: 'bom' },
    stressLevel: { value: 35, unit: '/100', status: 'atencao' },
  };

  const heartRateHistory = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Frequência Cardíaca Média (BPM)',
        data: [65, 68, 70, 67, 72, 69, 68],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Resumo da Semana',
      },
    },
  };

  return (
    <div className="container">
      <header>
        <h1>Meu Painel de Saúde</h1>
        <div className="user-profile">
          <span>Olá, Usuário!</span>
        </div>
      </header>

      <section>
        <h2 className="card-title">Resumo em Tempo Real</h2>
        <div className="grid">
          <HealthCard title="Frequência Cardíaca" {...healthData.heartRate} />
          <HealthCard title="Oxigenação Sanguínea" {...healthData.bloodOxygen} />
          <HealthCard title="Qualidade do Sono" {...healthData.sleep} />
          <HealthCard title="Nível de Estresse" {...healthData.stressLevel} />
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Histórico de Frequência Cardíaca</h2>
        <Line options={chartOptions} data={heartRateHistory} />
      </section>

      <section className="card">
         <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 className="card-title">Meus Exames</h2>
            <button className="upload-btn">Carregar Novo Exame</button>
         </div>
         {/* Este seria o componente da lista de exames */}
         <ul className="exam-list">
            <li>
                <span>Hemograma Completo (20/07/2025)</span>
                <span className="exam-status status-bom">Resultados Normais</span>
            </li>
            <li>
                <span>Perfil Lipídico (15/05/2025)</span>
                <span className="exam-status status-atencao">Colesterol LDL em atenção</span>
            </li>
         </ul>
      </section>
    </div>
  );
};

export default Dashboard;