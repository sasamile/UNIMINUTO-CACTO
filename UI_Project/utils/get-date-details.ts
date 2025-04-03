export function getDateDetails(date: Date): { day: number; month: string; time: string } {
  const abbreviatedMonths = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ];

  const day = date.getDate();
  const month = abbreviatedMonths[date.getMonth()];

  // Obtener la hora en formato de 12 horas con AM/PM
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convertir a formato de 12 horas (de 1 a 12)

  const time = `${hours}:${minutes} ${ampm}`;

  return { day, month, time };
}
