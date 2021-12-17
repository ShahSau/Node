const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  const notes = loadNotes();
  return notes;
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataB = dataBuffer.toString();
    return JSON.parse(dataB);
  } catch (e) {
    return [];
  }
};
const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function (note) {
  //     return note.title === title
  // })
  const dulpicateNote = notes.find((note) => note.title === title);
  if (!dulpicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log(chalk.green("new note added"));
  } else {
    console.log(chalk.red("title already taken"));
  }
};
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const NotesK = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > NotesK.length) {
    saveNote(NotesK);
    console.log(chalk.green("removed"));
  } else {
    console.log(chalk.red("no note found"));
  }
};

const readNote = (title)=>{
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title);
    console.log(readNote) 
}

module.exports = { getNotes, addNotes, removeNotes,readNote };
