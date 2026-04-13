() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  interface files {
    id: number;
    deleteFlag: boolean;
  }

  const filesToEvaluate: files[] = [
    { id: 1, deleteFlag: false },
    { id: 2, deleteFlag: true },
  ];

  // Archivos marcados para borrar  - files to delete
  const filesToDelete: files[] = filesToEvaluate.filter(
    (file) => file.deleteFlag,
  );

  // Malos nombres
  class AbstractUser {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const todayDate = new Date();

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const directoryFilesCount = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const elapsedDaysSinceLastModification = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;
};
