const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error(error.message));

// Available schema Datatypes 
// : String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2 },
  author: String,
  tags: {
    type:Array,
    //custom Validata
    validate:{
      validator:function(tags){
        const result = tags.every(tag=> tag.length > 0);
        return tags && tags.length >0 && result;
      },
      message: 'A Course should have at least 1 tag'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);




/* CRUD Operation */

async function createCourse() {
  const course = new Course({
    name: 'aa',
    author: 'b',
    tags: ['Ethereum', 'Blockchain', 'DApp'],
    isPublished: false
  });
  try{
    const result = await course.save();
    console.log(result);
  } catch(error) {
    console.error(error.message);
  }
}



// /* Update */

// //1. Qurey First: find =>change => save
// async function updateCourse(id) {
//   const course = await Course.findById(id)
//   if(!Course) return;

//   // Change
//   course.author = '용재';
//   course.tags = ['얍얍얍얍얍'];

//   const result = await course.save();
//   console.log(result);
// }

// //updateCourse("5bea665b46823912c0b28aba");

// // 2. Update First :직접 : Update => result

// async function updateCourse(id) {
//   const result = await Course.update({isPublished: true},{
//     $set: {
//       author: '동주',
//     }
//   });
//   console.log(result);
// }

// //updateCourse("5bea665b46823912c0b28aba");
// async function removeCourse(id) {
//   const result = await Course.deleteOne({ _id: id});
//   console.log(result);
// }

// //removeCourse('5bea6ac85b35b710641a3b11');