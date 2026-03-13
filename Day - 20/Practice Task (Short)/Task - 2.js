const Book = {
  Title :"Atomic Habits",
  Author : "James Clear" ,
  Pages : 320,

  Describe : function() {
    console.log(`Title:${this.Title}, Author:${this.Author}, Pages:${this.Pages}`);
  }
};

Book.Describe();a