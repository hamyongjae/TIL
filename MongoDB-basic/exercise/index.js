const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/exercise-basic', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => console.error(error.message));

// Available schema Datatypes 
// : String, Number, Date, Buffer, Boolean, ObjectID, Array
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price : Number,
  __v : Number
});

const Course = mongoose.model('Course', courseSchema);

// exercise 1
//     1. publish 된 course 들 중에서 backend 코스인 것들을,
//     2. 이름 오름차순으로 정렬하고,
//     3. name 과 author 만을,
//     4. 출력해보자구!

async function getEx1(){
    const courses = await Course
    .find({ isPublished :true})
    .find({ tags:'backend'})
    //and([{isPublished : true},{tags:'backend'}])
    .sort({ name : 1 })
    .select('name author')

    console.log(courses);
}


// exercise 2
//     1. publish 된 course 들 중에서 backend 와 frontend 모두를,
//     2. price 내림차순으로,
//     3. name 과 price 만,
//     4. 출력해보자구!

async function getEx2() {
    const courses = await Course
    .find({ isPublished :true})
    .or([{ tags: 'frontend'},{ tags: 'backend' }])
    .sort({ price: -1 })
    .select('name price')

    console.log(courses);
  }

  

//   exercise 3
//     1. 모든 course 들 중에서
//     2. price 15 이상이거나,
//     3. name 에 대소문자 구분없이 'js' 가 들어간 강의들을,
//     4. 출력해보자구!

// async function getEx3() {
//     const courses = await Course
//     .find(),
//     .or([
//       {price: { $gte: 15}}, // price 15 이상이거나,
//     {name: /.*js.*/i }, // name에 대소문자 구분없이 'js'가 들어간 강의들을,
//     ])
// }

getEx1();
getEx2();