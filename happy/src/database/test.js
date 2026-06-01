const Database = require("./db");
const saveOrphanage = require("./save_orphanage");
Database.then(async (db) => {
  await saveOrphanage(db, {
    lat: "-9.7969489",
    lng: "-36.384837",
    name: "Teste",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "(82) 9 8888-8888",
    images: [
      "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horários de visitas Das 18h até 8h",
    open_on_weekends: "1",
  });

  const selectedData = await db.all("SELECT * FROM orphanages");

  console.log(selectedData);

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');

  console.log(orphanage);
});
