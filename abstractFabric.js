class HoursNotes {
  getDescription() {
    console.log("Notes per hour");
  }
}

class DayNotes {
  getDescription() {
    console.log("Notes per day");
  }
}

class GetHoursNotes {
  getDescription() {
    console.log("I can only get notes per hour");
  }
}

class GetDayNotes {
  getDescription() {
    console.log("I can only get notes per day");
  }
}

class HoursNoteFactory {
  makeNote() {
    return new HoursNotes();
  }

  getNote() {
    return new GetHoursNotes();
  }
}

class DaysNoteFactory {
  makeNote() {
    return new DayNotes();
  }

  getNote() {
    return new GetDayNotes();
  }
}

hoursFactory = new HoursNoteFactory();

note = hoursFactory.makeNote();
getNotes = hoursFactory.getNote();
console.log("Abstract Fabric");
console.log("");
note.getDescription(); // Hour note
getNotes.getDescription(); // I can only get hour notes
console.log("");
daysFactory = new DaysNoteFactory();

note = daysFactory.makeNote();
getNotes = daysFactory.getNote();

note.getDescription(); // Day note
getNotes.getDescription(); // I can only get day note
console.log("");
console.log("Fabric Method");
console.log("");
