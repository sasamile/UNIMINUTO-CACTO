export function formatDate(date: Date): string {
  const day = date.getDate();
  
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const year = date.getFullYear();
  
   // Obtener la hora en formato de 12 horas con AM/PM
   let hours = date.getHours();
   const minutes = date.getMinutes().toString().padStart(2, '0');
   const ampm = hours >= 12 ? 'PM' : 'AM';
   hours = hours % 12 || 12; // Convertir a formato de 12 horas (de 1 a 12)
 
   const time = `${hours}:${minutes} ${ampm}`;

  return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year} a las ${time}`;
}