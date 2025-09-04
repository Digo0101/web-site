import React from 'react';

// Este componente exibe um card com uma métrica de saúde.
// Props:
// - title: O título do card (ex: "Frequência Cardíaca")
// - value: O valor numérico da métrica (ex: 65)
// - unit: A unidade da métrica (ex: "BPM")
// - status: A avaliação da IA ('bom', 'atencao', 'ruim')
const HealthCard = ({ title, value, unit, status }) => {
  const getStatusClass = () => {
    if (status === 'bom') return 'status-bom';
    if (status === 'atencao') return 'status-atencao';
    if (status === 'ruim') return 'status-ruim';
    return '';
  };

  return (
    <div className="card health-card">
      <h3 className="card-title">{title}</h3>
      <div>
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>
      <p className={`status ${getStatusClass()}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
  );
};

export default HealthCard;