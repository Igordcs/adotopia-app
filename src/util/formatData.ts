export default function formatarDataChat(dataString: string) {
    const agora = new Date();
    const diaAtual = agora.getDate();
    const mesAtual = agora.getMonth() + 1;
    const anoAtual = agora.getFullYear();

    const data = new Date(dataString)
    const diaData = data.getDate();
    const mesData = data.getMonth() + 1;
    const anoData = data.getFullYear();
  
    if (diaAtual === diaData && mesAtual === mesData && anoAtual === anoData) {
      const horas = data.getHours().toString().padStart(2, '0');
      const minutos = data.getMinutes().toString().padStart(2, '0');
      return `${horas}:${minutos}`;
    } else {
      const dia = diaData.toString().padStart(2, '0');
      const mes = mesData.toString().padStart(2, '0');
      const ano = anoData.toString().slice(-2); 
      return `${dia}/${mes}/${ano}`;
    }
  }
  