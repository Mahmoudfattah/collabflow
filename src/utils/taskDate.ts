
const normalizeDate = (date: Date) => {
  const normalized = new Date(date);

  normalized.setHours(0, 0, 0, 0);

  return normalized;
};

export const isToday = (date : string)=>{
    const taskDate = normalizeDate(new Date(date))
    const today =normalizeDate(new Date())
    return taskDate.getTime() === today.getTime();
}

export const isTomorrow = (date: string) => {
  const taskDate = normalizeDate(new Date(date));

  const tomorrow = normalizeDate(new Date());

  tomorrow.setDate(tomorrow.getDate() + 1);

  return taskDate.getTime() === tomorrow.getTime();
};

export const isOverdue = (date: string) => {
  const taskDate = normalizeDate(new Date(date));

  const today = normalizeDate(new Date());

  return taskDate.getTime() < today.getTime();
};


export const isThisWeek = (date: string) => {
 console.log("isThisWeek called", date);
  const taskDate = normalizeDate(new Date(date));

  const startOfWeek = normalizeDate(new Date());

        startOfWeek.setDate(
        startOfWeek.getDate() - startOfWeek.getDay()
        );

  const endOfWeek = normalizeDate(new Date(startOfWeek));

        endOfWeek.setDate(endOfWeek.getDate() + 6);
  
   console.log({
  taskDate,
  startOfWeek,
  endOfWeek,
});
  return  taskDate.getTime() >= startOfWeek.getTime() &&
  taskDate.getTime() <= endOfWeek.getTime()
};